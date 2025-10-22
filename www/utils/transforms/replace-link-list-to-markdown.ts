/**
 * Replaces `<LinkList />` tags in MDX text with standard Markdown link lists.
 */
export function replaceLinkListToMarkdown(text: string): string {
  try {
    const matches = text.matchAll(/<LinkList\s+items=\{(\[[\s\S]*?\])\}\s*\/>/g)

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

        text = text.replace(match[0], mdList)
      } catch (error) {
        console.error("Error parsing LinkList items:", error)
        continue
      }
    }

    return text
  } catch (error) {
    console.error("Error in replaceLinkListToMarkdown:", error)
    return text
  }
}
