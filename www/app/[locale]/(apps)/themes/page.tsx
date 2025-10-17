import { VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Examples, Hero } from "@/components"
import { generateSharedMetadata } from "@/utils/next"
import { ThemeMenu } from "./theme-menu"

export const generateMetadata = generateSharedMetadata("themes")

export default function Page() {
  const t = useTranslations("themes")

  return (
    <VStack gap="0">
      <Hero
        description={t("description")}
        title={t("title")}
        primaryButtonProps={{
          href: "/docs/theming",
          children: t("primaryAction"),
        }}
        secondaryButtonProps={{
          href: "/docs/get-started",
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
