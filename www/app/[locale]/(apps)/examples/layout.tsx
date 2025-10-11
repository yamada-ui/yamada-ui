import type { PropsWithChildren } from "react"
import { HStack, VStack } from "@yamada-ui/react"
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
          href: "/docs/get-started",
          children: t("primaryAction"),
        }}
        secondaryButtonProps={{
          href: "/docs/components",
          children: t("secondaryAction"),
        }}
      />

      <VStack>
        <HStack
          alignItems="center"
          justifyContent={{ base: "center", lg: "start" }}
          position="relative"
          w="full"
        >
          <ExampleMenu flex={{ base: "initial", lg: "1" }} />
        </HStack>

        {children}
      </VStack>
    </>
  )
}
