import { useTheme } from '@yamada-ui/providers'
import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'

export const useToken = <T extends keyof Omit<Theme, 'components'>>(
  name: T,
  path: Theme[T] | number | undefined,
) => {
  const { theme } = useTheme()

  if (name === 'transitionsProperty') name = 'transitions.property' as T

  if (name === 'transitionsDuration') name = 'transitions.duration' as T

  if (name === 'transitionsEasing') name = 'transitions.easing' as T

  return get(theme, `${name}.${path}`)
}
