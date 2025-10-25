/**
 * Replaces `<LinkList />` tags in MDX text with standard Markdown link lists.
 */
export function replaceLinkListToMarkdown(text: string): string {
  try {
    const matches = text.matchAll(
      /<LinkList\s+items=\{\s*(\[[\s\S]*?\])\}\s*\/>/g,
    )

    const replacements: {
      index: number
      length: number
      replacement: string
    }[] = []

    for (const match of matches) {
      const itemsStr = match[1]

      if (!itemsStr) continue

      try {
        // Extract label and href pairs from the items array
        const itemMatches = itemsStr.matchAll(
          /\{\s*label:\s*"([^"]+)"\s*,\s*href:\s*"([^"]+)"\s*\}/g,
        )

        const items: { href: string; label: string }[] = []

        for (const itemMatch of itemMatches) {
          items.push({
            href: itemMatch[2]!,
            label: itemMatch[1]!,
          })
        }

        if (items.length === 0) continue

        // Convert to Markdown list
        const mdList = items
          .map(({ href, label }) => `- [${label}](${href})`)
          .join("\n")

        // Store replacement info for later processing
        replacements.push({
          index: match.index!,
          length: match[0].length,
          replacement: mdList,
        })
      } catch (error) {
        console.error("Error parsing LinkList items:", error)
        continue
      }
    }

    // Process replacements in reverse order to avoid index shifting
    replacements
      .sort((a, b) => b.index - a.index)
      .forEach(({ index, length, replacement }) => {
        text = `${text.slice(0, index)}${replacement}${text.slice(index + length)}`
      })

    return text
  } catch (error) {
    console.error("Error in replaceLinkListToMarkdown:", error)
    return text
  }
}
