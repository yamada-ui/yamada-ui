import { HttpsProxyAgent } from "https-proxy-agent"
import fetch from "node-fetch"
import { createHash } from "node:crypto"
import { lstatSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { homedir } from "node:os"
import { join } from "node:path"
import c from "picocolors"
import { DOCS_BASE_URL } from "../../constant"

const proxyUrl = process.env.https_proxy ?? process.env.HTTPS_PROXY
const agent = proxyUrl ? new HttpsProxyAgent(proxyUrl) : undefined

const CACHE_DIR = join(
  process.env.XDG_CACHE_HOME || join(homedir(), ".cache"),
  "yamada-ui",
  "docs",
)
const CACHE_TTL = 10 * 60 * 1000

const HEADING_REGEX = /^(#{1,6})\s+(.+)$/
const FENCE_REGEX = /^ {0,3}(`{3,}|~{3,})(.*)$/

interface CacheEntry {
  content: string
  timestamp: number
}

interface Heading {
  level: number
  line: number
  text: string
}

function getCachePath(url: string): string {
  const hash = createHash("md5").update(url).digest("hex")
  return join(CACHE_DIR, hash)
}

function isPrivate(path: string): boolean {
  if (!process.getuid) return true

  const stats = lstatSync(path)

  return stats.uid === process.getuid() && (stats.mode & 0o022) === 0
}

function readCache(url: string): string | undefined {
  try {
    const path = getCachePath(url)

    if (!isPrivate(CACHE_DIR) || !isPrivate(path)) return undefined

    const entry = JSON.parse(readFileSync(path, "utf-8")) as CacheEntry
    if (Date.now() - entry.timestamp < CACHE_TTL) return entry.content
  } catch {
    return undefined
  }
}

function writeCache(url: string, content: string): void {
  try {
    mkdirSync(CACHE_DIR, { mode: 0o700, recursive: true })

    if (!isPrivate(CACHE_DIR)) return

    const entry: CacheEntry = { content, timestamp: Date.now() }
    writeFileSync(getCachePath(url), JSON.stringify(entry), { mode: 0o600 })
  } catch {
    return
  }
}

export function buildUrl(path: string | undefined, lang: string): string {
  if (!path) return `${DOCS_BASE_URL}/llms.txt`

  const prefix = lang === "ja" ? "/ja" : ""
  let normalized = path.startsWith("/") ? path : `/${path}`

  if (!normalized.startsWith("/docs")) normalized = `/docs${normalized}`

  return `${DOCS_BASE_URL}${prefix}${normalized.replace(/\.md$/, "")}.md`
}

export async function fetchDoc(url: string): Promise<string> {
  const cached = readCache(url)
  if (cached !== undefined) return cached

  const res = await fetch(url, { agent })

  if (!res.ok) {
    const docPath = new URL(url).pathname.replace(/\.md$/, "")

    throw new Error(`Documentation not found: ${c.yellow(docPath)}`)
  }

  const content = await res.text()
  writeCache(url, content)
  return content
}

function headingToSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
}

function findHeadings(lines: string[]): Heading[] {
  const headings: Heading[] = []
  let fence: string | undefined

  lines.forEach((line, index) => {
    const fenceMatch = line.match(FENCE_REGEX)

    if (fenceMatch) {
      const [, marker, info] = fenceMatch as [string, string, string]

      if (!fence) fence = marker
      else if (marker.startsWith(fence) && !info.trim()) fence = undefined

      return
    }

    if (fence) return

    const match = line.match(HEADING_REGEX)

    if (match)
      headings.push({ level: match[1]!.length, line: index, text: match[2]! })
  })

  return headings
}

function extractSection(
  lines: string[],
  headings: Heading[],
  position: number,
): string {
  const start = headings[position]!
  const end = headings
    .slice(position + 1)
    .find(({ level }) => level <= start.level)

  return lines.slice(start.line, end?.line).join("\n")
}

export function findHeadingIndex(content: string, hash: string): number {
  const slug = headingToSlug(hash.startsWith("#") ? hash.slice(1) : hash)

  return findHeadings(content.split("\n")).findIndex(
    ({ text }) => headingToSlug(text) === slug,
  )
}

export function trimToSection(content: string, hash: string): string {
  const slug = hash.startsWith("#") ? hash.slice(1) : hash
  const position = findHeadingIndex(content, slug)

  if (position === -1)
    throw new Error(`Section not found: ${c.yellow(`#${slug}`)}`)

  const lines = content.split("\n")

  return extractSection(lines, findHeadings(lines), position)
}

export function extractSections(content: string): string {
  const lines = content.split("\n")
  const headings = findHeadings(lines)

  if (headings.length === 0) return ""

  return headings.map(({ line }) => lines[line]).join("\n") + "\n"
}

export function trimToSectionByIndex(
  content: string,
  headingIndex: number,
  hash: string,
): string {
  const lines = content.split("\n")
  const headings = findHeadings(lines)

  if (!headings[headingIndex])
    throw new Error(`Section not found: ${c.yellow(`#${hash}`)}`)

  return extractSection(lines, headings, headingIndex)
}
