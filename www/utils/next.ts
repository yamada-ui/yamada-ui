import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import type { Constant } from "./github"
import { CONSTANT } from "constant"
import { findPackages } from "find-packages"
import { documentPaths } from "mdx"
import path from "path"
import {
  getDocument,
  getDocumentBreadcrumbs,
  getDocumentPagination,
  getDocuments,
  getDocumentTabs,
  getDocumentTree,
  omitDocumentTabs,
} from "utils/document"
import { mdx } from "./mdx"

export type APIHandler = ({
  constant,
  req,
  res,
}: {
  constant: Constant
  req: NextApiRequest
  res: NextApiResponse
}) => Promise<void>

const getVersion = async () => {
  const packages = await findPackages(
    path.resolve(CONSTANT.PATH.ROOT, "packages", "react"),
  )

  const { version } = packages[0]?.manifest ?? {}

  return version ? `v${version}` : null
}

export const getStaticCommonProps = async ({
  locale,
}: GetStaticPropsContext) => {
  const currentVersion = await getVersion()
  const documents = getDocuments(locale)
  const documentTree = getDocumentTree(omitDocumentTabs(documents))()

  return { props: { currentVersion, documentTree } }
}

export const getStaticDocumentPaths =
  (name: string) =>
  ({ locales = [] }: GetStaticPathsContext) => {
    const paths = documentPaths
      .flatMap((path) => {
        if (!path.startsWith(name)) return

        const slug = path.split("/").slice(1)

        return locales.map((locale) => ({ locale, params: { slug } }))
      })
      .filter(Boolean)

    return { fallback: false, paths }
  }

export const getStaticDocumentProps =
  (name: string) =>
  async ({ defaultLocale, locale, params }: GetStaticPropsContext) => {
    const paths = [name, ...(params?.slug ?? [])]
    const path = paths.join("/")

    const currentVersion = await getVersion()
    const documents = getDocuments(locale)
    const documentTree = getDocumentTree(omitDocumentTabs(documents))(paths)
    const document = getDocument(path, locale, defaultLocale)

    if (!document)
      return {
        notFound: true,
        props: {
          currentVersion,
          documentTree,
          source: null,
        },
      }

    const { body, ...rest } = document

    const source = await mdx(body)

    const { documentTabs, parentDocument, parentPaths } = getDocumentTabs(
      documents,
      document,
    )
    const documentChildrenTree = getDocumentTree(documents, paths)(paths)
    const documentBreadcrumbs = getDocumentBreadcrumbs(
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
        ...rest,
        currentVersion,
        documentBreadcrumbs,
        documentChildrenTree,
        documentPagination,
        documentTabs,
        documentTree,
        source,
      },
    }
  }
