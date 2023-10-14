import { NextPage, InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'components/mdx'
import { PageProvider } from 'contexts/page-context'
import { DocLayout } from 'layouts/doc-layout'
import { getServerSideDocProps } from 'utils/next'

// type PageProps = InferGetStaticPropsType<typeof getStaticProps>
type PageProps = InferGetStaticPropsType<typeof getServerSideProps>

// const OTHER_LOCALES = `(${otherLocales.join('|')})`

const Page: NextPage<PageProps> = ({ body, data, docs, ...rest }) => {
  const Component = useMDXComponent(body.code)

  return (
    <PageProvider value={{ docs, ...rest }}>
      <DocLayout {...{ ...data, ...rest }}>
        <Component components={MDXComponents} />
      </DocLayout>
    </PageProvider>
  )
}

export default Page

// export const getStaticPaths: GetStaticPaths = async ({ defaultLocale, locales }) => {
//   const docs = locales.flatMap((locale) =>
//     allDocs.filter(({ is_active, _id }) => {
//       if (!is_active) return false

//       if (locale === defaultLocale) {
//         const isContains = new RegExp(`\.${OTHER_LOCALES}\.mdx$`).test(_id)

//         return !isContains && _id.endsWith('.mdx')
//       } else {
//         return _id.endsWith(`.${locale}.mdx`)
//       }
//     }),
//   )

//   const paths = docs
//     .map(({ _id, data }) => {
//       const { locale } = data as Data
//       const path = getPath(_id)
//       const params = { slug: path.split('/').filter((str) => str !== 'index') }

//       const notExistLocales = otherLocales.filter((otherLocale) => {
//         const otherLocaleDoc = docs.find(({ _id, data }) => {
//           const { locale } = data as Data
//           const otherLocalePath = getPath(_id)

//           return path === otherLocalePath && locale === otherLocale
//         })

//         return !otherLocaleDoc
//       })

//       if (notExistLocales.length) {
//         const otherPaths = notExistLocales.map((locale) => ({ params, locale }))

//         return [{ params, locale }, ...otherPaths]
//       } else {
//         return { params, locale }
//       }
//     })
//     .flat()

//   return { paths, fallback: false }
// }

// export const getStaticProps = getStaticDocProps
export const getServerSideProps = getServerSideDocProps
