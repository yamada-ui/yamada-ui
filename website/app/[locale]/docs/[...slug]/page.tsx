import type { Metadata } from "next"
import { docs } from "#velite"
import { VStack } from "@yamada-ui/react"
import { notFound } from "next/navigation"
import { MDXContent } from "@/components"
import { mdToText } from "@/utils/string"
import { Header } from "./header"
import { Toc } from "./toc"

function getDoc(locale: string, slug: string[]) {
  return docs.find(
    (doc) => doc.locale === locale && doc.slug.join("/") === slug.join("/"),
  )
}

export function generateStaticParams({
  params,
}: {
  params: { locale: string }
}) {
  return docs
    .filter(({ locale }) => locale === params.locale)
    .map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const { description, title } = getDoc(locale, slug) ?? {}

  return { description: mdToText(description), title }
}

interface PageProps {
  params: Promise<{ locale: string; slug: string[] }>
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params
  const doc = getDoc(locale, slug)

  if (!doc) return notFound()

  return (
    <>
      <VStack flex="1" gap="lg">
        <Header {...doc} />

        <MDXContent code={doc.code} />
      </VStack>

      <Toc {...doc} />
    </>
  )
}
