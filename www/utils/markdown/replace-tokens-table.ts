import type { DefineThemeTokens } from "@yamada-ui/react"
import defaultTheme from "@/data/theme.json"
import { createTable } from "./create-table"

function replaceValue(value: any) {
  if (typeof value === "object") {
    return JSON.stringify(value)
      .replace(/"(\w+)":/g, " $1: ")
      .replace(/}$/, " }")
  } else if (typeof value === "string") {
    return `\"${value.replace(/"/g, "'")}\"`
  } else {
    return value
  }
}

function getTokens(
  token: string,
  semantic: boolean,
  sizes: boolean,
  fractional?: boolean,
) {
  if (semantic) {
    if (sizes) {
      if (fractional) {
        return Object.fromEntries(
          Object.entries(defaultTheme.semanticTokens.sizes).filter(([key]) =>
            key.includes("/"),
          ),
        )
      } else {
        return Object.fromEntries(
          Object.entries(defaultTheme.semanticTokens.sizes).filter(
            ([key]) => !key.includes("/"),
          ),
        )
      }
    } else {
      return defaultTheme.semanticTokens[
        token as keyof typeof defaultTheme.semanticTokens
      ] as DefineThemeTokens | undefined
    }
  } else {
    return defaultTheme[token as keyof typeof defaultTheme] as
      | DefineThemeTokens
      | undefined
  }
}

export function replaceTokensTable(text: string) {
  try {
    const matches = text.matchAll(
      /<(TokensTable|SemanticTokensTable)(?:\s+token="([^"]+)")?(?:\s+(fractional))?\s*\/>/g,
    )

    const contents: { content: string; index: number; length: number }[] = []

    for (const match of matches) {
      const [data, type, token, fractional] = match
      const { index } = match
      const length = data.length

      if (!type || !token) continue

      const semantic = type === "SemanticTokensTable"
      const keyframes = token === "keyframes"
      const sizes = token === "sizes"
      const tokens = getTokens(token, semantic, sizes, !!fractional)

      if (!tokens) continue

      const content = createTable(
        ["Token", "Value"],
        Object.entries(tokens).flatMap(([token, value]) => {
          if (
            typeof value === "object" &&
            !Array.isArray(value) &&
            !keyframes
          ) {
            return Object.entries(value).map(([key, value]) => [
              `\`${token}.${key}\``,
              `\`${replaceValue(value)}\``,
            ])
          } else {
            return [[`\`${token}\``, `\`${replaceValue(value)}\``]]
          }
        }),
      )

      contents.push({ content, index, length })
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
