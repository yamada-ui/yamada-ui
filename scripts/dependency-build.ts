import { execa, ExecaError } from "execa"
import { findPackages, Project } from "find-packages"

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

const symbol = Symbol(`symbol`)

const buildPackages = (packages: Project[]): Promise<void[]> => {
  const tasks = packages.map(({ dir, manifest }) => async () => {
    try {
      const start = process.hrtime.bigint()

      const { stdout } = await execa("pnpm", ["--silent", "build"], {
        cwd: dir,
      })

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log(`\n${stdout}`)

      console.log(`\nBuilt in ${duration}s: ${manifest.name} (${dir})`)
    } catch (e) {
      if (e instanceof ExecaError) {
        throw new Error(`\n${e.stdio}`)
      } else if (e instanceof Error) {
        throw e
      }
    }
  })

  return new Promise<void[]>((resolve, reject) => {
    const result: (void | symbol)[] = Array(tasks.length).fill(symbol)

    const entries = tasks.entries()

    const next = () => {
      const { done, value } = entries.next()

      if (done) {
        const isLast = !result.includes(symbol)

        if (isLast) resolve(result as void[])

        return
      }

      const [index, task] = value

      const onFulfilled = (x: void) => {
        result[index] = x
        next()
      }

      task().then(onFulfilled, reject)
    }

    Array(10).fill(0).forEach(next)
  })
}

const main = async () => {
  const start = process.hrtime.bigint()

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

  await buildPackages(dependPackages)

  console.log("\nSuccessfully built all dependent packages.")

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log(`\nDone in ${duration}s\n`)
}

main()
