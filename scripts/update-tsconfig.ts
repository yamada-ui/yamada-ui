import { promises as fs } from 'fs'
import { findPackages } from 'find-packages'

const main = async () => {
  const packages = await findPackages('packages')

  await Promise.allSettled(
    packages.map(async ({ dir }) => {
      const data = {
        extends: '../../../tsconfig.json',
        include: ['src', 'index.ts'],
      }

      await fs.writeFile(`${dir}/tsconfig.json`, JSON.stringify(data, null, 2))
    }),
  )
}

main()
