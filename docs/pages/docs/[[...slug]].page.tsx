import { GetStaticPaths, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'components'
import { Doc, allDocs } from 'contentlayer/generated'
import { DocLayout } from 'layouts'
import { flattenArray, getTree, otherLocales, toArray } from 'utils'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const EXT = 'mdx'
const OTHER_LOCALES = `(${otherLocales.join('|')})`

const Page: NextPage<PageProps> = ({
  body,
  data,
  breadcrumbs,
  tree,
  childrenTree,
  pagination,
  ...rest
}) => {
  const Component = useMDXComponent(body.code)

  return (
    <DocLayout {...{ ...data, ...rest, breadcrumbs, tree, childrenTree, pagination }}>
      <Component components={MDXComponents as any} />
    </DocLayout>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async ({ defaultLocale, locales }) => {
  const paths = locales.flatMap((locale) =>
    allDocs
      .filter(({ is_active, _id }) => {
        if (!is_active) return false

        if (locale === defaultLocale) {
          const isContains = new RegExp(`\.${OTHER_LOCALES}\.${EXT}$`).test(_id)

          return !isContains && _id.endsWith(`.${EXT}`)
        } else {
          return _id.endsWith(`.${locale}.${EXT}`)
        }
      })
      .map(({ _id }) => {
        const reg = new RegExp(`\(.${OTHER_LOCALES})?\.` + EXT, 'g')
        const path = _id.replace(reg, '')
        const params = { slug: path.split('/').filter((str) => str !== 'index') }

        return { params, locale }
      }),
  )

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params, locale, defaultLocale }: GetStaticPropsContext) => {
  const paths = toArray(params.slug)
  const computedExt = `${locale !== defaultLocale ? `${locale}.` : ''}${EXT}`

  const computedAllDocs = allDocs
    .filter(({ is_active, data }) => is_active && data.locale === locale)
    .sort((a, b) => a.order - b.order)

  const getDoc = (paths: string[]) =>
    computedAllDocs.find(({ _id }) => {
      if (paths.length === 0) {
        return _id === `index.${computedExt}`
      } else {
        return (
          _id.endsWith(`${paths.join('/')}/index.${computedExt}`) ||
          _id.endsWith(`${paths.join('/')}.${computedExt}`)
        )
      }
    })

  const doc: Doc = getDoc(paths)

  let breadcrumbs: Doc[] = []
  let pagination: { prev?: Doc | null; next?: Doc | null } = {}

  const tree = getTree(computedAllDocs)
  const childrenTree = getTree(computedAllDocs, paths)
  const flattenTree = flattenArray(tree, 'children')

  for (let i = 0; i <= paths.length - 1; i++) {
    breadcrumbs = [...breadcrumbs, getDoc(paths.slice(0, i))]
  }

  for (let i = 0; i < flattenTree.length; i++) {
    if (flattenTree[i].slug !== doc.slug) continue

    pagination = { prev: flattenTree[i - 1] ?? null, next: flattenTree[i + 1] ?? null }
  }

  breadcrumbs = breadcrumbs.filter(Boolean)

  return { props: { ...doc, breadcrumbs, tree, childrenTree, pagination } }
}
