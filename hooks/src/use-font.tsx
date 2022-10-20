import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useFont = (path: Theme['fonts']) => {
  const theme = useTheme()

  return get(theme, `fonts.${path}`)
}
