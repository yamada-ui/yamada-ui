import { VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Hero } from "@/components"

export default function Page() {
  const t = useTranslations("icons")

  return (
    <VStack gap="0">
      <Hero
        description={t("description")}
        title={t("title")}
        primaryButtonProps={{
          href: "/icons#icons",
          children: t("primaryAction"),
        }}
        secondaryButtonProps={{
          href: "/docs/components/icon",
          children: t("secondaryAction"),
        }}
      />
    </VStack>
  )
}
