import type { Dict } from "@yamada-ui/utils"
import type {
  Config,
  Registries,
  Registry,
  RegistrySection,
  Section,
  Source,
} from "../index.type"
import { merge } from "@yamada-ui/utils"
import { readdir, readFile } from "fs/promises"
import { HttpsProxyAgent } from "https-proxy-agent"
import fetch from "node-fetch"
import path from "path"
import c from "picocolors"
import { REGISTRY_FILE_NAME, REGISTRY_URL, SECTION_NAMES } from "../constant"
import { writeFileSafe } from "./fs"
import { lintText } from "./lint"
import { formatText } from "./prettier"
import {
  isJsx,
  transformExtension,
  transformTsToJs,
  transformTsxToJsx,
} from "./typescript"

const agent = process.env.https_proxy
  ? new HttpsProxyAgent(process.env.https_proxy)
  : undefined

const registryStore = new Map<string, Registry>()

function getRegistryUrl(name: string) {
  if (name === "index") {
    return path.join(REGISTRY_URL, "index.json")
  } else if (name === "theme") {
    return path.join(REGISTRY_URL, "theme.json")
  } else if (name.startsWith("use-")) {
    return path.join(REGISTRY_URL, "hooks", `${name}.json`)
  } else if (name.endsWith("-provider")) {
    return path.join(REGISTRY_URL, "providers", `${name}.json`)
  } else {
    return path.join(REGISTRY_URL, "components", `${name}.json`)
  }
}

