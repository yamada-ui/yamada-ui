import { useTheme } from '@emotion/react'
import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'

export const useZIndex = (path: Theme['zIndices']) => {
  const theme = useTheme()

  return get(theme, `zIndices.${path}`)
}
