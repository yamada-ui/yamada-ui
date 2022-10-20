import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useSpace = (path: Theme['spaces']) => {
  const theme = useTheme()

  return get(theme, `spaces.${path}`)
}
