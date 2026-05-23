import type { Detection } from "../resolve"
import type { FormatOptions, Formatter } from "./interfaces"
import { toArray } from "@yamada-ui/utils"
import { existsSync } from "node:fs"
import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { format as prettier, resolveConfig, resolveConfigFile } from "prettier"

async function detect(cwd: string): Promise<Detection> {
  try {
    const configFile = await resolveConfigFile(path.join(cwd, ".prettierrc"))

    if (configFile) return "config"
  } catch {}

  const packageJsonPath = path.join(cwd, "package.json")

  if (existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(await readFile(packageJsonPath, "utf-8"))

      if (
        packageJson.dependencies?.prettier ||
        packageJson.devDependencies?.prettier
      )
        return "dependency"
    } catch {}
  }

  return false
}

async function formatText(
  content: string,
  {
    configPath,
    cwd,
    enabled = true,
    parser = "typescript",
  }: FormatOptions = {},
) {
  if (!enabled) return content

  try {
    if (!configPath && cwd) {
      configPath = await resolveConfigFile(path.join(cwd, ".prettierrc"))
    }

    const config = configPath ? await resolveConfig(configPath) : {}

    return await prettier(content, { ...config, parser })
  } catch {
    return content
  }
}

async function formatFiles(
  patterns: string | string[],
  { enabled = true, ...options }: FormatOptions = {},
) {
  if (!enabled) return

  patterns = toArray(patterns)

  await Promise.all(
    patterns.map(async (pattern) => {
      let content = await readFile(pattern, "utf-8")

      content = await formatText(content, options)

      await writeFile(pattern, content, "utf-8")
    }),
  )
}

export const prettierFormatter: Formatter = {
  name: "prettier",
  detect,
  formatFiles,
  formatText,
}
