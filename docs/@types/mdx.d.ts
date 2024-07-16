import type { Document } from "mdx"

declare module "mdx" {
  type DocumentTree = Pick<
    Document,
    | "title"
    | "description"
    | "slug"
    | "menu"
    | "menu_icon"
    | "label"
    | "is_expanded"
  > & {
    children: DocumentTree[]
  }

  type DocumentPagination = {
    prev?: DocumentNavigation
    next?: DocumentNavigation
  }

  type DocumentNavigation = Pick<Document, "title" | "slug">
}
