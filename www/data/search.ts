import type { DocMap } from "./doc-map"
import { getLang } from "@/utils/i18n"
import { getDocMap } from "./doc-map"

export interface FragmentContent {
  hierarchy: { [key: number]: string }
  pathname: string
  title: string
  type: "fragment"
  group?: string
}

export interface PageContent {
  pathname: string
  title: string
  type: "page"
  group?: string
}

export type Hit = FragmentContent | PageContent

const loadContents = {
  en: () => import("./doc-search.en.json"),
  ja: () => import("./doc-search.ja.json"),
}

export async function getContents(locale: string): Promise<Hit[]> {
  const { default: contents } = await loadContents[getLang(locale)]()

  return contents as Hit[]
}

function getItems(items: DocMap["items"] = [], group?: string): PageContent[] {
  return items.flatMap(({ items, pathname, title }) => [
    ...(pathname ? [{ type: "page" as const, group, pathname, title }] : []),
    ...getItems(items, group),
  ])
}

export function getDefaultContents(locale: string): PageContent[] {
  return (
    getDocMap(locale).items?.flatMap(({ items, pathname, title }) => [
      ...(pathname ? [{ type: "page" as const, pathname, title }] : []),
      ...getItems(items, title),
    ]) ?? []
  )
}
