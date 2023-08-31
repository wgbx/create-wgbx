import NodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

const name = 'packagesName'

const globals = {}

export default {
  input: './packages/index.ts',
  output: [
    {
      name,
      file: `dist/${name}.cjs`,
      format: 'cjs',
      globals,
      plugins: [terser()]
    },
    {
      name,
      file: `dist/${name}.mjs`,
      format: 'es',
      globals,
      plugins: [terser()]
    }
  ],
  plugins: [
    NodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    typescript({ outDir: 'dist/' })
  ],
}
