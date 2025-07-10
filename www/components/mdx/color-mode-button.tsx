import type { ButtonProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Button, useColorMode, useColorModeValue } from "@yamada-ui/react"
import { useI18n } from "contexts"

export type ColorModeButtonProps = ButtonProps

export const ColorModeButton: FC<ColorModeButtonProps> = ({ ...rest }) => {
  const { t } = useI18n()
  const { toggleColorMode } = useColorMode()
  const children = useColorModeValue(
    t("component.color-mode-button.light"),
    t("component.color-mode-button.dark"),
  )

  return (
    <Button onClick={toggleColorMode} {...rest}>
      {children}
    </Button>
  )
}
