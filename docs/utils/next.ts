import { ParsedUrlQuery } from 'querystring'
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

export const getStaticCommonProps = ({ locale }: { locale: string }) => {
  const docs = getDocs(locale)
  const tree = getTree(omitTabDocs(docs))

  return { props: { docs, tree } }
}

export const getStaticDocProps = ({
  docs,
  tree,
  params,
  locale,
}: {
  docs: Doc[]
  tree: DocWithChildren[]
  params: ParsedUrlQuery
  locale: string
}) => {
  const paths = toArray(params.slug)
  const doc = getDoc(docs, paths, locale)

  const { tabs, parentDoc, parentPaths } = getTabs(docs, doc)
  const childrenTree = getTree(docs, paths)
  const breadcrumbs = getBreadcrumbs(docs, parentPaths ?? paths, locale)
  const pagination = getPagination(tree, parentDoc ?? doc)

  return { doc, breadcrumbs, childrenTree, tabs, pagination }
}
