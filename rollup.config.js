import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default [
    {
        input: 'input.ts',
        output: {
            format: 'cjs',
            file: 'output.js'
        },
        plugins: [
            nodeResolve({
                extensions: ['.ts', '.js']
            }),
            babel({
                babelrc: false,
                extensions: ['.ts', '.js'],
                presets: [
                    ['@babel/preset-typescript'],
                    // ['@babel/preset-env', {targets: {node: 'current'}}]
                ],
            })
        ]
    },
];
