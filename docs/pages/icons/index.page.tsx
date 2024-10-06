import type { InferGetStaticPropsType, NextPage } from "next"
import { PageProvider, useI18n } from "contexts"
import { DocumentLayout } from "layouts/document-layout"
import { getStaticCommonProps } from "utils/next"
import { List } from "./list"

export const getStaticProps = getStaticCommonProps

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = ({ currentVersion, documentTree }) => {
  const { t } = useI18n()

  return (
    <PageProvider {...{ currentVersion, documentTree }}>
      <DocumentLayout
        description={t("icons.description")}
        title={t("icons.title")}
      >
        <List />
      </DocumentLayout>
    </PageProvider>
  )
}

export default Page
