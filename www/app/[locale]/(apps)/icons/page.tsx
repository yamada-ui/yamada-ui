import type { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { Hero } from "@/components"
import { List } from "./list"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/icons">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "icons" })

  return { description: t("description"), title: t("title") }
}

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
