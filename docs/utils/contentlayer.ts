import GithubSlugger from 'github-slugger'
import { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { otherLocales } from './i18n'

const OTHER_LOCALES = `(${otherLocales.join('|')})`

export const rehypeMdxCodeMeta: Plugin = () => (tree) => {
  visit(tree, 'element', (node: any) => {
    if (node.tagName !== 'code' || !node.data) return

    node.properties = node.properties || {}

    const props: string[] = node.data.meta.split(' ')

    props.forEach((prop) => {
      const [key, value] = prop.split('=')

      node.properties[key] = value
    })
  })
}

export const getTableOfContents = (raw: string) => {
  const slugger = new GithubSlugger()

  const regexp = new RegExp(/^(## |### )(.*)\n/, 'gm')
  const headings = [...raw.matchAll(regexp)]

  let tableOfContents = []

  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const text = heading[2].trim()
      const level = heading[1].trim() === '##' ? 'h2' : 'h3'
      const id = slugger.slug(text, false)

      return { id, text, level }
    })
  }

  return tableOfContents
}

export const omitLocaleSlug = (path: string): string => {
  const reg = new RegExp(`\(/index\)?.${OTHER_LOCALES}$`)

  path = path.replace(reg, '')

  return path
}

export const getLocale = (path: string): string => {
  let locale = path.match(/(\.[^\.]*)$/)?.[1]

  locale = locale?.replace(/\./, '')

  return locale ?? 'en'
}
