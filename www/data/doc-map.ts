import type { Doc } from "#velite"
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
      return ja as DocMap
    default:
      return en as DocMap
  }
}

export function flattenDocMap(items: DocMap[]): DocMap[] {
  return items.flatMap(({ items = [], pathname, ...rest }) => [
    ...(pathname ? [{ pathname, ...rest }] : []),
    ...flattenDocMap(items),
  ])
}
