import { createContext } from "@yamada-ui/react"
import type {
  DocumentTypesPagination,
  DocumentTypes,
  DocumentTypesWithChildren,
} from "contentlayer/generated"

type PageContext = {
  documents: DocumentTypes[]
  documentTree: DocumentTypesWithChildren[]
  documentTabs?: DocumentTypes[]
  documentBreadcrumbs?: DocumentTypes[]
  documentChildrenTree?: DocumentTypesWithChildren[]
  documentPagination?: DocumentTypesPagination
} & Partial<Omit<DocumentTypes, "body" | "data">>

export const [PageProvider, usePage] = createContext<PageContext>({
  strict: true,
  errorMessage: "",
  name: "PageContext",
})
