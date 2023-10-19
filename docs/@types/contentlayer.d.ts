import type { DocumentTypes } from 'contentlayer/generated'

declare module 'contentlayer/generated' {
  type DocumentContent = { id: string; lv: 1 | 2 | 3; title: string }

  type DocumentTypesPagination = { prevDocument?: Doc | null; nextDocument?: Doc | null }

  type DocumentData = {
    title: string
    menu: string
    tab: string
    order: number
    table_of_contents_max_lv: number
    label: string
    tags: string[]
    is_active: boolean
    is_tabs: boolean
    with_table_of_contents: boolean
    with_children: boolean
    with_description: boolean
    with_children_description: boolean
    package_name: string
    locale: string
    paths: string[]
    description?: string
    editUrl?: string
    version?: string
    contents?: DocumentContent[]
  }

  type DocumentTypesWithChildren = DocumentTypes & { children: DocumentTypesWithChildren[] }
}
