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

const DATA_PATH = path.join(process.cwd(), "data")

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

  docs.forEach(({ category, locale, slug, status, title }) => {
    const lang = getLang(locale)
    const t = createTranslator<Dict>({ locale, messages: messages[lang] })

    let items = docMap[lang].items

    if (category) slug = [...slug.slice(0, -1), category, ...slug.slice(-1)]

    slug.reduce((prev, segment, index) => {
      const last = index === slug.length - 1
      const itemIndex =
        prev?.findIndex((item) => item.segment === segment) ?? -1

      if (itemIndex !== -1) {
        if (prev?.[itemIndex]) {
          prev[itemIndex].segment = segment

          if (last) {
            prev[itemIndex].title = title
            prev[itemIndex].status = status
            prev[itemIndex].pathname = getPathname("docs", ...slug)
          } else {
            if (!prev[itemIndex].items) prev[itemIndex].items = []
          }
        }
      } else {
        if (last) {
          prev?.push({
            title,
            segment,
            pathname: getPathname("docs", ...slug),
            status,
          })
        } else {
          const title = t(`docs.category.${segment}`)

          prev?.push({ title, segment, items: [] })
        }
      }

      return prev?.at(itemIndex)?.items ?? []
    }, items)
  })

  await setDocMap(docMap)
}
