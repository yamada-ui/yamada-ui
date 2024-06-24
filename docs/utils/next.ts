import path from "path"
import { CONSTANT } from "constant"
import { type DocumentTypeNames } from "contentlayer/generated"
import { findPackages } from "find-packages"
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import { toArray } from "./array"
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
import { toKebabCase } from "./string"
import type { Constant } from "./github"

export type APIHandler = ({
  req,
  res,
  constant,
}: {
  req: NextApiRequest
  res: NextApiResponse
  constant: Constant
}) => Promise<void>

const getVersion = async () => {
  const packages = await findPackages(
    path.resolve(CONSTANT.PATH.ROOT, "packages", "react"),
  )

  const { version } = packages[0].manifest

  return version ? `v${version}` : null
}

export const getStaticCommonProps = async ({
  locale,
}: GetStaticPropsContext) => {
  const currentVersion = await getVersion()
  const documents = getDocuments(locale)
  const documentTree = getDocumentTree(omitDocumentTabs(documents))()

  return { props: { currentVersion, documents, documentTree } }
}

export const getStaticDocumentProps =
  (documentTypeName: DocumentTypeNames) =>
  async ({ params, locale, defaultLocale }: GetStaticPropsContext) => {
    const currentVersion = await getVersion()
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
        currentVersion,
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
  async ({ defaultLocale, locales = [] }: GetStaticPathsContext) => {
    const documents = locales.flatMap(
      getActiveDocuments({ documentTypeName, defaultLocale }),
    )

    const paths = getDocumentPaths({ documentTypeName, documents })

    return { paths, fallback: false }
  }
