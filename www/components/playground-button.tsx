"use client"

import type { ButtonProps } from "@yamada-ui/react"
import { Button, ExternalLinkIcon } from "@yamada-ui/react"
import { compressToEncodedURIComponent } from "lz-string"
import { useTranslations } from "next-intl"
import { useLocale } from "@/i18n"

export interface PlaygroundButtonProps extends ButtonProps {
  code: string
  client?: boolean
  functional?: boolean
}

export function PlaygroundButton({
  client: _client,
  code,
  functional,
  ...rest
}: PlaygroundButtonProps) {
  const { lang } = useLocale()
  const t = useTranslations("component.codeBlock")

  const onClick = () => {
    const trimmed = code.trimEnd()
    const content = functional
      ? addIndent(trimmed, 2)
      : `  return (\n${addIndent(trimmed, 4)}\n  )`
    const fullCode = `export default function App() {\n${content}\n}`
    const encoded = compressToEncodedURIComponent(fullCode)
    window.open(`/${lang}/playground?code=${encoded}`, "_blank")
  }

  return (
    <Button startIcon={<ExternalLinkIcon />} onClick={onClick} {...rest}>
      {t("playground")}
    </Button>
  )
}

const addIndent = (str: string, spaces: number) =>
  str
    .split("\n")
    .map((line) => " ".repeat(spaces) + line)
    .join("\n")
