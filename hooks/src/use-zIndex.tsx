import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useZIndex = (path: Theme['zIndices']) => {
  const theme = useTheme()

  return get(theme, `zIndices.${path}`)
}
