import * as p from "@clack/prompts"
import c from "chalk"
import { program } from "commander"
import { existsSync } from "fs"
import { readdir, readFile, writeFile } from "fs/promises"
import matter from "gray-matter"
import { prettier } from "libs/prettier"
import toc from "markdown-toc"
import { getResolvedPath } from "utils/path"
import { otherLocales } from "../../utils/i18n"

interface Content {
  type: "fragment" | "page"
  hierarchy: {
    lv1: string
    lv2?: string
    lv3?: string
    lv4?: string
  }
  slug: string
  title: string
  description?: string
}

const getRecursivePaths = async (path: string): Promise<string[]> => {
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
  (path: string = getResolvedPath("contents")) =>
  async (_, s): Promise<string[]> => {
    s.start(`Getting the Yamada UI document paths`)

    const paths = getRecursivePaths(path)

    s.stop(`Got the Yamada UI document paths`)

    return paths
  }

const getReducePaths: p.RequiredRunner =
  (paths: string[]) =>
  (_, s): { [key: string]: string[] } => {
    s.start(`Groping the document paths`)

    const resolvedPaths: { [key: string]: string[] } = {}

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
  path = path.replace(new RegExp(`^${getResolvedPath("contents")}`), "")
  path = path.replace(
    new RegExp(`(/index)?(.(${otherLocales.join("|")}))?.mdx$`),
    "",
  )

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
  (paths: { [key: string]: string[] }) => async (p, s) => {
    s.start(`Generating table of contents and writing files`)

    let wroteList: string[] = []

    await Promise.all(
      Object.entries(paths).map(async ([lang, paths]) => {
        const contents = (
          await Promise.all(
            paths.map(async (path) => {
              const file = await readFile(path, "utf8")

              const { content, data } = matter(file)

              if (!Object.keys(data).length) return []

              let { description, title } = data

              const slug = getSlug(path)

              if (slug.startsWith("/changelog")) return []

              const isTab = await getIsTab(paths, slug)

              if (isTab) return []

              title = formatTitle(title)

              const contents: Content[] = [
                {
                  type: "page",
                  description,
                  hierarchy: { lv1: title },
                  slug,
                  title,
                },
              ]

              const tableOfContents = toc(content).json

              tableOfContents.forEach((item, index) => {
                const prevTableOfContents = tableOfContents.slice(0, index)
                const fragment = "#" + item.slug

                item.content = formatTitle(item.content)

                const content: Content = {
                  type: "fragment",
                  hierarchy: { lv1: title },
                  slug: slug + fragment,
                  title: item.content,
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
                    ({ lvl }) => lv3Item && lvl < lv3Item.lvl,
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
