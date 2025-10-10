import GithubSlugger from "github-slugger"

export function extractSlugsFromContent(content: string): string[] {
  const slugger = new GithubSlugger()
  const slugs: string[] = []

  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2]?.trim()
    if (!text) continue
    const cleanText = text.replace(/\s*\{#[a-z0-9-]+\}\s*$/i, "")
    slugs.push(slugger.slug(cleanText))
  }

  return slugs
}
