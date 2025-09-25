import { VStack } from "@yamada-ui/react"
import { getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"
import { Hero } from "@/components"
import { ExampleNav } from "../../example-nav"
import { isSlug } from "../../utils"

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[locale]/examples/[example]">) {
  const { example, locale } = await params
  const t = await getTranslations({ locale, namespace: "home" })
  if (!isSlug(example)) notFound()

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

      <ExampleNav example={example} />
      {children}
    </VStack>
  )
}
