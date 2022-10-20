import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useLetterSpacing = (path: Theme['letterSpacings']) => {
  const theme = useTheme()

  return get(theme, `letterSpacings.${path}`)
}
