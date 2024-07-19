import { useI18n, PageProvider } from "contexts"
import { DocumentLayout } from "layouts/document-layout"
import type { NextPage, InferGetStaticPropsType } from "next"
import { getStaticCommonProps } from "utils/next"
import { List } from "./list"

export const getStaticProps = getStaticCommonProps

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ currentVersion, documentTree }) => {
  const { t } = useI18n()

  return (
    <PageProvider {...{ currentVersion, documentTree }}>
      <DocumentLayout
        title={t("icons.title")}
        description={t("icons.description")}
      >
        <List />
      </DocumentLayout>
    </PageProvider>
  )
}

export default Page
