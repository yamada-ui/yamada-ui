import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { SourceCodeLink } from "../source-code-link"
import { Mail } from "./mail"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "examples" })

  return { description: t("description"), title: t("menu.mail") }
}

export default function Page() {
  return (
    <>
      <Mail />

      <SourceCodeLink page="mail" />
    </>
  )
}
