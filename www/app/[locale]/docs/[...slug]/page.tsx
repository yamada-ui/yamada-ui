import type { Metadata } from "next"
import { docs } from "#velite"
import { Box } from "@yamada-ui/react"
import { notFound } from "next/navigation"
import { MDXContent } from "@/components"
import { getDocs } from "@/data"
import { generateOg } from "@/utils/next"
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
  return getDocs(params.locale).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/docs/[...slug]">): Promise<Metadata> {
  const { locale, slug } = await params
  const { description, title } = getDoc(locale, slug) ?? {}
  const transformedDescription = mdToText(description)

  return {
    description: transformedDescription,
    title,
    ...generateOg(title, transformedDescription),
  }
}

export default async function Page({
  params,
}: PageProps<"/[locale]/docs/[...slug]">) {
  const { locale, slug } = await params
  const doc = getDoc(locale, slug)

  if (!doc) return notFound()

  return (
    <>
      <Box minW="0" w="full">
        <Header {...doc} />

        <MDXContent code={doc.code} />
      </Box>

      <Toc {...doc} />
    </>
  )
}
