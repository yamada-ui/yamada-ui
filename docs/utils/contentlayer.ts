import { CONSTANT } from "constant"
import {
  DocumentData,
  DocumentTypesWithChildren,
  DocumentTypes,
  DocumentTypesPagination,
  allDocuments,
} from "contentlayer/generated"
import { flattenArray } from "utils/array"
import { otherLocales } from "utils/i18n"

const OTHER_LOCALES = `(${otherLocales.join("|")})`

export const getDocumentTree =
  (documents: DocumentTypes[], parentPaths: string[] = []) =>
  (paths: string[] = []): DocumentTypesWithChildren[] => {
    const lv = parentPaths.length

    return documents
      .filter(({ is_active, data }) => {
        if (!is_active) return false

        let { paths } = data as DocumentData

        paths = paths.filter(Boolean)

        return paths.length === lv + 1 && paths.join("/").startsWith(parentPaths.join("/"))
      })
      .sort((a, b) => a.order - b.order)
      .map(({ is_expanded, ...document }) => {
        return {
          ...document,
          is_expanded:
            is_expanded ||
            document.data.paths.every((path: string, index: number) => path === paths[index]),
          children: getDocumentTree(documents, document.data.paths)(paths),
        }
      })
  }

export const getDocumentPagination = (
  documentTree: DocumentTypesWithChildren[],
  document: DocumentTypes,
): DocumentTypesPagination => {
  const flattenTree = flattenArray(documentTree, "children")

  let pagination: DocumentTypesPagination = {}

  for (let i = 0; i < flattenTree.length; i++) {
    if (flattenTree[i].slug !== document.slug) continue

    pagination = {
      prevDocument: flattenTree[i - 1] ?? null,
      nextDocument: flattenTree[i + 1] ?? null,
    }
  }

  return pagination
}

export const getDocumentBreadcrumbs = (
  documents: DocumentTypes[],
  paths: string[],
  locale: string,
  defaultLocale: string,
): DocumentTypes[] => {
  let breadcrumbs: DocumentTypes[] = []

  for (let i = 0; i <= paths.length - 1; i++) {
    breadcrumbs = [
      ...breadcrumbs,
      getDocument(documents, paths.slice(0, i), locale) ??
        getDocument(documents, paths.slice(0, i), defaultLocale),
    ]
  }

  breadcrumbs = breadcrumbs.filter(Boolean)

  return breadcrumbs
}

export const getDocuments = (locale: string): DocumentTypes[] =>
  allDocuments
    .filter(({ _id, is_active, data }) => {
      if (!is_active) return false

      if (data.locale === locale) return true

      if (data.locale !== CONSTANT.I18N.DEFAULT_LOCALE) return false

      const defaultLocalePath = getPath(_id)

      const currentLocaleDoc = allDocuments.find(({ _id, data }) => {
        const path = getPath(_id)

        return path === defaultLocalePath && data.locale === locale
      })

      return !currentLocaleDoc
    })
    .sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()))

export const getDocument = (
  documents: DocumentTypes[],
  paths: string[],
  locale: string,
): DocumentTypes => {
  const ext = `${locale !== CONSTANT.I18N.DEFAULT_LOCALE ? `${locale}.` : ""}mdx`

  return documents.find(({ _id }) => {
    if (paths.length === 0) {
      return _id === `index.${ext}`
    } else {
      return (
        _id.endsWith(`${paths.join("/")}/index.${ext}`) || _id.endsWith(`${paths.join("/")}.${ext}`)
      )
    }
  })
}

export const getDocumentTabs = (documents: DocumentTypes[], document: DocumentTypes) => {
  const { is_tabs, slug } = document

  let documentTabs: DocumentTypes[] = []
  let parentDocument: DocumentTypes | undefined
  let parentPaths: string[] | undefined

  if (is_tabs) {
    documentTabs = documents.filter((document) =>
      new RegExp(`^${slug}($|\\/[^\\/]+$)`).test(document.slug),
    )
  } else {
    parentDocument = documents.find(
      (document) => document.slug === slug.slice(0, slug.lastIndexOf("/")),
    )

    if (!parentDocument?.is_tabs) parentDocument = undefined

    if (parentDocument) {
      parentPaths = parentDocument.slug.split("/").slice(2)
      documentTabs = documents.filter(({ slug }) =>
        new RegExp(`^${parentDocument.slug}($|\\/[^\\/]+$)`).test(slug),
      )
    }
  }

  return { documentTabs, parentDocument, parentPaths }
}

export const omitDocumentTabs = (documents: DocumentTypes[]): DocumentTypes[] =>
  documents.filter(({ slug }) => {
    const parentDoc = documents.find(
      (document) => document.slug === slug.slice(0, slug.lastIndexOf("/")),
    )

    return !(parentDoc?.is_tabs ?? false)
  })

export const getPath = (id: string) => id.replace(new RegExp(`\(.${OTHER_LOCALES})?\.mdx$`), "")
