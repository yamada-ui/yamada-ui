import type { Doc } from 'contentlayer/generated'

declare module 'contentlayer/generated' {
  type Content = { id: string; lv: 1 | 2 | 3; title: string }

  type DocPagination = { prev?: Doc | null; next?: Doc | null }

  type Data = {
    title: string
    locale: string
    paths: string[]
    description?: string
    category?: string
    editUrl?: string
    version?: string
    contents?: Content[]
  }

  type DocWithChildren = Doc & { children: DocWithChildren[] }
}
