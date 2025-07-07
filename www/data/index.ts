import type { Doc } from "#velite"
import { icons } from "@yamada-ui/react"
import en from "./doc-map.en.json"
import ja from "./doc-map.ja.json"
import iconTags from "./icons.json"

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

export function getIcons() {
  return Object.entries(icons).map(([name, Icon]) => ({
    name,
    Icon,
    tags: iconTags[name as keyof typeof iconTags],
  }))
}
