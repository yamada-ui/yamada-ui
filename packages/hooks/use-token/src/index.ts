import { useColorMode, useTheme, Theme } from '@yamada-ui/core'
import { getMemoizedObject as get, isArray } from '@yamada-ui/utils'

export const useToken = <
  Y extends string | number = string,
  M extends keyof Omit<Theme, 'components'> = keyof Omit<Theme, 'components'>,
>(
  name: M,
  path: Theme[M] | number | undefined,
) => {
  const { theme } = useTheme()
  const { colorMode } = useColorMode()

  if (name === 'layerStyles') name = 'styles.layerStyles' as M

  if (name === 'textStyles') name = 'styles.textStyles' as M

  if (name === 'transitionProperty') name = 'transitions.property' as M

  if (name === 'transitionDuration') name = 'transitions.duration' as M

  if (name === 'transitionEasing') name = 'transitions.easing' as M

  const value: Y | [Y, Y] | undefined = get(theme, `${name}.${path}`)

  if (isArray(value)) {
    const [lightValue, darkValue] = value

    return colorMode === 'light' ? lightValue : darkValue
  } else {
    return value
  }
}
