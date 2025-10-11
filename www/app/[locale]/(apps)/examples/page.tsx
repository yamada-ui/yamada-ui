import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Examples } from "@/components"
import { SourceCodeLink } from "./source-code-link"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/icons">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "examples" })

  return { description: t("description"), title: t("title") }
}

export default function Page() {
  return (
    <>
      <Examples />

      <SourceCodeLink />
    </>
  )
}
