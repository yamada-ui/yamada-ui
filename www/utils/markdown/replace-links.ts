import { CONSTANTS } from "@/constants"
import docMap from "@/data/doc-map.en.json"

const componentItems = docMap
  .items!.find(({ segment }) => segment === "components")!
  .items!.filter(({ items }) => !!items)
  .flatMap(({ items }) => items ?? [])

const hookItems = docMap.items!.find(
  ({ segment }) => segment === "hooks",
)!.items!

export function replaceLinks(text: string) {
  try {
    text = text.replace(
      /<ComponentList\s*\/>/g,
      componentItems
        .map(({ pathname, title }) => `- [${title}](${pathname})`)
        .join("\n"),
    )

    text = text.replace(
      /<HookList\s*\/>/g,
      hookItems
        .map(({ pathname, title }) => `- [${title}](${pathname})`)
        .join("\n"),
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
