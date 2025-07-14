"use client"

import type { IconButtonProps } from "@yamada-ui/react"
import { IconButton, LanguagesIcon } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useLocale, usePathname, useRouter } from "@/i18n"

export interface LangButtonProps extends IconButtonProps {}

export function LangButton({ ...rest }: LangButtonProps) {
  const t = useTranslations("component.header")
  const { lang } = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const onClick = () => {
    // FIXME: Change logic when `Menu` component is completed
    router.push({ pathname }, { locale: lang === "ja" ? "en-US" : "ja-JP" })
  }

  return (
    <IconButton
      aria-label={t("lang")}
      color="fg.emphasized"
      icon={<LanguagesIcon />}
      onClick={onClick}
      {...rest}
    />
  )
}
