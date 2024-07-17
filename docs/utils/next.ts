import path from "path"
import { CONSTANT } from "constant"
import { findPackages } from "find-packages"
import { documentPaths } from "mdx"
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import {
  getDocument,
  getDocumentBreadcrumbs,
  getDocumentPagination,
  getDocuments,
  getDocumentTabs,
  getDocumentTree,
  omitDocumentTabs,
} from "utils/document"
import type { Constant } from "./github"
import { mdx } from "./mdx"

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

  return { props: { currentVersion, documentTree } }
}

export const getStaticDocumentPaths =
  (name: string) =>
  async ({ locales = [] }: GetStaticPathsContext) => {
    const paths = documentPaths
      .flatMap((path) => {
        if (!path.startsWith(name)) return

        const slug = path.split("/").slice(1)

        return locales.map((locale) => ({ params: { slug }, locale }))
      })
      .filter(Boolean)

    return { paths, fallback: false }
  }

export const getStaticDocumentProps =
  (name: string) =>
  async ({ params, locale, defaultLocale }: GetStaticPropsContext) => {
    const paths = [name, ...(params?.slug ?? [])]
    const path = paths.join("/")

    const currentVersion = await getVersion()
    const documents = getDocuments(locale)
    const documentTree = getDocumentTree(omitDocumentTabs(documents))(paths)
    const document = getDocument(path, locale, defaultLocale)

    if (!document)
      return {
        props: {
          currentVersion,
          documentTree,
          source: null,
        },
        notFound: true,
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
        source,
        currentVersion,
        documentTree,
        documentBreadcrumbs,
        documentChildrenTree,
        documentTabs,
        documentPagination,
      },
    }
  }
