import type { JSDocTagInfo, SourceFile, Symbol, TypeChecker } from "typescript"
import { isEmptyObject, isString } from "@yamada-ui/utils"
import { format, writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { readdir, readFile } from "fs/promises"
import ora from "ora"
import path from "path"
import c from "picocolors"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
  parseJsonConfigFileContent,
  readConfigFile,
  sys,
} from "typescript"

interface ExportedType {
  name: string
  as?: string
  namespace?: string
}

interface Prop {
  type: string
  description: string
  required: boolean
  defaultValue?: string
  deprecated?: string
  see?: string
}

interface Props {
  [key: string]: Prop
}

const CONFIG_PATH = path.join(process.cwd(), "tsconfig.json")
const ENTRY_PATH = path.join(
  process.cwd(),
  "packages",
  "react",
  "src",
  "components",
)
const EXCLUDED_MODULES = [
  "node_modules",
  path.join(process.cwd(), "packages", "react", "src", "core"),
]

const IGNORED_TYPES: string[] = ["^(?!.*Props$)", "^Use[A-Z]"]
const INCLUDED_PROPS: string[] = [
  "as",
  "asChild",
  "css",
  "colorScheme",
  "size",
  "variant",
]
const IGNORED_PROPS: string[] = []

function getSourceFileName(symbol: Symbol) {
  const declarations = symbol.getDeclarations()

  if (!declarations || declarations.length === 0) return undefined

  const sourceFile = declarations[0]?.getSourceFile()

  return sourceFile ? sourceFile.fileName : undefined
}

function shouldIgnoreTypeName(name: string) {
  return IGNORED_TYPES.some((pattern) => new RegExp(pattern).test(name))
}

function shouldIgnoreProperty(property: Symbol) {
  const included = INCLUDED_PROPS.includes(property.getName())

  if (included) return false

  const sourceFileName = getSourceFileName(property)

  if (!sourceFileName) return true

  const external = new RegExp(EXCLUDED_MODULES.join("|")).test(sourceFileName)
  const excluded = IGNORED_PROPS.includes(property.getName())

  return external || excluded
}

async function extractTypeExports(path: string, prev?: Partial<ExportedType>) {
  const code = await readFile(path, "utf-8")
  const exportedTypes: ExportedType[] = []

  let regexp = /export type\s*{([^}]+)}/g
  let match = regexp.exec(code)

  while (match != null) {
    const rows = match[1]?.split(",").map((v) => v.trim()) ?? []

    rows.forEach((row) => {
      if (!row) return

      const [name, , as] = row.split(" ")

      if (name) exportedTypes.push({ ...prev, as, name })
    })

    match = regexp.exec(code)
  }

  regexp = /export \* as (\w+) from "\.\/(\w+(?:-namespace)?)"/g
  match = regexp.exec(code)

  while (match != null) {
    const [, namespace, fileName] = match

    if (namespace && fileName?.endsWith("namespace")) {
      const namespacePath =
        path.split("/").slice(0, -1).join("/") + "/" + `${fileName}.ts`

      exportedTypes.push(
        ...(await extractTypeExports(namespacePath, {
          namespace: prev?.namespace
            ? `${prev.namespace}.${namespace}`
            : namespace,
        })),
      )
    }

    match = regexp.exec(code)
  }

  return exportedTypes
}

async function formatType(type: string) {
  try {
    const prefix = "type ONLY_FOR_FORMAT = "

    const result = await format(prefix + type, {
      semi: false,
    })

    return result.replace(prefix, "").trim()
  } catch {
    return type
  }
}

async function formatDescription(description: string) {
  try {
    const result = await format(description, {
      parser: "markdown",
    })

    return result.replace(/\n$/, "")
  } catch {
    return description
  }
}

function isPrivate(tags: JSDocTagInfo[]) {
  return !!tags.find(({ name }) => name === "private")
}

function getDefaultValue(tags: JSDocTagInfo[]) {
  const value = tags
    .find(({ name }) => name === "default")
    ?.text?.map(({ text }) => text)
    .join("\n")

  if (!value) return

  return value.replace(/^'(.*)'$/, '"$1"')
}

function getDeprecated(tags: JSDocTagInfo[]) {
  return tags
    .find(({ name }) => name === "deprecated")
    ?.text?.map(({ text }) => text)
    .join("\n")
}

function getSee(tags: JSDocTagInfo[]) {
  return tags.find(({ name }) => name === "see")?.text?.at(-1)?.text
}

function getDescription(typeChecker: TypeChecker) {
  return async function (property: Symbol) {
    const description = property
      .getDocumentationComment(typeChecker)
      .map((comment) => comment.text)
      .join("\n")

    return await formatDescription(description)
  }
}

function getType(sourceFile: SourceFile, typeChecker: TypeChecker) {
  return async function (property: Symbol, typeName: string) {
    const typeOfSymbol = typeChecker.getTypeOfSymbolAtLocation(
      property,
      sourceFile,
    )
    const nonNullableType = typeOfSymbol.getNonNullableType()
    const type = await formatType(typeChecker.typeToString(nonNullableType))
    const required = nonNullableType === typeOfSymbol && typeName !== "any"

    return { type, required }
  }
}

