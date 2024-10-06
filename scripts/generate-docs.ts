import type { UsageTheme } from "@yamada-ui/core"
import type { SourceFile, Symbol, TypeChecker } from "typescript"
import { defaultTheme } from "@yamada-ui/theme"
import { TONES } from "@yamada-ui/utils"
import { readFile, writeFile } from "fs/promises"
import path from "path"
import { format, resolveConfig } from "prettier"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
  parseJsonConfigFileContent,
  readConfigFile,
  sys,
} from "typescript"

interface ComponentTypeInfo {
  type: string
  required: boolean
  defaultValue?: boolean | null | string
  deprecated?: string
  description?: string
  see?: string
}

interface ComponentTypeProperties {
  [component: string]: ComponentTypeInfo
}

type ThemingProps = Partial<{
  colorScheme: string
  size: number | string
  variant: number | string
}>

type PropertyInfo = {
  [K in keyof ThemingProps]?: {
    type: string
    description: string
    required: boolean
    defaultValue?: string
  }
}

interface TypeSearchOptions {
  shouldIgnoreProperty?: (property: Symbol) => boolean | undefined
}

const toLiteralStringType = (value: string[]) =>
  value
    .map((s) => `"${s}"`)
    .join(" | ")
    .trim() || "string"

const isString = (value: unknown): value is string => typeof value === "string"

const isArray = <T extends any[]>(value: any): value is T =>
  Array.isArray(value)

const isObject = (value: unknown): value is { [key: string]: unknown } =>
  typeof value === "object" && value !== null

const isFunction = <T extends Function = Function>(value: any): value is T =>
  typeof value === "function"

const merge = <T extends { [key: string]: any }>(
  target: any,
  source: any,
  mergeArray = false,
): T => {
  let result = Object.assign({}, target)

  if (isObject(source)) {
    if (isObject(target)) {
      for (const [sourceKey, sourceValue] of Object.entries(source)) {
        const targetValue: any = target[sourceKey]

        if (mergeArray && isArray(sourceValue) && isArray(targetValue)) {
          result[sourceKey] = targetValue.concat(...sourceValue)
        } else if (
          !isFunction(sourceValue) &&
          isObject(sourceValue) &&
          target.hasOwnProperty(sourceKey)
        ) {
          result[sourceKey] = merge(targetValue, sourceValue, mergeArray)
        } else {
          Object.assign(result, { [sourceKey]: sourceValue })
        }
      }
    } else {
      result = source
    }
  }

  return result as T
}

const isTone = (value: unknown): value is { [key: string]: string } =>
  isObject(value) && TONES.every((k) => isString(value[k]))

const extractColorScheme = ({ colors, semantics = {} }: UsageTheme): string => {
  if (!colors) return "string"

  const validColors: string[] = []

  Object.entries(colors).forEach(([key, value]) => {
    if (!isTone(value)) return

    validColors.push(key)

    const semanticKeys = Object.entries(semantics.colorSchemes ?? {})
      .filter(([, relatedKey]) => key === relatedKey)
      .map(([key]) => key)

    if (!semanticKeys.length) return

    validColors.push(...semanticKeys)
  })

  return toLiteralStringType(validColors)
}

const extractThemeProps = (
  theme: UsageTheme,
): { [key: string]: PropertyInfo } => {
  const result: { [key: string]: PropertyInfo } = {}

  const colorSchemeType = extractColorScheme(theme)

  for (const [name, { sizes, variants, defaultProps }] of Object.entries(
    theme.components ?? {},
  )) {
    if (!defaultProps) continue

    const { colorScheme, size, variant } = defaultProps

    result[name] = {
      colorScheme: {
        type: colorSchemeType,
        defaultValue: JSON.stringify(colorScheme),
        description: "The visual color appearance of the component.",
        required: false,
      },
      size: {
        type: sizes ? toLiteralStringType(Object.keys(sizes)) : "string",
        defaultValue: JSON.stringify(size),
        description: `The size of the ${name}.`,
        required: false,
      },
      variant: {
        type: variants ? toLiteralStringType(Object.keys(variants)) : "string",
        defaultValue: JSON.stringify(variant),
        description: `The variant of the ${name}.`,
        required: false,
      },
    }
  }

  return result
}

const prettier = async (typeName: string) => {
  try {
    const prefix = "type ONLY_FOR_FORMAT = "

    const prettyType = await format(prefix + typeName, {
      parser: "typescript",
      semi: false,
    })

    return prettyType.replace(prefix, "").trim()
  } catch {
    return typeName
  }
}

const formatValue = (value: string | undefined) => {
  if (!value) return

  const x = value.replace(/^"(.*)"$/, "$1")

  return x === "true" ? true : x === "false" ? false : x
}

const sortByRequiredProperties = (properties: ComponentTypeProperties) =>
  Object.fromEntries(
    Object.entries(properties)
      .sort(([a], [b]) => a.localeCompare(b))
      .sort(([, a], [, b]) =>
        a.required === b.required ? 0 : a.required ? -1 : 1,
      ),
  )

