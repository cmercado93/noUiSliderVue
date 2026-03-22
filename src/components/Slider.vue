<template>
    <div
        class="noUi-slider-x-wrapper"
        :class="{'noUi-slider-x-toggle-tooltip': tooltipOnClick, 'noUi-slider-x-vertical': orientation === 'vertical'}"
    >
        <div ref="el" :id="id" class="noUi-slider-x"></div>
    </div>
</template>
<script>
    import noUiSlider from 'nouislider';

    import mergeTooltips from '-/scripts/mergeTooltips.js';

    // Lista general de eventos de nouislider
    const generalEvents = [
        'start',
        'slide',
        'drag',
        'change',
        'set',
        'end',
    ];

    export default {
        props: {
            start: {
                type: [Array, Number, String],
                validator(v) {
                    if (Array.isArray(v)) {
                        return v.length && v.every(i => typeof i === 'number');
                    }

                    return true;
                },
            },

            connect: {
                type: [Array, Boolean, String],
                default: false,
                validator(v) {
                    if (Array.isArray(v)) {
                        return v.length && v.every(i => typeof i === 'boolean');
                    }

                    return true;
                },
            },

            range: {
                type: Object,
                required: true,
            },

            step: {
                type: Number,
            },

            margin: {
                type: Number,
            },

            padding: {
                type: [Array, Number],
                validator(v) {
                    if (Array.isArray(v)) {
                        return v.length && v.every(i => typeof i === 'number');
                    }

                    return true;
                },
                default: 0,
            },

            limit: {
                type: Number,
            },

            direction: {
                type: String,
                default: 'ltr',
            },

            orientation: {
                type: String,
                default: 'horizontal',
            },

            animate: {
                type: Boolean,
                default: false,
            },

            handleAttributes: {
                type: Array,
            },

            keyboardSupport: {
                type: Boolean,
                default: true,
            },

            keyboardDefaultStep: {
                type: Number,
                default: 10,
            },

            keyboardPageMultiplier: {
                type: Number,
                default: 5,
            },

            keyboardMultiplier: {
                type: Number,
                default: 1,
            },

            behaviour: {
                type: String,
                default: 'tap',
            },

            tooltips: {
                type: [Array, Object, Boolean, Function],
                default: false,
                validator(v) {
                    const validateSingle = (item) => {
                        if (typeof item === 'boolean' || typeof item === 'function') {
                            return true;
                        }

                        if (item && typeof item === 'object' && 'to' in item) {
                            return true;
                        }

                        return false;
                    };

                    if (Array.isArray(v)) {
                        return v.every(validateSingle);
                    }

                    return validateSingle(v);
                },
            },

            format: {
                type: Object,
                validator(v) {
                    return Object.prototype.hasOwnProperty.call(v, 'to') && Object.prototype.hasOwnProperty.call(v, 'from');
                },
            },

            pips: {
                type: Object,
                default: null,
            },

            pipsys: {
                type: Boolean,
                default: false,
            },

            clickablePips: {
                type: Boolean,
                default: false,
            },

            tooltipOnClick: {
                type: Boolean,
                default: false,
            },

            mergeTooltips: {
                default: null,
                type: Object,
                validator(v) {
                    if (v === null) {
                        return true;
                    }

                    if (typeof v !== "object") {
                        return false;
                    }

                    return Object.prototype.hasOwnProperty.call(v, 'threshold') || Object.prototype.hasOwnProperty.call(v, 'separator');
                },
            },

            snap: {
                type: Boolean,
            },

            ariaFormat: {
                type: Object,
            },

            modelValue: {
                required: true,
                type: [Number, Array, String, null],
            },

            cssPrefix: {
                type: String,
            },

            cssClasses: {
                type: Object,
            },

            animationDuration: {
                type: Number,
            },

            disable: {
                type: Boolean,
                default: false,
            }
        },

        data() {
            return {
                preHoverValue: null,
                events: [],
                el: null,
                clickablePipsListeners: [],
                mergeTooltipsActive: false,
                pendingUpdates: null,
                updateScheduled: false,
                settingFromWatcher: false,
                animationStyleEl: null,
            }
        },

        mounted() {
            this.create();

            this.registerEvents();

            if (this.disable) {
                this.setDisable();
            }
        },

        beforeUnmount() {
            this.destroy();
        },

        methods: {
            isSliderReady() {
                return !!this.el?.noUiSlider;
            },

            create(initialValues) {
                this.el = this.$refs['el'];

                let start = initialValues !== undefined ? initialValues : this.modelValue;

                if (start == null && this.start !== undefined && this.start !== null) {
                    start = this.start;
                }

                if (start === null) {
                    start = Object.values(this.range)[0];
                }

                let configs = {
                    start: start,
                    connect: this.connect,
                    range: this.range,
                    direction: this.direction,
                    orientation: this.orientation,
                    animate: this.animate,
                    keyboardSupport: this.keyboardSupport,
                    keyboardDefaultStep: this.keyboardDefaultStep,
                    keyboardPageMultiplier: this.keyboardPageMultiplier,
                    keyboardMultiplier: this.keyboardMultiplier,
                    behaviour: this.behaviour,
                    padding: this.padding,
                };

                const optional = {
                    step: this.step,
                    margin: this.margin,
                    limit: this.limit,
                    snap: this.snap,
                    handleAttributes: this.handleAttributes,
                    cssPrefix: this.cssPrefix,
                    cssClasses: this.cssClasses,
                    animationDuration: this.animate ? (this.animationDuration || 300) : 0,
                    ariaFormat: this.ariaFormat,
                    format: this.format,
                };

                Object.entries(optional).forEach(([key, value]) => {
                    if (value !== undefined && value !== null) {
                        configs[key] = value;
                    }
                });

                if (this.tooltips || this.tooltipOnClick) {
                    configs['tooltips'] = this.tooltips
                        ? this.normalizeTooltip(this.tooltips)
                        : true;
                }

                if (this.pipsys && !configs['pips']) {
                    configs['pips'] = {
                        mode: 'steps',
                    };
                }

                noUiSlider.create(this.el, configs);

                this.updateAnimationCSS();

                this.$nextTick(() => {
                    if (this.pips) {
                        this.setPips(this.pips);
                    } else if (!this.pipsys) {
                        this.setCssWithoutPips();
                    }

                    this.setMergeTooltips();
                });
            },

            normalizeTooltip(v) {
                if (typeof v === 'function') {
                    return {
                        to: v,
                    }
                }

                if (Array.isArray(v)) {
                    return v.map(item => this.normalizeTooltip(item));
                }

                return v;
            },

            compareValues(v1, v2) {
                // Manejar null/undefined primero
                if (v1 === v2) return true;
                if (v1 == null || v2 == null) return false;

                const toNorm = (v) => Array.isArray(v) ? v.map(String) : String(v);
                return JSON.stringify(toNorm(v1)) === JSON.stringify(toNorm(v2));
            },

            hasDeepChanged(v, oldV) {
                return JSON.stringify(v) !== JSON.stringify(oldV);
            },

            // Events
            registerEvents() {
                generalEvents.forEach(event => {
                    this.registerBasicEvent(event);
                });

                if (this.behaviour.includes('hover')) {
                    this.registerHoverEvent();
                }

                this.registerUpdateEvent();
            },

            offAllEvents() {
                const uniqueEvents = [...new Set(this.events)];
                uniqueEvents.forEach(event => this.off(event));
                this.events = [];
            },

            registerBasicEvent(eventName) {
                this.on(eventName, (values, handle, unencoded, tap, positions) => {
                    this.$emit(eventName, {values, handle, unencoded, tap, positions})
                });
            },

            registerUpdateEvent() {
                this.on('update', (values, handle, unencoded, tap, positions) => {
                    this.$emit('update', {values, handle, unencoded, tap, positions})

                    let value = unencoded.length > 1 ? [...unencoded] : unencoded[0];

                    if (!this.settingFromWatcher && !this.compareValues(value, this.modelValue)) {
                        this.$emit('update:modelValue', value);
                    }
                });
            },

            registerHoverEvent() {
                this.on('hover', (value) => {
                    if (value !== this.preHoverValue) {
                        this.preHoverValue = value;

                        this.$emit('hover', value)
                    }
                });
            },

            recreate() {
                const currentValues = this.modelValue;
                this.destroy();
                this.create(currentValues);
                this.registerEvents();

                if (this.disable) {
                    this.setDisable();
                }
            },

            // Public methods
            destroy() {
                this.offAllEvents();
                this.removeMergeTooltips();
                this.removeClickablePipsListeners();

                if (this.animationStyleEl) {
                    this.animationStyleEl.remove();
                    this.animationStyleEl = null;
                }

                if (this.isSliderReady()) {
                    this.el.noUiSlider.destroy();
                    this.el.noUiSlider = null;
                }
            },

            getSteps() {
                if (!this.isSliderReady()) return;
                return this.el.noUiSlider.steps();
            },

            on(eventName, callback) {
                if (!this.isSliderReady()) return;

                this.events.push(eventName);
                this.el.noUiSlider.on(eventName, callback);
            },

            off(eventName) {
                if (!this.isSliderReady()) return;

                this.el.noUiSlider.off(eventName);
            },

            get(unencoded) {
                if (!this.isSliderReady()) return;

                return this.el.noUiSlider.get(unencoded);
            },

            set(input, fireSetEvent, exactInput) {
                if (!this.isSliderReady()) return;

                this.el.noUiSlider.set(input, fireSetEvent, exactInput);
            },

            setHandle(handleNumber, value, fireSetEvent, exactInput) {
                if (!this.isSliderReady()) return;

                this.el.noUiSlider.setHandle(handleNumber, value, fireSetEvent, exactInput);
            },

            reset(fireSetEvent) {
                if (!this.isSliderReady()) return;

                this.el.noUiSlider.reset(fireSetEvent);
            },

            setDisable(handleNumber) {
                if (!this.isSliderReady()) return;

                this.el.noUiSlider.disable(handleNumber);
            },

            setEnable(handleNumber) {
                if (!this.isSliderReady()) return;

                this.el.noUiSlider.enable(handleNumber);
            },

            updateOptions(optionsToUpdate, fireSetEvent) {
                if (!this.isSliderReady()) return;

                this.el.noUiSlider.updateOptions(optionsToUpdate, fireSetEvent);
            },

            scheduleUpdate(optionsToUpdate) {
                this.pendingUpdates = Object.assign(this.pendingUpdates || {}, optionsToUpdate);

                if (!this.updateScheduled) {
                    this.updateScheduled = true;

                    this.$nextTick(() => {
                        this.updateOptions(this.pendingUpdates);
                        this.pendingUpdates = null;
                        this.updateScheduled = false;
                    });
                }
            },

            removePips() {
                if (!this.isSliderReady()) return;

                this.removeClickablePipsListeners();

                this.setCssWithoutPips();

                this.el.noUiSlider.removePips();
            },

            removeTooltips() {
                if (!this.isSliderReady()) return;

                this.el.noUiSlider.removeTooltips();
            },

            getPositions() {
                if (!this.isSliderReady()) return;

                return this.el.noUiSlider.getPositions();
            },

            getTooltips() {
                if (!this.isSliderReady()) return;

                return this.el.noUiSlider.getTooltips();
            },

            getOrigins() {
                if (!this.isSliderReady()) return;

                return this.el.noUiSlider.getOrigins();
            },

            getOptions() {
                if (!this.isSliderReady()) return;
                return this.el.noUiSlider.options;
            },

            setPips(grid) {
                if (grid) {
                    this.removeCssWithoutPips();

                    if (this.clickablePips) {
                        this.setClickablePips();
                    }

                    return this.el.noUiSlider.pips(grid);
                }

                this.removeCssWithoutPips();

                if (this.clickablePips) {
                    this.setClickablePips();
                }

                return this.el.noUiSlider.pips(grid);
            },

            setCssWithoutPips() {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.target.classList.add('noUi-slider-x-without-pips');
            },

            removeCssWithoutPips() {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.target.classList.remove('noUi-slider-x-without-pips');
            },

            setClickablePips() {
                // Limpiar listeners anteriores
                this.removeClickablePipsListeners();

                const func = (e) => {
                    if (e.target.dataset.value !== undefined) {
                        const clickedValue = Number(e.target.dataset.value);
                        const currentValues = this.get(true);

                        if (Array.isArray(currentValues)) {
                            let closestHandle = 0;
                            let minDistance = Math.abs(currentValues[0] - clickedValue);

                            for (let i = 1; i < currentValues.length; i++) {
                                const distance = Math.abs(currentValues[i] - clickedValue);
                                if (distance < minDistance) {
                                    minDistance = distance;
                                    closestHandle = i;
                                }
                            }

                            this.setHandle(closestHandle, clickedValue);
                        } else {
                            this.set(clickedValue);
                        }
                    }
                };

                this.$nextTick(() => {
                    this.el.querySelectorAll(".noUi-pips .noUi-value").forEach(el => {
                        el.addEventListener('click', func);
                        el.style.cursor = 'pointer';
                        this.clickablePipsListeners.push({ el, func });
                    });
                });
            },

            removeClickablePipsListeners() {
                this.clickablePipsListeners.forEach(({ el, func }) => {
                    el.removeEventListener('click', func);
                });
                this.clickablePipsListeners = [];
            },

            removeMergeTooltips() {
                if (this.mergeTooltipsActive && this.isSliderReady()) {
                    this.el.noUiSlider.off('update.mergeTooltips');
                    this.mergeTooltipsActive = false;
                }
            },

            updateAnimationCSS() {
                // Eliminar style previo si existe
                if (this.animationStyleEl) {
                    this.animationStyleEl.remove();
                    this.animationStyleEl = null;
                }

                if (!this.animate) return;

                const duration = (this.animationDuration || 300) / 1000;
                const style = document.createElement('style');
                style.textContent = `#${this.id}.noUi-state-tap .noUi-connect, #${this.id}.noUi-state-tap .noUi-origin { transition: transform ${duration}s !important; }`;
                document.head.appendChild(style);
                this.animationStyleEl = style;
            },

            setMergeTooltips() {
                if (!this.mergeTooltips || !this.isSliderReady()) {
                    return;
                }

                // Check if tooltips are enabled
                const tooltips = this.el.noUiSlider.getTooltips();
                if (!tooltips || tooltips.every(t => t === false)) {
                    return;
                }

                this.removeMergeTooltips();

                const threshold = this.mergeTooltips.threshold || 15;
                const separator = this.mergeTooltips.separator || ' - ';

                mergeTooltips(this.el, threshold, separator);
                this.mergeTooltipsActive = true;
            },

            isSliderReady() {
                return this.el?.noUiSlider != null;
            },

            scheduleUpdate(options) {
                if (!this.pendingUpdates) {
                    this.pendingUpdates = {};
                }

                Object.assign(this.pendingUpdates, options);

                if (!this.updateScheduled) {
                    this.updateScheduled = true;
                    this.$nextTick(() => {
                        if (this.pendingUpdates && this.isSliderReady()) {
                            this.el.noUiSlider.updateOptions(this.pendingUpdates, false);
                            this.pendingUpdates = null;
                        }
                        this.updateScheduled = false;
                    });
                }
            },
        },

        watch: {
            modelValue: {
                handler(v) {
                    if (!this.isSliderReady()) return;

                    if (!this.compareValues(v, this.get(true))) {
                        this.settingFromWatcher = true;
                        this.set(v, false);
                        this.settingFromWatcher = false;
                    }
                },
                deep: true,
            },

            pips: {
                handler(v, oldV) {
                    if (!this.hasDeepChanged(v, oldV)) return;

                    this.removePips();

                    this.$nextTick(() => this.setPips(v));
                },
                deep: true,
            },

            disable(v) {
                if (v) {
                    this.setDisable();
                } else {
                    this.setEnable();
                }
            },

            step(v) {
                this.scheduleUpdate({ step: v });
            },

            margin(v) {
                this.scheduleUpdate({ margin: v });
            },

            padding: {
                handler(v, oldV) {
                    if (!this.hasDeepChanged(v, oldV)) return;
                    this.scheduleUpdate({ padding: v });
                },
                deep: true,
            },

            limit(v) {
                this.scheduleUpdate({ limit: v });
            },

            tooltips(v) {
                this.scheduleUpdate({
                    tooltips: this.normalizeTooltip(v),
                    pips: this.pips,
                });

                this.$nextTick(() => this.setMergeTooltips());
            },

            format: {
                handler() {
                    this.recreate();
                },
                deep: true,
            },

            connect: {
                handler(v, oldV) {
                    if (!this.hasDeepChanged(v, oldV)) return;
                    this.recreate();
                },
                deep: true,
            },

            animate() {
                this.recreate();
            },

            animationDuration() {
                this.recreate();
            },

            snap(v) {
                this.scheduleUpdate({ snap: v });
            },

            range: {
                handler(v, oldV) {
                    if (!this.hasDeepChanged(v, oldV)) return;
                    this.scheduleUpdate({ range: v });
                },
                deep: true,
            },

            orientation() {
                this.recreate();
            },

            direction() {
                this.recreate();
            },

            behaviour() {
                this.recreate();
            },

            tooltipOnClick() {
                if (!this.tooltips) {
                    this.recreate();
                }
            },

            mergeTooltips: {
                handler(v, oldV) {
                    if (!this.hasDeepChanged(v, oldV)) return;
                    this.recreate();
                },
                deep: true,
            },

            clickablePips(v) {
                if (v) {
                    this.setClickablePips();
                } else {
                    this.removeClickablePipsListeners();
                }
            },
        },

        emits: [
            ...generalEvents,
            'hover',
            'update',
            'update:modelValue',
        ],

        expose: [
            'destroy',
            'getSteps',
            'on',
            'off',
            'get',
            'set',
            'setHandle',
            'reset',
            'setDisable',
            'setEnable',
            'updateOptions',
            'removePips',
            'removeTooltips',
            'getPositions',
            'getTooltips',
            'getOrigins',
            'setPips',
            'getOptions',
        ],
    }
</script>
