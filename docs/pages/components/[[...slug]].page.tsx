import { MDXComponents } from "components/mdx"
import { PageProvider } from "contexts/page-context"
import { DocumentLayout } from "layouts/document-layout"
import type { NextPage, InferGetStaticPropsType } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import { getStaticDocumentPaths, getStaticDocumentProps } from "utils/next"

export const getStaticPaths = getStaticDocumentPaths("Components")

export const getStaticProps = getStaticDocumentProps("Components")

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ body, data, ...rest }) => {
  const Component = useMDXComponent(body.code)

  return (
    <PageProvider {...rest}>
      <DocumentLayout {...{ ...data, ...rest }}>
        <Component components={MDXComponents} />
      </DocumentLayout>
    </PageProvider>
  )
}

export default Page
