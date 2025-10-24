import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

export interface Properties {
  type: string
  required: boolean
  defaultValue?: string
  description?: string | undefined
}

export interface ComponentData {
  [key: string]: { [key: string]: Properties }
}

/**
 * Replaces `<PropsTable />` tags in MDX text with generated Markdown tables.
 */
export function replacePropsTable(text: string) {
  try {
    const matches = text.matchAll(
      /<PropsTable(?:\s+name="([^"]+)")?(?:\s+(all))?(?:\s+omit=\{(\[.*?\])\})?(?:\s+pick=\{(\[.*?\])\})?\s*\/>/g,
    )

    for (const match of matches) {
      const name = match[1]
      const all = match[2] === "all"
      const omitStr = match[3]
      const pickStr = match[4]

      if (!name) {
        console.error("PropsTable: name attribute is required")
        continue
      }

      let omits: string[] = []
      let picks: string[] = []

      try {
        omits = omitStr ? JSON.parse(omitStr) : []
        picks = pickStr ? JSON.parse(pickStr) : []
      } catch (error) {
        console.error(
          `PropsTable: Invalid JSON in omit or pick attribute for "${name}"`,
          error,
        )
        continue
      }

      const mdTable = propsToMdTable({ name, all, omits, picks })

      if (!mdTable) {
        console.error(`PropsTable: Could not generate table for "${name}"`)
        continue
      }

      text = text.replace(match[0], mdTable)
    }

    return text
  } catch (error) {
    console.error("Error in replacePropsTable:", error)
    return text
  }
}

/**
 * Converts component properties to a Markdown table format.
 */
export function propsToMdTable(props: {
  name: string
  omits: string[]
  picks: string[]
  all?: boolean
}) {
  const properties = getComponentProps(props)

  if (!properties.length) return null

  return `| Prop | Default | Type | Description |
| --- | --- | --- | --- |
${properties
  .map(([name, property]) => {
    const type =
      typeof property.type === "string"
        ? property.type.replaceAll('"', "'").replaceAll("|", "\\|")
        : String(property.type)
    const defaultValue = property.defaultValue || "-"
    const description = property.description
      ? property.description
          .replace(/```[\s\S]*?```/g, "") // Delete code block
          .replace(/\n/g, " ")
      : "-"
    return `| ${name} | ${defaultValue} | \`${type}\` | ${description} |`
  })
  .join("\n")}
`
}

/**
 * Type guard to check if an unknown value is a valid Properties object.
 */
export function checkProperties(value: unknown): value is Properties {
  if (!value || typeof value !== "object") return false

  const obj = value as { [key: string]: unknown }

  return (
    "type" in obj &&
    typeof obj.type === "string" &&
    "required" in obj &&
    typeof obj.required === "boolean"
  )
}

/**
 * Retrieves component properties from a JSON file and returns them as sorted entries.
 */
export function getComponentProps(props: {
  name: string
  omits: string[]
  picks: string[]
  all?: boolean
}) {
  const { name, all, omits, picks } = props
  const componentTypes = getComponentTypes(name)

  if (all) {
    // If all flag is specified, collect properties from all parts
    const filteredComponentTypes = { ...componentTypes }
    if (omits.length > 0) {
      for (const omitName of omits) {
        if (omitName in filteredComponentTypes) {
          delete filteredComponentTypes[omitName]
        }
      }
    }

    const allProps = collectProps(filteredComponentTypes)
    return sortEntries(allProps).filter(
      ([propName]) => !omits.includes(propName),
    )
  }

  if (picks.length > 0) {
    const pickedProps: { [key: string]: Properties } = {}

    for (const partName of picks) {
      const partType = componentTypes[partName]
      if (partType && typeof partType === "object") {
        Object.assign(
          pickedProps,
          collectProps(partType as { [key: string]: unknown }),
        )
      }
    }

    return sortEntries(pickedProps).filter(
      ([propName]) => !omits.includes(propName),
    )
  }

  const firstKey = Object.keys(componentTypes)[0]
  if (!firstKey) return []

  const firstType = componentTypes[firstKey]
  if (!firstType || typeof firstType !== "object") return []

  const defaultProps = collectProps(firstType as { [key: string]: unknown })

  if (Object.keys(defaultProps).length === 0) return []

  return sortEntries(defaultProps).filter(
    ([propName]) => !omits.includes(propName),
  )
}

/**
 * Loads component types from a JSON file in the data/props directory.
 */
export function getComponentTypes(componentName: string): {
  [key: string]: unknown
} {
  const path = join(process.cwd(), "data", "props", `${componentName}.json`)
  if (!existsSync(path)) return {}

  try {
    const data: unknown = JSON.parse(readFileSync(path, "utf-8"))

    // Validate that the parsed JSON is an object (not array, null, etc.)
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      console.warn(`Invalid component types data for ${componentName}`)
      return {}
    }

    return data as { [key: string]: unknown }
  } catch (error) {
    console.error(
      `Failed to parse component types JSON for ${componentName}:`,
      error,
    )
    return {}
  }
}

/**
 * This function traverses a nested JSON structure and flattens all Properties objects
 * into a single record. It handles both direct properties (e.g., Badge.as, Badge.size)
 * and nested component structures (e.g., AvatarGroup.Item, AvatarGroup.Root).
 */
export function collectProps(obj: { [key: string]: unknown }): {
  [key: string]: Properties
} {
  const props: { [key: string]: Properties } = {}

  for (const [key, value] of Object.entries(obj)) {
    if (checkProperties(value)) {
      // e.g., Badge.as, Badge.size
      props[key] = value
    } else if (value && typeof value === "object") {
      // e.g., AvatarGroup.Item, AvatarGroup.Root
      Object.assign(props, collectProps(value as { [key: string]: unknown }))
    }
  }

  return props
}

/**
 * Sorts property entries by required status and default value presence.
 *
 * Sorting priority:
 * 1. Required properties come first
 * 2. Properties with default values come next
 * 3. Optional properties without defaults come last
 */
export const sortEntries = (props: {
  [key: string]: Properties
}): [string, Properties][] => {
  return Object.entries(props).sort(([, a], [, b]) => {
    if (a.required && !b.required) return -1
    if (!a.required && b.required) return 1
    if (a.defaultValue && !b.defaultValue) return -1
    if (!a.defaultValue && b.defaultValue) return 1
    return 0
  })
}
