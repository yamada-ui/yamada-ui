import { FC, PropsWithChildren } from 'react'
import { StarBanner, Header, SEO } from 'components'

export type FrontmatterHeading = {
  level: string | number
  text: string
  id: string
}

export type Frontmatter = {
  slug?: string
  title: string
  description?: string
  editUrl?: string
  version?: string
  headings?: FrontmatterHeading[]
  publishedDate?: Date
  authorData?: any
}

export type DocLayoutProps = PropsWithChildren<Frontmatter>

export const DocLayout: FC<DocLayoutProps> = ({ title, description, children, ...rest }) => {
  console.log(rest)

  return (
    <>
      <SEO title={title} description={description} />

      <StarBanner />

      <Header />

      {children}
    </>
  )
}
