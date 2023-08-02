import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@yamada-ui/fontawesome'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Center,
  ChevronIcon,
  HStack,
  Heading,
  Tab,
  Tabs,
  Text,
  VStack,
} from '@yamada-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { StarBanner, Header, SEO, Sidebar, Footer, TableOfContents, Pagination } from 'components'
import { Data, Doc, DocWithChildren, DocPagination } from 'contentlayer/generated'
import { useI18n } from 'contexts'

export type DocLayoutProps = PropsWithChildren<
  Doc &
    Data & {
      breadcrumbs: Doc[]
      tabs: Doc[]
      tree: DocWithChildren[]
      childrenTree: DocWithChildren[]
      pagination: DocPagination
    }
>

export const DocLayout: FC<DocLayoutProps> = ({
  title,
  description,
  editUrl,
  tab,
  with_description,
  with_children,
  contents,
  tree,
  childrenTree,
  tabs,
  breadcrumbs,
  pagination,
  children,
}) => {
  const { push } = useRouter()
  const { t } = useI18n()

  return (
    <>
      <SEO title={title} description={description} />

      <StarBanner />

      <Header />

      <Center as='main'>
        <HStack alignItems='flex-start' w='full' maxW='9xl' gap='0' px='md'>
          <Sidebar tree={tree} />

          <VStack gap='0'>
            {breadcrumbs.length ? (
              <Breadcrumb
                separator={<ChevronIcon fontSize='1rem' transform='rotate(-90deg)' />}
                pt='md'
                fontSize='sm'
                color='muted'
                gap='1'
              >
                {breadcrumbs.map(({ title, menu, slug }, index) => (
                  <BreadcrumbItem key={slug}>
                    <BreadcrumbLink as={Link} href={slug} rounded='md'>
                      {menu ?? title}
                    </BreadcrumbLink>

                    {breadcrumbs.length === index + 1 ? (
                      <BreadcrumbSeparator ms='1'>
                        <ChevronIcon fontSize='1rem' transform='rotate(-90deg)' />
                      </BreadcrumbSeparator>
                    ) : null}
                  </BreadcrumbItem>
                ))}
              </Breadcrumb>
            ) : null}

            <Heading as='h1'>{title}</Heading>

            {with_description ? <Text>{description}</Text> : null}

            {tabs.length ? (
              <Tabs
                colorScheme='brand'
                index={tabs.findIndex((child) => child.tab === tab)}
                mt='lg'
              >
                {tabs.map(({ tab, menu, title, slug }) => (
                  <Tab key='slug' onClick={() => push(slug)}>
                    {tab ?? menu ?? title}
                  </Tab>
                ))}
              </Tabs>
            ) : null}

            {children}

            {with_children && childrenTree.length ? <></> : null}

            <HStack
              as={Link}
              href={editUrl}
              mt='lg'
              alignSelf='flex-start'
              gap='sm'
              fontSize='sm'
              color='muted'
              rounded='md'
              _focus={{ outline: 'none' }}
              _focusVisible={{ boxShadow: 'outline' }}
              _hover={{ color: ['black', 'white'] }}
              transitionProperty='colors'
              transitionDuration='normal'
            >
              <Icon icon={faPencilAlt} fontSize='0.8em' />

              <Text>{t('component.edit-page.label')}</Text>
            </HStack>

            <Pagination {...pagination} />
          </VStack>

          <TableOfContents display={{ base: 'flex', xl: 'none' }} contents={contents} />
        </HStack>
      </Center>

      <Footer />
    </>
  )
}
