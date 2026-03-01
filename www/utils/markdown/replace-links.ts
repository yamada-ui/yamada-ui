import type { AnyString } from "@yamada-ui/utils"
import { globSync } from "glob"
import path from "path"
import { CONSTANTS } from "@/constants"

function toCamelCase(value: AnyString): string {
  return value
    .replace(/[_-](.)/g, (_, val) => val.toUpperCase())
    .replace(/^(.)/, (_, val) => val.toLowerCase())
}

function toPascalCase(value: AnyString): string {
  return value
    .replace(/[_-](.)/g, (_, val) => val.toUpperCase())
    .replace(/^(.)/, (_, val) => val.toUpperCase())
}

const componentItems = globSync(
  path.resolve("contents", "components", "**", "*.mdx"),
)
  .map((filePath) => filePath.replace(/.*\/contents\//, ""))
  .filter(
    (filePath) =>
      !/\.(.+)\.mdx$/.test(filePath) && filePath.split("/").length === 3,
  )
  .map((filePath) => {
    const name = filePath
      .split("/")
      .at(-1)!
      .replace(/\.mdx$/, "")
    const title = toPascalCase(name)

    return {
      path: `/docs/components/${name}`,
      title,
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

const hookItems = globSync(path.resolve("contents", "hooks", "**", "*.mdx"))
  .map((filePath) => filePath.replace(/.*\/contents\//, ""))
  .filter(
    (filePath) =>
      !/\.(.+)\.mdx$/.test(filePath) &&
      filePath.split("/").at(-1) !== "index.mdx",
  )
  .map((filePath) => {
    const name = filePath
      .split("/")
      .at(-1)!
      .replace(/\.mdx$/, "")
    const title = toCamelCase(name)

    return {
      path: `/docs/hooks/${name}`,
      title,
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title))

export function replaceLinks(text: string) {
  try {
    text = text.replace(
      /<ComponentList\s*\/>/g,
      componentItems
        .map(({ path, title }) => `- [${title}](${path})`)
        .join("\n"),
    )

    text = text.replace(
      /<HookList\s*\/>/g,
      hookItems.map(({ path, title }) => `- [${title}](${path})`).join("\n"),
    )

    const matches = text.matchAll(
      /<LinkList\s+items=\{\s*(\[[\s\S]*?\])\}\s*\/>/g,
    )

    const contents: { content: string; index: number; length: number }[] = []

    for (const match of matches) {
      const [data, items] = match
      const { index } = match
      const length = data.length

      if (!items) continue

      const matches = items.matchAll(
        /\{\s*label:\s*"([^"]+)"\s*,\s*href:\s*"([^"]+)"\s*\}/g,
      )

      const links: { href: string; label: string }[] = []

      for (const [, label, href] of matches) {
        if (!label || !href) continue

        links.push({ href, label })
      }

      const content = links
        .map(({ href, label }) => `- [${label}](${href})`)
        .join("\n")

      contents.push({ content, index, length })
    }

    contents
      .sort((a, b) => b.index - a.index)
      .forEach(({ content, index, length }) => {
        text = `${text.slice(0, index)}${content}${text.slice(index + length)}`
      })

    text = text.replaceAll(
      /\[(.+?)\]\(\/(.+?)(?:#(.+?))?\)/g,
      function (_, label, path, anchor) {
        return `[${label}](${CONSTANTS.SNS.HOMEPAGE}/${path}.md${anchor ? `#${anchor}` : ""})`
      },
    )

    return text
  } catch {
    return text
  }
}
