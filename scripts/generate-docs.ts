import { writeFileSync } from 'fs'
import { readFile } from 'fs/promises'
import path from 'path'
import { Components } from '@yamada-ui/react'
import { defaultTheme } from '@yamada-ui/theme'
import { format, resolveConfig } from 'prettier'
import {
  readConfigFile,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
  SourceFile,
  parseJsonConfigFileContent,
  createProgram,
  sys,
  Symbol,
  TypeChecker,
} from 'typescript'

type Theme = {
  colors?: Record<string, unknown>
  components?: Components
}

type ComponentTypeInfo = {
  type: string
  defaultValue?: string | boolean | null
  required: boolean
  description?: string
}

type ComponentTypeProperties = {
  [component: string]: ComponentTypeInfo
}

type ThemingProps = Partial<{
  variant: string | number
  size: string | number
  colorStyle: string
}>

type PropertyInfo = {
  [K in keyof ThemingProps]?: {
    type: string
    defaultValue?: string
    required: boolean
    description: string
  }
}

type TypeSearchOptions = {
  shouldIgnoreProperty?: (property: Symbol) => boolean | undefined
}

const toLiteralStringType = (value: string[]) =>
  value
    .map((s) => `"${s}"`)
    .join(' | ')
    .trim() || 'string'

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null

const isString = (value: unknown): value is string => typeof value === 'string'

const defaultColors = ['primary', 'secondary', 'warning', 'danger', 'link']

const hues = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']

const isHue = (value: unknown): value is Record<string, string> =>
  isObject(value) && hues.every((k) => isString(value[k]))

const isDefaultColor = (key: string): boolean => defaultColors.includes(key)

const extractColorStyle = (colors: Record<string, unknown> | undefined): string => {
  if (!colors) return 'string'

  const validColors = Object.entries(colors)
    .filter(([key, values]) => isHue(values) || isDefaultColor(key))
    .map(([name]) => name)

  return toLiteralStringType(validColors)
}

const extractThemeProps = ({ colors, components = {} }: Theme): Record<string, PropertyInfo> => {
  const result: Record<string, PropertyInfo> = {}

  const colorStyleType = extractColorStyle(colors)

  for (const [name, { defaultProps, variants, sizes }] of Object.entries(components)) {
    if (!defaultProps) continue

    const { variant, size, colorStyle } = defaultProps

    result[name] = {
      variant: {
        defaultValue: variant?.toString(),
        type: variants ? toLiteralStringType(Object.keys(variants)) : 'string',
        required: false,
        description: `The variant of the ${name}`,
      },
      size: {
        defaultValue: size?.toString(),
        type: sizes ? toLiteralStringType(Object.keys(sizes)) : 'string',
        required: false,
        description: `The size of the ${name}`,
      },
      colorStyle: {
        defaultValue: colorStyle,
        type: colorStyleType,
        required: false,
        description: 'The visual color appearance of the component',
      },
    }
  }

  return result
}

const prettier = (typeName: string) => {
  try {
    const prefix = 'type ONLY_FOR_FORMAT = '

    const prettyType = format(prefix + typeName, {
      parser: 'typescript',
      semi: false,
    })

    return prettyType.replace(prefix, '').trim()
  } catch {
    return typeName
  }
}

const formatValue = (value: string | undefined) => {
  if (!value) return

  const x = value.replace(/^"(.*)"$/, '$1')

  return x === 'true' ? true : x === 'false' ? false : x
}

const sortByRequiredProperties = (properties: ComponentTypeProperties) =>
  Object.fromEntries(
    Object.entries(properties)
      .sort(([a], [b]) => a.localeCompare(b))
      .sort(([, a], [, b]) => (a.required === b.required ? 0 : a.required ? -1 : 1)),
  )

