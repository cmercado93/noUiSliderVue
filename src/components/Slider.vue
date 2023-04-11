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
            configs: {
                type: Object,
                required: true,
                validator(value) {
                    return Object.keys(value).length > 0;
                },
            },
        },

        data() {
            return {
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
                noUiSlider.create(this.getReference(), this.configs);
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
                    this.$emit('update', {values, handle, unencoded, tap, positions})
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

            // Public methods
            destroy() {
                this.offAllEvents();

                this.getReference().noUiSlider.destroy();
            },

            steps() {
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

            disable(handleNumber) {
                this.getReference().noUiSlider.disable(handleNumber);
            },

            enable(handleNumber) {
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

            pips(grid) {
                return this.getReference().noUiSlider.pips(grid);
            },
        },

        expose: [
            'destroy',
            'steps',
            'on',
            'off',
            'get',
            'set',
            'setHandle',
            'reset',
            'disable',
            'enable',
            'updateOptions',
            'removePips',
            'removeTooltips',
            'getPositions',
            'getTooltips',
            'getOrigins',
            'pips',
        ],
    }
</script>
