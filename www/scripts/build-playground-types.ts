import { exec } from "child_process"
import { cp, mkdir, readdir, readFile, rm, writeFile } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
import { promisify } from "util"
import packageJson from "../../packages/react/package.json" with { type: "json" }

const execAsync = promisify(exec)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const TARGET_LIBS = [
  { name: "react", pkg: "@types/react" },
  { name: "react-dom", pkg: "@types/react-dom" },
  { name: "@yamada-ui/react", pkg: "@yamada-ui/react" },
] as const

const NODE_MODULES_BASE = join(__dirname, "../node_modules")
const TYPES_BASE = join(__dirname, "../public/playground/types")
const OUTPUT_PATH = join(__dirname, "../public/playground/node_modules.json")

async function runTsdown(): Promise<void> {
  console.log("[playground-types] Running tsdown...")

  const { stderr, stdout } = await execAsync("tsdown", {
    cwd: join(__dirname, ".."),
    maxBuffer: 10 * 1024 * 1024,
  })

  if (stdout) console.log(stdout)
  if (stderr) console.error(stderr)
  console.log("[playground-types] ✓ tsdown completed")
}

async function copyNodeModulesTypes(): Promise<void> {
  console.log("[playground-types] Copying type definitions...")

  await mkdir(TYPES_BASE, { recursive: true })

  const typesPackages = TARGET_LIBS.filter(({ pkg }) =>
    pkg.startsWith("@types/"),
  )

  for (const { pkg } of typesPackages) {
    const source = join(NODE_MODULES_BASE, pkg)
    const dest = join(TYPES_BASE, pkg)

    await rm(dest, { force: true, recursive: true })

    await cp(source, dest, {
      dereference: true,
      filter: (src) => {
        const parts = src.replace(source, "").split("/").filter(Boolean)
        return (
          !parts.includes("ts3.4") &&
          !parts.includes("ts5.0") &&
          !parts.slice(1).includes("node_modules")
        )
      },
      force: true,
      recursive: true,
    })

    console.log(`[playground-types] ✓ Copied ${pkg}`)
  }
}

async function collectTypeFiles(
  dir: string,
  baseDir = dir,
): Promise<{ [key: string]: string }> {
  const files: { [key: string]: string } = {}

  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    const relativePath = fullPath.replace(baseDir + "/", "")

    if (entry.isDirectory()) {
      if (
        entry.name === "ts3.4" ||
        entry.name === "ts5.0" ||
        entry.name === "node_modules"
      ) {
        continue
      }

      const subFiles = await collectTypeFiles(fullPath, baseDir)
      Object.assign(files, subFiles)
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".d.ts") || entry.name.endsWith(".d.mts"))
    ) {
      let content = await readFile(fullPath, "utf-8")

      // Replace .mjs extensions with .d.mts in import/export statements
      content = content.replace(/from\s+["'](.*)\.mjs["']/g, 'from "$1.d.mts"')
      content = content.replace(
        /import\s+["'](.*)\.mjs["']/g,
        'import "$1.d.mts"',
      )
      content = content.replace(
        /export\s+\*\s+from\s+["'](.*)\.mjs["']/g,
        'export * from "$1.d.mts"',
      )

      files[relativePath] = content
    }
  }

  return files
}

async function readPackageJson(pkg: string): Promise<null | string> {
  const paths = [
    join(TYPES_BASE, pkg, "package.json"),
    join(NODE_MODULES_BASE, pkg, "package.json"),
  ]

  for (const path of paths) {
    try {
      return await readFile(path, "utf-8")
    } catch {
      continue
    }
  }

  return null
}

async function bundleTypesToJson(): Promise<void> {
  console.log("[playground-types] Bundling to JSON...")

  const nodeModules: { [key: string]: { [key: string]: string } } = {}

  for (const { name, pkg } of TARGET_LIBS) {
    const pkgPath = join(TYPES_BASE, pkg)

    try {
      const files = await collectTypeFiles(pkgPath)

      let packageJson = await readPackageJson(pkg)

      // Add types field to package.json for TypeScript resolution
      if (packageJson) {
        const pkgData = JSON.parse(packageJson)
        if (!pkgData.types && !pkgData.typings) {
          pkgData.types = "./index.d.mts"
        }
        files["package.json"] = JSON.stringify(pkgData, null, 2)
      }

      if (Object.keys(files).length > 0) {
        nodeModules[name] = files
        console.log(
          `[playground-types] ✓ Bundled ${Object.keys(files).length} files from ${pkg}`,
        )
      }
    } catch {
      console.warn(`[playground-types] ⚠ Could not collect files from ${pkg}`)
    }
  }

  await writeFile(OUTPUT_PATH, JSON.stringify(nodeModules, null, 2), "utf-8")
  console.log(`[playground-types] ✓ Saved to ${OUTPUT_PATH}`)
}

async function updateRuntimeHtml(): Promise<void> {
  console.log(
    "[playground-types] Updating runtime.html with package versions...",
  )

  const reactVersion = packageJson.dependencies.react.replace(/^[\^~]/, "")
  const reactDomVersion = packageJson.dependencies["react-dom"].replace(
    /^[\^~]/,
    "",
  )

  const runtimeHtmlPath = join(__dirname, "../public/playground/runtime.html")
  let runtimeHtml = await readFile(runtimeHtmlPath, "utf-8")

  const importmapRegex = /<script type="importmap">([\s\S]*?)<\/script>/
  const newImportmap = `<script type="importmap">
      {
        "imports": {
          "react": "https://esm.sh/react@${reactVersion}",
          "react/jsx-runtime": "https://esm.sh/react@${reactVersion}/jsx-runtime",
          "react-dom": "https://esm.sh/react-dom@${reactDomVersion}",
          "react-dom/client": "https://esm.sh/react-dom@${reactDomVersion}/client",
          "@yamada-ui/react": "/vendor/@yamada-ui/react/index.mjs"
        }
      }
    </script>`

  runtimeHtml = runtimeHtml.replace(importmapRegex, newImportmap)

  await writeFile(runtimeHtmlPath, runtimeHtml, "utf-8")
  console.log(
    `[playground-types] ✓ Updated runtime.html with React ${reactVersion}`,
  )
}

async function main(): Promise<void> {
  try {
    await updateRuntimeHtml()
    await runTsdown()
    await copyNodeModulesTypes()
    await bundleTypesToJson()
    console.log("[playground-types] ✅ Done!")
  } catch (error) {
    console.error("[playground-types] ❌ Failed:", error)
    process.exit(1)
  }
}

main()
