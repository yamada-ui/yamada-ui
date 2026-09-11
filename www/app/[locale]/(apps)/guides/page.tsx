import type { Metadata } from "next"
import type { ElementType } from "react"
import {
  Badge,
  BlocksIcon,
  BookOpenIcon,
  Center,
  Heading,
  HStack,
  Icon,
  PaintbrushIcon,
  PaletteIcon,
  RocketIcon,
  Text,
  VStack,
} from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { Card, CardGroup } from "@/components/mdx/card"
import { getGuideCategories } from "@/data/guide"
import { generateOg } from "@/utils/next"
import { GuideSearch } from "./search"

export const CATEGORY_ICONS: { [key: string]: ElementType } = {
  components: BlocksIcon,
  "get-started": RocketIcon,
  overview: BookOpenIcon,
  styling: PaintbrushIcon,
  theming: PaletteIcon,
}

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
  const categories = getGuideCategories(locale)
  const t = await getTranslations({ locale, namespace: "guides" })

  return (
    <VStack gap="2xl" py="lg" w="full">
      <VStack as="header" gap="sm">
        <Heading as="h1" size="5xl">
          {t("title")}
        </Heading>
        <Text color="fg.emphasized" fontSize="lg" lineHeight="1.8">
          {t("description")}
        </Text>
      </VStack>

      <GuideSearch />

      {categories.map(({ category, description, guides, title }) => (
        <VStack key={category} as="section" gap="xs" w="full">
          <HStack alignItems="center" gap="3">
            <Center bg="bg.contrast" boxSize="12" rounded="sm">
              <Icon
                as={CATEGORY_ICONS[category] || BlocksIcon}
                fontSize="2xl"
                textColor="fg.contrast"
              />
            </Center>
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
          </HStack>
          <CardGroup>
            {guides.map((guide) => (
              <Card
                key={guide.slug.join("/")}
                href={guide.pathname}
                title={guide.title}
              >
                <Text color="fg.emphasized" fontSize="sm" lineHeight="1.8">
                  {guide.description}
                </Text>
              </Card>
            ))}
          </CardGroup>
        </VStack>
      ))}
    </VStack>
  )
}
