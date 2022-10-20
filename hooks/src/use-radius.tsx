import { Theme } from '@yamada-ui/styled'
import { getMemoizedObject as get } from '@yamada-ui/utils'
import { useTheme } from '@yamada-ui/providers'

export const useRadius = (path: Theme['radii']) => {
  const theme = useTheme()

  return get(theme, `radii.${path}`)
}
