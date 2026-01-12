"use client"

import type { ButtonProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Button, MoonIcon, SunIcon, useColorMode } from "@yamada-ui/react"

export interface ColorModeButtonProps extends ButtonProps {}

export const ColorModeButton: FC<ColorModeButtonProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      startIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      {...props}
    >
      {colorMode === "dark" ? "Change to light" : "Change to dark"}
    </Button>
  )
}
