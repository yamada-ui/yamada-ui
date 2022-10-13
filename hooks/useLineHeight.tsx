import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useLineHeight = (path: Theme['lineHeights']) => {
  const theme = useTheme()

  return get(theme, `lineHeights.${path}`)
}
