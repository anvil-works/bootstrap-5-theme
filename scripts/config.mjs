import {sassPlugin} from 'esbuild-sass-plugin';

export default {
    entryPoints: ['js/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: "theme/assets/anvil-theme.js",
    logLevel: "info",
    jsx: "automatic",
    loader: { 
        '.js': 'jsx', 
        '.ts': 'tsx',
    },
    metafile: true,
    plugins: [sassPlugin({})]
}