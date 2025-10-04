import { VStack } from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { Hero } from "@/components"
import { ExampleNav } from "./example-nav"
import { Examples } from "./examples/[example]/examples"

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "home" })

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

      <ExampleNav example="examples" />
      <Examples />
    </VStack>
  )
}
