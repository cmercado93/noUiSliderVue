<template>
    <div :id="id" :ref="id" class="slider-ui"></div>
</template>
<script>
    import noUiSlider from 'nouislider';

    export default {
        props: {
            id: {
                type: String,
                default: () => {
                    return "slider-" + ((Math.random() + 1).toString(36).substring(7));
                },
            },

            start: {
                type: [Array, Number],
                validator(v) {
                    if (typeof v == "object") {
                        return v.length && v.every(i => typeof i == "number");
                    }

                    return true;
                },
            },

            connect: {
                type: [Array, Boolean, String],
                default: false,
                validator(v) {
                    if (typeof v == "object") {
                        return v.length && v.every(i => typeof i == "boolean");
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
                    if (typeof v == "object") {
                        return v.length && v.every(i => typeof i == "number");
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
                default: "horizontal",
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
                type: [Array, Object, Boolean],
                default: false,
            },

            format: {
                type: Object,
            },

            pips: {
                type: Object,
                default: null,
            },

            pipsys: {},

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
                currentValues: null,
                events: [],
            }
        },

        mounted() {
            this.create();

            this.startBasicEvents();
        },

        beforeUnmount() {
            this.destroy();
        },

        methods: {
            getReference() {
                return this.$refs[this.id];
            },

            create() {
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
                    tooltips: this.tooltips,
                    pips: this.pips,
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

                if (this.pipsys != undefined && !configs['pips']) {
                    configs['pips'] = {
                        mode: 'steps',
                    };
                }

                noUiSlider.create(this.getReference(), configs);
            },

            startBasicEvents() {
                this.startUpdate();
                this.startStart();
                this.startSlide();
                this.startDrag();
                this.startChange();
                this.startSet();
                this.startEnd();
            },

            offAllEvents() {
                let l = this.events.length;

                for (let i = 0;i < l;i++) {
                    this.off(this.events.pop());
                }
            },

            // Events
            startUpdate() {
                this.on('update', (values, handle, unencoded, tap, positions) => {
                    this.$emit('update', {values, handle, unencoded, tap, positions});

                    let value = values.length > 1 ? values : values[0];

                    this.currentValues = value;

                    this.$emit('update:modelValue', value);
                });
            },

            startStart() {
                this.on('start', (values, handle, unencoded, tap, positions) => {
                    this.$emit('start', {values, handle, unencoded, tap, positions})
                });
            },

            startSlide() {
                this.on('slide', (values, handle, unencoded, tap, positions) => {
                    this.$emit('slide', {values, handle, unencoded, tap, positions})
                });
            },

            startDrag() {
                this.on('drag', (values, handle, unencoded, tap, positions) => {
                    this.$emit('drag', {values, handle, unencoded, tap, positions})
                });
            },

            startChange() {
                this.on('change', (values, handle, unencoded, tap, positions) => {
                    this.$emit('change', {values, handle, unencoded, tap, positions})
                });
            },

            startSet() {
                this.on('set', (values, handle, unencoded, tap, positions) => {
                    this.$emit('set', {values, handle, unencoded, tap, positions})
                });
            },

            startEnd() {
                this.on('end', (values, handle, unencoded, tap, positions) => {
                    this.$emit('end', {values, handle, unencoded, tap, positions})
                });
            },

            compareValues(v1, v2) {
                v1 = JSON.stringify(v1);
                v2 = JSON.stringify(v2);

                return v1 == v2;
            },

            // Public methods
            destroy() {
                this.offAllEvents();

                this.getReference().noUiSlider.destroy();
            },

            getSteps() {
                return this.getReference().noUiSlider.steps();
            },

            on(eventName, callback) {
                this.events.push(eventName);
                this.getReference().noUiSlider.on(eventName, callback);
            },

            off(eventName) {
                this.getReference().noUiSlider.off(eventName);
            },

            get(unencoded) {
                return this.getReference().noUiSlider.get(unencoded);
            },

            set(input, fireSetEvent, exactInput) {
                this.getReference().noUiSlider.set(input, fireSetEvent, exactInput);
            },

            setHandle(handleNumber, value, fireSetEvent, exactInput) {
                this.getReference().noUiSlider.setHandle(handleNumber, value, fireSetEvent, exactInput);
            },

            reset(fireSetEvent) {
                this.getReference().noUiSlider.reset(fireSetEvent);
            },

            setDisable(handleNumber) {
                this.getReference().noUiSlider.disable(handleNumber);
            },

            setEnable(handleNumber) {
                this.getReference().noUiSlider.enable(handleNumber);
            },

            updateOptions(optionsToUpdate, fireSetEvent) {
                this.getReference().noUiSlider.updateOptions(optionsToUpdate, fireSetEvent);
            },

            removePips() {
                this.getReference().noUiSlider.removePips();
            },

            removeTooltips() {
                this.getReference().noUiSlider.removeTooltips();
            },

            getPositions() {
                return this.getReference().noUiSlider.getPositions();
            },

            getTooltips() {
                return this.getReference().noUiSlider.getTooltips();
            },

            getOrigins() {
                return this.getReference().noUiSlider.getOrigins();
            },

            setPips(grid) {
                return this.getReference().noUiSlider.pips(grid);
            },
        },

        watch: {
            currentValues(v) {
                if (!this.compareValues(v, this.get())) {
                    this.set(v, false);
                }
            },

            modelValue: {
                handler(v) {
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
                this.updateOptions({
                    step: v,
                });
            },

            margin(v) {
                this.updateOptions({
                    margin: v,
                });
            },

            padding: {
                handler(v) {
                    this.updateOptions({
                        padding: v,
                    });
                },
                deep: true,
            },

            limit(v) {
                this.updateOptions({
                    limit: v,
                });
            },

            tooltips(v) {
                this.updateOptions({
                    tooltips: v,
                });
            },

            format: {
                handler(v) {
                    this.updateOptions({
                        format: v,
                    });
                },
                deep: true,
            },

            range: {
                handler(v) {
                    this.updateOptions({
                        range: v,
                    });

                    this.$nextTick(() => this.reset());
                },
                deep: true,
            },
        },

        emits: [
            'update',
            'start',
            'slide',
            'drag',
            'change',
            'set',
            'end',
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
