import type { PropsWithChildren } from "react"
import { VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Hero } from "@/components"
import { generateSharedMetadata } from "@/utils/next"

export const generateMetadata = generateSharedMetadata("showcase")

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  const t = useTranslations("showcase")

  return (
    <>
      <Hero
        description={t("description")}
        title={t("title")}
        primaryButtonProps={{
          href: "/docs/get-started",
          children: t("primaryAction"),
        }}
        secondaryButtonProps={{
          href: "/showcase/submit",
          children: t("secondaryAction"),
        }}
      />

      <VStack as="section">{children}</VStack>
    </>
  )
}
