# noUiSliderVue

Componente de Vue 3 basado en [noUiSlider](https://github.com/leongersen/noUiSlider).

Cuenta con la configuracion basica que brinda el complemento original, ademas de funcionalidades adicionales como tooltips clickeables, pips clickeables y merge de tooltips.

## Instalacion

```bash
npm install nouislider-vue3
```

```js
import Slider from 'nouislider-vue3';
import 'nouislider-vue3/css';
```

## Uso basico

```vue
<template>
    <Slider
        v-model="value"
        :range="{ min: 0, max: 100 }"
    />
</template>

<script>
import Slider from 'nouislider-vue3';
import 'nouislider-vue3/css';

export default {
    components: { Slider },
    data() {
        return {
            value: 50,
        }
    }
}
</script>
```

### Slider con rango (dos handles)

```vue
<Slider
    v-model="values"
    :range="{ min: 0, max: 100 }"
    :connect="true"
    :step="1"
    :tooltips="true"
/>
```

```js
data() {
    return {
        values: [20, 80], // dos handles
    }
}
```

## Props

### Props de noUiSlider

| Prop | Tipo | Default | Descripcion |
|---|---|---|---|
| `modelValue` (v-model) | `Number \| Array \| String` | **requerido** | Valor(es) del slider |
| `range` | `Object` | **requerido** | Rango min/max. Ej: `{ min: 0, max: 100 }` |
| `start` | `Number \| Array` | — | Posicion inicial de los handles. Si no se pasa, usa `modelValue` |
| `connect` | `Boolean \| Array \| String` | `false` | Barra de color entre handles. `true`, `'lower'`, `'upper'` o array de booleans |
| `step` | `Number` | — | Incremento entre valores |
| `snap` | `Boolean` | — | Fuerza al slider a saltar entre valores del `range` |
| `margin` | `Number` | — | Distancia minima entre handles |
| `limit` | `Number` | — | Distancia maxima entre handles |
| `padding` | `Number \| Array` | `0` | Distancia minima desde los bordes. `[10, 15]` para asimetrico |
| `orientation` | `String` | `'horizontal'` | `'horizontal'` o `'vertical'`. Vertical requiere altura CSS |
| `direction` | `String` | `'ltr'` | `'ltr'` o `'rtl'` |
| `tooltips` | `Boolean \| Object \| Array \| Function` | `false` | Tooltips sobre handles. `true`, formatter `{ to: fn }`, o array por handle |
| `animate` | `Boolean` | `false` | Transicion CSS al cambiar valores con `.set()` |
| `animationDuration` | `Number` | — | Duracion de animacion en ms |
| `behaviour` | `String` | `'tap'` | Keywords separados por guion: `tap`, `drag`, `snap`, `hover`, etc. |
| `format` | `Object` | — | `{ to: fn, from: fn }` para formatear valores |
| `pips` | `Object` | `null` | Configuracion de marcas. Ej: `{ mode: 'steps', density: 1 }` |
| `handleAttributes` | `Array` | — | Atributos HTML por handle. Ej: `[{ 'aria-label': 'min' }]` |
| `ariaFormat` | `Object` | — | Formatter para atributos aria |
| `keyboardSupport` | `Boolean` | `true` | Soporte de teclas de flechas |
| `keyboardDefaultStep` | `Number` | `10` | Step por defecto para teclado |
| `keyboardMultiplier` | `Number` | `1` | Multiplicador del step para flechas |
| `keyboardPageMultiplier` | `Number` | `5` | Multiplicador para Page Up/Down |
| `cssPrefix` | `String` | — | Prefijo CSS personalizado |
| `cssClasses` | `Object` | — | Override de clases CSS |
| `disable` | `Boolean` | `false` | Deshabilita el slider |

### Props adicionales del wrapper

| Prop | Tipo | Default | Descripcion |
|---|---|---|---|
| `pipsys` | `Boolean` | — | Atajo para activar pips con `mode: 'steps'` sin configuracion adicional |
| `clickablePips` | `Boolean` | — | Permite hacer click en los pips para mover el slider a ese valor |
| `tooltipOnClick` | `Boolean` | — | Muestra tooltips solo cuando el handle esta activo (siendo arrastrado) |
| `mergeTooltips` | `Object` | `null` | Fusiona tooltips cuando los handles estan cerca. `{ threshold: 15, separator: ' - ' }` |

## Eventos

| Evento | Payload | Descripcion |
|---|---|---|
| `update:modelValue` | `value` | Emitido en cada cambio de valor (para v-model) |
| `update` | `{ values, handle, unencoded, tap, positions }` | Cada cambio de valor |
| `start` | `{ values, handle, unencoded, tap, positions }` | Al comenzar a arrastrar un handle |
| `slide` | `{ values, handle, unencoded, tap, positions }` | Mientras se arrastra un handle |
| `drag` | `{ values, handle, unencoded, tap, positions }` | Mientras se arrastra la barra connect |
| `change` | `{ values, handle, unencoded, tap, positions }` | Al soltar un handle (solo interaccion de usuario) |
| `set` | `{ values, handle, unencoded, tap, positions }` | Al terminar un cambio (usuario o programatico) |
| `end` | `{ values, handle, unencoded, tap, positions }` | Al soltar un handle |
| `hover` | `value` | Al pasar el mouse (requiere `behaviour="hover"`) |

## Metodos expuestos (ref)

Accesibles via template ref:

```vue
<Slider ref="slider" ... />
```

```js
this.$refs.slider.set(50);
this.$refs.slider.reset();
```

| Metodo | Descripcion |
|---|---|
| `get(unencoded?)` | Obtiene valor(es). Pasar `true` para valores numericos crudos |
| `set(value, fireSetEvent?, exactInput?)` | Setea valor(es). `null` en array para no cambiar un handle |
| `setHandle(index, value, fireSetEvent?, exactInput?)` | Setea un handle por indice |
| `reset(fireSetEvent?)` | Vuelve a los valores iniciales de `start` |
| `getSteps()` | Retorna step anterior/siguiente por handle |
| `getPositions()` | Retorna posiciones porcentuales de los handles |
| `getTooltips()` | Retorna elementos de tooltip |
| `getOrigins()` | Retorna elementos contenedores de handles |
| `on(event, callback)` | Registra un evento de noUiSlider |
| `off(event)` | Remueve un evento |
| `setDisable(handleNumber?)` | Deshabilita slider o un handle especifico |
| `setEnable(handleNumber?)` | Habilita slider o un handle especifico |
| `updateOptions(options, fireSetEvent?)` | Actualiza opciones del slider |
| `setPips(config)` | Crea o actualiza pips |
| `removePips()` | Remueve pips |
| `removeTooltips()` | Remueve tooltips |
| `destroy()` | Destruye el slider |

## Documentacion

Documentacion con ejemplos y detalles de configuracion: [nouislider-vue.singlecode.net](https://nouislider-vue.singlecode.net/installation)

Documentacion de noUiSlider (plugin base): [refreshless.com/nouislider](https://refreshless.com/nouislider/)

## Licencia

Distribuido bajo la licencia MIT. Vea `LICENSE.md` para mas informacion.
