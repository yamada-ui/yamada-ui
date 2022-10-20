import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useBorder = (path: Theme['borders']) => {
  const theme = useTheme()

  return get(theme, `borders.${path}`)
}
