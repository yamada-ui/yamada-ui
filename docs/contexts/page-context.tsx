import type { FC, PropsWithChildren } from "react"
import { createContext, useContext, useMemo } from "react"
import type {
  DocumentTypesPagination,
  DocumentTypes,
  DocumentTypesNavigationItem,
  DocumentTypeTree,
} from "contentlayer/generated"

type PageContext = Omit<PageProviderProps, "children"> & {
  documentMap: Pick<DocumentTypes, "title" | "description" | "label" | "slug">[]
}

const defaultValue = {
  documentTree: [],
  documentMap: [],
}

export const PageContext = createContext<PageContext>(defaultValue)

const getDocumentMap = (tree: DocumentTypeTree[]) =>
  tree.flatMap(({ title, slug, label, description, children }) => [
    { title, slug, label, description },
    ...getDocumentMap(children),
  ])

export type PageProviderProps = PropsWithChildren<
  {
    documentTree: DocumentTypeTree[]
    documentTabs?: DocumentTypesNavigationItem[]
    documentBreadcrumbs?: DocumentTypesNavigationItem[]
    documentChildrenTree?: DocumentTypeTree[]
    documentPagination?: DocumentTypesPagination
  } & Partial<Omit<DocumentTypes, "body" | "data">>
>

export const PageProvider: FC<PageProviderProps> = ({
  documentTree,
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
