import type { Options } from "prettier"
import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import { toKebabCase } from "@yamada-ui/utils"
import { readdir, readFile, unlink, writeFile } from "fs/promises"
import path from "path"
import { format, resolveConfig } from "prettier"

const ENTRY_PATH = "node_modules/lucide-react/dist/esm/icons/index.js"
const DIST_PATH = "src/icons"

const prettier = async (content: string, options?: Options) => {
  const prettierConfig = await resolveConfig(
    path.join(process.cwd(), ".prettierrc"),
  )

  try {
    return format(content, {
      ...prettierConfig,
      parser: "typescript",
      ...options,
    })
  } catch {
    return content
  }
}

const clearIcons = async () => {
  const fileNames = await readdir(DIST_PATH)

  await Promise.all(
    fileNames.map(async (fileName) =>
      unlink(path.resolve(DIST_PATH, fileName)),
    ),
  )
}

const getIconNames = async () => {
  const data = await readFile(path.resolve(ENTRY_PATH), "utf-8")

  const ast = parse(data, {
    plugins: ["jsx"],
    sourceType: "module",
  })

  const iconNames: string[] = []

  traverse(ast, {
    ExportNamedDeclaration: ({ node }) => {
      node.specifiers.forEach(({ exported }) => {
        if ("name" in exported) iconNames.push(exported.name)
      })
    },
  })

  return iconNames
}

const createIcons = async (iconNames: string[]) =>
  Promise.all(
    iconNames.map(async (iconName) => {
      const fileName = toKebabCase(iconName)
      let data = [
        `import type { LucideIconProps } from "../lucide-icon"`,
        `import { forwardRef } from "@yamada-ui/core"`,
        `import { ${iconName} as ${iconName}Icon } from "lucide-react"`,
        `import { LucideIcon } from "../lucide-icon"`,
        ``,
        `/**`,
        ` * \`${iconName}\` is [Lucide](https://lucide.dev) SVG icon component.`,
        ` *`,
        ` * @see Docs https://yamada-ui.com/components/media-and-icons/lucide`,
        ` */`,
        `export const ${iconName} = forwardRef<LucideIconProps, "svg">((props, ref) => (`,
        `  <LucideIcon ref={ref} as={${iconName}Icon} {...props} />`,
        `))`,
      ].join("\n")

      data = await prettier(data)

      await writeFile(path.resolve(DIST_PATH, `${fileName}.tsx`), data)
    }),
  )

const createTypes = async (iconNames: string[]) => {
  const fileName = "index.types.tsx"
  let data = [
    `export type IconNames = ${iconNames.flatMap((iconName) => [`\"${iconName}\"`, `\"${iconName}Icon\"`]).join(" | ")}`,
  ].join("\n")

  data = await prettier(data)

  await writeFile(path.resolve(DIST_PATH, fileName), data)
}

const main = async () => {
  await clearIcons()

  const iconNames = await getIconNames()

  await createIcons(iconNames)
  await createTypes(iconNames)

  let chunks = iconNames.map((iconName) => {
    const fileName = toKebabCase(iconName)

    return `export { ${iconName}, ${iconName} as ${iconName}Icon } from "./${fileName}"`
  })

  let data = [`export type * from "./index.types"`, ...chunks].join("\n")

  data = await prettier(data)

  await writeFile(path.resolve(DIST_PATH, "index.ts"), data)
}

main()
