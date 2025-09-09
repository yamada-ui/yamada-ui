"use client"

import type { FormEvent } from "react"
import {
  ButtonGroup,
  CheckIcon,
  ClipboardCopyIcon,
  HStack,
  IconButton,
  Input,
  RotateCcwIcon,
  SaveIcon,
  Text,
  useClipboard,
  useWindowEvent,
} from "@yamada-ui/react"
import { useRouter } from "next/navigation"
import { useCallback, useRef } from "react"
import { usePlayground } from "../playground-provider"
import { PlaygroundHistory } from "./playground-history"

export function PlaygroundHeader() {
  const { playground } = usePlayground()
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const shareUrl = playground.getShareUrl()
  const { copied, onCopy } = useClipboard(shareUrl)

  const handleSave = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const saveName = formData.get("saveName")
      if (!saveName || typeof saveName !== "string" || !saveName.trim()) return
      playground.saveSet(saveName.trim())
      e.currentTarget.reset()
    },
    [playground],
  )

  useWindowEvent(
    "keydown",
    useCallback(
      (ev) => {
        if (ev.code === "KeyS" && (ev.ctrlKey || ev.metaKey)) {
          ev.preventDefault()
          const shareUrl = playground.getShareUrl()
          const url = new URL(shareUrl)
          router.replace(url.pathname + url.search, { scroll: false })
        }
      },
      [playground, router],
    ),
  )

  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Text fontSize="lg" fontWeight="semibold">
        Playground
      </Text>
      <HStack gap="md">
        <HStack gap="sm">
          <form ref={formRef} onSubmit={handleSave}>
            <HStack gap="sm">
              <Input
                name="saveName"
                size="sm"
                placeholder="Save name"
                required
                w="56"
              />
              <IconButton type="submit" size="sm" variant="surface">
                <SaveIcon />
              </IconButton>
            </HStack>
          </form>
          <PlaygroundHistory />
        </HStack>
        <ButtonGroup.Root size="sm" gap="sm">
          <IconButton
            colorScheme="danger"
            variant="surface"
            aria-label="Reset"
            onClick={playground.reset}
          >
            <RotateCcwIcon />
          </IconButton>
          <IconButton
            colorScheme="primary"
            variant="surface"
            aria-label="Copy share URL"
            onClick={onCopy}
          >
            {copied ? <CheckIcon /> : <ClipboardCopyIcon />}
          </IconButton>
        </ButtonGroup.Root>
      </HStack>
    </HStack>
  )
}
