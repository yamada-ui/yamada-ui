import { useTranslations } from "next-intl"
import { Hero } from "@/components"
import { List } from "./list"

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
          href: "/docs/components/icon",
          children: t("secondaryAction"),
        }}
      />

      <List />
    </>
  )
}
