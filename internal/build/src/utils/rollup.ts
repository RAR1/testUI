import { epPackage, getPackageDependencies } from '@rar-ui/build-utils';
import type { RollupBuild, OutputOptions } from 'rollup';

export const generateExternal = async (options: { full: boolean }) => {
    const { dependencies, peerDependencies } = getPackageDependencies(epPackage);

    return (id: string) => {
        const packages: string[] = [...peerDependencies]

        if(!options.full) {
            packages.push('@vue', ...dependencies)
        }
        return [...new Set(packages)].some(
            (pkg) => id === pkg || id.startsWith(`${pkg}/`)
        )
    }
}
export function writeBundles(bundle: RollupBuild, options: OutputOptions[] ) {
    return Promise.all(options.map((option) => bundle.write(option)))
}