import type { PropsWithChildren } from "react"
import { For, HStack, VStack } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { Hero, NextLink } from "@/components"
import { SLUGS } from "./data"

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  const t = useTranslations("home")

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

      <HStack>
        <For each={SLUGS}>
          {(slug) => (
            <NextLink
              key={slug}
              href={slug === "example" ? "/" : `/examples/${slug}`}
              colorScheme="primary"
            >
              {slug}
            </NextLink>
          )}
        </For>
      </HStack>
      {children}
    </VStack>
  )
}
