"use client"

import type { RefObject } from "react"
import type { PlaygroundFile } from "../types"
import {
  assignRef,
  Button,
  ButtonGroup,
  HistoryIcon,
  HStack,
  IconButton,
  Input,
  Text,
  useClipboard,
  useWindowEvent,
} from "@yamada-ui/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { forwardRef, useCallback, useMemo, useState } from "react"
import { encodeCode } from "../utils"

interface PlaygroundHeaderController {
  getShareUrl: RefObject<(() => string) | null>
  reset: RefObject<(() => void) | null>
  save: RefObject<((name: string) => void) | null>
}

interface PlaygroundHeaderProps {
  ref: RefObject<PlaygroundHeaderController>
  getTabsData: () => { activeIndex: number; files: PlaygroundFile[] }
  onHistoryOpen: () => void
  onReset: () => void
  onSave: (name: string) => void
}

export const PlaygroundHeader = forwardRef<
  PlaygroundHeaderController,
  PlaygroundHeaderProps
>(function PlaygroundHeader(
  { getTabsData, onHistoryOpen, onReset, onSave },
  ref,
) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const [saveName, setSaveName] = useState("")

  const getShareUrl = useCallback(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    const { activeIndex, files } = getTabsData()
    const payload = JSON.stringify({ activeIndex, files })
    params.set("files", encodeCode(payload))
    const relative = `${pathname}?${params.toString()}`
    const origin = typeof window !== "undefined" ? window.location.origin : ""
    return origin ? new URL(relative, origin).toString() : relative
  }, [pathname, searchParams, getTabsData])

  const shareUrl = getShareUrl()
  const { copied, onCopy } = useClipboard(shareUrl)

  const reset = useCallback(() => {
    onReset()
  }, [onReset])

  const save = useCallback(
    (name: string) => {
      onSave(name)
    },
    [onSave],
  )

  const handleSave = useCallback(() => {
    if (!saveName.trim()) return
    save(saveName.trim())
    setSaveName("")
  }, [saveName, save])

  useWindowEvent(
    "keydown",
    useCallback(
      (ev) => {
        if (ev.code === "KeyS" && (ev.ctrlKey || ev.metaKey)) {
          ev.preventDefault()
          const shareUrl = getShareUrl()
          const url = new URL(shareUrl)
          router.replace(url.pathname + url.search, { scroll: false })
        }
      },
      [getShareUrl, router],
    ),
  )

  const methods = useMemo(
    () => ({
      getShareUrl,
      reset,
      save,
    }),
    [getShareUrl, reset, save],
  )

  // Assign refs
  if (ref && "current" in ref && ref.current) {
    assignRef(ref.current.getShareUrl, methods.getShareUrl)
    assignRef(ref.current.reset, methods.reset)
    assignRef(ref.current.save, methods.save)
  }

  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Text fontSize="lg" fontWeight="semibold">
        Playground
      </Text>
      <HStack gap="md">
        <HStack gap="sm">
          <Input
            size="sm"
            placeholder="Save name"
            value={saveName}
            w="56"
            onChange={(e) => setSaveName(e.target.value)}
          />
          <Button size="sm" onClick={handleSave}>
            Save
          </Button>
          <IconButton
            size="sm"
            variant="ghost"
            aria-label="Show saved sets"
            icon={<HistoryIcon />}
            onClick={onHistoryOpen}
          />
        </HStack>
        <ButtonGroup.Root gap="sm">
          <Button variant="surface" onClick={reset}>
            Reset
          </Button>
          <Button colorScheme="primary" onClick={() => onCopy()}>
            {copied ? "Copied" : "Copy share URL"}
          </Button>
        </ButtonGroup.Root>
      </HStack>
    </HStack>
  )
})
