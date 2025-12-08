import type { Metadata } from "next"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"

import { Box, Heading, HStack, VStack } from "@yamada-ui/react"

import { CopyURLButton } from "./copy-url-button"
import { FormatButton } from "./format-button"
import { OSShareButton } from "./os-share-button"
import { PlaygroundEditor } from "./playground-editor"
import { ResetButton } from "./reset-button"
import { ScreenshotButton } from "./screenshot-button"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/playground">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "playground" })

  return { description: t("description"), title: t("title") }
}

export default function Page() {
  const t = useTranslations("playground")

  return (
    <Box
      h={{ base: "calc(100vh - var(--header-height))", md: "auto" }}
      left="50%"
      ml="-50vw"
      mr="-50vw"
      overflow="hidden"
      p={{ base: "md", md: "lg" }}
      position="relative"
      right="50%"
      w="100vw"
    >
      <VStack align="center" gap="md" h="full">
        <Box
          alignItems="center"
          display="flex"
          flexShrink={0}
          justifyContent="space-between"
          maxW="75rem"
          p="sm"
          w="full"
        >
          <Heading as="h2" size="lg">
            {t("title")}
          </Heading>
          <HStack gap="sm">
            <FormatButton />
            <ResetButton />
            <ScreenshotButton />
            <OSShareButton />
            <CopyURLButton />
          </HStack>
        </Box>

        <PlaygroundEditor />
      </VStack>
    </Box>
  )
}
