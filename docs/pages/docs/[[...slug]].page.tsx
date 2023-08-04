import { GetStaticPaths, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'components'
import { Data, Doc, allDocs } from 'contentlayer/generated'
import { DocLayout } from 'layouts'
import {
  filterTabDocs,
  getBreadcrumbs,
  getDoc,
  getPagination,
  getTabs,
  getTree,
  otherLocales,
  toArray,
} from 'utils'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const OTHER_LOCALES = `(${otherLocales.join('|')})`

const Page: NextPage<PageProps> = ({
  body,
  data,
  breadcrumbs,
  tree,
  tabs,
  childrenTree,
  pagination,
  ...rest
}) => {
  const Component = useMDXComponent(body.code)

  return (
    <DocLayout {...{ ...data, ...rest, breadcrumbs, tree, tabs, childrenTree, pagination }}>
      <Component components={MDXComponents} />
    </DocLayout>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async ({ defaultLocale, locales }) => {
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

  const paths = docs.map(({ _id, data }) => {
    const { locale } = data as Data
    const reg = new RegExp(`\(.${OTHER_LOCALES})?\.mdx$`)
    const path = _id.replace(reg, '')
    const params = { slug: path.split('/').filter((str) => str !== 'index') }

    return { params, locale }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params, locale }: GetStaticPropsContext) => {
  const paths = toArray(params.slug)

  let docs = allDocs
    .filter(({ is_active, data }) => is_active && data.locale === locale)
    .sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()))

  const doc: Doc = getDoc(docs, paths, locale)
  const [tabs, parentDoc, parentPaths] = getTabs(docs, doc)

  docs = filterTabDocs(docs)

  const tree = getTree(docs)
  const childrenTree = getTree(docs, paths)
  const breadcrumbs = getBreadcrumbs(docs, parentPaths ?? paths, locale)
  const pagination = getPagination(tree, parentDoc ?? doc)

  return { props: { ...doc, breadcrumbs, tree, childrenTree, tabs, pagination } }
}
