import type { Metadata } from "next"
import { Heading, Separator, Text, VStack } from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { SourceCodeLink } from "../source-code-link"
import { Body } from "./body"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/icons">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "examples" })

  return { description: t("description"), title: t("title") }
}

export default function Page() {
  return (
    <>
      <VStack
        as="section"
        layerStyle="card"
        p="{space}"
        separator={<Separator />}
      >
        <VStack as="header" gap="xs">
          <Heading as="h2" size="2xl">
            Settings
          </Heading>

          <Text color="fg.muted" fontSize="sm">
            Manage your account settings and set e-mail preferences.
          </Text>
        </VStack>

        <Body />
      </VStack>

      <SourceCodeLink page="forms" />
    </>
  )
}
