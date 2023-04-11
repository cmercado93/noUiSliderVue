<template>
    <div class="base">
        <v-slider
          :configs="slider.configs"
          @update="updateCurrentDataText"
          ref="slider"
        ></v-slider>
        <div style="margin-top: 50px;"></div>
        <p>Current data: {{currentData}}</p>
        <br>
        <button type="button" @click.prevent="slider_reset">Reset</button>
        <br>
        <button type="button" @click.prevent="slider_setValue">Set value</button>
        <br>
        <button type="button" @click.prevent="slider_addPips">Add pips</button>
        <br>
        <button type="button" @click.prevent="slider_removePips">Remove pips</button>
    </div>
</template>
<script>
    import VSlider from './components/';

    export default {
        components: {
            VSlider,
        },

        data() {
            return {
                currentData: {},
                slider: {
                    configs: {
                        start: 0,
                        step: 1,
                        connect: "lower",
                        range: {
                            'min': 0,
                            'max': 10,
                        },
                    }
                },
            }
        },

        methods: {
            updateCurrentDataText(value) {
                this.currentData = value;
            },

            slider_reset() {
                this.$refs.slider.reset();
            },

            slider_setValue() {
                this.$refs.slider.set(4);
            },

            slider_addPips() {
                this.$refs.slider.pips({
                    mode: 'steps',
                    density: 10,
                    format: {
                        to: (value) => {
                            return value + " value";
                        },
                        from: (value) => {
                            return value;
                        },
                    }
                });
            },

            slider_removePips() {
                this.$refs.slider.removePips();
            },
        }
    }
</script>

<style>
    .base {
        margin: 30px;
    }

    button {
        margin-bottom: 10px;
    }
</style>
