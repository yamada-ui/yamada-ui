import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useSize = (path: Theme['sizes']) => {
  const theme = useTheme()

  return get(theme, `sizes.${path}`)
}
