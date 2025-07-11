/* eslint-disable perfectionist/sort-objects */

import type { Doc } from "#velite"
import type { DocMap } from "@/data"
import type { Lang } from "@/utils/i18n"
import type { Dict } from "@yamada-ui/react"
import { readFile } from "fs/promises"
import { createTranslator } from "next-intl"
import path from "path"
import { writeFileWithFormat } from "@/libs/prettier"
import { getLang, langs } from "@/utils/i18n"
import { getPathname } from "@/utils/route"

const MESSAGES_PATH = path.resolve("messages")
const DATA_PATH = path.resolve("data")

async function getDocMap(): Promise<{ [key in Lang]: DocMap }> {
  const data = await Promise.all(
    langs.map(async (lang) => {
      const filePath = path.join(DATA_PATH, `doc-map.${lang}.json`)
      try {
        const data = await readFile(filePath, "utf-8")

        return [lang, JSON.parse(data)]
      } catch {
        const data = {
          title: lang === "en" ? "Docs" : "ドキュメント",

          segment: "docs",

          items: [],
        }

        await writeFileWithFormat(filePath, data)

        return [lang, data]
      }
    }),
  )

  return Object.fromEntries(data)
}

async function setDocMap(docMap: { [key in Lang]: DocMap }) {
  await Promise.all(
    Object.entries(docMap).map(async ([lang, data]) => {
      const filePath = path.join(DATA_PATH, `doc-map.${lang}.json`)

      await writeFileWithFormat(filePath, data)
    }),
  )
}

function omitDocMap(docMap: DocMap) {
  if (!docMap.items) return docMap

  docMap.items = docMap.items
    .filter((item) => item.__exists)
    .map(({ __exists, ...rest }) => {
      if (rest.items) return omitDocMap(rest)

      return rest
    })

  return docMap
}

export default async function main(docs: Doc[]) {
  const docMap = await getDocMap()

  for (let { locale, status, path, title } of docs) {
    const lang = getLang(locale)
    const messages = (
      await import(`${MESSAGES_PATH}/${lang}.json`, {
        with: { type: "json" },
      })
    ).default
    const t = createTranslator<Dict>({ locale, messages })
    const omittedPath = path.replace(/\.mdx$/, "").replace(/\..*$/, "")
    const slug = (
      omittedPath.endsWith("/index")
        ? omittedPath.replace(/\/index$/, "")
        : omittedPath
    )!.split("/")
    const items = docMap[lang].items!

    slug.reduce((prev, segment, index) => {
      const last = index === slug.length - 1
      const itemIndex = prev.findIndex((item) => item.segment === segment)
      const omittedSlug = slug.filter((segment) => !segment.match(/^\(|\)$/))

      if (itemIndex !== -1) {
        if (prev[itemIndex]) {
          prev[itemIndex].__exists = true
          prev[itemIndex].segment = segment

          if (last) {
            prev[itemIndex].title = title
            prev[itemIndex].pathname = getPathname("docs", ...omittedSlug)

            if (status) {
              prev[itemIndex].status = status
            } else {
              delete prev[itemIndex].status
            }
          } else {
            if (segment.match(/^\(|\)$/)) {
              const title = t(`docs.group.${segment.replace(/^\(|\)$/g, "")}`)

              prev[itemIndex].title = title
            }

            if (!prev[itemIndex].items)
              prev[itemIndex] = { ...prev[itemIndex], items: [] }
          }
        }
      } else {
        if (last) {
          prev.push({
            title,
            segment,
            pathname: getPathname("docs", ...omittedSlug),
            status,
            __exists: true,
          })
        } else {
          const title = t(`docs.group.${segment.replace(/^\(|\)$/g, "")}`)

          prev.push({ title, segment, items: [], __exists: true })
        }
      }

      return prev.at(itemIndex)?.items ?? []
    }, items)
  }

  const omittedDocMap = Object.fromEntries(
    Object.entries(docMap).map(([lang, data]) => [lang, omitDocMap(data)]),
  ) as { [key in Lang]: DocMap }

  await setDocMap(omittedDocMap)
}
