import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    resolve: {
        alias: {
            '~': resolve(__dirname, 'node_modules'),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/index.js'),
            name: 'noUiSliderVue',
            fileName: 'noUiSliderVue',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue(),
    ],
})
