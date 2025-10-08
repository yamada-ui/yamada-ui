import type { Metadata } from "next"
import { VStack } from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { Body } from "./body"
import { Header } from "./header"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/icons">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "examples" })

  return { description: t("description"), title: t("title") }
}

export default function Page() {
  return (
    <VStack as="section" layerStyle="card" gap="0">
      <Header />

      <Body />
    </VStack>
  )
}
