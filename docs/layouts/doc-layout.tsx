import { Box, Center, Divider, HStack, Heading, Text, VStack } from '@yamada-ui/react'
import { FC, PropsWithChildren } from 'react'
import {
  StarBanner,
  Header,
  SEO,
  Sidebar,
  Footer,
  TableOfContents,
  Pagination,
  Breadcrumb,
  Tabs,
  Cards,
  EditPageLink,
} from 'components'
import { Data, Doc } from 'contentlayer/generated'
import { usePage } from 'contexts'

export type DocLayoutProps = PropsWithChildren<Doc & Data>

export const DocLayout: FC<DocLayoutProps> = ({
  title,
  description,
  editUrl,
  tab,
  with_description,
  with_children,
  contents,
  children,
}) => {
  const { childrenTree } = usePage()

  return (
    <>
      <SEO title={title} description={description} />

      <StarBanner />

      <Header />

      <Center as='main'>
        <HStack alignItems='flex-start' w='full' maxW='9xl' gap='0' px={{ base: 'lg', md: 'md' }}>
          <Sidebar display={{ base: 'flex', lg: 'none' }} />

          <VStack flex='1' minW='0' gap='0' py={{ base: 'lg', md: 'normal' }}>
            <Breadcrumb />

            <Heading as='h1' size='2xl'>
              {title}
            </Heading>

            {with_description ? <Text mt='normal'>{description}</Text> : null}

            <Tabs tab={tab} />

            <Box>
              {children}

              {with_children && childrenTree.length ? (
                <>
                  <Divider mt='xl' />

                  <Cards />

                  <Divider mt='xl' />
                </>
              ) : null}

              <EditPageLink href={editUrl} />

              <Pagination />
            </Box>
          </VStack>

          <TableOfContents display={{ base: 'flex', xl: 'none' }} contents={contents} />
        </HStack>
      </Center>

      <Footer />
    </>
  )
}
