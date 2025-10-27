import { useTranslations } from "next-intl"
import { Hero } from "@/components"
import { generateSharedMetadata } from "@/utils/next"
import { List } from "./list"

export const generateMetadata = generateSharedMetadata("icons")

export default function Page() {
  const t = useTranslations("icons")

  return (
    <>
      <Hero
        description={t("description")}
        title={t("title")}
        primaryButtonProps={{
          href: "/icons#icons",
          children: t("primaryAction"),
        }}
        secondaryButtonProps={{
          href: "/docs/get-started",
          children: t("secondaryAction"),
        }}
      />

      <List />
    </>
  )
}
