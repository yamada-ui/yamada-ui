import type { Document } from "mdx"
import type { FC, PropsWithChildren } from "react"
import {
  Box,
  Center,
  Heading,
  HStack,
  Separator,
  VStack,
} from "@yamada-ui/react"
import { StarBanner } from "components/feedback"
import { Footer, Header, Sidebar } from "components/layouts"
import { Seo } from "components/media-and-icons"
import {
  Breadcrumb,
  EditPageLink,
  LinkCards,
  Pagination,
  RelatedLinks,
  TableOfContents,
  Tabs,
} from "components/navigation"
import { TextWithCodeOrLink } from "components/typography"
import { usePage } from "contexts"

export type DocumentLayoutProps = PropsWithChildren<Partial<Document>>

export const DocumentLayout: FC<DocumentLayoutProps> = ({
  children,
  contents,
  description,
  edit_url,
  title,
  with_children,
  with_children_description,
  with_description,
  with_table_of_contents,
}) => {
  const { documentChildrenTree } = usePage()

  return (
    <>
      <Seo description={description} title={title} />

      <StarBanner />

      <Header />

      <Center as="main">
        <HStack
          alignItems="flex-start"
          gap="0"
          maxW="9xl"
          px={{ base: "lg", md: "md" }}
          w="full"
        >
          <Sidebar display={{ base: "flex", lg: "none" }} />

          <VStack
            flex="1"
            gap="0"
            minW="0"
            pl={{ base: "md", lg: "0" }}
            pr={
              with_table_of_contents && contents?.length
                ? { base: "md", xl: "0" }
                : undefined
            }
            py={{ base: "lg", md: "normal" }}
          >
            <Breadcrumb />

            <Heading as="h1" size="2xl">
              {title}
            </Heading>

            {with_description ? (
              <TextWithCodeOrLink mt="6">{description}</TextWithCodeOrLink>
            ) : null}

            <RelatedLinks />

            <Tabs />

            <Box>
              {children}

              {with_children && documentChildrenTree?.length ? (
                <>
                  <Separator mt="xl" />

                  <LinkCards with_description={with_children_description} />

                  <Separator mt="xl" />
                </>
              ) : null}

              {edit_url ? <EditPageLink href={edit_url} /> : null}

              <Pagination />
            </Box>
          </VStack>

          {with_table_of_contents && contents?.length ? (
            <TableOfContents
              contents={contents}
              display={{ base: "flex", xl: "none" }}
            />
          ) : null}
        </HStack>
      </Center>

      <Footer />
    </>
  )
}
