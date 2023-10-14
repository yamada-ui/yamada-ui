import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
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

export const getServerSideCommonProps = ({ req, params, locale }: GetServerSidePropsContext) => {
  const cookies = req.headers.cookie ?? ''
  const paths = toArray(params?.slug ?? [])

  const docs = getDocs(locale)
  const tree = getTree(omitTabDocs(docs))(paths)

  return { props: { cookies, docs, tree } }
}

export const getStaticCommonProps = ({ params, locale }: GetStaticPropsContext) => {
  const paths = toArray(params?.slug ?? [])

  const docs = getDocs(locale)
  const tree = getTree(omitTabDocs(docs))(paths)

  return { props: { docs, tree } }
}

export const getServerSideDocProps = ({
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

export const getStaticDocProps = ({ params, locale, defaultLocale }: GetStaticPropsContext) => {
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
