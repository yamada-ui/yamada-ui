import { VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Hero } from "@/components"

export default function Page() {
  const t = useTranslations("home")

  return (
    <VStack gap="0">
      <Hero
        description={t("description")}
        title={t("title")}
        primaryButtonProps={{
          href: "/docs/get-started",
          children: t("primaryAction"),
        }}
        secondaryButtonProps={{
          href: "/docs/components",
          children: t("secondaryAction"),
        }}
      />
    </VStack>
  )
}
