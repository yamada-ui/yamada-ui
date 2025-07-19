"use client"

import type { IconButtonProps } from "@yamada-ui/react"
import { IconButton, LanguagesIcon, Menu } from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useCallback, useMemo } from "react"
import { CONSTANTS } from "@/constants"
import { usePathname, useRouter } from "@/i18n"

export interface LangButtonProps extends IconButtonProps {}

export function LangButton({ ...rest }: LangButtonProps) {
  const t = useTranslations("component.header")
  const pathname = usePathname()
  const router = useRouter()
  const items = useMemo(() => [...CONSTANTS.I18N.OPTIONS], [])

  const onSelect = useCallback(
    (locale?: string) => {
      router.push({ pathname }, { locale })
    },
    [pathname, router],
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

      <Menu.Content items={items} />
    </Menu.Root>
  )
}
