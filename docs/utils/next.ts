import { ParsedUrlQuery } from 'querystring'
import { toArray } from './array'
import { getBreadcrumbs, getDoc, getDocs, getPagination, getTabs, getTree } from './contentlayer'
import { Doc, DocWithChildren } from 'contentlayer/generated'

export const getStaticCommonProps = ({ locale }: { locale: string }) => {
  const docs = getDocs(locale)
  const tree = getTree(docs)

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
