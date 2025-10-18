import type { Metadata } from "next"
import { readFileSync } from "fs"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { join } from "path"

import { Box, Heading, HStack, VStack } from "@yamada-ui/react"

import { CopyURLButton } from "./copy-url-button"
import { FormatButton } from "./format-button"
import { OSShareButton } from "./os-share-button"
import { PlaygroundEditor } from "./playground-editor"
import { ResetButton } from "./reset-button"
import { ScreenshotButton } from "./screenshot-button"
import { SwapButton } from "./swap-button"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/playground">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "playground" })

  return { description: t("description"), title: t("title") }
}

export default function Page() {
  const t = useTranslations("playground")
  const playgroundPath = join(process.cwd(), "public", "playground")

  const nodeModulesJson = readFileSync(
    join(playgroundPath, "node_modules.json"),
    "utf-8",
  )

  return (
    <Box
      h="calc(100vh - var(--header-height))"
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
            <SwapButton />
            <ScreenshotButton />
            <OSShareButton />
            <CopyURLButton />
          </HStack>
        </Box>

        <Box flex="1" minH={0} w="full">
          <PlaygroundEditor nodeModulesJson={nodeModulesJson} />
        </Box>
      </VStack>
    </Box>
  )
}
