import { GetStaticPaths, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'components/mdx'
import { Data, allDocs } from 'contentlayer/generated'
import { PageProvider } from 'contexts/page-context'
import { DocLayout } from 'layouts/doc-layout'
import { otherLocales } from 'utils/i18n'
import { getStaticCommonProps, getStaticDocProps } from 'utils/next'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const OTHER_LOCALES = `(${otherLocales.join('|')})`

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
  const { props } = getStaticCommonProps({ locale })

  const { docs, tree } = props

  const { doc, ...rest } = getStaticDocProps({ docs, tree, params, locale })

  return { props: { ...props, ...doc, ...rest } }
}
