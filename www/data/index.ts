import type { Doc } from "#velite"
import type { ThemeToken } from "@yamada-ui/react"
import { docs } from "#velite"
import { getPathname } from "@/utils/route"
import en from "./doc-map.en.json"
import ja from "./doc-map.ja.json"

interface Prop {
  type: string
  defaultValue?: string
  deprecated?: string
  description: string
  required: boolean
  see?: string
}

export interface Props {
  [key: string]: Prop
}

export interface Namespace {
  [key: string]: {
    [key: string]: Prop
  }
}

export interface MdnDoc {
  deprecated: boolean
  description: string
  experimental: boolean
  see?: string
}

export interface MdnDocs {
  [key: string]: MdnDoc
}

export interface StyleConfig {
  as?: boolean
  type?: string
  docs?: MdnDocs
  properties?: string[]
  shorthands?: string[]
  token?: ThemeToken
}

export interface DocMap {
  items?: DocMap[]
  pathname?: string
  segment: string
  status?: Doc["status"]
  title: Doc["title"]
  __exists?: boolean
}

export function getDocs(locale: string): Doc[] {
  return docs.filter((doc) => doc.locale === locale)
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

export interface FragmentContent {
  type: "fragment"
  group?: string
  hierarchy: { [key: number]: string }
  pathname: string
  title: string
}

function getFragments(
  toc: Doc["toc"],
  hierarchy: { [key: number]: string },
  pathname: string,
  group?: string,
  lv = 2,
): FragmentContent[] {
  return toc.flatMap(({ items = [], title, url }) => {
    return [
      {
        type: "fragment",
        group,
        hierarchy: { ...hierarchy, [lv]: title },
        pathname: `${pathname}${url}`,
        title,
      },
      ...getFragments(
        items,
        { ...hierarchy, [lv]: title },
        pathname,
        group,
        lv + 1,
      ),
    ]
  })
}

export interface PageContent {
  type: "page"
  group?: string
  pathname: string
  title: string
}

export function getContents(locale: string): (FragmentContent | PageContent)[] {
  const docs = getDocs(locale)

  function getGroup(slug: string[]): string | undefined {
    if (slug.length === 1) return

    return docs.find(
      ({ pathname }) => pathname === getPathname("docs", slug[0]!),
    )?.title
  }

  return docs.flatMap(({ pathname, slug, title, toc }) => {
    const group = getGroup(slug)

    return [
      {
        type: "page",
        group,
        pathname,
        title,
      },
      ...getFragments(toc, { 1: title }, pathname, group),
    ]
  })
}

function getItems(items: DocMap["items"] = [], group?: string): PageContent[] {
  return items.flatMap(({ items = [], pathname, title }) => {
    return [
      ...(pathname
        ? [
            {
              type: "page" as const,
              group,
              pathname,
              title,
            },
          ]
        : []),
      ...getItems(items, group),
    ]
  })
}

export function getDefaultContents(locale: string): PageContent[] {
  const docMap = getDocMap(locale)

  return (
    docMap.items?.flatMap(({ items, pathname, title }) => [
      ...(pathname
        ? [
            {
              type: "page" as const,
              pathname,
              title,
            },
          ]
        : []),
      ...getItems(items, title),
    ]) ?? []
  )
}
