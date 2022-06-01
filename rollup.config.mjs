import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import fs from 'fs';

export default {
    input: 'src/main.js',
    output: {
        file: 'build/RemoteServer.plugin.js',
        format: 'cjs',
        banner: fs.readFileSync('src/meta.js')
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        json()
    ]
};
