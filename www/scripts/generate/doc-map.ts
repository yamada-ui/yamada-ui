/* eslint-disable perfectionist/sort-objects */

import type { Doc } from "#velite"
import type { DocMap } from "@/data"
import type { Lang } from "@/utils/i18n"
import type { Dict } from "@yamada-ui/react"
import { readFile, writeFile } from "fs/promises"
import { createTranslator } from "next-intl"
import path from "path"
import en from "@/messages/en.json"
import ja from "@/messages/ja.json"
import { getLang, langs } from "@/utils/i18n"
import { getPathname } from "@/utils/route"

const messages = { en, ja }

const DATA_PATH = path.resolve("data")

async function getDocMap(): Promise<{ [key in Lang]: DocMap }> {
  const [en, ja] = await Promise.all(
    langs.map(async (lang) => {
      const filePath = path.join(DATA_PATH, `doc-map.${lang}.json`)
      try {
        const data = await readFile(filePath, "utf-8")

        return JSON.parse(data)
      } catch {
        const data = {
          title: lang === "en" ? "Docs" : "ドキュメント",

          segment: "docs",

          items: [],
        }

        await writeFile(filePath, JSON.stringify(data, null, 2))

        return data
      }
    }),
  )

  return { en, ja }
}

async function setDocMap(docMap: { [key in Lang]: DocMap }) {
  await Promise.all(
    Object.entries(docMap).map(async ([lang, data]) => {
      const filePath = path.join(DATA_PATH, `doc-map.${lang}.json`)

      await writeFile(filePath, JSON.stringify(data, null, 2) + "\n")
    }),
  )
}

export default async function main(docs: Doc[]) {
  const docMap = await getDocMap()

  docs.forEach(({ locale, slug, status, title }) => {
    const lang = getLang(locale)
    const t = createTranslator<Dict>({ locale, messages: messages[lang] })

    const items = docMap[lang].items!

    slug.reduce((prev, segment, index) => {
      const last = index === slug.length - 1
      const itemIndex = prev.findIndex((item) => item.segment === segment)
      const omittedSlug = slug.filter((segment) => !segment.match(/^\(|\)$/))

      if (itemIndex !== -1) {
        if (prev[itemIndex]) {
          prev[itemIndex].segment = segment

          if (last) {
            prev[itemIndex].title = title
            prev[itemIndex].status = status
            prev[itemIndex].pathname = getPathname("docs", ...omittedSlug)
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
          })
        } else {
          const title = t(`docs.group.${segment.replace(/^\(|\)$/g, "")}`)

          prev.push({ title, segment, items: [] })
        }
      }

      return prev.at(itemIndex)?.items ?? []
    }, items)
  })

  await setDocMap(docMap)
}