const extractPropertiesOfTypeName = async (
  searchTerm: RegExp | string,
  sourceFile: SourceFile,
  typeChecker: TypeChecker,
  { shouldIgnoreProperty = () => false }: TypeSearchOptions = {},
) => {
  const regexSearchTerm =
    typeof searchTerm === "string" ? `^${searchTerm}$` : searchTerm

  const typeStatements = sourceFile.statements.filter(
    (statement) =>
      (isInterfaceDeclaration(statement) ||
        isTypeAliasDeclaration(statement)) &&
      new RegExp(regexSearchTerm).test(statement.name.getText()),
  )

  const results: { [key: string]: ComponentTypeProperties } = {}

  for (const typeStatement of typeStatements) {
    const properties: ComponentTypeProperties = {}
    const type = typeChecker.getTypeAtLocation(typeStatement)

    for (const property of type.getProperties()) {
      if (shouldIgnoreProperty(property)) continue

      const propertyName = property.getName()

      const type = typeChecker.getTypeOfSymbolAtLocation(property, sourceFile)

      const docTags = property.getJsDocTags()

      const isPrivate = !!docTags.find(({ name }) => name === "private")
      const deprecated = docTags
        .find(({ name }) => name === "deprecated")
        ?.text?.map(({ text }) => text)
        .join("\n")

      if (isPrivate) continue

      const see = docTags.find(({ name }) => name === "see")?.text?.at(-1)?.text
      const defaultValue =
        docTags
          .find(({ name }) => name === "default")
          ?.text?.map(({ text }) => text)
          .join("\n") || undefined

      const nonNullableType = type.getNonNullableType()

      const typeName = typeChecker.typeToString(nonNullableType)
      const required = nonNullableType === type && typeName !== "any"

      const prettyType = await prettier(typeName)

      properties[propertyName] = {
        type: prettyType,
        defaultValue: formatValue(defaultValue),
        deprecated,
        description:
          property
            .getDocumentationComment(typeChecker)
            .map((comment) => comment.text)
            .join("\n") || undefined,
        required,
        see,
      }
    }

    let typeName = (typeStatement as any).name.getText() as string

    if (typeName.endsWith("Props")) {
      typeName = typeName.replace(/Props$/, "")

      results[typeName] = sortByRequiredProperties(properties)
    } else {
      console.log("[docs]:", "Omitting type", `\`${typeName}\``)
    }
  }

  return Object.keys(results).length ? results : null
}

const extractTypeExports = (code: string) => {
  interface ExportedType {
    [typeName: string]: any
  }

  const exported: ExportedType = {}

  const exportedTypeRegex = /export type\s*{([^}]+)}/g
  let match = exportedTypeRegex.exec(code)

  while (match != null) {
    const types = match[1]?.split(",").map((s) => s.trim())

    types?.forEach((type) => {
      const [typeName] = type.split(" ")

      if (typeName) exported[typeName] = true
    })

    match = exportedTypeRegex.exec(code)
  }

  const exportedTypes = Object.keys(exported).filter(Boolean)

  console.log("[docs]:", `Import type ${exportedTypes.join(", ")}`)

  return exportedTypes
}

const createTypeSearch = (
  configPath: string,
  { shouldIgnoreProperty }: TypeSearchOptions = {},
) => {
  const { config } = readConfigFile(configPath, sys.readFile)
  const { fileNames, options } = parseJsonConfigFileContent(
    config,
    sys,
    path.dirname(configPath),
  )

  const { getSourceFile, getTypeChecker } = createProgram(fileNames, options)

  return async (
    searchTerm: Parameters<typeof extractPropertiesOfTypeName>[0],
  ) => {
    let results: { [key: string]: ComponentTypeProperties } = {}

    await Promise.all(
      fileNames.map(async (fileName) => {
        const sourceFile = getSourceFile(fileName)

        if (!sourceFile) return

        const typeInfo = await extractPropertiesOfTypeName(
          searchTerm,
          sourceFile,
          getTypeChecker(),
          {
            shouldIgnoreProperty,
          },
        )

        results = merge(results, typeInfo)
      }),
    )

    return results
  }
}

const getSourceFileName = (symbol: Symbol): string | undefined => {
  const declarations = symbol.getDeclarations()

  if (!declarations || declarations.length === 0) return undefined

  const sourceFile = declarations[0]?.getSourceFile()

  return sourceFile ? sourceFile.fileName : undefined
}

const shouldIgnoreProperty = (property: Symbol) => {
  const sourceFileName = getSourceFileName(property)
  const isExternal = /(node_modules|core)/.test(sourceFileName ?? "")
  const isExcludedByName = ["children"].includes(property.getName())

  return isExternal || isExcludedByName
}

const main = async () => {
  const content = await readFile(path.join("src", "index.ts"), "utf8")
  const searchType = createTypeSearch("tsconfig.json", { shouldIgnoreProperty })

  const themeProps = extractThemeProps(defaultTheme)

  const typeExports = await Promise.all(
    extractTypeExports(content).map(searchType),
  )

  const transformTypeExports = typeExports
    .filter((value) => Object.keys(value).length !== 0)
    .reduce((acc, value) => ({ ...acc, ...value }), {})

  const typeExportsWithThemeProps: { [key: string]: unknown } = {}

  for (const [name, values] of Object.entries(transformTypeExports)) {
    typeExportsWithThemeProps[name] = sortByRequiredProperties({
      ...values,
      ...themeProps[name],
    })
  }

  const isEmpty = Object.keys(typeExportsWithThemeProps).length === 0

  if (isEmpty) return

  const prettierConfig = await resolveConfig(process.cwd())

  const data = await format(JSON.stringify(typeExportsWithThemeProps), {
    ...prettierConfig,
    parser: "json",
  })

  await writeFile("DOCS.json", data)

  console.log("[docs]:", `Generated DOCS.json`)
}

try {
  main()
} catch (e) {
  if (e instanceof Error) console.error(e.message)

  process.exit(1)
}
