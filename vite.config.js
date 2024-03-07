import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { createVuePlugin } from 'vite-plugin-vue2'
// import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
        react(),
        // createVuePlugin(),
        // vueJsx(),
      ],
})
