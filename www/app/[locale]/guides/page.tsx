import type { Metadata } from "next"
import {
  Badge,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { NextLinkButton } from "@/components"
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

      {collections.map(({ collection, description, guides, title }) => (
        <VStack key={collection} as="section" gap="md" w="full">
          <VStack gap="xs">
            <HStack>
              <Heading as="h2" size="lg">
                {title}
              </Heading>
              <Badge colorScheme="gray" variant="subtle">
                {t("guides", { count: guides.length })}
              </Badge>
            </HStack>
            <Text color="fg.muted" fontSize="sm">
              {description}
            </Text>
          </VStack>
          <SimpleGrid as="nav" columns={{ base: 2, md: 1 }} gap="md">
            {guides.map((guide) => (
              <NextLinkButton
                key={guide.slug.join("/")}
                href={`/guides/${guide.slug.slice(1).join("/")}`}
                variant="outline"
                color="fg.emphasized"
                fontWeight="normal"
                justifyContent="flex-start"
              >
                {guide.title}
              </NextLinkButton>
            ))}
          </SimpleGrid>
        </VStack>
      ))}
    </VStack>
  )
}