const extractPropertiesOfTypeName = (
  searchTerm: string | RegExp,
  sourceFile: SourceFile,
  typeChecker: TypeChecker,
  { shouldIgnoreProperty = () => false }: TypeSearchOptions = {},
) => {
  const regexSearchTerm = typeof searchTerm === 'string' ? `^${searchTerm}$` : searchTerm

  const typeStatements = sourceFile.statements.filter(
    (statement) =>
      (isInterfaceDeclaration(statement) || isTypeAliasDeclaration(statement)) &&
      new RegExp(regexSearchTerm).test(statement.name.getText()),
  )

  const results: Record<string, ComponentTypeProperties> = {}

  for (const typeStatement of typeStatements) {
    const properties: ComponentTypeProperties = {}
    const type = typeChecker.getTypeAtLocation(typeStatement)

    for (const property of type.getProperties()) {
      if (shouldIgnoreProperty(property)) continue

      const propertyName = property.getName()
      const type = typeChecker.getTypeOfSymbolAtLocation(property, sourceFile)

      const docTags = property.getJsDocTags()

      const defaultValue =
        docTags
          .find((tag) => tag.name === 'default')
          ?.text?.map((doc) => doc.text)
          ?.join('\n') || undefined

      const nonNullableType = type.getNonNullableType()

      const typeName = typeChecker.typeToString(nonNullableType)
      const required = nonNullableType === type && typeName !== 'any'

      const prettyType = prettier(typeName)

      properties[propertyName] = {
        type: prettyType,
        defaultValue: formatValue(defaultValue),
        required,
        description:
          property
            .getDocumentationComment(typeChecker)
            .map((comment) => comment.text)
            .join('\n') || undefined,
      }
    }

    let typeName = (typeStatement as any).name.getText() as string

    if (/Props$/.test(typeName)) {
      typeName = typeName.replace(/Props$/, '')

      results[typeName] = sortByRequiredProperties(properties)
    } else {
      console.log('[docs]: ', 'Omitting type', `\`${typeName}\``)
    }
  }

  return Object.keys(results).length ? results : null
}

const extractTypeExports = (code: string) => {
  type ExportedType = {
    [typeName: string]: any
  }

  const exported: ExportedType = {}

  const exportedTypeRegex = /export type\s*{([^}]+)}/g
  let match = exportedTypeRegex.exec(code)

  while (match != null) {
    const types = match[1].split(',').map((s) => s.trim())

    types.forEach((type) => {
      let [typeName] = type.split(' ') ?? []

      exported[typeName] = true
    })

    match = exportedTypeRegex.exec(code)
  }

  const exportedTypes = Object.keys(exported).filter(Boolean)

  console.log('[docs]: ', ...exportedTypes)

  return exportedTypes
}

const createTypeSearch = (configPath: string, { shouldIgnoreProperty }: TypeSearchOptions = {}) => {
  const { config } = readConfigFile(configPath, sys.readFile)
  const { fileNames, options } = parseJsonConfigFileContent(config, sys, path.dirname(configPath))

  const { getSourceFiles, getTypeChecker } = createProgram(fileNames, options)
  const sourceFiles = getSourceFiles()

  return (searchTerm: Parameters<typeof extractPropertiesOfTypeName>[0]) => {
    const results: Record<string, ComponentTypeProperties> = {}

    for (const sourceFile of sourceFiles) {
      const typeInfo = extractPropertiesOfTypeName(searchTerm, sourceFile, getTypeChecker(), {
        shouldIgnoreProperty,
      })

      Object.assign(results, typeInfo)
    }

    return results
  }
}

const getSourceFileName = (symbol: Symbol): string | undefined => {
  const declarations = symbol.getDeclarations()

  if (!declarations || declarations.length === 0) return undefined

  const sourceFile = declarations[0].getSourceFile()

  return sourceFile ? sourceFile.fileName : undefined
}

const shouldIgnoreProperty = (property: Symbol) => {
  const sourceFileName = getSourceFileName(property)
  const isExternal = /(node_modules|core)/.test(sourceFileName ?? '')
  const isExcludedByName = ['children'].includes(property.getName())

  return isExternal || isExcludedByName
}

const main = async () => {
  const content = await readFile(path.join('src', 'index.ts'), 'utf8')
  const searchType = createTypeSearch('tsconfig.json', { shouldIgnoreProperty })

  const themeProps = extractThemeProps(defaultTheme)

  const typeExports = extractTypeExports(content)
    .map(searchType)
    .filter((value) => Object.keys(value).length !== 0)
    .reduce((acc, value) => ({ ...acc, ...value }), {})

  const typeExportsWithThemeProps: Record<string, unknown> = {}

  for (const [name, values] of Object.entries(typeExports)) {
    typeExportsWithThemeProps[name] = sortByRequiredProperties({
      ...values,
      ...themeProps[name],
    })
  }

  const isEmpty = Object.keys(typeExportsWithThemeProps).length === 0

  if (isEmpty) return

  const prettierConfig = await resolveConfig(process.cwd())

  const data = format(JSON.stringify(typeExportsWithThemeProps), {
    ...prettierConfig,
    parser: 'json',
  })

  writeFileSync('docs.json', data)
}

try {
  main()
} catch (e) {
  if (e instanceof Error) console.error(e.message)

  process.exit(1)
}
