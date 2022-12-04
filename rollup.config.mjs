import vue from 'rollup-plugin-vue'
import typeScript from 'rollup-plugin-typescript2'
import node from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import ts from 'typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
    {
        input: 'src/index.ts',
        external: ['vue'],
        output: [
            {
                format: 'esm',
                file: 'dist/index.mjs'
            },
            {
                format: 'cjs',
                file: 'dist/index.js'
            }
        ],
        plugins: [
            node({
                extensions: ['.vue', '.ts']
            }),
            typeScript({
                typescript: ts
            }),
            vue({
                template: {
                    isProduction: true,
                    compilerOptions: {
                        whitespace: 'condense'
                    }
                }
            }),
            babel({
                babelHelpers: 'bundled'
            }),
            cjs(),
            peerDepsExternal(),
        ]
    }
]