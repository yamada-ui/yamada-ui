import type { Metadata } from "next"
import { Grid } from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { Company } from "./company"
import { Form } from "./form"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/icons">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "examples" })

  return { description: t("description"), title: t("title") }
}

export default function Page() {
  return (
    <Grid
      as="section"
      layerStyle="card"
      minH={{ base: "5xl", sm: "2xl" }}
      templateColumns={{ base: "repeat(2, 1fr)", lg: "1fr" }}
    >
      <Company />
      <Form />
    </Grid>
  )
}
