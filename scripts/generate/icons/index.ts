import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import { interopDefault, toKebabCase } from "@yamada-ui/utils"
import { execa } from "execa"
import { readdir, readFile, unlink, writeFile } from "fs/promises"
import ora from "ora"
import path from "path"
import c from "picocolors"
import { prettier } from "../../utils"

const resolvedTraverse = interopDefault(traverse)

const ENTRY_PATH = path.join(
  process.cwd(),
  "packages/react/node_modules/lucide-react/dist/esm/icons/index.js",
)
const DIST_PATH = path.join(
  process.cwd(),
  "packages/react/src/components/icon/icons",
)

async function clearIcons() {
  const fileNames = await readdir(DIST_PATH)

  await Promise.all(
    fileNames.map(async (fileName) =>
      unlink(path.resolve(DIST_PATH, fileName)),
    ),
  )
}

async function getIconNames() {
  const data = await readFile(path.resolve(ENTRY_PATH), "utf-8")

  const ast = parse(data, {
    plugins: ["jsx"],
    sourceType: "module",
  })

  const iconNames: string[] = []

  resolvedTraverse(ast, {
    ExportNamedDeclaration: ({ node }) => {
      node.specifiers.forEach(({ exported }) => {
        if ("name" in exported) iconNames.push(exported.name)
      })
    },
  })

  return iconNames
}

async function createIcons(iconNames: string[]) {
  return Promise.all(
    iconNames.map(async (iconName) => {
      const fileName = toKebabCase(iconName)
      let data = [
        `"use client"`,
        ``,
        `import { ${iconName} } from "lucide-react"`,
        `import { component, Icon } from "../icon"`,
        ``,
        `/**`,
        ` * \`${iconName}Icon\` is [Lucide](https://lucide.dev) SVG icon component.`,
        ` *`,
        ` * @see https://yamada-ui.com/components/icon`,
        ` */`,
        `export const ${iconName}Icon = component(Icon)({ as: ${iconName} })`,
        ``,
      ].join("\n")

      data = await prettier(data)

      await writeFile(path.resolve(DIST_PATH, `${fileName}-icon.tsx`), data)
    }),
  )
}

async function createTypes(iconNames: string[]) {
  const fileName = "index.types.ts"
  let data = [
    `export type IconNames = ${iconNames.map((iconName) => `\"${iconName}Icon\"`).join(" | ")}`,
  ].join("\n")

  data = await prettier(data)

  await writeFile(path.resolve(DIST_PATH, fileName), data)
}

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Clearing icons`)

  await clearIcons()

  spinner.succeed(`Cleared icons`)

  spinner.start(`Getting icon names`)

  const iconNames = await getIconNames()

  spinner.succeed(`Got icon names`)

  spinner.start(`Creating icons`)

  await createIcons(iconNames)
  await createTypes(iconNames)

  let chunks = iconNames.map((iconName) => {
    const fileName = toKebabCase(iconName)

    return `export { ${iconName}Icon } from "./${fileName}-icon"`
  })

  let data = [`export type * from "./index.types"`, ...chunks].join("\n")

  data = await prettier(data)

  await writeFile(path.resolve(DIST_PATH, "index.ts"), data)

  spinner.succeed(`Created icons`)

  spinner.start(`Fixing eslint`)

  await execa("eslint", [
    "packages/react/src/components/icon/icons/index.ts",
    "packages/react/src/components/icon/icons/index.types.ts",
    "--fix",
  ])

  spinner.succeed(`Fixed eslint`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
