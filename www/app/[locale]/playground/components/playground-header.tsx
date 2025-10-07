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
import { useRouter } from "next/navigation"
import { memo, useCallback } from "react"
import { usePlayground } from "../playground-provider"

export const PlaygroundHeader = memo(() => {
  const { playground } = usePlayground()
  const router = useRouter()

  const shareUrl = playground.getShareUrl()
  const { copied, onCopy } = useClipboard(shareUrl)

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
        Playground
      </Heading>
      <HStack gap="sm">
        <ButtonGroup.Root size="sm" gap="sm">
          <Tooltip content="Reset" placement="end-center">
            <IconButton
              colorScheme="danger"
              variant="surface"
              aria-label="Reset"
              onClick={playground.reset}
            >
              <RotateCcwIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            content={copied ? "Copied" : "Copy share URL"}
            placement="end-center"
          >
            <IconButton
              colorScheme="primary"
              variant="surface"
              aria-label="Copy share URL"
              onClick={onCopy}
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
