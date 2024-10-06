import { findPackages } from "find-packages"
import { writeFile } from "fs/promises"

const main = async () => {
  const packages = await findPackages("packages")

  await Promise.allSettled(
    packages.map(async ({ dir }) => {
      const data = {
        extends: "../../../tsconfig.json",
        include: ["src", "tests", "index.ts"],
      }

      await writeFile(`${dir}/tsconfig.json`, JSON.stringify(data, null, 2))
    }),
  )
}

main()
