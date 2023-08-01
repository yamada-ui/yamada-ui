import { GetStaticPaths, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Doc, allDocs } from 'contentlayer/generated'
import { DocLayout } from 'layouts'
import { getTree, otherLocales, toArray } from 'utils'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const EXT = 'mdx'
const OTHER_LOCALES = `(${otherLocales.join('|')})`

const Page: NextPage<PageProps> = ({ body, data, breadcrumbs, tree, childrenTree }) => {
  const Component = useMDXComponent(body.code)

  return (
    <DocLayout {...{ ...data, breadcrumbs, tree, childrenTree }}>
      <Component />
    </DocLayout>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async ({ defaultLocale, locales }) => {
  const paths = locales.flatMap((locale) =>
    allDocs
      .filter(({ _id }) => {
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

  const getDoc = (paths: string[]) =>
    allDocs.find(({ _id }) => {
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

  for (let i = 0; i <= paths.length - 1; i++) {
    breadcrumbs = [...breadcrumbs, getDoc(paths.slice(0, i))]
  }

  breadcrumbs = breadcrumbs.filter(Boolean)

  const tree = getTree(allDocs)(locale)
  const childrenTree = getTree(allDocs, paths)(locale)

  return { props: { ...doc, breadcrumbs, tree, childrenTree } }
}
