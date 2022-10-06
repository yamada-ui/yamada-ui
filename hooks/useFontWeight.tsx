import { useTheme } from '@emotion/react'
import { Theme } from 'types'
import { getMemoizedObject as get } from 'utils'

export const useFontWeight = (path: Theme['fontWeights']) => {
  const theme = useTheme()

  return get(theme, `fontWeights.${path}`)
}
