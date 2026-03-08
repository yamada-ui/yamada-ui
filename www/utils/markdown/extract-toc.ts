import GithubSlugger from "github-slugger"

interface TocEntry {
  items: TocEntry[]
  title: string
  url: string
}

export function extractToc(content: string): TocEntry[] {
  const slugger = new GithubSlugger()
  const regex = /^(#{2,6})\s+(.+)$/gm
  const result: TocEntry[] = []
  const stack: { entry: TocEntry; level: number }[] = []

  let match

  while ((match = regex.exec(content)) !== null) {
    const level = match[1]!.length
    const title = match[2]!.trim().replace(/\s*\{#[a-z0-9-]+\}\s*$/i, "")
    const entry: TocEntry = {
      items: [],
      title,
      url: `#${slugger.slug(title)}`,
    }

    while (stack.length > 0 && stack[stack.length - 1]!.level >= level) {
      stack.pop()
    }

    if (stack.length === 0) {
      result.push(entry)
    } else {
      stack[stack.length - 1]!.entry.items.push(entry)
    }

    stack.push({ entry, level })
  }

  return result
}
