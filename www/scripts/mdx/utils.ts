import type { Document, DocumentContent, DocumentLevel } from "mdx"
import { CONSTANT } from "constant"
import GithubSlugger from "github-slugger"
import path from "path"
import { otherLocales } from "utils/i18n"

export type EventName = "add" | "addDir" | "change" | "unlink" | "unlinkDir"
export interface DocumentMap {
  [key: string]: { [key: string]: Document }
}

export const MDX_PATH = path.join(process.cwd(), ".mdx")
export const OTHER_LOCALES = `(${otherLocales.join("|")})`

export function getLocale(filePath: string): string {
  return (
    filePath.match(/\.([^\d.]+)\.mdx$/)?.[1] || CONSTANT.I18N.DEFAULT_LOCALE
  )
}

export function isDefaultLocale(locale: string) {
  return locale === CONSTANT.I18N.DEFAULT_LOCALE
}

export function getSlug(filePath: string): string {
  return filePath
    .replace(/^contents\//, "")
    .replace(new RegExp(`\(/index\)?\(.${OTHER_LOCALES}\)?.mdx$`), "")
}

export function getEditUrl(filePath: string): string {
  return `${CONSTANT.SNS.GITHUB.DOC_EDIT_URL}/${filePath.replace(/^contents\//, "")}`
}

export function getTableOfContents(
  raw: string,
  maxLv = Infinity,
): DocumentContent[] {
  const slugger = new GithubSlugger()

  raw = raw.replace(/```[\s\S]*?```/g, "")

  const matches = [...raw.matchAll(/^(## |### |#### )(.*)\n/gm)]

  if (!matches.length) return []

  return matches
    .map((match, index) => {
      const nextMatch = matches[index + 1]
      const title = match[2]?.trim() ?? ""
      const lv = ((match[1]?.trim().split("#").length ?? 0) -
        1) as DocumentLevel

      const id = slugger.slug(title, false)

      const propMatches = [
        ...raw
          .slice(Number(match.index), nextMatch?.index)
          .matchAll(/<PropsCard\s+[^>]*?name="([^"]+)"/g),
      ]

      let results: DocumentContent[] = [{ id, lv, title }]

      if (propMatches.length) {
        const props = propMatches.map((match) => {
          const title = match[1]?.trim() ?? ""

          return {
            id: `${id.replace("props", "")}-${title.toLowerCase()}`,
            lv: (lv + 1) as DocumentLevel,
            title,
          }
        })

        results = [...results, ...props]
      }

      return results
    })
    .flat()
    .filter(({ lv }) => maxLv >= lv)
}
