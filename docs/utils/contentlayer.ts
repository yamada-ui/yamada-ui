import { otherLocales } from './i18n'
import { Data, DocWithChildren, Doc, allDocs } from 'contentlayer/generated'

const OTHER_LOCALES = `(${otherLocales.join('|')})`

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

export const getTree =
  (docs: Doc[], parentPaths: string[] = []) =>
  (currentLocale: string): DocWithChildren[] => {
    const lv = parentPaths.length

    return docs
      .filter(({ data }) => {
        let { locale, paths } = data as Data

        if (locale !== currentLocale) return false

        paths = paths.filter(Boolean)

        return paths.length === lv + 1 && paths.join('/').startsWith(parentPaths.join('/'))
      })
      .map((doc) => ({
        ...doc,
        children: getTree(docs, doc.data.paths)(currentLocale),
      }))
  }

export const getPagination = (path: string) => {
  let pagination: { prev?: Doc; next?: Doc } = {}

  const c = allDocs.length

  for (let i = 0; i < c; i++) {
    const { slug } = allDocs[i]

    if (slug !== path) continue

    pagination = { prev: allDocs[i - 1], next: allDocs[i + 1] }
  }

  return pagination
}
