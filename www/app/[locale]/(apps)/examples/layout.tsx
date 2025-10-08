import type { PropsWithChildren } from "react"
import { VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Hero } from "@/components"
import { ExampleMenu } from "../example-menu"

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  const t = useTranslations("examples")

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

      <VStack>
        <ExampleMenu alignSelf="center" />

        {children}
      </VStack>
    </>
  )
}
