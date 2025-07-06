import { VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Hero } from "@/components"

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
    </VStack>
  )
}
