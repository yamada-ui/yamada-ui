"use client"

import type { ButtonProps } from "@yamada-ui/react"
import { IconButton, MoonIcon, SunIcon, useColorMode } from "@yamada-ui/react"
import { useTranslations } from "next-intl"

export interface ColorModeButtonProps extends ButtonProps {}

export function ColorModeButton({ ...rest }: ColorModeButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  const t = useTranslations("component.header")

  return (
    <IconButton
      aria-label={t("colorMode", { colorMode })}
      color="fg.emphasized"
      icon={
        <>
          <SunIcon display={["inline", "none"]} />
          <MoonIcon display={["none", "inline"]} />
        </>
      }
      suppressHydrationWarning
      onClick={toggleColorMode}
      {...rest}
    />
  )
}
