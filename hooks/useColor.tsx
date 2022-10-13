import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useColor = (path: Theme['colors']) => {
  const theme = useTheme()

  return get(theme, `colors.${path}`)
}
