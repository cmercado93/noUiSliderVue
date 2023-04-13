# noUiSliderVue

noUiSliderVue es un componente de Vue basado en [noUiSlider](https://github.com/leongersen/noUiSlider).

Este cuenta con la configuración básica que brinda el complemento original.

#### Ejemplo

```html
<link rel="stylesheet" type="text/css" href="dist/nouislidervue.css">
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="dist/nouislidervue.umd.js"></script>

<div id="app">
    <p>Current data: {{values}}</p>
    <vue-slider
        v-model="values"
        :start="configs.start"
        :step="configs.step"
        :connect="configs.connect"
        :range="configs.range"
        ref="slider"
    ></vue-slider>
</div>

<script>
    const { createApp } = Vue

    createApp({
        data() {
            return {
                values: 1,
                configs: {
                    start: 0,
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
