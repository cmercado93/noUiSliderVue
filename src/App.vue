<template>
    <div class="base">
        <v-slider
            v-model="values"
            :start="configs.start"
            :step="configs.step"
            :tooltips="configs.tooltips"
            :connect="configs.connect"
            :range="configs.range"
            :pips="configs.pips"
            :disable="configs.disable"
            ref="slider"
        ></v-slider>
        <div style="margin-top: 50px;"></div>
        <p>Current data: {{values}}</p>
        <br>
        <button type="button" @click.prevent="slider_reset">Reset</button>
        <br>
        <button type="button" @click.prevent="slider_setValue">Set value</button>
        <br>
        <button type="button" @click.prevent="slider_changePips">Change pips</button>
        <br>
        <button type="button" @click.prevent="slider_removePips">Remove pips</button>
        <br>
        <button type="button" @click.prevent="configs.disable = !configs.disable">{{configs.disable ? 'Enable' : 'Disable'}} slider</button>
        <br>
        <button type="button" @click.prevent="configs.tooltips = !configs.tooltips">{{configs.tooltips ? 'Remove' : 'Add'}} tooltip</button>
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
                values: 2,
                configs: {
                    disable: false,
                    tooltips: false,
                    start: 0,
                    step: 1,
                    connect: "lower",
                    range: {
                        min: 1,
                        max: 10,
                    },
                    pips: {
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
                    }
                }
            }
        },

        methods: {
            slider_reset() {
                this.$refs.slider.reset();
            },

            slider_setValue() {
                this.values = 5;
            },

            slider_changePips() {
                this.configs.pips.density = 5;
                this.configs.pips.mode = 'range';
                this.configs.pips.format.to = (v) => v + " sec";
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
