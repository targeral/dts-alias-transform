import path from 'path';
import esbuild from 'esbuild';

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const entryDir = path.join(__dirname, '../src');
const outputDir = path.join(__dirname, '../dist');

esbuild.buildSync({
    entryPoints: [`${entryDir}/index.ts`],
    outfile: `${outputDir}/index.js`,
});
