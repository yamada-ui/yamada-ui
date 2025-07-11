import type {
  Document,
  DocumentNavigation,
  DocumentPagination,
  DocumentTree,
} from "mdx"
import type { FC, PropsWithChildren } from "react"
import { createContext, useContext, useMemo } from "react"

interface PageContext extends Omit<PageProviderProps, "children"> {
  documentMap: Pick<DocumentTree, "description" | "label" | "slug" | "title">[]
}

const defaultValue = {
  currentVersion: undefined,
  documentMap: [],
  documentTree: [],
}

export const PageContext = createContext<PageContext>(defaultValue)

const getDocumentMap = (
  tree: DocumentTree[],
): Pick<DocumentTree, "description" | "label" | "slug" | "title">[] =>
  tree.flatMap(({ children, description, label, slug, title }) => [
    { description, label, slug, title },
    ...getDocumentMap(children),
  ])

export interface PageProviderProps
  extends PropsWithChildren,
    Partial<Omit<Document, "body" | "data">> {
  currentVersion: null | string | undefined
  documentTree: DocumentTree[]
  documentBreadcrumbs?: DocumentNavigation[]
  documentChildrenTree?: DocumentTree[]
  documentPagination?: DocumentPagination
  documentTabs?: DocumentNavigation[]
}

export const PageProvider: FC<PageProviderProps> = ({
  children,
  documentTree = [],
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
