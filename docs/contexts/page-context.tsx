import { createContext } from '@yamada-ui/react'
import { DocPagination, Doc, DocWithChildren } from 'contentlayer/generated'

type PageContext = {
  docs: Doc[]
  tree: DocWithChildren[]
  tabs?: Doc[]
  breadcrumbs?: Doc[]
  childrenTree?: DocWithChildren[]
  pagination?: DocPagination
}

export const [PageProvider, usePage] = createContext<PageContext>({
  strict: true,
  errorMessage: '',
  name: 'PageContext',
})
