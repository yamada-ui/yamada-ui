import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useLineHeight = (path: Theme['lineHeights']) => {
  const theme = useTheme()

  return get(theme, `lineHeights.${path}`)
}
