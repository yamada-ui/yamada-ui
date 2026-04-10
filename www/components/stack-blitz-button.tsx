"use client"

import type { ButtonProps } from "@yamada-ui/react"
import type { StackblitzOptions } from "@/libs/stackblitz"
import { Button, useAsyncCallback } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useLocale } from "@/i18n"
import { stackblitz } from "@/libs/stackblitz"
import { StackblitzIcon } from "./stack-blitz-icon"

export interface StackBlitzButtonProps
  extends ButtonProps, Omit<StackblitzOptions, "lang"> {}

export function StackBlitzButton({
  client,
  code,
  description,
  functional,
  title,
  ...rest
}: StackBlitzButtonProps) {
  const { lang } = useLocale()
  const t = useTranslations("component.codeBlock")

  const [loading, onStackblitz] = useAsyncCallback(async () => {
    await stackblitz({
      lang,
      client,
      code,
      description,
      functional,
      title,
    })
  }, [lang, client, code, description, functional, title])

  return (
    <Button
      loading={loading}
      startIcon={<StackblitzIcon />}
      onClick={onStackblitz}
      {...rest}
    >
      {t("stackBlitz")}
    </Button>
  )
}
