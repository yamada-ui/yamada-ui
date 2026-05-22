import { HttpsProxyAgent } from "https-proxy-agent"
import fetch from "node-fetch"

const agent = process.env.https_proxy
  ? new HttpsProxyAgent(process.env.https_proxy)
  : undefined

export function buildUrl(path: string | undefined, lang: string): string {
  if (!path) return "https://yamada-ui.com/llms.txt"

  const prefix = lang === "ja" ? "/ja" : ""

  return `https://yamada-ui.com${prefix}${path}.md`
}

export async function fetchDoc(url: string): Promise<string> {
  const res = await fetch(url, { agent })

  if (!res.ok) {
    const docPath = new URL(url).pathname.replace(/\.md$/, "")

    throw new Error(`Documentation not found: ${docPath}`)
  }

  return res.text()
}

function headingToSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export function trimToSection(content: string, hash: string): string {
  const slug = hash.startsWith("#") ? hash.slice(1) : hash
  const lines = content.split("\n")
  const headingRegex = /^#{1,6}\s+(.+)$/

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i]!.match(headingRegex)

    if (match && headingToSlug(match[1]!) === headingToSlug(slug)) {
      return lines.slice(i).join("\n")
    }
  }

  throw new Error(`Section not found: #${slug}`)
}
