import type { Doc } from "#velite"
import { cast } from "@yamada-ui/utils"
import en from "./doc-map.en.json"
import ja from "./doc-map.ja.json"

export interface DocMap {
  segment: string
  title: Doc["title"]
  __exists?: boolean
  items?: DocMap[]
  pathname?: string
  status?: Doc["status"]
}

export function getDocMap(locale: string): DocMap {
  switch (locale) {
    case "ja-JP":
      return cast<DocMap>(ja)
    default:
      return cast<DocMap>(en)
  }
}

export function flattenDocMap(items: DocMap[]): DocMap[] {
  return items.flatMap(({ items = [], pathname, ...rest }) => [
    ...(pathname ? [{ pathname, ...rest }] : []),
    ...flattenDocMap(items),
  ])
}
