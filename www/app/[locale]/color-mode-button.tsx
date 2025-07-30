"use client"

import type { ButtonProps } from "@yamada-ui/react"
import {
  IconButton,
  MoonIcon,
  SunIcon,
  useColorMode,
  useMounted,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"

export interface ColorModeButtonProps extends ButtonProps {}

export function ColorModeButton({ ...rest }: ColorModeButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  const mounted = useMounted({ state: true })
  const t = useTranslations("component.header")

  return (
    <IconButton
      aria-label={t("colorMode", { colorMode })}
      color="fg.emphasized"
      icon={
        !mounted || colorMode === "light" ? (
          <SunIcon key="icon" />
        ) : (
          <MoonIcon key="icon" />
        )
      }
      suppressHydrationWarning
      onClick={toggleColorMode}
      {...rest}
    />
  )
}
