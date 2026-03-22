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

### Slider con animacion

```vue
<Slider
    v-model="value"
    :range="{ min: 0, max: 100 }"
    :animate="true"
    :animation-duration="500"
    behaviour="tap"
/>
```

La duracion de la animacion se sincroniza automaticamente con la transicion CSS. Cuando `animate` es `false`, la animacion se desactiva completamente.

### Tooltips solo al hacer click

```vue
<Slider
    v-model="value"
    :range="{ min: 0, max: 100 }"
    :tooltip-on-click="true"
/>
```

Los tooltips se crean automaticamente y solo se muestran mientras el handle esta siendo arrastrado.

### Pips clickeables

```vue
<Slider
    v-model="value"
    :range="{ min: 0, max: 100 }"
    :pips="{ mode: 'steps', density: 3 }"
    :clickable-pips="true"
/>
```

Al hacer click en un pip, el handle mas cercano se mueve a ese valor.

### Merge de tooltips

```vue
<Slider
    v-model="values"
    :range="{ min: 0, max: 100 }"
    :tooltips="true"
    :merge-tooltips="{ threshold: 15, separator: ' - ' }"
/>
```

Cuando los handles estan a menos de `threshold` porcentual de distancia, sus tooltips se fusionan en uno solo.

## Props

### Props de noUiSlider

| Prop | Tipo | Default | Descripcion |
|---|---|---|---|
| `modelValue` (v-model) | `Number \| Array \| String` | **requerido** | Valor(es) del slider |
| `range` | `Object` | **requerido** | Rango min/max. Ej: `{ min: 0, max: 100 }` |
| `start` | `Number \| Array \| String` | — | Posicion inicial de los handles. Si no se pasa, usa `modelValue` |
| `connect` | `Boolean \| Array \| String` | `false` | Barra de color entre handles. `true`, `'lower'`, `'upper'` (solo 1 handle) o array de booleans (longitud = handles + 1) |
| `step` | `Number` | — | Incremento entre valores |
| `snap` | `Boolean` | — | Fuerza al slider a saltar entre valores del `range` |
| `margin` | `Number` | — | Distancia minima entre handles. No compatible con `unconstrained` |
| `limit` | `Number` | — | Distancia maxima entre handles. No compatible con `unconstrained` |
| `padding` | `Number \| Array` | `0` | Distancia minima desde los bordes. `[10, 15]` para asimetrico |
| `orientation` | `String` | `'horizontal'` | `'horizontal'` o `'vertical'`. Vertical requiere altura CSS |
| `direction` | `String` | `'ltr'` | `'ltr'` o `'rtl'` |
| `tooltips` | `Boolean \| Object \| Array \| Function` | `false` | Tooltips sobre handles. `true`, formatter `{ to: fn }`, o array por handle |
| `animate` | `Boolean` | `false` | Transicion al cambiar valores con `.set()` o al hacer tap |
| `animationDuration` | `Number` | `300` | Duracion de animacion en ms. La transicion CSS se sincroniza automaticamente |
| `behaviour` | `String` | `'tap'` | Keywords separados por guion (ver tabla abajo) |
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
| `id` | `String` | auto-generado | ID del elemento del slider |
| `pipsys` | `Boolean` | `false` | Atajo para activar pips con `mode: 'steps'` sin configuracion adicional |
| `clickablePips` | `Boolean` | `false` | Permite hacer click en los pips para mover el handle mas cercano a ese valor |
| `tooltipOnClick` | `Boolean` | `false` | Muestra tooltips solo cuando el handle esta activo (siendo arrastrado). Crea tooltips automaticamente si no existen |
| `mergeTooltips` | `Object` | `null` | Fusiona tooltips cuando los handles estan cerca. `{ threshold: 15, separator: ' - ' }` |

### Opciones de behaviour

Keywords que se combinan con guiones. Ejemplo: `"tap-drag"`, `"hover-snap"`, `"unconstrained-tap"`.

