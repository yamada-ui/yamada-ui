import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useFontWeight = (path: Theme['fontWeights']) => {
  const theme = useTheme()

  return get(theme, `fontWeights.${path}`)
}
