import type { StyleConfig } from "@/data"
import type { Dict } from "@yamada-ui/react"
import pseudoClasses from "@/data/pseudo-classes.json"
import pseudoElements from "@/data/pseudo-elements.json"
import selectors from "@/data/selectors.json"
import styles from "@/data/styles.json"
import { createTable } from "./create-table"

function isObject(value: any): value is object {
  return typeof value === "object" && !Array.isArray(value)
}

function toKebabCase(value: string): string {
  return value
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/^-/, "")
}

function createLink(token?: string) {
  return token
    ? `[\`${token}\`](/docs/theming/tokens/${toKebabCase(token)})`
    : "-"
}

function createColumns(
  prop: string,
  { as, docs, properties, token }: StyleConfig,
) {
  let value = "-"

  if (as) {
    const property = prop.startsWith("--") ? prop : toKebabCase(prop)
    const href = isObject(docs) ? docs[property]?.see : undefined

    if (href) {
      value = `[\`${property}\`](${href})`
    } else {
      value = `\`${property}\``
    }
  } else if (properties) {
    value = properties
      .map((property) => {
        property = property.startsWith("--") ? property : toKebabCase(property)
        const href = isObject(docs) ? docs[property]?.see : undefined

        if (href) {
          return `[\`${property}\`](${href})`
        } else {
          return `\`${property}\``
        }
      })
      .join(", ")
  }

  return [value, createLink(token)]
}

function createRows(atRule: boolean) {
  if (!atRule) {
    return (["standard", "additional", "styled"] as const)
      .flatMap((type) => {
        const data = styles[type] as { [key: string]: StyleConfig }

        return Object.entries(data).flatMap(([prop, config]) => {
          const rows = [[`\`${prop}\``, ...createColumns(prop, config)]]

          if (config.shorthands) {
            config.shorthands.forEach((shorthandProp) => {
              rows.push([
                `\`${shorthandProp}\``,
                ...createColumns(prop, config),
              ])
            })
          }

          return rows
        })
      })
      .sort((a, b) => a[0]!.localeCompare(b[0]!))
  } else {
    const data = styles.atRule as { [key: string]: StyleConfig }

    return Object.entries(data)
      .map(([prop, { docs, token }]) => {
        const [name, { see } = {}] =
          (isObject(docs) ? Object.entries(docs)[0] : undefined) ?? []

        return [
          `\`${prop}\``,
          name && see ? `@${name}` : "-",
          createLink(token),
        ]
      })
      .sort((a, b) => a[0]!.localeCompare(b[0]!))
  }
}

function createConditionRows(type: string) {
  let conditions: Dict<string> = {}

  if (type === "pseudoElement") conditions = pseudoElements
  if (type === "pseudoClass") conditions = pseudoClasses
  if (type === "selector") conditions = selectors

  return Object.entries(conditions)
    .map(([prop, value]) => [`\`${prop}\``, `\`${value}\``])
    .sort((a, b) => a[0]!.localeCompare(b[0]!))
}

export function replaceStylePropsTable(text: string) {
  try {
    const matches = text.matchAll(
      /<(StylePropsTable|AtRulePropsTable|ConditionPropsTable)(?:\s+type="([^"]+)")?\s*\/>/g,
    )

    const contents: { content: string; index: number; length: number }[] = []

    for (const match of matches) {
      const [data, name, type] = match
      const { index } = match
      const length = data.length

      if (!name) continue

      const atRule = name === "AtRulePropsTable"
      const condition = name === "ConditionPropsTable"

      if (condition) {
        if (!type) continue

        const content = createTable(
          ["Prop", "CSS Property"],
          createConditionRows(type),
        )

        contents.push({ content, index, length })
      } else {
        const content = createTable(
          ["Prop", "CSS Property", "Theme Token"],
          createRows(atRule),
        )

        contents.push({ content, index, length })
      }
    }

    contents
      .sort((a, b) => b.index - a.index)
      .forEach(({ content, index, length }) => {
        text = `${text.slice(0, index)}${content}${text.slice(index + length)}`
      })

    return text
  } catch {
    return text
  }
}
