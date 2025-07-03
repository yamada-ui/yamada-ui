import type { MDXComponents, MDXContent } from "mdx/types"
import type { Metadata } from "next"
import { docs } from "#velite"
import * as components from "@yamada-ui/react"
import { VStack } from "@yamada-ui/react"
import { notFound } from "next/navigation"
import * as runtime from "react/jsx-runtime"
import { mdToText } from "@/utils/string"
import { Header } from "./header"
import { Toc } from "./toc"

function getDoc(locale: string, slug: string[]) {
  return docs.find(
    (doc) => doc.locale === locale && doc.slug.join("/") === slug.join("/"),
  )
}

function getContent(code?: string): MDXContent | null {
  try {
    if (!code) return null

    const fn = new Function(code)

    return fn({ ...runtime })?.default
  } catch {
    return null
  }
}

export function generateStaticParams({
  params,
}: {
  params: { locale: string }
}) {
  return docs
    .filter(({ locale }) => locale === params.locale)
    .map(({ slug }) => slug)
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

  const Content = getContent(doc.code)

  return (
    <>
      <VStack flex="1" gap="lg">
        <Header {...doc} />

        {Content ? (
          <Content components={components as unknown as MDXComponents} />
        ) : null}
      </VStack>

      <Toc {...doc} />
    </>
  )
}
