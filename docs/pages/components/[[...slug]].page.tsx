import type { NextPage, InferGetStaticPropsType } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import { MDXComponents } from "components/mdx"
import { PageProvider } from "contexts/page-context"
import { DocumentLayout } from "layouts/document-layout"
import { getStaticDocumentPaths, getStaticDocumentProps } from "utils/next"

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ body, data, documents, ...rest }) => {
  const Component = useMDXComponent(body.code)

  return (
    <PageProvider value={{ documents, ...rest }}>
      <DocumentLayout {...{ ...data, ...rest }}>
        <Component components={MDXComponents} />
      </DocumentLayout>
    </PageProvider>
  )
}

export default Page

export const getStaticPaths = getStaticDocumentPaths("Components")

export const getStaticProps = getStaticDocumentProps("Components")
