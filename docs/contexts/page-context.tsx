import type {
  DocumentPagination,
  Document,
  DocumentNavigation,
  DocumentTree,
} from "mdx"
import type { FC, PropsWithChildren } from "react"
import { createContext, useContext, useMemo } from "react"

type PageContext = Omit<PageProviderProps, "children"> & {
  documentMap: Pick<DocumentTree, "title" | "description" | "label" | "slug">[]
}

const defaultValue = {
  currentVersion: undefined,
  documentTree: [],
  documentMap: [],
}

export const PageContext = createContext<PageContext>(defaultValue)

const getDocumentMap = (
  tree: DocumentTree[],
): Pick<DocumentTree, "title" | "slug" | "label" | "description">[] =>
  tree.flatMap(({ title, slug, label, description, children }) => [
    { title, slug, label, description },
    ...getDocumentMap(children),
  ])

export type PageProviderProps = PropsWithChildren<
  {
    currentVersion: string | undefined | null
    documentTree: DocumentTree[]
    documentTabs?: DocumentNavigation[]
    documentBreadcrumbs?: DocumentNavigation[]
    documentChildrenTree?: DocumentTree[]
    documentPagination?: DocumentPagination
  } & Partial<Omit<Document, "body" | "data">>
>

export const PageProvider: FC<PageProviderProps> = ({
  documentTree = [],
  children,
  ...rest
}) => {
  const documentMap = useMemo(
    () => getDocumentMap(documentTree),
    [documentTree],
  )

  const value = useMemo(
    () => ({ documentMap, documentTree, ...rest }),
    [documentMap, documentTree, rest],
  )

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

export const usePage = () => useContext(PageContext)
