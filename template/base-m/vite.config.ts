import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import pxToViewport from 'postcss-px-to-viewport'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const getPath = (path: string) => resolve(__dirname, path)

export default defineConfig({
  base: '/',
  css: {
    postcss: {
      plugins: [pxToViewport({ viewportWidth: 750 })]
    }
  },
  server: {
    port: 8888
  },
  plugins: [
    vue(),
    Components({
      dts: resolve(getPath('types'), 'components.d.ts')
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/],
      imports: ['vue', 'vue-router'],
      dts: resolve(getPath('types'), 'auto-imports.d.ts')
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons')]
    })
  ],
  resolve: {
    alias: {
      '@': getPath('src'),
      '#': getPath('types')
    },
    extensions: ['.mjs', '.cjs', '.js', '.ts']
  }
})
