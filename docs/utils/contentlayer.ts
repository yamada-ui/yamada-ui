import { toKebabCase } from "./assertion"
import { CONSTANT } from "constant"
import { allDocuments } from "contentlayer/generated"
import type {
  DocumentData,
  DocumentTypes,
  DocumentTypesNavigationItem,
  DocumentTypesPagination,
  DocumentTypeTree,
  DocumentTypeNames,
} from "contentlayer/generated"
import { flattenArray } from "utils/array"
import { otherLocales } from "utils/i18n"

const OTHER_LOCALES = `(${otherLocales.join("|")})`

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
  const ext = `${
    locale !== CONSTANT.I18N.DEFAULT_LOCALE ? `${locale}.` : ""
  }mdx`

  return documents.find(({ _id }) => {
    if (paths.length === 0) {
      return _id === `index.${ext}`
    } else {
      return (
        _id.endsWith(`${paths.join("/")}/index.${ext}`) ||
        _id.endsWith(`${paths.join("/")}.${ext}`)
      )
    }
  })
}

export const getDocumentTree =
  (documents: DocumentTypes[], parentPaths: string[] = []) =>
  (paths: string[] = []): DocumentTypeTree[] => {
    const lv = parentPaths.length

    return documents
      .filter(({ is_active, data }) => {
        if (!is_active) return false

        let { paths } = data as DocumentData

        paths = paths.filter(Boolean)

        return (
          paths.length === lv + 1 &&
          paths.join("/").startsWith(parentPaths.join("/"))
        )
      })
      .sort((a, b) => a.order - b.order)
      .map(({ is_expanded, title, menu, slug, label, description, data }) => {
        title = menu ?? title
        label ??= null

        is_expanded =
          is_expanded ||
          data.paths.every(
            (path: string, index: number) => path === paths[index],
          )

        const children = getDocumentTree(documents, data.paths)(paths)

        return {
          title,
          slug,
          label,
          description,
          is_expanded,
          children,
        }
      })
  }

export const getDocumentPagination = (
  documentTree: DocumentTypeTree[],
  document: DocumentTypes,
): DocumentTypesPagination => {
  const flattenTree = flattenArray(documentTree, "children")

  let pagination: DocumentTypesPagination = {}

  for (let i = 0; i < flattenTree.length; i++) {
    if (flattenTree[i].slug !== document.slug) continue

    const prevDocument = flattenTree[i - 1]
    const nextDocument = flattenTree[i + 1]

    if (prevDocument) {
      let { title, menu, slug } = prevDocument

      title = menu ?? title

      pagination["prevDocument"] = { title, slug }
    }

    if (nextDocument) {
      let { title, menu, slug } = nextDocument

      if (menu) title = menu

      pagination["nextDocument"] = { title, slug }
    }
  }

  return pagination
}

export const getDocumentBreadcrumbs = (
  documents: DocumentTypes[],
  paths: string[],
  locale: string,
  defaultLocale: string,
): DocumentTypesNavigationItem[] => {
  let breadcrumbs: DocumentTypesNavigationItem[] = []

  for (let i = 0; i <= paths.length - 1; i++) {
    const document =
      getDocument(documents, paths.slice(0, i), locale) ??
      getDocument(documents, paths.slice(0, i), defaultLocale)

    if (!document) continue

    let { title, menu, slug } = document

    if (menu) title = menu

    breadcrumbs = [...breadcrumbs, { title, slug }]
  }

  return breadcrumbs
}

export const getDocumentTabs = (
  documents: DocumentTypes[],
  document: DocumentTypes,
) => {
  const { is_tabs, slug } = document

  let documentTabs: DocumentTypesNavigationItem[] = []
  let parentDocument: DocumentTypes | undefined
  let parentPaths: string[] | undefined

  if (is_tabs) {
    const resolvedDocuments = documents.filter((document) =>
      new RegExp(`^${slug}($|\\/[^\\/]+$)`).test(document.slug),
    )

    documentTabs = resolvedDocuments.map(({ title, menu, tab, slug }) => ({
      title: tab ?? menu ?? title,
      slug,
    }))
  } else {
    parentDocument = documents.find(
      (document) => document.slug === slug.slice(0, slug.lastIndexOf("/")),
    )

    if (!parentDocument?.is_tabs) parentDocument = undefined

    if (parentDocument) {
      parentPaths = parentDocument.slug.split("/").slice(2)
      const resolvedDocuments = documents.filter(({ slug }) =>
        new RegExp(`^${parentDocument.slug}($|\\/[^\\/]+$)`).test(slug),
      )

      documentTabs = resolvedDocuments.map(({ title, menu, tab, slug }) => ({
        title: tab ?? menu ?? title,
        slug,
      }))
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

export const getPath = (id: string) =>
  id.replace(new RegExp(`\(.${OTHER_LOCALES})?\.mdx$`), "")

export const getActiveDocuments =
  ({
    documentTypeName,
    defaultLocale,
  }: {
    documentTypeName: DocumentTypeNames
    defaultLocale: string
  }) =>
  (locale: string) =>
    allDocuments.filter(({ type, is_active, _id }) => {
      if (!is_active) return false

      if (type !== documentTypeName) return false

      if (locale === defaultLocale) {
        const isContains = new RegExp(`\.${OTHER_LOCALES}\.mdx$`).test(_id)

        return !isContains && _id.endsWith(".mdx")
      } else {
        return _id.endsWith(`.${locale}.mdx`)
      }
    })

export const getDocumentPaths = ({
  documentTypeName,
  documents,
}: {
  documentTypeName: DocumentTypeNames
  documents: DocumentTypes[]
}) => {
  const reg = new RegExp(`^${toKebabCase(documentTypeName)}/`)

  return documents
    .map(({ _id, data }) => {
      const id = _id.replace(reg, "")

      const { locale } = data as DocumentData
      const path = getPath(id)
      const params = {
        slug: path.split("/").filter((str) => str !== "index"),
      }

      const notExistLocales = otherLocales.filter((otherLocale) => {
        const otherLocaleDoc = documents.find(({ _id, data }) => {
          const id = _id.replace(reg, "")
          const { locale } = data as DocumentData
          const otherLocalePath = getPath(id)

          return path === otherLocalePath && locale === otherLocale
        })

        return !otherLocaleDoc
      })

      if (notExistLocales.length) {
        const otherPaths = notExistLocales.map((locale) => ({
          params,
          locale,
        }))

        return [{ params, locale }, ...otherPaths]
      } else {
        return { params, locale }
      }
    })
    .flat()
}
