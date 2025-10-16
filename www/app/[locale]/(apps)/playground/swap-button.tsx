"use client"

import {
  ArrowLeftRightIcon,
  ArrowUpDownIcon,
  IconButton,
  Tooltip,
  useBreakpoint,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { usePlaygroundReverse } from "./use-playground-reverse"

export function SwapButton() {
  const t = useTranslations("playground")
  const [, toggleReverse] = usePlaygroundReverse()
  const breakpoint = useBreakpoint()

  const Icon = ["md", "sm"].includes(breakpoint)
    ? ArrowUpDownIcon
    : ArrowLeftRightIcon

  return (
    <Tooltip content={t("swap")}>
      <IconButton
        size="sm"
        variant="subtle"
        aria-label={t("swap")}
        icon={<Icon />}
        onClick={toggleReverse}
      />
    </Tooltip>
  )
}
