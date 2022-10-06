import { useTheme } from '@emotion/react'
import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'

export const useLetterSpacing = (path: Theme['letterSpacings']) => {
  const theme = useTheme()

  return get(theme, `letterSpacings.${path}`)
}
