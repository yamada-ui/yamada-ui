import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

export default [
  {
    input: './index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      commonjs({
        include: ['node_modules/**'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__/**'],
      }),
    ],
    external: ['react', 'react-dom', '@emotion/styled', '@emotion/react'],
  },
  {
    input: 'dist/cjs/types/index.d.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'cjs' }],
    plugins: [dts()],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
]
