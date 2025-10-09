"use client"

import {
  ButtonGroup,
  CheckIcon,
  ClipboardCopyIcon,
  Heading,
  HStack,
  IconButton,
  RotateCcwIcon,
  Tooltip,
  useClipboard,
  useWindowEvent,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { memo, useCallback } from "react"
import { usePlayground } from "../playground-provider"

export const PlaygroundHeader = memo(() => {
  const { playground } = usePlayground()
  const t = useTranslations()
  const router = useRouter()

  const { copied, onCopy } = useClipboard()

  const handleCopy = useCallback(() => {
    const currentShareUrl = playground.getShareUrl()
    onCopy(currentShareUrl)
  }, [playground, onCopy])

  const handleKeyboardShortcut = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.code === "KeyS" && (ev.ctrlKey || ev.metaKey)) {
        ev.preventDefault()
        const shareUrl = playground.getShareUrl()
        const url = new URL(shareUrl)
        router.replace(url.pathname + url.search, { scroll: false })
      }
    },
    [playground, router],
  )

  useWindowEvent("keydown", handleKeyboardShortcut)

  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Heading as="h2" fontSize="lg" fontWeight="semibold">
        {t("component.playground.title")}
      </Heading>
      <HStack gap="sm">
        <ButtonGroup.Root size="sm" gap="sm">
          <Tooltip
            content={t("component.playground.reset")}
            placement="end-center"
          >
            <IconButton
              colorScheme="danger"
              variant="surface"
              aria-label={t("component.playground.reset")}
              onClick={playground.reset}
            >
              <RotateCcwIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            content={
              copied
                ? t("component.playground.shareUrlCopied")
                : t("component.playground.shareUrlCopy")
            }
            placement="end-center"
          >
            <IconButton
              colorScheme="primary"
              variant="surface"
              aria-label={t("component.playground.shareUrlCopy")}
              onClick={handleCopy}
            >
              {copied ? <CheckIcon /> : <ClipboardCopyIcon />}
            </IconButton>
          </Tooltip>
        </ButtonGroup.Root>
      </HStack>
    </HStack>
  )
})

PlaygroundHeader.displayName = "PlaygroundHeader"
