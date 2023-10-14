import { NextPage, InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'components/mdx'
import { PageProvider } from 'contexts/page-context'
import { DocLayout } from 'layouts/doc-layout'
import { getStaticDocPaths, getStaticDocProps } from 'utils/next'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>
// type PageProps = InferGetStaticPropsType<typeof getServerSideProps>

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

export const getStaticPaths = getStaticDocPaths

export const getStaticProps = getStaticDocProps
// export const getServerSideProps = getServerSideDocProps
