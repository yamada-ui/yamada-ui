import type { Element } from "hast"
import type { Root } from "mdast"
import type { Plugin } from "unified"
import { readFile } from "fs/promises"
import GithubSlugger from "github-slugger"
import matter from "gray-matter"
import { headingRank } from "hast-util-heading-rank"
import { toString } from "hast-util-to-string"
import { visit } from "unist-util-visit"
import { CONSTANTS } from "@/constants"
import { getLocale, langs } from "@/utils/i18n"

async function getSlugs(path: string) {
  try {
    const slugger = new GithubSlugger()
    const data = await readFile(`${path}.mdx`, "utf-8")
    const { content } = matter(data)
    const slugs: string[] = []
    const regex = /^#{1,6}\s+(.+)$/gm

    let match

    while ((match = regex.exec(content)) !== null) {
      const [, content] = match

      if (!content) continue

      slugs.push(
        slugger.slug(content.trim().replace(/\s*\{#[a-z0-9-]+\}\s*$/i, "")),
      )
    }

    return slugs
  } catch {
    console.warn(`${path}.mdx not found. Please create it.`)
  }
}

function getPath(filePath: string) {
  const [, path, lang] =
    filePath
      .replace(/\.mdx$/, "")
      .match(new RegExp(`^(.*?)(?:\.(${langs.join("|")}))?$`)) ?? []
  const locale = getLocale(lang)

  return { locale, path: path! }
}

export function rehypeSlug(): ReturnType<Plugin<[], Root>> {
  return async function (tree, file) {
    const { locale, path } = getPath(file.path)

    if (locale === CONSTANTS.I18N.DEFAULT_LOCALE) {
      const slugger = new GithubSlugger()

      visit(tree, "element", function (node: Element) {
        if (!headingRank(node) || node.properties.id) return

        node.properties.id = slugger.slug(toString(node))
      })
    } else {
      const slugs = await getSlugs(path)

      if (!slugs) return

      let index = 0

      visit(tree, "element", function (node: Element) {
        if (!headingRank(node) || node.properties.id) return

        if (index < slugs.length) node.properties.id = slugs[index]

        index++
      })

      if (index === slugs.length) return

      const message = `Heading count mismatch in ${file.path}. Please check the heading count and the slug count.`

      if (process.env.NODE_ENV === "production") {
        console.error(message)

        process.exit(1)
      } else {
        console.warn(message)
      }
    }
  }
}

interface TocEntry {
  items: TocEntry[]
  title: string
  url: string
}

export async function transformToc(toc: TocEntry[], filePath: string) {
  const { locale, path } = getPath(filePath)

  if (locale === CONSTANTS.I18N.DEFAULT_LOCALE) {
    return toc
  } else {
    const slugs = await getSlugs(path)

    if (!slugs) return toc

    let index = 0

    function func(toc: TocEntry[]) {
      return toc.map((item) => {
        if (index < slugs!.length) item.url = `#${slugs![index]}`

        index++

        item.items = func(item.items)

        return item
      })
    }

    return func(toc)
  }
}
