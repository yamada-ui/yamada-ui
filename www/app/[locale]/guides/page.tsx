import type { Metadata } from "next"
import { Badge, Card, Heading, HStack, Text, VStack } from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { NextLink } from "@/components"
import { CardGroup } from "@/components/mdx/card"
import { getGuideCollections } from "@/data/guide"
import { generateOg } from "@/utils/next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "guides" })
  const title = t("title")
  const description = t("description")

  return { description, title, ...generateOg(title, description) }
}

export default async function Page({ params }: PageProps<"/[locale]/guides">) {
  const { locale } = await params
  const collections = getGuideCollections(locale)
  const t = await getTranslations({ locale, namespace: "guides" })

  return (
    <VStack maxW="5xl" mx="auto" py="lg" w="full">
      <VStack as="header" gap="sm" mb="md">
        <Heading as="h1" size="5xl">
          {t("title")}
        </Heading>
        <Text color="fg.emphasized" fontSize="lg" lineHeight="1.8">
          {t("description")}
        </Text>
      </VStack>
      <VStack gap="md" w="full">
        {collections.map(({ collection, guides, title }) => (
          <VStack key={collection} gap="md" w="full">
            <Text key={collection} as="h2" fontSize="2xl" fontWeight="bold">
              {title}
            </Text>
            <CardGroup columns={{ base: 2, md: 1 }} gap="md">
              <Card.Root key={collection} as="article" variant="outline">
                <Card.Header>
                  <HStack>
                    <Heading as="h2" size="lg" flex="1">
                      {title}
                    </Heading>
                    <Badge colorScheme="primary" variant="subtle">
                      {t("guides", { count: guides.length })}
                    </Badge>
                  </HStack>
                </Card.Header>
                <Card.Body as="ul" gap="sm" listStyleType="none" pt="0">
                  {guides.map((guide) => (
                    <Text key={guide.slug.join("/")} as="li">
                      <NextLink
                        href={`/guides/${guide.slug.slice(1).join("/")}`}
                        color="fg.emphasized"
                        fontSize="sm"
                      >
                        {guide.title}
                      </NextLink>
                    </Text>
                  ))}
                </Card.Body>
              </Card.Root>
            </CardGroup>
          </VStack>
        ))}
      </VStack>
    </VStack>
  )
}
