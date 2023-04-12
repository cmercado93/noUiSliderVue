# noUiSliderVue

noUiSliderVue es una capa de Vue.js 3 sobre el complemento noUiSlider.

Este cuenta con la configuración básica que brinda el complemento original.

#### Ejemplo

```html
<link rel="stylesheet" type="text/css" href="dist/nouislidervue.css">
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="dist/nouislidervue.umd.js"></script>

<div id="app">
    <p>{{currentValue}}</p>
    <vue-slider
        :configs="configs"
        @update="updateCurrentValue"
    ></vue-slider>
</div>

<script>
    const { createApp } = Vue

    createApp({
        data() {
            return {
                currentValue: null,
                configs: {
                    start: 0,
                    range: {
                        min: 0,
                        max: 10,
                    },
                },
            }
        },
        methods: {
            updateCurrentValue({ values }) {
                this.currentValue = values;
            },
        }
    })
    .component('vue-slider', noUiSliderVue)
    .mount('#app')
</script>
```
