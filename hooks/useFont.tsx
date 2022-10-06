import { useTheme } from '@emotion/react'
import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'

export const useFont = (path: Theme['fonts']) => {
  const theme = useTheme()

  return get(theme, `fonts.${path}`)
}
