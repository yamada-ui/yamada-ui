import { Center, HStack } from '@yamada-ui/react'
import { FC, PropsWithChildren } from 'react'
import { StarBanner, Header, SEO, Sidebar } from 'components'
import { Frontmatter } from 'contentlayer/generated'

export type DocLayoutProps = PropsWithChildren<Frontmatter>

export const DocLayout: FC<DocLayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <SEO title={title} description={description} />

      <StarBanner />

      <Header />

      <Center as='main'>
        <HStack w='full' maxW='9xl' gap='md' px='md'>
          <Sidebar />

          {children}
        </HStack>
      </Center>
    </>
  )
}
