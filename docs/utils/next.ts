import { ParsedUrlQuery } from 'querystring'
import { GetStaticPropsContext } from 'next'
import { Doc, DocWithChildren } from 'contentlayer/generated'
import { toArray } from 'utils/array'
import {
  getBreadcrumbs,
  getDoc,
  getDocs,
  getPagination,
  getTabs,
  getTree,
  omitTabDocs,
} from 'utils/contentlayer'

export const getStaticCommonProps = ({ params, locale }: GetStaticPropsContext) => {
  const paths = toArray(params?.slug ?? [])

  const docs = getDocs(locale)
  const tree = getTree(omitTabDocs(docs))(paths)

  return { props: { docs, tree } }
}

export const getStaticDocProps = ({
  docs,
  tree,
  params,
  locale,
  defaultLocale,
}: {
  docs: Doc[]
  tree: DocWithChildren[]
  params: ParsedUrlQuery
  locale: string
  defaultLocale: string
}) => {
  const paths = toArray(params?.slug ?? [])
  const doc = getDoc(docs, paths, locale) ?? getDoc(docs, paths, defaultLocale)

  const { tabs, parentDoc, parentPaths } = getTabs(docs, doc)
  const childrenTree = getTree(docs, paths)(paths)
  const breadcrumbs = getBreadcrumbs(docs, parentPaths ?? paths, locale, defaultLocale)
  const pagination = getPagination(tree, parentDoc ?? doc)

  return { doc, breadcrumbs, childrenTree, tabs, pagination }
}
