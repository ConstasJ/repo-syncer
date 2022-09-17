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
        input: 'src/cmd.ts',
        output: {
            file: 'lib/cmd.js',
            format: 'commonjs'
        },
        plugins: [
            ts({
                tsconfig: 'tsconfig.json'
            })
        ]
    }
]);
