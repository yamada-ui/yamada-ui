import type { Metadata } from "next"
import { VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { Examples, Hero } from "@/components"
import { ThemeMenu } from "./theme-menu"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/themes">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "themes" })

  return { description: t("description"), title: t("title") }
}

export default function Page() {
  const t = useTranslations("themes")

  return (
    <VStack gap="0">
      <Hero
        description={t("description")}
        title={t("title")}
        primaryButtonProps={{
          href: "/themes#themes",
          children: t("primaryAction"),
        }}
        secondaryButtonProps={{
          href: "/docs/theming",
          children: t("secondaryAction"),
        }}
      />

      <VStack>
        <ThemeMenu alignSelf="center" />

        <Examples />
      </VStack>
    </VStack>
  )
}
