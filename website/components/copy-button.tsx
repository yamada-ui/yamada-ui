"use client"

import type { ButtonProps } from "@yamada-ui/react"
import {
  CheckIcon,
  ClipboardIcon,
  handlerAll,
  IconButton,
  Tooltip,
  useClipboard,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"

export interface CopyButtonProps extends ButtonProps {
  value: string
}

export function CopyButton({ value, onClick, ...rest }: CopyButtonProps) {
  const t = useTranslations("component.copyButton")
  const { copied, onCopy } = useClipboard(value, 4000)

  return (
    <Tooltip content={copied ? t("copied") : t("copy")} placement="start">
      <IconButton
        size="sm"
        variant="ghost"
        bg={{ base: "bg.panel", _hover: "bg.muted" }}
        color={{ base: "fg.muted", _hover: "fg" }}
        disableRipple
        icon={copied ? <CheckIcon /> : <ClipboardIcon />}
        onClick={handlerAll(onClick, onCopy)}
        {...rest}
      />
    </Tooltip>
  )
}
