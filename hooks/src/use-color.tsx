import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useColor = (path: Theme['colors']) => {
  const theme = useTheme()

  return get(theme, `colors.${path}`)
}
