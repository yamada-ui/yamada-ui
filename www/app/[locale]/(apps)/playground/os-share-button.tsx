"use client"

import { IconButton, Share2Icon, Tooltip } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

export function OSShareButton() {
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    setIsSupported(typeof navigator !== "undefined" && !!navigator.share)
  }, [])

  const t = useTranslations("playground")

  const handleShare = async () => {
    try {
      await navigator.share({
        text: "Check out this code!",
        title: "Yamada UI Playground",
        url: window.location.href,
      })
    } catch {
      // User cancelled or share failed
    }
  }

  if (!isSupported) return null

  return (
    <Tooltip content={t("share")}>
      <IconButton
        size="sm"
        variant="subtle"
        aria-label={t("share")}
        icon={<Share2Icon />}
        onClick={handleShare}
      />
    </Tooltip>
  )
}
