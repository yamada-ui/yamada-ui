import { GetStaticPaths, NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { GettingStarted, allGettingStarteds } from 'contentlayer/generated'
import { DocLayout } from 'layouts'
import { toArray } from 'utils'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const ROOT = 'getting-started'
const EXT = 'mdx'

const Page: NextPage<PageProps> = ({ body, frontMatter }) => {
  const Component = useMDXComponent(body.code)

  return (
    <DocLayout {...frontMatter}>
      <Component />
    </DocLayout>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async ({ defaultLocale, locales }) => {
  const otherLocales = `(${locales.filter((locale) => locale !== defaultLocale).join('|')})`

  const paths = locales.flatMap((locale) =>
    allGettingStarteds
      .filter(({ _id }) => {
        if (locale === defaultLocale) {
          const isContains = new RegExp(`\.${otherLocales}\.${EXT}$`).test(_id)

          return !isContains && _id.endsWith(`.${EXT}`)
        } else {
          return _id.endsWith(`.${locale}.${EXT}`)
        }
      })
      .map(({ _id }) => {
        const reg = new RegExp(ROOT + '\\/|' + `\(.${otherLocales})?\.` + EXT, 'g')
        const path = _id.replace(reg, '')
        const params = { slug: path === 'index' ? [] : path.split('/') }

        return { params, locale }
      }),
  )

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params, locale, defaultLocale }: GetStaticPropsContext) => {
  const paths = toArray(params.slug)
  const computedExt = `${locale !== defaultLocale ? `${locale}.` : ''}${EXT}`

  const doc: GettingStarted = allGettingStarteds.find(({ _id }) => {
    if (paths.length === 0) {
      return _id === ROOT + `/index.${computedExt}`
    } else {
      return _id.endsWith(`${paths.join('/')}.${computedExt}`)
    }
  })

  return { props: { ...doc } }
}
