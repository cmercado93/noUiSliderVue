<template>
    <div class="app">
        <header class="header">
            <h1>nouislider-vue3</h1>
            <p class="subtitle">Vue 3 component wrapper for noUiSlider</p>
        </header>

        <section class="demo-section">
            <div class="slider-display">
                <div class="value-display">
                    <span class="label">v-model</span>
                    <span class="value">{{ values }}</span>
                </div>
                <div class="event-indicators">
                    <span v-for="name in eventNames" :key="name"
                        class="event-tag"
                        :class="{ 'event-tag-active': activeEvents[name] }">
                        {{ name }}
                    </span>
                </div>
                <div class="slider-wrapper" :class="{ 'slider-vertical': orientation === 'vertical' }">
                    <v-slider
                        ref="slider"
                        :key="sliderKey"
                        v-model="values"
                        :start="start"
                        :step="step"
                        :range="range"
                        :connect="connect"
                        :tooltips="tooltips"
                        :pips="pipsConfig"
                        :disable="disable"
                        :direction="direction"
                        :orientation="orientation"
                        :animate="animate"
                        :animation-duration="animationDuration"
                        :snap="snap"
                        :margin="margin"
                        :limit="limit"
                        :padding="padding"
                        :behaviour="behaviour"
                        :format="formatEnabled ? format : undefined"
                        :clickable-pips="clickablePips"
                        :tooltip-on-click="tooltipOnClick"
                        :merge-tooltips="mergeTooltipsEnabled ? mergeTooltipsConfig : null"
                        @start="onEvent('start', $event)"
                        @slide="onEvent('slide', $event)"
                        @change="onEvent('change', $event)"
                        @set="onEvent('set', $event)"
                        @end="onEvent('end', $event)"
                        @update="onEvent('update', $event)"
                        @hover="onEvent('hover', $event)"
                    ></v-slider>
                </div>
            </div>

            <div class="controls">
                <!-- Estado -->
                <div class="control-group">
                    <h3>Estado</h3>
                    <div class="control-row">
                        <button :class="{ active: disable }" @click="disable = !disable">
                            {{ disable ? 'Habilitar' : 'Deshabilitar' }}
                        </button>
                        <button @click="$refs.slider.reset()">Reset</button>
                        <button @click="setRandomValue">Valor aleatorio</button>
                    </div>
                </div>

                <!-- Rango y Step -->
                <div class="control-group">
                    <h3>Rango y Step</h3>
                    <div class="control-row">
                        <label>
                            Min
                            <input type="number" v-model.number="rangeMin" class="input-num">
                        </label>
                        <label>
                            Max
                            <input type="number" v-model.number="rangeMax" class="input-num">
                        </label>
                        <label>
                            Step
                            <input type="number" v-model.number="step" min="0" class="input-num">
                        </label>
                    </div>
                    <div class="control-row">
                        <label>
                            Margin
                            <input type="number" v-model.number="marginInput" min="0" class="input-num">
                        </label>
                        <label>
                            Limit
                            <input type="number" v-model.number="limitInput" min="0" class="input-num">
                        </label>
                        <label>
                            Padding
                            <input type="number" v-model.number="paddingInput" min="0" class="input-num">
                        </label>
                    </div>
                    <div class="control-row">
                        <button :class="{ active: snap }" @click="snap = !snap">
                            Snap: {{ snap ? 'ON' : 'OFF' }}
                        </button>
                    </div>
                </div>

                <!-- Handles -->
                <div class="control-group">
                    <h3>Handles</h3>
                    <div class="control-row">
                        <button @click="setHandles(1)" :class="{ active: handleCount === 1 }">1 Handle</button>
                        <button @click="setHandles(2)" :class="{ active: handleCount === 2 }">2 Handles</button>
                        <button @click="setHandles(3)" :class="{ active: handleCount === 3 }">3 Handles</button>
                    </div>
                </div>

                <!-- Connect -->
                <div class="control-group">
                    <h3>Connect</h3>
                    <div class="control-row" v-if="handleCount === 1">
                        <button @click="connect = false" :class="{ active: connect === false }">Off</button>
                        <button @click="connect = 'lower'" :class="{ active: connect === 'lower' }">Lower</button>
                        <button @click="connect = 'upper'" :class="{ active: connect === 'upper' }">Upper</button>
                    </div>
                    <div class="control-row" v-else-if="handleCount === 2">
                        <button @click="connect = false" :class="{ active: connect === false }">Off</button>
                        <button @click="connect = true" :class="{ active: connect === true }">On</button>
                        <button @click="connect = [true, false, false]" :class="{ active: JSON.stringify(connect) === '[true,false,false]' }">Lower</button>
                        <button @click="connect = [false, false, true]" :class="{ active: JSON.stringify(connect) === '[false,false,true]' }">Upper</button>
                        <button @click="connect = [true, true, true]" :class="{ active: JSON.stringify(connect) === '[true,true,true]' }">Todos</button>
                    </div>
                    <div class="control-row" v-else>
                        <button v-for="(opt, label) in connectOptions3" :key="label"
                            @click="connect = opt"
                            :class="{ active: JSON.stringify(connect) === JSON.stringify(opt) }">
                            {{ label }}
                        </button>
                    </div>
                </div>

                <!-- Orientacion y Direccion -->
                <div class="control-group">
                    <h3>Layout</h3>
                    <div class="control-row">
                        <button @click="orientation = 'horizontal'" :class="{ active: orientation === 'horizontal' }">Horizontal</button>
                        <button @click="orientation = 'vertical'" :class="{ active: orientation === 'vertical' }">Vertical</button>
                        <button @click="direction = direction === 'ltr' ? 'rtl' : 'ltr'" :class="{ active: direction === 'rtl' }">
                            Dir: {{ direction.toUpperCase() }}
                        </button>
                    </div>
                </div>

                <!-- Tooltips -->
                <div class="control-group">
                    <h3>Tooltips</h3>
                    <div class="control-row">
                        <button :class="{ active: tooltips }" @click="tooltips = !tooltips">
                            Tooltips: {{ tooltips ? 'ON' : 'OFF' }}
                        </button>
                        <button :class="{ active: tooltipOnClick }" @click="tooltipOnClick = !tooltipOnClick">
                            Solo al click: {{ tooltipOnClick ? 'ON' : 'OFF' }}
                        </button>
                        <button :class="{ active: mergeTooltipsEnabled }" @click="mergeTooltipsEnabled = !mergeTooltipsEnabled">
                            Merge: {{ mergeTooltipsEnabled ? 'ON' : 'OFF' }}
                        </button>
                    </div>
                </div>

                <!-- Pips -->
                <div class="control-group">
                    <h3>Pips</h3>
                    <div class="control-row">
                        <button :class="{ active: pipsEnabled }" @click="pipsEnabled = !pipsEnabled">
                            Pips: {{ pipsEnabled ? 'ON' : 'OFF' }}
                        </button>
                        <button :class="{ active: clickablePips }" @click="clickablePips = !clickablePips" :disabled="!pipsEnabled">
                            Clickeable: {{ clickablePips ? 'ON' : 'OFF' }}
                        </button>
                    </div>
                    <div class="control-row" v-if="pipsEnabled">
                        <button v-for="m in pipsModes" :key="m"
                            @click="pipsMode = m"
                            :class="{ active: pipsMode === m }">
                            {{ m }}
                        </button>
                    </div>
                    <div class="control-row" v-if="pipsEnabled">
                        <label>
                            Density
                            <input type="number" v-model.number="pipsDensity" min="1" max="10" class="input-num">
                        </label>
                    </div>
                </div>

                <!-- Animacion -->
                <div class="control-group">
                    <h3>Animacion</h3>
                    <div class="control-row">
                        <button :class="{ active: animate }" @click="animate = !animate">
                            Animate: {{ animate ? 'ON' : 'OFF' }}
                        </button>
                        <label v-if="animate">
                            Duracion (ms)
                            <input type="number" v-model.number="animationDuration" min="0" step="50" class="input-num">
                        </label>
                    </div>
                </div>

                <!-- Behaviour -->
                <div class="control-group">
                    <h3>Behaviour</h3>
                    <div class="control-row">
                        <button v-for="b in behaviourOptions" :key="b"
                            @click="behaviour = b"
                            :class="{ active: behaviour === b }">
                            {{ b }}
                        </button>
                    </div>
                </div>

                <!-- Format -->
                <div class="control-group">
                    <h3>Format</h3>
                    <div class="control-row">
                        <button :class="{ active: !formatEnabled }" @click="formatEnabled = false">Default</button>
                        <button :class="{ active: formatEnabled && formatType === 'currency' }" @click="formatEnabled = true; formatType = 'currency'">Moneda ($)</button>
                        <button :class="{ active: formatEnabled && formatType === 'percent' }" @click="formatEnabled = true; formatType = 'percent'">Porcentaje (%)</button>
                    </div>
                </div>

                <!-- Metodos expuestos -->
                <div class="control-group">
                    <h3>Metodos expuestos</h3>
                    <div class="control-row">
                        <button @click="logGet">get()</button>
                        <button @click="logGetUnencoded">get(true)</button>
                        <button @click="logSteps">getSteps()</button>
                        <button @click="logPositions">getPositions()</button>
                        <button @click="logOptions">getOptions()</button>
                    </div>
                </div>

                <!-- Event log -->
                <div class="control-group">
                    <h3>
                        Eventos
                        <button class="btn-small" @click="eventLog = []">Limpiar</button>
                    </h3>
                    <div class="event-log">
                        <div v-for="(evt, i) in eventLog" :key="i" class="event-entry">
                            <span class="event-name">{{ evt.name }}</span>
                            <span class="event-data">{{ evt.data }}</span>
                        </div>
                        <div v-if="!eventLog.length" class="event-empty">Interactua con el slider para ver eventos</div>
                    </div>
                </div>

                <!-- Console output -->
                <div class="control-group" v-if="consoleOutput">
                    <h3>
                        Console
                        <button class="btn-small" @click="consoleOutput = ''">Limpiar</button>
                    </h3>
                    <pre class="console-output">{{ consoleOutput }}</pre>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import VSlider from '-/components/Slider.vue';

    export default {
        components: {
            VSlider,
        },

        data() {
            return {
                values: null,
                start: [20, 80],
                handleCount: 2,
                sliderKey: 0,

                // Range
                rangeMin: 0,
                rangeMax: 100,
                step: 1,
                snap: false,
                marginInput: 0,
                limitInput: 0,
                paddingInput: 0,

                // Layout
                direction: 'ltr',
                orientation: 'horizontal',

                // Connect
                connect: true,
                connectOptions3: {
                    'Off': false,
                    'Internos': [false, true, true, false],
                    'Todos': [true, true, true, true],
                    'Extremos': [true, false, false, true],
                },

                // Tooltips
                tooltips: true,
                tooltipOnClick: false,
                mergeTooltipsEnabled: true,
                mergeTooltipsConfig: { threshold: 15, separator: ' - ' },

                // Pips
                pipsEnabled: true,
                pipsMode: 'steps',
                pipsDensity: 3,
                pipsModes: ['steps', 'range', 'positions', 'count'],
                clickablePips: true,

                // Animation
                animate: false,
                animationDuration: 300,

                // Behaviour
                behaviour: 'tap',
                behaviourOptions: ['tap', 'drag', 'drag-fixed', 'drag-all', 'fixed', 'snap', 'hover', 'unconstrained', 'smooth-steps', 'tap-drag', 'hover-snap', 'unconstrained-tap', 'invert-connects', 'none'],

                // Format
                formatEnabled: false,
                formatType: 'currency',

                // Disable
                disable: false,

                // Events & Console
                eventNames: ['start', 'slide', 'drag', 'update', 'change', 'set', 'end', 'hover'],
                activeEvents: {},
                eventTimers: {},
                eventLog: [],
                consoleOutput: '',
            }
        },

        computed: {
            range() {
                return {
                    min: this.rangeMin,
                    max: this.rangeMax,
                };
            },

            margin() {
                return this.marginInput > 0 ? this.marginInput : undefined;
            },

            limit() {
                return this.limitInput > 0 ? this.limitInput : undefined;
            },

            padding() {
                return this.paddingInput > 0 ? this.paddingInput : 0;
            },

            pipsConfig() {
                if (!this.pipsEnabled) return null;

                const config = {
                    mode: this.pipsMode,
                    density: this.pipsDensity,
                };

                if (this.pipsMode === 'positions') {
                    config.values = [0, 25, 50, 75, 100];
                } else if (this.pipsMode === 'count') {
                    config.values = 5;
                }

                return config;
            },

            format() {
                if (this.formatType === 'currency') {
                    return {
                        to: (v) => '$' + Number(v).toFixed(2),
                        from: (v) => Number(String(v).replace('$', '')),
                    };
                }

                return {
                    to: (v) => Number(v).toFixed(0) + '%',
                    from: (v) => Number(String(v).replace('%', '')),
                };
            },
        },

        methods: {
            setHandles(count) {
                this.handleCount = count;
                const r = this.rangeMax - this.rangeMin;
                const min = this.rangeMin;

                if (count === 1) {
                    this.start = [min + r * 0.5];
                    this.values = this.start[0];
                    this.connect = 'lower';
                } else if (count === 2) {
                    this.start = [min + r * 0.2, min + r * 0.8];
                    this.values = [...this.start];
                    this.connect = true;
                } else {
                    this.start = [min + r * 0.2, min + r * 0.5, min + r * 0.8];
                    this.values = [...this.start];
                    this.connect = [false, true, true, false];
                }

                this.sliderKey++;
            },

            setRandomValue() {
                const r = this.rangeMax - this.rangeMin;
                const min = this.rangeMin;

                if (this.handleCount === 1) {
                    this.values = Math.round(min + Math.random() * r);
                } else if (this.handleCount === 2) {
                    const a = Math.round(min + Math.random() * r * 0.5);
                    const b = Math.round(min + r * 0.5 + Math.random() * r * 0.5);
                    this.values = [a, b];
                } else {
                    const vals = Array.from({ length: 3 }, () => Math.round(min + Math.random() * r));
                    vals.sort((a, b) => a - b);
                    this.values = vals;
                }
            },

            onEvent(name, data) {
                const value = name === 'hover'
                    ? data
                    : (data.unencoded || data.values);

                this.eventLog.unshift({
                    name,
                    data: JSON.stringify(value),
                });

                if (this.eventLog.length > 50) {
                    this.eventLog.pop();
                }

                // Activar indicador con fade
                clearTimeout(this.eventTimers[name]);
                this.activeEvents[name] = true;
                this.eventTimers[name] = setTimeout(() => {
                    this.activeEvents[name] = false;
                }, 400);
            },

            logGet() {
                this.consoleOutput = 'get() → ' + JSON.stringify(this.$refs.slider.get());
            },

            logGetUnencoded() {
                this.consoleOutput = 'get(true) → ' + JSON.stringify(this.$refs.slider.get(true));
            },

            logSteps() {
                this.consoleOutput = 'getSteps() → ' + JSON.stringify(this.$refs.slider.getSteps());
            },

            logPositions() {
                this.consoleOutput = 'getPositions() → ' + JSON.stringify(this.$refs.slider.getPositions());
            },

            logOptions() {
                const opts = this.$refs.slider.getOptions();
                const summary = {
                    start: opts.start,
                    range: opts.range,
                    step: opts.step,
                    connect: opts.connect,
                    margin: opts.margin,
                    limit: opts.limit,
                    padding: opts.padding,
                    direction: opts.dir,
                    orientation: opts.ort,
                    animate: opts.animate,
                    behaviour: opts.events,
                    snap: opts.snap,
                };
                this.consoleOutput = 'getOptions() →\n' + JSON.stringify(summary, null, 2);
            },
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #f5f5f5;
        color: #1a1a1a;
    }

    .app {
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
    }

    .header {
        text-align: center;
        margin-bottom: 30px;
    }

    .header h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        color: #111;
    }

    .subtitle {
        margin: 4px 0 0;
        color: #666;
        font-size: 14px;
    }

    .demo-section {
        background: #fff;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }

    .slider-display {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
    }

    .value-display {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        font-size: 14px;
    }

    .value-display .label {
        color: #888;
        font-family: monospace;
    }

    .value-display .value {
        font-family: monospace;
        font-weight: 600;
        background: #f0f0f0;
        padding: 4px 10px;
        border-radius: 4px;
    }

    .slider-wrapper {
        padding: 10px 20px 20px;
    }

    .slider-wrapper.slider-vertical {
        display: flex;
        justify-content: center;
        padding: 20px;
        min-height: 220px;
    }

    .controls {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .control-group {
        padding: 12px 0;
        border-bottom: 1px solid #f0f0f0;
    }

    .control-group:last-child {
        border-bottom: none;
    }

    .control-group h3 {
        margin: 0 0 10px;
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #888;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .control-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 8px;
    }

    .control-row:last-child {
        margin-bottom: 0;
    }

    button {
        padding: 6px 14px;
        border: 1px solid #d0d0d0;
        border-radius: 6px;
        background: #fff;
        color: #333;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.15s;
        font-family: inherit;
    }

    button:hover {
        background: #f5f5f5;
        border-color: #bbb;
    }

    button.active {
        background: #1a1a1a;
        color: #fff;
        border-color: #1a1a1a;
    }

    button:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    .btn-small {
        padding: 2px 8px;
        font-size: 11px;
    }

    label {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: #555;
    }

    .input-num {
        width: 70px;
        padding: 5px 8px;
        border: 1px solid #d0d0d0;
        border-radius: 6px;
        font-size: 13px;
        font-family: monospace;
        text-align: center;
    }

    .input-num:focus {
        outline: none;
        border-color: #888;
    }

    .event-indicators {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 12px;
    }

    .event-tag {
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-family: monospace;
        font-weight: 600;
        background: #f0f0f0;
        color: #aaa;
        transition: background 0.4s, color 0.4s, box-shadow 0.4s;
    }

    .event-tag-active {
        background: #1a1a1a;
        color: #fff;
        box-shadow: 0 0 8px rgba(26, 26, 26, 0.4);
    }

    .event-log {
        max-height: 160px;
        overflow-y: auto;
        background: #fafafa;
        border-radius: 6px;
        padding: 8px;
        font-size: 12px;
        font-family: monospace;
    }

    .event-entry {
        display: flex;
        gap: 10px;
        padding: 3px 0;
        border-bottom: 1px solid #f0f0f0;
    }

    .event-entry:last-child {
        border-bottom: none;
    }

    .event-name {
        color: #0066cc;
        font-weight: 600;
        min-width: 60px;
    }

    .event-data {
        color: #555;
    }

    .event-empty {
        color: #aaa;
        text-align: center;
        padding: 10px;
        font-style: italic;
    }

    .console-output {
        background: #1a1a1a;
        color: #0f0;
        padding: 12px;
        border-radius: 6px;
        font-size: 12px;
        font-family: monospace;
        white-space: pre-wrap;
        word-break: break-all;
        margin: 0;
        max-height: 200px;
        overflow-y: auto;
    }
</style>
