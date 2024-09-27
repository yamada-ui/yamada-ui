import { execa, ExecaError } from "execa"
import { findPackages } from "find-packages"

const DEFAULT_COMMIT = "HEAD^"

const arg = process.argv[2] ?? ""

const getCommit = () => {
  if (arg.includes("--commit=")) {
    return arg.replace("--commit=", "") || DEFAULT_COMMIT
  } else {
    return DEFAULT_COMMIT
  }
}

const getDiffPackageNames = (diff: string[]) => {
  const packageNames = diff.map((path) => {
    const [name] = path
      .replace(/^packages\//, "")
      .replace(/^components\//, "")
      .replace(/^hooks\//, "")
      .split("/")

    return `@yamada-ui/${name}`
  })

  return [...new Set(packageNames)]
}

const main = async () => {
  const packages = await findPackages("packages")

  const commit = getCommit()

  const { stdout } = await execa("git", ["diff", "--name-only", commit, "HEAD"])

  const diff = stdout.split("\n").filter((path) => path.startsWith("packages/"))

  const diffPackageNames = getDiffPackageNames(diff)

  if (!diffPackageNames.length) {
    console.log("No packages updated.")

    return
  }

  console.log("Updated packages")

  diffPackageNames.forEach((packageName) => {
    console.log(`  - ${packageName}`)
  })

  console.log("\nDepend packages")

  const dependPackages = packages.filter(({ manifest }) => {
    const dependencies = Object.keys(manifest.dependencies ?? {})
    const devDependencies = Object.keys(manifest.devDependencies ?? {})
    const mergedDependencies = [
      ...new Set([...dependencies, ...devDependencies]),
    ]

    const isSome = diffPackageNames.includes(manifest.name ?? "")
    const isDepend = mergedDependencies.some((packageName) =>
      diffPackageNames.includes(packageName),
    )

    if (isDepend) console.log(`  - ${manifest.name}`)

    return isSome || isDepend
  })

  if (diffPackageNames.length === dependPackages.length)
    console.log("  - No dependent packages found.")

  await Promise.all(
    dependPackages.map(async ({ dir, manifest }) => {
      try {
        console.log(`\nBuilding ${manifest.name}(${dir})`)

        const { stdout } = await execa("pnpm", ["build"], { cwd: dir })

        console.log(stdout)
      } catch (e) {
        if (e instanceof ExecaError) {
          throw new Error(e.stderr)
        } else if (e instanceof Error) {
          throw e
        }
      }
    }),
  )

  console.log("Successfully built all dependent packages.")
}

main()
