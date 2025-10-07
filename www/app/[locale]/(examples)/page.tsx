import { VStack } from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { Hero } from "@/components"
import { ExampleNav } from "./example-nav"
import { Example } from "./examples/[example]/example"
import { ExampleThemeProvider } from "./examples/context"

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

      <ExampleThemeProvider>
        <ExampleNav example="example" />
        <Example />
      </ExampleThemeProvider>
    </VStack>
  )
}
