import type { Metadata } from "next"
import { guides } from "#velite"
import { Breadcrumb, Heading, Text, VStack } from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"
import { MDXContent, NextLink } from "@/components"
import { getGuides } from "@/data/guide"
import en from "@/data/guide-map.en.json"
import ja from "@/data/guide-map.ja.json"
import { generateOg } from "@/utils/next"

function getGuide(locale: string, slug: string[]) {
  const fullSlug = ["guides", ...slug].join("/")

  return guides.find(
    (guide) => guide.locale === locale && guide.slug.join("/") === fullSlug,
  )
}

function getCollectionTitle(locale: string, collection: string) {
  const map = locale === "ja-JP" ? ja : en

  return map.find((entry) => entry.collection === collection)?.title
}

export function generateStaticParams({
  params,
}: {
  params: { locale: string }
}) {
  return getGuides(params.locale).map(({ slug }) => ({
    slug: slug.slice(1),
  }))
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/guides/[...slug]">): Promise<Metadata> {
  const { locale, slug } = await params
  const guide = getGuide(locale, slug)

  if (!guide) return {}

  return {
    description: guide.description,
    title: guide.title,
    ...generateOg(guide.title, guide.description),
  }
}

export default async function Page({
  params,
}: PageProps<"/[locale]/guides/[...slug]">) {
  const { locale, slug } = await params
  const guide = getGuide(locale, slug)

  if (!guide) return notFound()

  const t = await getTranslations({ locale, namespace: "guides" })
  const collectionTitle = getCollectionTitle(locale, guide.collection)

  return (
    <VStack as="article" maxW="5xl" mx="auto" py="lg" w="full">
      <Breadcrumb.Root>
        <Breadcrumb.Link as={NextLink} href="/guides">
          {t("title")}
        </Breadcrumb.Link>
        {collectionTitle ? (
          <Breadcrumb.Link currentPage>{collectionTitle}</Breadcrumb.Link>
        ) : null}
      </Breadcrumb.Root>

      <VStack as="header" gap="sm">
        <Heading as="h1" size="5xl">
          {guide.title}
        </Heading>
        <Text color="fg.emphasized" fontSize="sm" lineHeight="1.8">
          {guide.description}
        </Text>
        <Text as="time" color="fg.muted" fontSize="xs">
          {guide.publishedAt}
        </Text>
      </VStack>

      <MDXContent code={guide.code} />
    </VStack>
  )
}
