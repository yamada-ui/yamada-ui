import path from "path"
import { glob } from "glob"

export const themePath = [
  "node_modules",
  "@yamada-ui",
  "core",
  "dist",
  "generated-theme.types.d.ts",
]

const resolveThemePath = async (): Promise<string | undefined> => {
  const paths = [
    path.join("node_modules", ".pnpm", "@yamada-ui+core@*", ...themePath),
    path.join(...themePath),
  ]

  const triedPaths = await Promise.all(
    paths.map(async (possiblePath) => {
      const paths = await glob(possiblePath)

      if (paths.length) return paths[0]

      return ""
    }),
  )

  const resolvedPath = triedPaths.find(Boolean)

  if (!resolvedPath) return

  return path.resolve(process.cwd(), resolvedPath)
}

export const resolveOutputPath = async (outPath?: string): Promise<string> => {
  if (outPath) return path.resolve(process.cwd(), outPath)

  const themePath = await resolveThemePath()

  if (!themePath)
    throw new Error(
      "Could not find @yamada-ui/core in node_modules. Please provide `--out` parameter.",
    )

  return themePath
}
