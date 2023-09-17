import { CONSTANT } from 'constant'
import { Data, DocWithChildren, Doc, DocPagination, allDocs } from 'contentlayer/generated'
import { flattenArray } from 'utils/array'
import { otherLocales } from 'utils/i18n'

const OTHER_LOCALES = `(${otherLocales.join('|')})`

export const getTree =
  (docs: Doc[], parentPaths: string[] = []) =>
  (paths?: string[]): DocWithChildren[] => {
    const lv = parentPaths.length

    return docs
      .filter(({ is_active, data }) => {
        if (!is_active) return false

        let { paths } = data as Data

        paths = paths.filter(Boolean)

        return paths.length === lv + 1 && paths.join('/').startsWith(parentPaths.join('/'))
      })
      .sort((a, b) => a.order - b.order)
      .map(({ is_expand, ...doc }) => {
        return {
          ...doc,
          is_expand: is_expand || paths.join('/').startsWith(doc.data.paths.join('/')),
          children: getTree(docs, doc.data.paths)(paths),
        }
      })
  }

export const getPagination = (tree: DocWithChildren[], target: Doc): DocPagination => {
  const flattenTree = flattenArray(tree, 'children')

  let pagination: DocPagination = {}

  for (let i = 0; i < flattenTree.length; i++) {
    if (flattenTree[i].slug !== target.slug) continue

    pagination = { prev: flattenTree[i - 1] ?? null, next: flattenTree[i + 1] ?? null }
  }

  return pagination
}

export const getBreadcrumbs = (
  docs: Doc[],
  paths: string[],
  locale: string,
  defaultLocale: string,
): Doc[] => {
  let breadcrumbs: Doc[] = []

  for (let i = 0; i <= paths.length - 1; i++) {
    breadcrumbs = [
      ...breadcrumbs,
      getDoc(docs, paths.slice(0, i), locale) ?? getDoc(docs, paths.slice(0, i), defaultLocale),
    ]
  }

  breadcrumbs = breadcrumbs.filter(Boolean)

  return breadcrumbs
}

export const getDocs = (locale: string): Doc[] =>
  allDocs
    .filter(({ _id, is_active, data }) => {
      if (!is_active) return false

      if (data.locale === locale) return true

      if (data.locale !== CONSTANT.I18N.DEFAULT_LOCALE) return false

      const defaultLocalePath = getPath(_id)

      const currentLocaleDoc = allDocs.find(({ _id, data }) => {
        const path = getPath(_id)

        return path === defaultLocalePath && data.locale === locale
      })

      return !currentLocaleDoc
    })
    .sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()))

export const getDoc = (docs: Doc[], paths: string[], locale: string): Doc => {
  const ext = `${locale !== CONSTANT.I18N.DEFAULT_LOCALE ? `${locale}.` : ''}mdx`

  return docs.find(({ _id }) => {
    if (paths.length === 0) {
      return _id === `index.${ext}`
    } else {
      return (
        _id.endsWith(`${paths.join('/')}/index.${ext}`) || _id.endsWith(`${paths.join('/')}.${ext}`)
      )
    }
  })
}

export const getTabs = (docs: Doc[], doc: Doc) => {
  const { is_tabs, slug } = doc

  let tabs: Doc[] = []
  let parentDoc: Doc | undefined
  let parentPaths: string[] | undefined

  if (is_tabs) {
    tabs = docs.filter((doc) => new RegExp(`^${slug}($|\\/[^\\/]+$)`).test(doc.slug))
  } else {
    parentDoc = docs.find((doc) => doc.slug === slug.slice(0, slug.lastIndexOf('/')))

    if (!parentDoc?.is_tabs) parentDoc = undefined

    if (parentDoc) {
      parentPaths = parentDoc.slug.split('/').slice(2)
      tabs = docs.filter(({ slug }) => new RegExp(`^${parentDoc.slug}($|\\/[^\\/]+$)`).test(slug))
    }
  }

  return { tabs, parentDoc, parentPaths }
}

export const omitTabDocs = (docs: Doc[]): Doc[] =>
  docs.filter(({ slug }) => {
    const parentDoc = docs.find((doc) => doc.slug === slug.slice(0, slug.lastIndexOf('/')))

    return !(parentDoc?.is_tabs ?? false)
  })

export const getPath = (id: string) => id.replace(new RegExp(`\(.${OTHER_LOCALES})?\.mdx$`), '')
