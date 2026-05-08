import { getTranslations } from "next-intl/server"
import { Hero } from "@/components"

export default async function NotFound() {
  const t = await getTranslations("notFoundPage")

  return (
    <Hero
      description={t("description")}
      title={t("title")}
      primaryButtonProps={{ href: "/", children: t("action") }}
    />
  )
}
