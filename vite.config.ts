import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macros from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        esbuildOptions: {
            target: 'es2020'
        }
    },
    plugins: [
        react({
            babel: {
                plugins: [
                    'babel-plugin-macros',
                    'babel-plugin-styled-components'
                ]
            }
        }),
        macros()
    ],
})
