import type { InferGetStaticPropsType, NextPage } from "next"
import { components } from "components/mdx"
import { PageProvider } from "contexts/page-context"
import { DocumentLayout } from "layouts/document-layout"
import { MDXRemote } from "next-mdx-remote"
import { getStaticDocumentPaths, getStaticDocumentProps } from "utils/next"

export const getStaticPaths = getStaticDocumentPaths("community")

export const getStaticProps = getStaticDocumentProps("community")

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ source, ...rest }) => {
  return (
    <PageProvider {...rest}>
      <DocumentLayout {...rest}>
        {source ? <MDXRemote {...source} components={components} /> : null}
      </DocumentLayout>
    </PageProvider>
  )
}

export default Page