| Keyword | Descripcion |
|---|---|
| `tap` | El handle mas cercano salta a la posicion clickeada |
| `drag` | La barra connect es arrastrable (requiere 2 handles + `connect: true`) |
| `drag-fixed` | Como `drag`, pero la distancia entre handles se mantiene constante |
| `drag-all` | Arrastra todos los handles al mover el connect |
| `fixed` | Mantiene distancia fija entre handles |
| `snap` | Handle salta a posicion clickeada y se puede arrastrar inmediatamente |
| `hover` | Dispara evento `hover` al pasar el mouse |
| `unconstrained` | Los handles pueden cruzarse. `margin`/`limit` no disponibles |
| `smooth-steps` | Ignora steps durante arrastre, los aplica al soltar |
| `invert-connects` | Connects se invierten al cruzar handles. Requiere `unconstrained` + `connect`, solo 2 handles |
| `none` | Deshabilita todo excepto movimiento basico |

## Eventos

| Evento | Payload | Descripcion |
|---|---|---|
| `update:modelValue` | `value` | Emitido en cada cambio de valor (para v-model). Emite valores numericos crudos (unencoded) |
| `update` | `{ values, handle, unencoded, tap, positions }` | Cada cambio de valor |
| `start` | `{ values, handle, unencoded, tap, positions }` | Al comenzar a arrastrar un handle |
| `slide` | `{ values, handle, unencoded, tap, positions }` | Mientras se arrastra un handle |
| `drag` | `{ values, handle, unencoded, tap, positions }` | Mientras se arrastra la barra connect |
| `change` | `{ values, handle, unencoded, tap, positions }` | Al soltar un handle (solo interaccion de usuario) |
| `set` | `{ values, handle, unencoded, tap, positions }` | Al terminar un cambio (usuario o programatico) |
| `end` | `{ values, handle, unencoded, tap, positions }` | Al soltar un handle |
| `hover` | `value` | Al pasar el mouse (requiere `behaviour` con `hover`). Payload es un numero, no un objeto |

**Orden de disparo:** `start` > `slide` > `drag` > `update` > `change` > `set` > `end`

**Nota:** `change` NO se dispara con `.set()` programatico. Solo `update` y `set` se disparan en cambios programaticos.

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
| `getOptions()` | Retorna las opciones del slider |
| `on(event, callback)` | Registra un evento de noUiSlider |
| `off(event)` | Remueve un evento |
| `setDisable(handleNumber?)` | Deshabilita slider o un handle especifico |
| `setEnable(handleNumber?)` | Habilita slider o un handle especifico |
| `updateOptions(options, fireSetEvent?)` | Actualiza opciones del slider (solo opciones actualizables) |
| `setPips(config)` | Crea o actualiza pips |
| `removePips()` | Remueve pips |
| `removeTooltips()` | Remueve tooltips |
| `destroy()` | Destruye el slider |

**Opciones actualizables via `updateOptions`:** `margin`, `padding`, `limit`, `step`, `range`, `pips`, `tooltips`, `animate`, `snap`.

Para cambiar `orientation`, `direction`, `behaviour`, `format`, `connect` o `animationDuration`, el componente destruye y recrea el slider automaticamente al cambiar el prop.

## Notas importantes

1. **`get()` retorna strings** — Usar `get(true)` para obtener numeros.
2. **Sliders verticales necesitan altura CSS explicita.**
3. **`connect` con 2+ handles** — Usar array de booleans con longitud = handles + 1. `'lower'`/`'upper'` solo funciona con 1 handle.
4. **`reset()` solo resetea valores** — No deshace cambios hechos via `updateOptions`.
5. **v-model emite valores numericos** — Aunque se use `format`, `update:modelValue` siempre emite los valores sin formatear para evitar conflictos.

## Documentacion

Documentacion con ejemplos y detalles de configuracion: [nouislider-vue.singlecode.net](https://nouislider-vue.singlecode.net/guide/installation)

Documentacion de noUiSlider (plugin base): [refreshless.com/nouislider](https://refreshless.com/nouislider/)

## Licencia

Distribuido bajo la licencia MIT. Vea `LICENSE.md` para mas informacion.
