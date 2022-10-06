import { useTheme } from '@emotion/react'
import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'

export const useLineHeight = (path: Theme['lineHeights']) => {
  const theme = useTheme()

  return get(theme, `lineHeights.${path}`)
}
