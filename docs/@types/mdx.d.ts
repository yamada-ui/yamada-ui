import type { Document } from "mdx"

declare module "mdx" {
  interface DocumentTree
    extends Pick<
      Document,
      | "description"
      | "is_expanded"
      | "label"
      | "menu"
      | "menu_icon"
      | "slug"
      | "title"
    > {
    children: DocumentTree[]
  }

  interface DocumentPagination {
    next?: DocumentNavigation
    prev?: DocumentNavigation
  }

  type DocumentNavigation = Pick<Document, "slug" | "title">
}
