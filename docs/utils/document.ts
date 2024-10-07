import type {
  Document,
  DocumentNavigation,
  DocumentPagination,
  DocumentTree,
} from "mdx"
import { CONSTANT } from "constant"
import { documentMap } from "mdx"
import { flattenArray } from "utils/array"

export const getDocuments = (
  locale: string = CONSTANT.I18N.DEFAULT_LOCALE,
): Document[] => {
  const allDocuments = Object.values(
    documentMap[CONSTANT.I18N.DEFAULT_LOCALE] ?? {},
  )

  return allDocuments
    .map((defaultDocument) => {
      const path = defaultDocument.paths.join("/")
      const targetDocument = documentMap[locale]?.[path]
      const document = targetDocument ?? defaultDocument

      if (document.is_active) return document
    })
    .filter((document) => document !== undefined)
    .sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()))
}

export const getDocument = (
  path: string,
  locale: string | undefined,
  defaultLocale: string | undefined = CONSTANT.I18N.DEFAULT_LOCALE,
) =>
  locale
    ? (documentMap[locale]?.[path] ?? documentMap[defaultLocale]?.[path])
    : documentMap[defaultLocale]?.[path]

export const getDocumentTree =
  (documents: Document[], parentPaths: string[] = []) =>
  (currentPaths: string[] = []): DocumentTree[] => {
    const lv = parentPaths.length

    const omittedDocuments = documents.filter(
      ({ paths }) =>
        paths.length === lv + 1 &&
        paths.join("/").startsWith(parentPaths.join("/")),
    )

    return omittedDocuments
      .sort((a, b) => a.order - b.order)
      .map(
        ({
          description,
          is_expanded,
          label,
          menu,
          menu_icon,
          paths,
          slug,
          title,
        }) => {
          title = menu ?? title

          const isMatch = paths.every(
            (path: string, index: number) => path === currentPaths[index],
          )

          is_expanded = is_expanded || isMatch

          const children = getDocumentTree(documents, paths)(currentPaths)

          const tree: DocumentTree = {
            children,
            description,
            is_expanded,
            slug,
            title,
          }

          if (menu_icon) tree.menu_icon = menu_icon
          if (label) tree.label = label

          return tree
        },
      )
  }

export const getDocumentPagination = (
  documentTree: DocumentTree[],
  document: Document,
): DocumentPagination => {
  const flattenTree = flattenArray(documentTree, "children")

  let pagination: DocumentPagination = {}

  for (let i = 0; i < flattenTree.length; i++) {
    if (flattenTree[i]?.slug !== document.slug) continue

    const prev = flattenTree[i - 1]
    const next = flattenTree[i + 1]

    if (prev) {
      let { menu, slug, title } = prev

      title = menu ?? title

      pagination.prev = { slug, title }
    }

    if (next) {
      let { menu, slug, title } = next

      if (menu) title = menu

      pagination.next = { slug, title }
    }
  }

  return pagination
}

export const getDocumentBreadcrumbs = (
  paths: string[],
  locale: string = CONSTANT.I18N.DEFAULT_LOCALE,
  defaultLocale: string = CONSTANT.I18N.DEFAULT_LOCALE,
): DocumentNavigation[] => {
  let breadcrumbs: DocumentNavigation[] = []

  for (let i = 0; i <= paths.length - 1; i++) {
    const path = paths.slice(0, i).join("/")

    const document = getDocument(path, locale, defaultLocale)

    if (!document) continue

    let { menu, slug, title } = document

    if (menu) title = menu

    breadcrumbs = [...breadcrumbs, { slug, title }]
  }

  return breadcrumbs
}

const getParentDocument = (documents: Document[], slug: string) =>
  documents.find((d) => d.slug === slug.slice(0, slug.lastIndexOf("/")))

const computeDocumentTabs = (documents: Document[]) =>
  documents
    .sort((a, b) => {
      if (a.is_tabs && !b.is_tabs) return -1
      if (!a.is_tabs && b.is_tabs) return 1

      return a.order - b.order
    })
    .map(({ menu, slug, tab, title }) => ({
      slug,
      title: tab ?? menu ?? title,
    }))

const pickDocumentTabs = (documents: Document[], parentSlug: string) =>
  documents.filter(({ slug }) =>
    new RegExp(`^${parentSlug}($|\\/[^\\/]+$)`).test(slug),
  )

export const omitDocumentTabs = (documents: Document[]): Document[] =>
  documents.filter(({ slug }) => {
    const { is_tabs } = getParentDocument(documents, slug) ?? {}

    return !(is_tabs ?? false)
  })

export const getDocumentTabs = (documents: Document[], document: Document) => {
  const { is_tabs, slug } = document

  let documentTabs: DocumentNavigation[] = []
  let parentDocument: Document | undefined
  let parentPaths: string[] | undefined

  if (is_tabs) {
    documentTabs = computeDocumentTabs(pickDocumentTabs(documents, slug))
  } else {
    parentDocument = getParentDocument(documents, slug)

    if (!parentDocument?.is_tabs) parentDocument = undefined

    if (parentDocument) {
      parentPaths = parentDocument.slug.split("/").slice(1)

      documentTabs = computeDocumentTabs(
        pickDocumentTabs(documents, parentDocument.slug),
      )
    }
  }

  return { documentTabs, parentDocument, parentPaths }
}
