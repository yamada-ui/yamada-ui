"use client"

import type { IconButtonProps } from "@yamada-ui/react"
import { IconButton, LanguagesIcon, Menu } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { CONSTANTS } from "@/constants"
import { getPathname, useLocale, usePathname } from "@/i18n"

export interface LangButtonProps extends IconButtonProps {}

export function LangButton({ ...rest }: LangButtonProps) {
  const t = useTranslations("component.header")
  const { locale: currentLocale } = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const onSelect = useCallback(
    (locale?: string) => {
      if (!locale || locale === currentLocale) return

      document.cookie = `NEXT_LOCALE=${locale};path=/;SameSite=lax`

      router.replace(
        `${getPathname({ href: pathname, locale })}${window.location.search}${window.location.hash}`,
        { scroll: false },
      )
    },
    [currentLocale, pathname, router],
  )

  return (
    <Menu.Root onSelect={onSelect}>
      <Menu.Trigger>
        <IconButton
          aria-label={t("lang")}
          color="fg.emphasized"
          icon={<LanguagesIcon />}
          {...rest}
        />
      </Menu.Trigger>

      <Menu.Content items={CONSTANTS.I18N.OPTIONS as unknown as Menu.Item[]} />
    </Menu.Root>
  )
}
