import { guides } from "#velite"
import { Heading, Text, VStack } from "@yamada-ui/react"
import { notFound } from "next/navigation"
import { MDXContent } from "@/components"

function getGuide(locale: string, slug: string[]) {
  const fullSlug = ["guides", ...slug].join("/")

  return guides.find(
    (guide) => guide.locale === locale && guide.slug.join("/") === fullSlug,
  )
}

export default async function Page({
  params,
}: PageProps<"/[locale]/guides/[...slug]">) {
  const { locale, slug } = await params
  const guide = getGuide(locale, slug)

  if (!guide) return notFound()

  return (
    <VStack maxW="5xl" mx="auto" p="lg">
      <Heading as="h1" size="5xl">
        {guide.title}
      </Heading>
      <Text color="fg.emphasized" fontSize="sm" lineHeight="1.8">
        {guide.description}
      </Text>
      <MDXContent code={guide.code} />
    </VStack>
  )
}
