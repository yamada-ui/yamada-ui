import type { GetStaticPathsContext, GetStaticPropsContext } from "next"
import { toArray } from "./array"
import { toKebabCase } from "./assertion"
import {
  getDocumentBreadcrumbs,
  getDocument,
  getDocuments,
  getDocumentPagination,
  getDocumentTabs,
  getDocumentTree,
  omitDocumentTabs,
  getActiveDocuments,
  getDocumentPaths,
} from "./contentlayer"
import { type DocumentTypeNames } from "contentlayer/generated"

export const getStaticCommonProps = async ({
  locale,
}: GetStaticPropsContext) => {
  const documents = getDocuments(locale)
  const documentTree = getDocumentTree(omitDocumentTabs(documents))()

  return { props: { documents, documentTree } }
}

export const getStaticDocumentProps =
  (documentTypeName: DocumentTypeNames) =>
  async ({ params, locale, defaultLocale }: GetStaticPropsContext) => {
    const paths = [
      toKebabCase(documentTypeName),
      ...toArray(params?.slug ?? []),
    ]

    const documents = getDocuments(locale)
    const documentTree = getDocumentTree(omitDocumentTabs(documents))(paths)
    const document =
      getDocument(documents, paths, locale) ??
      getDocument(documents, paths, defaultLocale)

    const { documentTabs, parentDocument, parentPaths } = getDocumentTabs(
      documents,
      document,
    )
    const documentChildrenTree = getDocumentTree(documents, paths)(paths)
    const documentBreadcrumbs = getDocumentBreadcrumbs(
      documents,
      parentPaths ?? paths,
      locale,
      defaultLocale,
    )
    const documentPagination = getDocumentPagination(
      documentTree,
      parentDocument ?? document,
    )

    return {
      props: {
        ...document,
        documentTree,
        documentBreadcrumbs,
        documentChildrenTree,
        documentTabs,
        documentPagination,
      },
    }
  }

export const getStaticDocumentPaths =
  (documentTypeName: DocumentTypeNames) =>
  async ({ defaultLocale, locales }: GetStaticPathsContext) => {
    const documents = locales.flatMap(
      getActiveDocuments({ documentTypeName, defaultLocale }),
    )

    const paths = getDocumentPaths({ documentTypeName, documents })

    return { paths, fallback: false }
  }
