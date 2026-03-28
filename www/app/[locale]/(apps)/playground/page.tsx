import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { PlaygroundClient } from "./playground-loader"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "playground" })
  return { description: t("description"), title: t("title") }
}

export default function Page() {
  return <PlaygroundClient />
}
