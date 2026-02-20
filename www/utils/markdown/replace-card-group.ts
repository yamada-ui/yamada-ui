export function replaceCardGroup(text: string) {
  try {
    const matches = text.matchAll(/::::card-group\s+([\s\S]+?)\s+::::/g)

    const contents: { content: string; index: number; length: number }[] = []

    for (const match of matches) {
      const [data, items] = match
      const { index } = match
      const length = data.length

      if (!items) continue

      const matches = items.matchAll(/:::card{([^}]+)}([\s\S]+?)\s+:::/g)

      const links: { href: string; description?: string; label: string }[] = []

      for (const [, data, description] of matches) {
        const [, title] = data?.match(/title="([^"]+)"/) ?? []
        const [, href] = data?.match(/href="([^"]+)"/) ?? []

        if (!title || !href) continue

        links.push({ href, description, label: title })
      }

      const content = links
        .map(
          ({ href, description, label }) =>
            `- [${label}](${href})${description ? `: ${description.replaceAll("\n", "").trim()}` : ""}`,
        )
        .join("\n")

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