function sortByRequiredProps(props: Props) {
  return Object.fromEntries(
    Object.entries(props)
      .sort(([a], [b]) => a.localeCompare(b))
      .sort(([aName, aProps], [bName, bProps]) => {
        const aIndex = INCLUDED_PROPS.indexOf(aName)
        const bIndex = INCLUDED_PROPS.indexOf(bName)

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex

        if (aIndex !== -1) return -1
        if (bIndex !== -1) return 1

        const aRequired = aProps.required
        const bRequired = bProps.required

        return aRequired === bRequired ? 0 : aRequired ? -1 : 1
      }),
  )
}

function extractPropsOfTypeName(
  sourceFile: SourceFile,
  typeChecker: TypeChecker,
) {
  return async function (name: string) {
    const regexp = new RegExp(`^${name}$`)
    const statement = sourceFile.statements.find(
      (statement) =>
        (isInterfaceDeclaration(statement) ||
          isTypeAliasDeclaration(statement)) &&
        regexp.test(statement.name.getText()),
    )

    const props: Props = {}

    if (!statement) return props

    const type = typeChecker.getTypeAtLocation(statement)
    const typeName = (statement as any).name.getText()

    for (const property of type.getProperties()) {
      if (shouldIgnoreProperty(property)) continue

      const tags = property.getJsDocTags()

      if (isPrivate(tags)) continue

      const see = getSee(tags)
      const defaultValue = getDefaultValue(tags)
      const deprecated = getDeprecated(tags)
      const prop = property.getName()
      const description = await getDescription(typeChecker)(property)
      const { type, required } = await getType(sourceFile, typeChecker)(
        property,
        typeName,
      )

      props[prop] = {
        type,
        defaultValue,
        deprecated,
        description,
        required,
        see,
      }
    }

    return sortByRequiredProps(props)
  }
}

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start("Getting tsconfig")

  const { config } = readConfigFile(CONFIG_PATH, sys.readFile)
  const { fileNames, options } = parseJsonConfigFileContent(
    config,
    sys,
    path.dirname(CONFIG_PATH),
  )
  const { getSourceFile, getTypeChecker } = createProgram(fileNames, options)
  const dirents = await readdir(ENTRY_PATH, { withFileTypes: true })

  spinner.succeed("Got tsconfig")

  spinner.start("Generating props types")

  const targets = process.argv.slice(2)

  await Promise.all(
    dirents.map(async (dirent) => {
      if (!dirent.isDirectory()) return

      if (targets.length && !targets.includes(dirent.name)) return

      const dirPath = path.join(dirent.parentPath, dirent.name)
      const relativePath = dirPath.replace(process.cwd() + "/", "")
      const filePaths = fileNames.filter((fileName) =>
        fileName.startsWith(dirPath + "/"),
      )
      const indexPath = path.join(dirPath, "index.ts")
      const exportedTypes = await extractTypeExports(indexPath)

      const data: { [key: string]: Props | { [key: string]: Props } } = {}

      await Promise.all(
        exportedTypes.map(async ({ as, name, namespace }) => {
          if (shouldIgnoreTypeName(name)) {
            spinner.info(
              `Omitted type: ${c.yellow(name)} (${path.join(relativePath, "index.ts")})`,
            )

            spinner.start("Generating props types")
          } else {
            await Promise.all(
              filePaths.map(async (filePath) => {
                const sourceFile = getSourceFile(filePath)

                if (!sourceFile) return

                const componentName = (as ?? name).replace(/Props$/, "")

                if (!componentName) return

                const props = await extractPropsOfTypeName(
                  sourceFile,
                  getTypeChecker(),
                )(name)

                Object.entries(props).forEach(([prop, { description }]) => {
                  if (isString(description) && !description)
                    spinner.fail(
                      `Empty description: ${c.yellow(name)} ${c.red(prop)} (${path.join(relativePath, "index.ts")})`,
                    )
                })

                if (isEmptyObject(props)) return

                if (namespace) {
                  data[namespace] ??= {}
                  data[namespace][componentName] = props
                } else {
                  data[componentName] = props
                }
              }),
            )
          }
        }),
      )

      if (isEmptyObject(data)) {
        spinner.info(
          `Empty props: ${c.yellow(dirent.name)} (${path.join(relativePath, "index.ts")})`,
        )

        spinner.start("Generating props types")
      } else {
        const sortedData = Object.fromEntries(
          Object.entries(data)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, data]) => {
              if ("type" in Object.values(data)[0]) {
                return [key, data]
              } else {
                const sortedData = Object.fromEntries(
                  Object.entries(data).sort(([a], [b]) => a.localeCompare(b)),
                )

                return [key, sortedData]
              }
            }),
        )

        await writeFileWithFormat(
          path.join(dirPath, "props.json"),
          sortedData,
          {
            parser: "json",
          },
        )
      }
    }),
  )

  spinner.succeed("Generated props types")

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
