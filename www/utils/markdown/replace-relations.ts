import type { Locale } from "../i18n"
import type { Relations } from "@/data"
import { readFile } from "fs/promises"
import { glob } from "glob"
import matter from "gray-matter"
import path from "path"
import data from "@/data/relations.json"
import { getLang } from "../i18n"

const relations = data as Relations

function getContent(locale: Locale) {
  const lang = getLang(locale)

  return async function (category: "components" | "hooks", data: string[]) {
    const results = await Promise.all(
      data.map(async (name) => {
        const filePaths = await glob(
          path.resolve("contents", category, "**", "*.mdx"),
        )

        const targetFilePath = filePaths.find((filePath) => {
          return (
            path.basename(filePath) ===
            (lang === "en" ? `${name}.mdx` : `${name}.${lang}.mdx`)
          )
        })

        if (!targetFilePath) return null

        const content = await readFile(targetFilePath, "utf-8")
        const { data } = matter(content)
        const pathname = `/docs/${category}/${name}`

        return `- [${data.title}](${pathname}): ${data.description}`
      }),
    )

    return results.filter(Boolean).join("\n")
  }
}

export async function replaceRelations(text: string, locale: Locale) {
  try {
    for (const [name, key] of [
      ["Similar", "resembles"],
      ["Uses", "dependencies"],
      ["UsedBy", "dependents"],
    ] as const) {
      const matches = text.matchAll(
        new RegExp(`<${name}(?:\\s+name="([^"]+)")?\\s*\\/>`, "g"),
      )

      for (const match of matches) {
        const name = match[1]

        if (!name) continue

        const target = match[0]

        const data = relations[name]?.[key]

        if (!data) continue

        const content = Array.isArray(data)
          ? await getContent(locale)("components", data)
          : [
              await getContent(locale)("components", data.components),
              await getContent(locale)("hooks", data.hooks),
            ].join("\n\n")

        text = text.replace(target, content)
      }
    }

    return text
  } catch {
    return text
  }
}
