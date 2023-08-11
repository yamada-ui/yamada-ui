import type { Doc } from 'contentlayer/generated'

declare module 'contentlayer/generated' {
  type Content = { id: string; lv: 1 | 2 | 3; title: string }

  type DocPagination = { prev?: Doc | null; next?: Doc | null }

  type Data = {
    title: string
    menu: string
    tab: string
    order: number
    label: string
    tags: string[]
    is_active: boolean
    is_tabs: boolean
    with_children: boolean
    with_description: boolean
    with_children_description: boolean
    package: string
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
