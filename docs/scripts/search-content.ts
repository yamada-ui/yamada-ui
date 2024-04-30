import { existsSync } from "fs"
import { readFile, readdir, writeFile } from "fs/promises"
import * as p from "@clack/prompts"
import c from "chalk"
import { program } from "commander"
import matter from "gray-matter"
import toc from "markdown-toc"
import { otherLocales } from "../utils/i18n"
import { prettier } from "libs/prettier"

type Content = {
  title: string
  type: "page" | "fragment"
  description?: string
  slug: string
  hierarchy: {
    lv1: string
    lv2?: string
    lv3?: string
    lv4?: string
  }
}

type TableOfContent = {
  content: string
  slug: string
  lvl: 1 | 2 | 3 | 4
}

const getRecursivePaths = async (path: string) => {
  try {
    const dirents = await readdir(path, { withFileTypes: true })

    return (
      await Promise.all(
        dirents.flatMap(async (dirent) => {
          const resolvedPath = `${path}/${dirent.name}`

          if (dirent.isDirectory()) {
            return await getRecursivePaths(resolvedPath)
          } else {
            return resolvedPath
          }
        }),
      )
    ).flat()
  } catch {
    const isExist = existsSync(path)

    return isExist ? [path] : []
  }
}

const getPaths: p.RequiredRunner =
  (path: string = "contents") =>
  async (p, s): Promise<string[]> => {
    s.start(`Getting the Yamada UI document paths`)

    const paths = getRecursivePaths(path)

    s.stop(`Got the Yamada UI document paths`)

    return paths
  }

const getReducePaths: p.RequiredRunner =
  (paths: string[]) =>
  (p, s): Record<string, string[]> => {
    s.start(`Groping the document paths`)

    const resolvedPaths: Record<string, string[]> = {}

    paths.forEach((path) => {
      if (path.endsWith(".ja.mdx")) {
        resolvedPaths.ja = [...(resolvedPaths.ja ?? []), path]
      } else {
        resolvedPaths.en = [...(resolvedPaths.en ?? []), path]

        const notExistLocales = otherLocales.filter((locale) => {
          const targetPath = path.replace(/\.mdx$/, `.${locale}.mdx`)

          return !paths.some(
            (otherLocalePath) => otherLocalePath === targetPath,
          )
        })

        if (notExistLocales.length) {
          notExistLocales.forEach((locale) => {
            resolvedPaths[locale] = [...(resolvedPaths[locale] ?? []), path]
          })
        }
      }
    })

    s.stop(`Grouped the document paths`)

    return resolvedPaths
  }

const getSlug = (path: string) => {
  const reg = new RegExp(`(/index)?(.(${otherLocales.join("|")}))?.mdx$`)

  path = path.replace(/^contents/, "")
  path = path.replace(reg, "")

  return path
}

const getIsTab = async (paths: string[], slug: string) => {
  const parentPath = paths.find(
    (path) => getSlug(path) === slug.slice(0, slug.lastIndexOf("/")),
  )

  if (!parentPath) return false

  const file = await readFile(parentPath, "utf8")

  const { data } = matter(file)

  return !!data.is_tabs
}

const formatTitle = (value: string) => value.replace(/`/g, "")

const generateSearchContent: p.RequiredRunner =
  (paths: Record<string, string[]>) => async (p, s) => {
    s.start(`Generating table of contents and writing files`)

    let wroteList: string[] = []

    await Promise.all(
      Object.entries(paths).map(async ([lang, paths]) => {
        const contents = (
          await Promise.all(
            paths.map(async (path) => {
              const file = await readFile(path, "utf8")

              const { data, content } = matter(file)

              if (!Object.keys(data).length) return []

              let { title, description } = data

              const slug = getSlug(path)

              if (slug.startsWith("/changelog")) return []

              const isTab = await getIsTab(paths, slug)

              if (isTab) return []

              title = formatTitle(title)

              const contents: Content[] = [
                {
                  title,
                  type: "page",
                  description,
                  slug,
                  hierarchy: { lv1: title },
                },
              ]

              const tableOfContents = toc(content).json as TableOfContent[]

              tableOfContents.forEach((item, index) => {
                const prevTableOfContents = tableOfContents.slice(0, index)
                const fragment = "#" + item.slug

                item.content = formatTitle(item.content)

                const content: Content = {
                  title: item.content,
                  type: "fragment",
                  slug: slug + fragment,
                  hierarchy: { lv1: title },
                }

                if (item.lvl <= 2) {
                  content.hierarchy.lv2 = item.content
                }

                if (item.lvl === 3) {
                  const lv2Item = prevTableOfContents.findLast(
                    ({ lvl }) => lvl < item.lvl,
                  )

                  if (!lv2Item) {
                    content.hierarchy.lv2 = item.content
                  } else {
                    content.hierarchy.lv2 = formatTitle(lv2Item.content)
                    content.hierarchy.lv3 = item.content
                  }
                }

                if (item.lvl === 4) {
                  const lv3Item = prevTableOfContents.findLast(
                    ({ lvl }) => lvl < item.lvl,
                  )
                  const lv2Item = prevTableOfContents.findLast(
                    ({ lvl }) => lvl < lv3Item?.lvl,
                  )

                  if (!lv3Item) {
                    content.hierarchy.lv2 = item.content
                  } else if (!lv2Item) {
                    content.hierarchy.lv2 = formatTitle(lv3Item.content)
                    content.hierarchy.lv3 = item.content
                  } else {
                    content.hierarchy.lv2 = formatTitle(lv2Item.content)
                    content.hierarchy.lv3 = formatTitle(lv3Item.content)
                    content.hierarchy.lv4 = item.content
                  }
                }

                contents.push(content)
              })

              return contents
            }),
          )
        ).flat()

        const data = await prettier(JSON.stringify(contents), {
          parser: "json",
        })

        const outPath = `i18n/content.${lang}.json`

        await writeFile(outPath, data)

        wroteList = [...wroteList, outPath]
      }),
    )

    s.stop(`Wrote files`)

    const message = wroteList
      .map((item) => `- ${item}`)
      .join("\n")
      .trim()

    p.note(message, "Generated search contents")
  }

program.action(async () => {
  p.intro(c.magenta(`Generating Yamada UI document search content`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const paths = await getPaths()(p, s)
    const resolvedPaths = getReducePaths(paths)(p, s)
    await generateSearchContent(resolvedPaths)(p, s)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
})

program.parse()
