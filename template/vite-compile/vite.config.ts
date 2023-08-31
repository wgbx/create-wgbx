import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    watch: {
      include: 'src/**'
    },
    lib: {
      entry: resolve('packages', 'index.ts'),
      name: 'packages-name',
      fileName: 'packages-name'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue(), dts(), libCss()]
})
