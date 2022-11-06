import { useColorScheme, useTheme } from '@yamada-ui/providers'
import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get, isArray } from '@yamada-ui/utils'

export const useToken = <T extends keyof Omit<Theme, 'components'>>(
  name: T,
  path: Theme[T] | number | undefined,
) => {
  const { theme } = useTheme()
  const { colorScheme } = useColorScheme()

  if (name === 'layerStyles') name = 'styles.layerStyles' as T

  if (name === 'textStyles') name = 'styles.textStyles' as T

  if (name === 'transitionProperty') name = 'transitions.property' as T

  if (name === 'transitionDuration') name = 'transitions.duration' as T

  if (name === 'transitionEasing') name = 'transitions.easing' as T

  const value: string | number | [string | number, string | number] | undefined = get(
    theme,
    `${name}.${path}`,
  )

  if (isArray(value)) {
    const [lightValue, darkValue] = value

    return colorScheme === 'light' ? lightValue : darkValue
  } else {
    return value
  }
}
