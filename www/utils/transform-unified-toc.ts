import { readFileSync } from "fs"
import matter from "gray-matter"
import { join } from "path"
import { extractSlugsFromContent } from "./slug-sync"

export function transformUnifiedToc<T extends { url: string; items?: T[] }>(
  toc: T[],
  filePath: string,
): T[] {
  const englishSlugs = getEnglishHeadingSlugsFromPath(filePath)
  return mapTocWithSlugs(toc, englishSlugs)
}

function mapTocWithSlugs<T extends { url: string; items?: T[] }>(
  tocItems: T[],
  englishSlugs: string[],
): T[] {
  let slugIndex = 0

  function syncRecursive(items: T[]): T[] {
    return items.map((item) => {
      const newUrl =
        slugIndex < englishSlugs.length
          ? `#${englishSlugs[slugIndex]}`
          : item.url
      slugIndex++

      return {
        ...item,
        items:
          item.items && item.items.length > 0
            ? syncRecursive(item.items)
            : item.items,
        url: newUrl,
      }
    })
  }

  return syncRecursive(tocItems)
}

export function getEnglishHeadingSlugsFromPath(filePath: string): string[] {
  try {
    const basePath = stripLocaleSuffix(filePath)
    const englishFilePath = join(process.cwd(), "contents", `${basePath}.mdx`)

    const fileContent = readFileSync(englishFilePath, "utf-8")
    const { content } = matter(fileContent)

    return extractSlugsFromContent(content)
  } catch (error) {
    console.warn(
      `Failed to read English MDX file for slug synchronization: ${filePath}`,
      error,
    )
    return []
  }
}

const LOCALE_RE = /^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/i

const stripLocaleSuffix = (filePath: string): string => {
  const withoutExt = filePath.replace(/\.mdx$/i, "")

  const lastDot = withoutExt.lastIndexOf(".")
  if (lastDot === -1) return withoutExt

  const maybeLocale = withoutExt.slice(lastDot + 1)
  if (!LOCALE_RE.test(maybeLocale)) return withoutExt

  return withoutExt.slice(0, lastDot)
}
