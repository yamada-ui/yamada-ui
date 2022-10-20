import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useFontWeight = (path: Theme['fontWeights']) => {
  const theme = useTheme()

  return get(theme, `fontWeights.${path}`)
}
