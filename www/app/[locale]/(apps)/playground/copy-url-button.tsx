"use client"

import {
  CheckIcon,
  CopyIcon,
  IconButton,
  Tooltip,
  useClipboard,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useCallback, useMemo, useSyncExternalStore } from "react"

const MAX_URL_LENGTH = 2048

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback)
  return () => window.removeEventListener("popstate", callback)
}

function getSnapshot() {
  return window.location.href
}

function getServerSnapshot() {
  return ""
}

export function CopyURLButton() {
  const { copied, onCopy } = useClipboard()
  const t = useTranslations("playground")
  const currentURL = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )

  const isURLTooLong = useMemo(() => {
    return currentURL.length > MAX_URL_LENGTH
  }, [currentURL])

  const handleClick = useCallback(() => {
    onCopy(currentURL)
  }, [onCopy, currentURL])

  return (
    <Tooltip
      content={
        isURLTooLong ? t("urlTooLong") : copied ? t("copied") : t("copyURL")
      }
    >
      <IconButton
        size="sm"
        variant="subtle"
        aria-label={t("copyURL")}
        disabled={isURLTooLong}
        icon={copied ? <CheckIcon /> : <CopyIcon />}
        onClick={handleClick}
      />
    </Tooltip>
  )
}
