import { existsSync } from 'fs'
import { readFile, readdir, writeFile } from 'fs/promises'
import chalk from 'chalk'
import { program } from 'commander'
import matter from 'gray-matter'
import toc from 'markdown-toc'
import ora from 'ora'
import { otherLocales } from '../utils/i18n'
import { prettier } from 'libs/prettier'

type Content = {
  title: string
  type: 'page' | 'fragment'
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

const getPaths = async (path: string = 'contents'): Promise<string[]> => {
  try {
    const dirents = await readdir(path, { withFileTypes: true })

    return (
      await Promise.all(
        dirents.flatMap(async (dirent) => {
          if (dirent.isDirectory()) {
            return await getPaths(`${path}/${dirent.name}`)
          } else {
            return `${path}/${dirent.name}`
          }
        }),
      )
    ).flat()
  } catch {
    const isExist = existsSync(path)

    return isExist ? [path] : []
  }
}

const getReducePaths = (paths: string[]): Record<string, string[]> => {
  const resolvedPaths: Record<string, string[]> = {}

  paths.forEach((path) => {
    if (path.endsWith('.ja.mdx')) {
      resolvedPaths.ja = [...(resolvedPaths.ja ?? []), path]
    } else {
      resolvedPaths.en = [...(resolvedPaths.en ?? []), path]

      const notExistLocales = otherLocales.filter((locale) => {
        const targetPath = path.replace(/\.mdx$/, `.${locale}.mdx`)

        return !paths.some((otherLocalePath) => otherLocalePath === targetPath)
      })

      if (notExistLocales.length) {
        notExistLocales.forEach((locale) => {
          resolvedPaths[locale] = [...(resolvedPaths[locale] ?? []), path]
        })
      }
    }
  })

  return resolvedPaths
}

const getSlug = (path: string) => {
  const reg = new RegExp(`(/index)?(.(${otherLocales.join('|')}))?.mdx$`)

  path = path.replace(/^contents/, '')
  path = path.replace(reg, '')

  return path
}

const getIsTab = async (paths: string[], slug: string) => {
  const parentPath = paths.find((path) => getSlug(path) === slug.slice(0, slug.lastIndexOf('/')))

  if (!parentPath) return false

  const file = await readFile(parentPath, 'utf8')

  const { data } = matter(file)

  return !!data.is_tabs
}

program.action(async () => {
  const hrtime = process.hrtime()
  const spinner = ora('Generating search content files').start()

  try {
    if (spinner) spinner.text = `Read files...`

    const paths = await getPaths()
    const resolvedPaths = getReducePaths(paths)

    await Promise.all(
      Object.entries(resolvedPaths).map(async ([lang, paths]) => {
        const contents = (
          await Promise.all(
            paths.map(async (path) => {
              const file = await readFile(path, 'utf8')

              const { data, content } = matter(file)
              const { title, description } = data
              const slug = getSlug(path)

              if (slug.startsWith('/changelog')) return []

              const isTab = await getIsTab(paths, slug)

              if (isTab) return []

              const contents: Content[] = [
                { title: title, type: 'page', description, slug, hierarchy: { lv1: title } },
              ]

              const tableOfContents = toc(content).json as TableOfContent[]

              tableOfContents.forEach((item, index) => {
                const prevTableOfContents = tableOfContents.slice(0, index)
                const fragment = '#' + item.slug

                const content: Content = {
                  title: item.content,
                  type: 'fragment',
                  slug: slug + fragment,
                  hierarchy: { lv1: title },
                }

                if (item.lvl <= 2) {
                  content.hierarchy.lv2 = item.content
                }

                if (item.lvl === 3) {
                  const lv2Item = prevTableOfContents.findLast(({ lvl }) => lvl < item.lvl)

                  if (!lv2Item) {
                    content.hierarchy.lv2 = item.content
                  } else {
                    content.hierarchy.lv2 = lv2Item.content
                    content.hierarchy.lv3 = item.content
                  }
                }

                if (item.lvl === 4) {
                  const lv3Item = prevTableOfContents.findLast(({ lvl }) => lvl < item.lvl)
                  const lv2Item = prevTableOfContents.findLast(({ lvl }) => lvl < lv3Item?.lvl)

                  if (!lv3Item) {
                    content.hierarchy.lv2 = item.content
                  } else if (!lv2Item) {
                    content.hierarchy.lv2 = lv3Item.content
                    content.hierarchy.lv3 = item.content
                  } else {
                    content.hierarchy.lv2 = lv2Item.content
                    content.hierarchy.lv3 = lv3Item.content
                    content.hierarchy.lv4 = item.content
                  }
                }

                contents.push(content)
              })

              return contents
            }),
          )
        ).flat()

        const data = await prettier(JSON.stringify(contents), { parser: 'json' })

        await writeFile(`i18n/content.${lang}.json`, data)
      }),
    )

    const [start, end] = process.hrtime(hrtime)
    const duration = (Number(end - start) / 1e9).toFixed(2)

    spinner.succeed(chalk.green(`Done in ${duration}s` + '\n'))
  } catch (e) {
    spinner.fail(chalk.red(e.message))
  }
})

program.parse()
