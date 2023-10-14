import { GetServerSidePropsContext, GetStaticPathsContext, GetStaticPropsContext } from 'next'
import { toArray } from './array'
import {
  getBreadcrumbs,
  getDoc,
  getDocs,
  getPagination,
  getPath,
  getTabs,
  getTree,
  omitTabDocs,
} from './contentlayer'
import { otherLocales } from './i18n'
import { Data, allDocs } from 'contentlayer/generated'

export const getServerSideCommonProps = async ({
  req,
  params,
  locale,
}: GetServerSidePropsContext) => {
  const cookies = req.headers.cookie ?? ''
  const paths = toArray(params?.slug ?? [])

  const docs = getDocs(locale)
  const tree = getTree(omitTabDocs(docs))(paths)

  return { props: { cookies, docs, tree } }
}

export const getStaticCommonProps = async ({ params, locale }: GetStaticPropsContext) => {
  const paths = toArray(params?.slug ?? [])

  const docs = getDocs(locale)
  const tree = getTree(omitTabDocs(docs))(paths)

  return { props: { docs, tree } }
}

export const getServerSideDocProps = async ({
  req,
  params,
  locale,
  defaultLocale,
}: GetServerSidePropsContext) => {
  const cookies = req.headers.cookie ?? ''
  const paths = toArray(params?.slug ?? [])

  const docs = getDocs(locale)
  const tree = getTree(omitTabDocs(docs))(paths)
  const doc = getDoc(docs, paths, locale) ?? getDoc(docs, paths, defaultLocale)

  const { tabs, parentDoc, parentPaths } = getTabs(docs, doc)
  const childrenTree = getTree(docs, paths)(paths)
  const breadcrumbs = getBreadcrumbs(docs, parentPaths ?? paths, locale, defaultLocale)
  const pagination = getPagination(tree, parentDoc ?? doc)

  return { props: { cookies, ...doc, docs, tree, breadcrumbs, childrenTree, tabs, pagination } }
}

export const getStaticDocProps = async ({
  params,
  locale,
  defaultLocale,
}: GetStaticPropsContext) => {
  const paths = toArray(params?.slug ?? [])
  const docs = getDocs(locale)
  const tree = getTree(omitTabDocs(docs))(paths)
  const doc = getDoc(docs, paths, locale) ?? getDoc(docs, paths, defaultLocale)

  const { tabs, parentDoc, parentPaths } = getTabs(docs, doc)
  const childrenTree = getTree(docs, paths)(paths)
  const breadcrumbs = getBreadcrumbs(docs, parentPaths ?? paths, locale, defaultLocale)
  const pagination = getPagination(tree, parentDoc ?? doc)

  return { props: { ...doc, docs, tree, breadcrumbs, childrenTree, tabs, pagination } }
}

const OTHER_LOCALES = `(${otherLocales.join('|')})`

export const getStaticDocPaths = async ({ defaultLocale, locales }: GetStaticPathsContext) => {
  const docs = locales.flatMap((locale) =>
    allDocs.filter(({ is_active, _id }) => {
      if (!is_active) return false

      if (locale === defaultLocale) {
        const isContains = new RegExp(`\.${OTHER_LOCALES}\.mdx$`).test(_id)

        return !isContains && _id.endsWith('.mdx')
      } else {
        return _id.endsWith(`.${locale}.mdx`)
      }
    }),
  )

  const paths = docs
    .map(({ _id, data }) => {
      const { locale } = data as Data
      const path = getPath(_id)
      const params = { slug: path.split('/').filter((str) => str !== 'index') }

      const notExistLocales = otherLocales.filter((otherLocale) => {
        const otherLocaleDoc = docs.find(({ _id, data }) => {
          const { locale } = data as Data
          const otherLocalePath = getPath(_id)

          return path === otherLocalePath && locale === otherLocale
        })

        return !otherLocaleDoc
      })

      if (notExistLocales.length) {
        const otherPaths = notExistLocales.map((locale) => ({ params, locale }))

        return [{ params, locale }, ...otherPaths]
      } else {
        return { params, locale }
      }
    })
    .flat()

  return { paths, fallback: false }
}
