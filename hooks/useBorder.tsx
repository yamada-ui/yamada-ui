import { useTheme } from '@emotion/react'
import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'

export const useBorder = (path: Theme['borders']) => {
  const theme = useTheme()

  return get(theme, `borders.${path}`)
}
