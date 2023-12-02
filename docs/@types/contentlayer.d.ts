import type { DocumentTypes } from "contentlayer/generated"

declare module "contentlayer/generated" {
  type DocumentData = {
    locale: string
    paths: string[]
    editUrl: string
    contents: DocumentContent[]
  }

  type DocumentContent = { id: string; lv: 1 | 2 | 3; title: string }

  type DocumentTypesPagination = {
    prevDocument?: DocumentTypesNavigationItem
    nextDocument?: DocumentTypesNavigationItem
  }

  type DocumentTypesNavigationItem = Pick<DocumentTypes, "title" | "slug">

  type DocumentTypeTree = Pick<
    DocumentTypes,
    "title" | "slug" | "label" | "description" | "is_expanded"
  > & { children: DocumentTypeTree[] }

  type DocumentTypesWithChildren = DocumentTypes & {
    children: DocumentTypesWithChildren[]
  }
}
