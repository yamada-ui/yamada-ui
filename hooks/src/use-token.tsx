import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useToken = <T extends keyof Omit<Theme, 'components'>>(
  name: T,
  path: Theme[T] | number | undefined,
) => {
  const theme = useTheme()

  return get(theme, `${name}.${path}`)
}
