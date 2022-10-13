import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useZIndex = (path: Theme['zIndices']) => {
  const theme = useTheme()

  return get(theme, `zIndices.${path}`)
}
