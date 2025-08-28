<template>
    <div class="base">
        <table border="0">
            <tbody>
                <tr>
                    <td width="150" align="left">
                        <button type="button" @click.prevent="slider_showPips">{{pips_show ? 'Hide' : 'Shows'}} pips</button>
                    </td>
                    <td width="150" align="left">
                        <button type="button" @click.prevent="slider_reset">Reset - fn()</button>
                    </td>
                    <td width="150" align="left">
                        <button type="button" @click.prevent="configs.disable = !configs.disable">{{configs.disable ? 'Enable' : 'Disable'}} slider</button>
                    </td>
                    <td width="150" align="left">
                        <button type="button" @click.prevent="configs.tooltips = !configs.tooltips">{{configs.tooltips ? 'Remove' : 'Add'}} tooltip</button>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <button type="button" @click.prevent="slider_changePips">Change pips</button>
                    </td>
                    <td align="left">
                        <button type="button" @click.prevent="slider_setValue">Set value</button>
                    </td>
                    <td align="left">&nbsp;</td>
                    <td align="left">&nbsp;</td>
                </tr>
                <tr>
                    <td align="left">
                        <button type="button" @click.prevent="slider_removePips">Remove pips - fn()</button>
                    </td>
                    <td align="left">&nbsp;</td>
                    <td align="left">&nbsp;</td>
                    <td align="left">&nbsp;</td>
                </tr>
            </tbody>
        </table>
        <hr>
        <br>
        <p>Current data: {{values}}</p>
        <v-slider
            v-model="values"
            :start="configs.start"
            :step="configs.step"
            :tooltips="configs.tooltips"
            :connect="configs.connect"
            :range="configs.range"
            :pips="pips_config"
            :disable="configs.disable"
            pip-click
            clickable-pips
            tooltip-on-click
            ref="slider"
        ></v-slider>
    </div>
</template>
<style>
    table button {
        margin: 0;
        width: 100%;
    }
</style>
<script>
    import VSlider from '-/components/Slider.vue';

    export default {
        components: {
            VSlider,
        },

        data() {
            return {
                pips_show: true,
                pips_mode: true,
                values: null,
                configs: {
                    disable: false,
                    tooltips: true,
                    start: null,
                    step: 1,
                    connect: "lower",
                    range: {
                        min: 1,
                        max: 10,
                    },
                    pips: {
                        mode: 'steps',
                        density: 1,
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

        computed: {
            pips_config() {
                if (this.pips_show) {
                    return this.configs.pips;
                }

                return null;
            },
        },

        methods: {
            slider_reset() {
                this.$refs.slider.reset();
            },

            slider_setValue() {
                this.values = 5;
            },

            slider_showPips() {
                this.pips_show = !this.pips_show;
            },

            slider_changePips() {
                if (this.pips_mode) {
                    this.configs.pips.density = 5;
                    this.configs.pips.mode = 'range';
                    this.configs.pips.format.to = (v) => v + " sec";
                } else {
                    this.configs.pips.density = 1;
                    this.configs.pips.mode = 'steps';
                    this.configs.pips.format.to = (v) => v + " value";
                }

                this.pips_mode = !this.pips_mode;
            },

            slider_removePips() {
                this.pips_show = false;
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
