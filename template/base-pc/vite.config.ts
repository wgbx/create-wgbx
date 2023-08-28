import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const getPath = (path: string) => resolve(__dirname, path)

export default defineConfig({
  base: '/',
  server: {
    port: 8888
  },
  plugins: [
    vue(),
    DefineOptions(),
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
