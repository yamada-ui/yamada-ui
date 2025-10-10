import type { Element, Root } from "hast"
import type { Plugin } from "unified"
import { readdirSync, readFileSync, statSync } from "fs"
import matter from "gray-matter"
import { join } from "path"
import { visit } from "unist-util-visit"
import { extractSlugsFromContent } from "../slug-sync"

const EXCLUDED_DIRECTIVES = ["card-group"]

export function rehypeSlugSync(): ReturnType<Plugin<[], Root>> {
  return function (tree, file) {
    const filePath = file.path

    if (!filePath || typeof filePath !== "string") return

    const { contentPath, locale } = parseFilePath(filePath)

    if (locale === "en") return

    const englishSlugs = getEnglishHeadingSlugs(contentPath)

    if (englishSlugs.length === 0) return

    let headingIndex = 0

    visit(tree, "element", (node: Element) => {
      if (!/^h[1-6]$/.test(node.tagName)) return

      if (headingIndex < englishSlugs.length) {
        node.properties.id = englishSlugs[headingIndex]
      }

      headingIndex++
    })

    if (headingIndex !== englishSlugs.length) {
      const errorMessage = `Heading count mismatch in ${filePath}: Found ${headingIndex} headings but expected ${englishSlugs.length} (from English version)`

      if (process.env.NODE_ENV === "production") {
        console.error("BUILD FAILED: Heading count mismatch detected")
        console.error(errorMessage)
        process.exit(1)
      }

      console.warn(errorMessage)
    }
  }
}

function parseFilePath(filePath: string): {
  contentPath: string
  locale: string
} {
  const contentsIndex = filePath.indexOf("contents/")
  const relativePath =
    contentsIndex !== -1
      ? filePath.slice(contentsIndex + "contents/".length)
      : filePath

  const pathWithoutExt = relativePath.replace(/\.mdx$/, "")
  const lastDotIndex = pathWithoutExt.lastIndexOf(".")

  if (lastDotIndex !== -1) {
    const contentPath = pathWithoutExt.slice(0, lastDotIndex)
    const locale = pathWithoutExt.slice(lastDotIndex + 1)
    return {
      contentPath,
      locale,
    }
  }

  return {
    contentPath: pathWithoutExt,
    locale: "en",
  }
}

function getEnglishHeadingSlugs(contentPath: string): string[] {
  try {
    const filePath = findEnglishMdxFile(contentPath)

    if (!filePath) {
      console.warn(`English MDX file not found for: ${contentPath}`)
      return []
    }

    const fileContent = readFileSync(filePath, "utf-8")
    const { content } = matter(fileContent)

    const pattern = new RegExp(
      `::::(${EXCLUDED_DIRECTIVES.join("|")})[\\s\\S]*?::::`,
      "gm",
    )
    const cleanContent = content.replace(pattern, "")

    return extractSlugsFromContent(cleanContent)
  } catch (error) {
    console.warn(
      `Failed to extract heading slugs from English content for: ${contentPath}`,
      error,
    )
    return []
  }
}

function findEnglishMdxFile(contentPath: string): null | string {
  const contentsDir = join(process.cwd(), "contents")
  const segments = contentPath.split("/")
  let currentDir = contentsDir

  for (const [i, segment] of segments.entries()) {
    const isLastSegment = i === segments.length - 1

    try {
      const entries = readdirSync(currentDir)

      if (isLastSegment) {
        return findFileInLastSegment(currentDir, segment, entries)
      }

      const nextDir = navigateToNextDirectory(currentDir, segment, entries)
      if (!nextDir) return null

      currentDir = nextDir
    } catch {
      return null
    }
  }

  return null
}

function findFileInLastSegment(
  currentDir: string,
  segment: string,
  entries: string[],
): null | string {
  if (entries.includes(`${segment}.mdx`)) {
    return join(currentDir, `${segment}.mdx`)
  }

  if (!entries.includes(segment)) return null

  const segmentPath = join(currentDir, segment)
  if (!statSync(segmentPath).isDirectory()) return null

  const dirEntries = readdirSync(segmentPath)
  if (dirEntries.includes("index.mdx")) {
    return join(segmentPath, "index.mdx")
  }

  return null
}

function navigateToNextDirectory(
  currentDir: string,
  segment: string,
  entries: string[],
): null | string {
  if (!entries.includes(segment)) return null

  const nextPath = join(currentDir, segment)
  return statSync(nextPath).isDirectory() ? nextPath : null
}
