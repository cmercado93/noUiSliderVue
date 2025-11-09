<template>
    <div
        ref="el"
        class="noUi-slider-x"
        :class="{'noUi-slider-x-toggle-tooltip': tooltipOnClick !== undefined}"
    ></div>
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
                type: [Array, Number],
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
                default: undefined,
            },

            clickablePips: {
                type: Boolean,
                default: undefined,
            },

            tooltipOnClick: {
                type: Boolean,
                default: undefined,
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
                type: [Number, Array, null],
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
                pendingUpdates: null,
                updateScheduled: false,
            }
        },

        mounted() {
            this.create();

            this.registerEvents();
        },

        beforeUnmount() {
            this.destroy();
        },

        methods: {
            create() {
                this.el = this.$refs['el'];

                let start = this.modelValue;

                if (this.start !== undefined && this.start !== null) {
                    start = this.start;
                }

                if (start === null) {
                    start = Object.values(this.range)[0];
                }

                let configs = {
                    start: start,
                    connect: this.connect,
                    range: this.range,
                    step: this.step,
                    margin: this.margin,
                    padding: this.padding,
                    limit: this.limit,
                    direction: this.direction,
                    orientation: this.orientation,
                    animate: this.animate,
                    handleAttributes: this.handleAttributes,
                    keyboardSupport: this.keyboardSupport,
                    keyboardDefaultStep: this.keyboardDefaultStep,
                    keyboardPageMultiplier: this.keyboardPageMultiplier,
                    keyboardMultiplier: this.keyboardMultiplier,
                    behaviour: this.behaviour,
                    snap: this.snap,
                    cssPrefix: this.cssPrefix,
                    cssClasses: this.cssClasses,
                    animationDuration: this.animationDuration,
                };

                if (this.ariaFormat) {
                    configs['ariaFormat'] = this.ariaFormat;
                }

                if (this.format) {
                    configs['format'] = this.format;
                }

                if (this.tooltips) {
                    configs['tooltips'] = this.normalizeTooltip(this.tooltips);
                }

                if (this.pipsys !== undefined && !configs['pips']) {
                    configs['pips'] = {
                        mode: 'steps',
                    };
                }

                noUiSlider.create(this.el, configs);

                this.$nextTick(() => {
                    if (!this.pips) {
                        this.setCssWithoutPips();
                    } else {
                        this.setPips(this.pips);
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

            // Events
            registerEvents() {
                generalEvents.forEach(event => {
                    this.registerBasicEvent(event);
                });

                this.registerHoverEvent();
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

                    let value = values.length > 1 ? values : values[0];

                    this.$emit('update:modelValue', value);
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

            // Public methods
            destroy() {
                this.offAllEvents();
                this.removeClickablePipsListeners();

                if (this.isSliderReady()) {
                    this.el.noUiSlider.destroy();
                    this.el.noUiSlider = null;
                }
            },

            getSteps() {
                if (!this.isSliderReady()) {
                    return null;
                }

                return this.el.noUiSlider.steps();
            },

            on(eventName, callback) {
                if (!this.isSliderReady()) {
                    return;
                }

                this.events.push(eventName);
                this.el.noUiSlider.on(eventName, callback);
            },

            off(eventName) {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.off(eventName);
            },

            get(unencoded) {
                if (!this.isSliderReady()) {
                    return null;
                }

                return this.el.noUiSlider.get(unencoded);
            },

            set(input, fireSetEvent, exactInput) {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.set(input, fireSetEvent, exactInput);
            },

            setHandle(handleNumber, value, fireSetEvent, exactInput) {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.setHandle(handleNumber, value, fireSetEvent, exactInput);
            },

            reset(fireSetEvent) {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.reset(fireSetEvent);
            },

            setDisable(handleNumber) {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.disable(handleNumber);
            },

            setEnable(handleNumber) {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.enable(handleNumber);
            },

            updateOptions(optionsToUpdate, fireSetEvent) {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.updateOptions(optionsToUpdate, fireSetEvent);
            },

            removePips() {
                if (!this.isSliderReady()) {
                    return;
                }

                this.setCssWithoutPips();

                this.el.noUiSlider.removePips();
            },

            removeTooltips() {
                if (!this.isSliderReady()) {
                    return;
                }

                this.el.noUiSlider.removeTooltips();
            },

            getPositions() {
                if (!this.isSliderReady()) {
                    return null;
                }

                return this.el.noUiSlider.getPositions();
            },

            getTooltips() {
                if (!this.isSliderReady()) {
                    return null;
                }

                return this.el.noUiSlider.getTooltips();
            },

            getOrigins() {
                if (!this.isSliderReady()) {
                    return null;
                }

                return this.el.noUiSlider.getOrigins();
            },

            setPips(grid) {
                if (!grid || !this.isSliderReady()) {
                    return;
                }

                this.removeCssWithoutPips();

                if (this.clickablePips !== undefined) {
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
                    const target = e.target.closest('.noUi-value');
                    if (target?.dataset.value !== undefined) {
                        this.set(target.dataset.value);
                    }
                };

                this.$nextTick(() => {
                    const pipsContainer = this.el.querySelector('.noUi-pips');
                    if (pipsContainer) {
                        pipsContainer.addEventListener('click', func);
                        this.clickablePipsListeners.push({ element: pipsContainer, handler: func });
                    }
                });
            },

            removeClickablePipsListeners() {
                this.clickablePipsListeners.forEach(({ element, handler }) => {
                    element.removeEventListener('click', handler);
                });

                this.clickablePipsListeners = [];
            },

            setMergeTooltips() {
                if (!this.mergeTooltips || !this.isSliderReady()) {
                    return;
                }

                const threshold = this.mergeTooltips.threshold || 15;
                const separator = this.mergeTooltips.separator || ' - ';

                mergeTooltips(this.el, threshold, separator);
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

                    if (!this.compareValues(v, this.get())) {
                        this.set(v, false);
                    }
                },
                deep: true,
            },

            pips: {
                handler(v) {
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
                this.scheduleUpdate({
                    step: v,
                });
            },

            margin(v) {
                this.scheduleUpdate({
                    margin: v,
                });
            },

            padding: {
                handler(v) {
                    this.scheduleUpdate({
                        padding: v,
                    });
                },
                deep: true,
            },

            limit(v) {
                this.scheduleUpdate({
                    limit: v,
                });
            },

            tooltips(v) {
                this.scheduleUpdate({
                    tooltips: this.normalizeTooltip(v),
                });
            },

            format: {
                handler(v) {
                    this.scheduleUpdate({
                        format: v,
                    });
                },
                deep: true,
            },

            range: {
                handler(v) {
                    this.scheduleUpdate({
                        range: v,
                    });

                    this.$nextTick(() => this.reset());
                },
                deep: true,
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
        ],
    }
</script>
<style>
    .noUi-slider-x.noUi-slider-x-toggle-tooltip :deep(.noUi-tooltip) {
        display: none;
    }

    .noUi-slider-x.noUi-slider-x-toggle-tooltip :deep(.noUi-active .noUi-tooltip) {
        display: block;
    }
</style>
