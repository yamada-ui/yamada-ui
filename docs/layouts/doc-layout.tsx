import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@yamada-ui/fontawesome'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Card,
  CardBody,
  CardHeader,
  Center,
  ChevronIcon,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Tab,
  Tabs,
  Tag,
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
        <HStack alignItems='flex-start' w='full' maxW='9xl' gap='0' px='lg'>
          <Sidebar tree={tree} />

          <VStack flex='1' minW='0' gap='0' py='lg'>
            {breadcrumbs.length ? (
              <Breadcrumb
                separator={<ChevronIcon fontSize='1rem' transform='rotate(-90deg)' />}
                mb='sm'
                gap='1'
                fontSize='sm'
                color='muted'
                listProps={{ h: 6 }}
              >
                {breadcrumbs.map(({ title, menu, slug }, index) => (
                  <BreadcrumbItem key={slug}>
                    <BreadcrumbLink as={Link} href={slug}>
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

            <Heading as='h1' size='2xl'>
              {title}
            </Heading>

            {with_description ? <Text mt='normal'>{description}</Text> : null}

            {tabs.length ? (
              <Tabs
                colorScheme='brand'
                index={tabs.findIndex((child) => child.tab === tab)}
                mt='lg'
              >
                {tabs.map(({ tab, menu, title, slug }) => (
                  <Tab key={slug} onClick={() => push(slug)}>
                    {tab ?? menu ?? title}
                  </Tab>
                ))}
              </Tabs>
            ) : null}

            <Box>
              {children}

              {with_children && childrenTree.length ? (
                <>
                  <Divider mt='xl' />

                  <Grid templateColumns={{ base: 'repeat(2, 1fr)' }} gap='normal' mt='xl'>
                    {childrenTree.map(({ title, menu, description, label, slug }) => (
                      <GridItem key={slug}>
                        <Card
                          as={Link}
                          href={slug}
                          variant='outline'
                          h='44'
                          size='normal'
                          _focus={{ outline: 'none' }}
                          _focusVisible={{ boxShadow: 'outline' }}
                          _hover={{ bg: ['blackAlpha.50', 'whiteAlpha.50'] }}
                          transitionProperty='colors'
                          transitionDuration='normal'
                        >
                          <CardHeader gap='sm'>
                            <Heading size='md' noOfLines={1}>
                              {menu ?? title}
                            </Heading>

                            {label ? (
                              <Tag
                                size='sm'
                                colorScheme={
                                  label === 'New'
                                    ? 'blue'
                                    : label === 'Experimental'
                                    ? 'purple'
                                    : label === 'Planned'
                                    ? 'orange'
                                    : 'gray'
                                }
                              >
                                {label}
                              </Tag>
                            ) : null}
                          </CardHeader>

                          <CardBody>
                            <Text color='muted' noOfLines={3}>
                              {description}
                            </Text>
                          </CardBody>
                        </Card>
                      </GridItem>
                    ))}
                  </Grid>

                  <Divider mt='xl' />
                </>
              ) : null}
            </Box>

            <HStack
              as='a'
              href={editUrl}
              target='_blank'
              mt='xl'
              alignSelf='flex-start'
              gap='sm'
              fontSize='sm'
              color='muted'
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
