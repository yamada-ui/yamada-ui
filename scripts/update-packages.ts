import { writeFile } from "fs/promises"
import { findPackages } from "find-packages"

const main = async () => {
  const packages = await findPackages("packages/components")

  await Promise.allSettled(
    packages.map(async ({ dir, manifest }) => {
      const data = {
        ...manifest,
        // scripts: {
        //   ...manifest.scripts,
        // },
        // dependencies: {
        //   ...manifest.dependencies,
        // },
        // devDependencies: {
        //   ...manifest.devDependencies,
        // },
        // peerDependencies: {
        //   ...manifest.peerDependencies,
        // },
      }

      await writeFile(`${dir}/package.json`, JSON.stringify(data, null, 2))
    }),
  )
}

main()
