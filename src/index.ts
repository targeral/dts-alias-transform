import glob from 'glob';

export const getDtsFiles = (dtsFilesDir: string) => {
    const globPattern = `${dtsFilesDir}/**/*.d.ts`;
    return glob.sync(globPattern, { absolute: true });
};

export const runTransformTask = () => {
    const baseUrl = process.cwd();
    // const aliasPath =
}
