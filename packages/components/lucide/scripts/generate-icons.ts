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
        `import type { IconProps } from "@yamada-ui/icon"`,
        `import { forwardRef } from "@yamada-ui/core"`,
        `import { Icon } from "@yamada-ui/icon"`,
        `import { cx } from "@yamada-ui/utils"`,
        `import { ${iconName} as Original${iconName} } from "lucide-react"`,
        ``,
        `/**`,
        ` * \`${iconName}Icon\` is [Lucide](https://lucide.dev) SVG icon component.`,
        ` *`,
        ` * @see Docs https://yamada-ui.com/components/media-and-icons/lucide`,
        ` */`,
        `export const ${iconName}Icon = forwardRef<IconProps, "svg">(({className, ...rest}, ref) => (`,
        `  <Icon ref={ref} as={Original${iconName}} className={cx("ui-lucide-icon", className)} {...rest} />`,
        `))`,
        ``,
        `/**`,
        ` * \`${iconName}\` is [Lucide](https://lucide.dev) SVG icon component.`,
        ` *`,
        ` * @see Docs https://yamada-ui.com/components/media-and-icons/lucide`,
        ` *`,
        ` * @deprecated Use \`${iconName}Icon\` instead.`,
        ` */`,
        `export const ${iconName} = ${iconName}Icon`,
        ``,
      ].join("\n")

      data = await prettier(data)

      await writeFile(path.resolve(DIST_PATH, `${fileName}.tsx`), data)
    }),
  )

const createTypes = async (iconNames: string[]) => {
  const fileName = "index.types.ts"
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

    return `export { ${iconName}, ${iconName}Icon } from "./${fileName}"`
  })

  let data = [`export type * from "./index.types"`, ...chunks].join("\n")

  data = await prettier(data)

  await writeFile(path.resolve(DIST_PATH, "index.ts"), data)
}

main()
