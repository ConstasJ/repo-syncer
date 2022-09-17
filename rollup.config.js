import { defineConfig } from 'rollup';
import ts from 'rollup-plugin-ts';

export default defineConfig([
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'lib/index.js',
                format: 'commonjs'
            }
        ],
        plugins: [
            ts({
                tsconfig: 'tsconfig.json'
            })
        ]
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'lib/index.mjs',
            format: 'esm'
        },
        plugins: [
            ts({
                tsconfig: {
                    fileName: 'tsconfig.json',
                    hook: (resolvedConfig) => ({ ...resolvedConfig, declaration: false })
                }
            })
        ]
    }
]);
