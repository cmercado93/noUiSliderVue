import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    resolve: {
        alias: {
            '~': resolve(__dirname, 'node_modules'),
            '-': resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/app.js'),
            name: 'noUiSliderVue',
            fileName: 'nouislider-vue3',
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') {
                        return 'nouislider-vue3.css';
                    }

                    return assetInfo.name;
                },
            },
        },
    },
    plugins: [
        vue(),
    ],
})
