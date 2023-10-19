import { Button, ButtonProps, useColorMode, useColorModeValue } from '@yamada-ui/react'
import { FC } from 'react'
import { useI18n } from 'contexts/i18n-context'

export type ColorModeButtonProps = ButtonProps

export const ColorModeButton: FC<ColorModeButtonProps> = ({ ...rest }) => {
  const { t } = useI18n()
  const { toggleColorMode } = useColorMode()
  const children = useColorModeValue(
    t('component.color-mode-button.light'),
    t('component.color-mode-button.dark'),
  )

  return (
    <Button onClick={toggleColorMode} {...rest}>
      {children}
    </Button>
  )
}
