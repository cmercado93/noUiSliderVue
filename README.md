# noUiSliderVue

noUiSliderVue es un componente de Vue basado en [noUiSlider](https://github.com/leongersen/noUiSlider).

Este cuenta con la configuración básica que brinda el complemento original.

## Instalación

```sh
npm install --save nouislider-vue3
```

#### Ejemplo de uso

```html
<template>
    <div>
        <v-slider
            v-model="values"
            :start="configs.start"
            :step="configs.step"
            :connect="configs.connect"
            :range="configs.range"
        ></v-slider>
    </div>
</template>
<script>
    import 'nouislider-vue3/css';
    import VSlider from 'nouislider-vue3';

    export default {
        components: {
            VSlider,
        },

        data() {
            return {
                values: 1,
                configs: {
                    start: 1,
                    step: 1,
                    connect: true,
                    range: {
                        min: 1,
                        max: 10,
                    },
                },
            }
        },
    }
</script>
```

#### Ejemplo al usarlo en linea

```html
<link rel="stylesheet" type="text/css" href="dist/nouislider-vue3.css">
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="dist/nouislider-vue3.umd.js"></script>

<div id="app">
    <p>Current data: {{values}}</p>
    <vue-slider
        v-model="values"
        :start="configs.start"
        :step="configs.step"
        :connect="configs.connect"
        :range="configs.range"
    ></vue-slider>
</div>

<script>
    const { createApp } = Vue

    createApp({
        data() {
            return {
                values: 1,
                configs: {
                    start: 1,
                    step: 1,
                    connect: "lower",
                    range: {
                        min: 1,
                        max: 10,
                    },
                }
            }
        },
    })
    .component('vue-slider', noUiSliderVue)
    .mount('#app')
</script>
```

## Props

| Nombre | Tipo | Default | Requerido |
|---|---|---|---|
| values | [Array, Number] | 0 |  |
| start | [Array, Number] |  |  |
| connect | [Array, Boolean, String] | false |  |
| range | Object |  | :heavy_check_mark: |
| step | Number |  |  |
| margin | Number |  |  |
| padding | [Array, Number] | 0 |  |
| limit | Number |  |  |
| direction | String | ltr |  |
| orientation | String | horizontal |  |
| animate | Boolean | false |  |
| handleAttributes | Array |  |  |
| keyboardSupport | Boolean | true |  |
| keyboardDefaultStep | Number | 10 |  |
| keyboardPageMultiplier | Number | 5 |  |
| keyboardMultiplier | Number | 1 |  |
| behaviour | String | tap |  |
| tooltips | [Array, Object, Boolean] | false |  |
| format | Object |  |  |
| pips | Object |  |  |
| snap | Boolean |  |  |
| ariaFormat | Object |  |  |
| modelValue | [Number, Array, String] |  | :heavy_check_mark: |
| cssPrefix | String |  |  |
| cssClasses | Object |  |  |
| animationDuration | Number |  |  |
| disable | Boolean | false |  |
| pipsys | Boolean |  |  |

## Eventos

| Nombre |
| --- |
| update |
| start |
| slide |
| drag |
| change |
| set |
| end |

Todos los eventos responden objetos similares

##### Ejemplo

```json
{
    "values":[
        0
    ],
    "handle":0,
    "unencoded":[
        0
    ],
    "tap":true,
    "positions":[
        0
    ]
}
```

## Metodos publicos

| Nombre |
| --- |
| on |
| off |
| get |
| set |
| reset |
| destroy |
| setHandle |
| setDisable |
| setEnable |
| setPips |
| updateOptions |
| getSteps |
| getPositions |
| getTooltips |
| getOrigins |
| removePips |
| removeTooltips |
