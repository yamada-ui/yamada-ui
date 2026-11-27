import type { Doc } from "#velite"
import type { FragmentContent, Hit } from "@/data/search"
import { writeFileWithFormat } from "@yamada-ui/workspace/oxfmt"
import path from "node:path"
import { CONSTANTS } from "@/constants"
import { getLang } from "@/utils/i18n"
import { getPathname } from "@/utils/route"

const DATA_PATH = path.resolve("data")

function getFragments(
  toc: Doc["toc"],
  hierarchy: FragmentContent["hierarchy"],
  pathname: string,
  group?: string,
  level = 2,
): FragmentContent[] {
  return toc.flatMap(({ items, title, url }) => {
    const nextHierarchy = { ...hierarchy, [level]: title }

    return [
      {
        type: "fragment",
        group,
        hierarchy: nextHierarchy,
        pathname: `${pathname}${url}`,
        title,
      },
      ...getFragments(items, nextHierarchy, pathname, group, level + 1),
    ]
  })
}

function getSearchContents(docs: Doc[]): Hit[] {
  const titles = new Map(docs.map(({ pathname, title }) => [pathname, title]))

  return docs
    .toSorted(({ pathname: a }, { pathname: b }) =>
      a < b ? -1 : a > b ? 1 : 0,
    )
    .flatMap(({ pathname, slug, title, toc }) => {
      const [section, page] = slug
      const group =
        section && page ? titles.get(getPathname("docs", section)) : undefined

      return [
        { type: "page", group, pathname, title },
        ...getFragments(toc, { 1: title }, pathname, group),
      ]
    })
}

export async function generateDocSearch(docs: Doc[]) {
  await Promise.all(
    CONSTANTS.I18N.LOCALES.map((locale) => {
      const contents = getSearchContents(
        docs.filter((doc) => doc.locale === locale),
      )
      const file = path.join(DATA_PATH, `doc-search.${getLang(locale)}.json`)

      return writeFileWithFormat(file, JSON.stringify(contents))
    }),
  )
}
