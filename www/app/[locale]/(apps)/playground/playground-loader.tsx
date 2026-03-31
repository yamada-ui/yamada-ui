"use client"

import { HStack, Loading, Text } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"

export const PlaygroundLoader = dynamic(() => import("./playground-client"), {
  loading: () => <PlaygroundLoading />,
  ssr: false,
})

function PlaygroundLoading() {
  const t = useTranslations("playground")

  return (
    <HStack gap="sm" h="calc(100dvh - {header-height})" justifyContent="center">
      <Loading.Oval fontSize="lg" />
      <Text color="fg.muted" fontSize="sm">
        {t("initializing")}
      </Text>
    </HStack>
  )
}
