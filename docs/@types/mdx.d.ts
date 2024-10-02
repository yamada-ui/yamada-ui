import type { Document } from "mdx"

declare module "mdx" {
  type DocumentTree = {
    children: DocumentTree[]
  } & Pick<
    Document,
    | "description"
    | "is_expanded"
    | "label"
    | "menu"
    | "menu_icon"
    | "slug"
    | "title"
  >

  type DocumentPagination = {
    next?: DocumentNavigation
    prev?: DocumentNavigation
  }

  type DocumentNavigation = Pick<Document, "slug" | "title">
}
