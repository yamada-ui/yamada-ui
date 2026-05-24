import { HttpsProxyAgent } from "https-proxy-agent"
import fetch from "node-fetch"
import c from "picocolors"
import { DOCS_BASE_URL } from "../../constant"

const proxyUrl = process.env.https_proxy ?? process.env.HTTPS_PROXY
const agent = proxyUrl ? new HttpsProxyAgent(proxyUrl) : undefined

export function buildUrl(path: string | undefined, lang: string): string {
  if (!path) return `${DOCS_BASE_URL}/llms.txt`

  const prefix = lang === "ja" ? "/ja" : ""
  const normalized = path.startsWith("/") ? path : `/${path}`

  return `${DOCS_BASE_URL}${prefix}${normalized.replace(/\.md$/, "")}.md`
}

export async function fetchDoc(url: string): Promise<string> {
  const res = await fetch(url, { agent })

  if (!res.ok) {
    const docPath = new URL(url).pathname.replace(/\.md$/, "")

    throw new Error(`Documentation not found: ${c.yellow(docPath)}`)
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

function extractSection(lines: string[], startIndex: number): string {
  const headingRegex = /^#{1,6}\s+(.+)$/
  const level = (lines[startIndex]!.match(/^(#{1,6})/)?.[1] ?? "").length
  let end = lines.length

  for (let j = startIndex + 1; j < lines.length; j++) {
    const nextMatch = lines[j]!.match(headingRegex)

    if (nextMatch) {
      const nextLevel = (lines[j]!.match(/^(#{1,6})/)?.[1] ?? "").length

      if (nextLevel <= level) {
        end = j
        break
      }
    }
  }

  return lines.slice(startIndex, end).join("\n")
}

export function findHeadingIndex(content: string, hash: string): number {
  const slug = hash.startsWith("#") ? hash.slice(1) : hash
  const lines = content.split("\n")
  const headingRegex = /^#{1,6}\s+(.+)$/
  let headingIndex = 0

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i]!.match(headingRegex)

    if (match) {
      if (headingToSlug(match[1]!) === headingToSlug(slug)) return headingIndex

      headingIndex++
    }
  }

  return -1
}

export function trimToSection(content: string, hash: string): string {
  const slug = hash.startsWith("#") ? hash.slice(1) : hash
  const lines = content.split("\n")
  const headingRegex = /^#{1,6}\s+(.+)$/

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i]!.match(headingRegex)

    if (match && headingToSlug(match[1]!) === headingToSlug(slug)) {
      return extractSection(lines, i)
    }
  }

  throw new Error(`Section not found: ${c.yellow(`#${slug}`)}`)
}

export function extractSections(content: string): string {
  return content
    .split("\n")
    .filter((line) => /^#{1,6}\s+/.test(line))
    .join("\n")
}

export function trimToSectionByIndex(
  content: string,
  headingIndex: number,
  hash: string,
): string {
  const lines = content.split("\n")
  const headingRegex = /^#{1,6}\s+(.+)$/
  let currentIndex = 0

  for (let i = 0; i < lines.length; i++) {
    const match = lines[i]!.match(headingRegex)

    if (match) {
      if (currentIndex === headingIndex) return extractSection(lines, i)

      currentIndex++
    }
  }

  throw new Error(`Section not found: ${c.yellow(`#${hash}`)}`)
}