export async function fetchRegistryNames(): Promise<string[]> {
  const { sources } = await fetchRegistry("index")
  const content = sources[0]!.content!

  const regex = /"@yamada-ui\/react\/([^"/]+)(?:\/([^"/]+))?"/g
  const registryNames: string[] = []

  let match = regex.exec(content)

  while (match !== null) {
    if (match[2]) registryNames.push(match[2])

    match = regex.exec(content)
  }

  return registryNames
}

export interface FetchRegistryOptions {
  cache?: boolean
}

export async function fetchRegistry(
  name: string,
  { cache = true }: FetchRegistryOptions = {},
): Promise<Registry> {
  const url = getRegistryUrl(name)

  if (cache && registryStore.has(url)) return registryStore.get(url)!

  const res = await fetch(url, { agent })

  if (res.ok) {
    const registry = (await res.json()) as Registry

    if (cache) registryStore.set(url, registry)

    return registry
  } else {
    switch (res.status) {
      case 400:
      case 401:
      case 403:
        throw new Error(
          `You do not have access to the registry at ${c.red(name)}.`,
        )
      case 404:
        throw new Error(
          `The registry at ${c.red(name)} was not found. Please make sure the registry is available.`,
        )
      case 500:
      case 501:
      case 502:
      case 503:
        throw new Error(`Service unavailable. Please try again later.`)
      default:
        throw new Error(
          `An error occurred while fetching the registry at ${c.red(name)}. Please try again later.`,
        )
    }
  }
}

export interface FetchRegistriesOptions extends FetchRegistryOptions {
  dependencies?: boolean
  dependents?: boolean
  omit?: string[]
}

export async function fetchRegistries(
  names: string[],
  config: Config,
  {
    cache = true,
    dependencies: withDependencies = true,
    dependents: withDependents = true,
    omit = [],
  }: FetchRegistriesOptions = {},
): Promise<Registries> {
  const results: { [key: string]: Promise<Registry> | Registry } = {}

  async function fetch(names: string[]) {
    await Promise.all(
      names.map(async (name) => {
        if (results[name] || omit.includes(name)) return

        results[name] = fetchRegistry(name, { cache })

        results[name] = await results[name]

        const { dependencies, dependents, section } = results[name]
        const target: string[] = []

        if (!config.isSection(section)) return

        withDependencies =
          withDependencies && (config[section]?.dependents ?? true)
        withDependents =
          withDependents && (config[section]?.dependencies ?? false)

        if (withDependencies && dependents) {
          target.push(...dependents.components)
          target.push(...dependents.hooks)
          target.push(...dependents.providers)
        }

        if (withDependents && dependencies) {
          target.push(...dependencies.components)
          target.push(...dependencies.hooks)
          target.push(...dependencies.providers)
        }

        const names = [...new Set(target)].filter((name) => !results[name])

        if (names.length) await fetch(names)
      }),
    )
  }

  await fetch(names)

  return results as Registries
}

export function pruneRegistry() {
  registryStore.clear()
}

export async function fetchLocaleRegistry(path: string) {
  return JSON.parse(await readFile(path, "utf-8")) as Registry
}

export async function getGeneratedNameMap(
  config: Config,
): Promise<{ [key in Section]: string[] }> {
  const results: [Section, string[]][] = await Promise.all(
    SECTION_NAMES.map(async (section) => {
      try {
        const sectionPath = config.getSectionResolvedPath(section)
        const dirents = await readdir(sectionPath, { withFileTypes: true })

        return [
          section,
          dirents
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name),
        ]
      } catch {
        return [section, []]
      }
    }),
  )

  return Object.fromEntries(results) as { [key in Section]: string[] }
}

export function transformContent(
  targetSection: RegistrySection,
  content: string,
  { getSection }: Config,
  generatedNames: string[],
) {
  const matches = content.matchAll(/from\s+["']([^"']+)["']/g)

  matches.forEach((match) => {
    const [searchValue, value] = match

    if (!value) return

    const relative = value.includes("..")
    const module = new RegExp(
      `^@yamada-ui\/react\/(${SECTION_NAMES.join("|")})`,
    ).test(value)
    const name = value.split("/").at(-1)

    if ((!relative && !module) || !name) return

    const generated = generatedNames.includes(name)

    let replaceValue: string

    if (module) {
      const [section] = value.split("/").slice(-2)

      if (!generated || !section) return

      if (section === targetSection) {
        replaceValue = `from "${path.join("..", name)}"`
      } else {
        const { path: relativePath } = getSection(section) ?? {}

        if (!relativePath) return

        replaceValue = `from "${path.join("..", "..", relativePath, name)}"`
      }
    } else {
      const depth = (value.match(/\.\.\//g) || []).length

      if (!depth) return

      if (depth === 1) {
        if (generated) {
          replaceValue = `from "${path.join("..", name)}"`
        } else {
          replaceValue = `from "@yamada-ui/react/${targetSection}/${name}"`
        }
      } else {
        const omittedValue = value.replace(/(\.\.\/|\.\/)/g, "")
        const query = omittedValue.split("/").slice(0, -1).join("/")

        const { path: sectionPath, section } = getSection(query) ?? {}

        if (!section || !sectionPath) return

        if (generated) {
          const targetDepth = (sectionPath.match(/\.\.\//g) || []).length
          const neededDepth = depth + targetDepth
          const omittedTargetPath = sectionPath.replace(/(\.\.\/|\.\/)/g, "")
          const position = "../".repeat(neededDepth)

          replaceValue = `from "${position}${omittedTargetPath}/${name}"`
        } else {
          replaceValue = `from "@yamada-ui/react/${section}/${name}"`
        }
      }
    }

    content = content.replace(searchValue, replaceValue)
  })

  return content
}

export async function transformContentWithFormatAndLint(
  filePath: string,
  section: RegistrySection,
  content: string,
  config: Config,
  generatedNames: string[],
) {
  const { cwd, format, jsx, lint } = config

  content = transformContent(section, content, config, generatedNames)

  if (jsx)
    content = isJsx(filePath)
      ? transformTsxToJsx(content)
      : transformTsToJs(content)

  content = await lintText(content, {
    ...lint,
    cwd,
    filePath,
  })
  content = await formatText(content, format)

  return content
}

export function transformTemplateContent(template: string, data: Dict) {
  let content = template

  Object.entries(data).forEach(([key, value]) => {
    content = content.replace(new RegExp(`{{${key}}}`, "g"), value)
  })

  return content
}

export function transformIndex(
  generatedNames: string[],
  content: string,
  { getSection }: Config,
) {
  const matches = content.matchAll(/from\s+["']([^"']+)["']/g)

  matches.forEach((match) => {
    const [searchValue, value] = match

    if (!value) return

    const name = value.split("/").at(-1)

    if (!name) return

    const generated = generatedNames.includes(name)

    let replaceValue: string

    if (generated) {
      const [section] = value.split("/").slice(-2)
      const { path } = getSection(section) ?? {}

      if (!path) return

      replaceValue = `from "${path}/${name}"`
    } else {
      const omittedValue = value.replace(/(\.\.\/|\.\/)/g, "")
      const query = omittedValue.split("/").slice(0, -1).join("/")
      const { section } = getSection(query) ?? {}

      if (!section) return

      replaceValue = `from "@yamada-ui/react/${section}/${name}"`
    }

    content = content.replace(searchValue, replaceValue)
  })

  return content
}

export async function transformIndexWithFormatAndLint(
  content: string,
  config: Config,
  generatedNames: string[],
) {
  const { cwd, format, indexPath, jsx, lint } = config

  content = transformIndex(generatedNames, content, config)

  if (jsx) content = transformTsToJs(content)

  content = await lintText(content, {
    ...lint,
    cwd,
    filePath: indexPath,
  })
  content = await formatText(content, format)

  return content
}

export async function generateSource(
  dirPath: string,
  section: RegistrySection,
  { name: fileName, content, data, template }: Source,
  config: Config,
  generatedNames: string[] = [],
) {
  fileName = transformExtension(fileName, config.jsx)

  const targetPath = path.resolve(dirPath, fileName)

  if (content) {
    content = transformContent(section, content, config, generatedNames)

    if (config.jsx)
      content = isJsx(fileName)
        ? transformTsxToJsx(content)
        : transformTsToJs(content)

    await writeFileSafe(targetPath, content, config)
  } else if (template && data) {
    await Promise.all(
      data.map(async ({ name: fileName, ...rest }) => {
        fileName = transformExtension(fileName, config.jsx)

        let content = transformTemplateContent(template, rest)

        content = transformContent(section, content, config, generatedNames)

        if (config.jsx)
          content = isJsx(fileName)
            ? transformTsxToJsx(content)
            : transformTsToJs(content)

        await writeFileSafe(path.resolve(targetPath, fileName), content, config)
      }),
    )
  }
}

export async function generateSources(
  dirPath: string,
  registry: Registry,
  config: Config,
  generatedNames: string[] = [],
) {
  await Promise.all([
    ...registry.sources.map((source) =>
      generateSource(dirPath, registry.section, source, config, generatedNames),
    ),
    writeFileSafe(
      path.resolve(dirPath, REGISTRY_FILE_NAME),
      JSON.stringify(registry),
      merge(config, { format: { parser: "json" } }),
    ),
  ])
}
