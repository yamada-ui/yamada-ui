export type * from 'contentlayer/generated'

declare module 'contentlayer/generated' {
  type FrontmatterHeading = {
    level: string | number
    text: string
    id: string
  }

  type Frontmatter = {
    title: string
    locale: string
    slug?: string
    description?: string
    category?: string
    editUrl?: string
    version?: string
    headings?: FrontmatterHeading[]
    publishedDate?: Date
    authorData?: any
  }
}
