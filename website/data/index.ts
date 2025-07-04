import type { Doc } from "#velite"
import en from "./doc-map.en.json"
import ja from "./doc-map.ja.json"

export interface DocMap {
  segment: string
  title: Doc["title"]
  items?: DocMap[]
  pathname?: string
  status?: Doc["status"]
}

export function getDocMap(lang: string): DocMap {
  switch (lang) {
    case "ja":
      return ja
    default:
      return en
  }
}

export function flattenDocMap(items: DocMap[]): DocMap[] {
  return items.flatMap(({ items = [], pathname, ...rest }) => [
    ...(pathname ? [{ pathname, ...rest }] : []),
    ...flattenDocMap(items),
  ])
}
