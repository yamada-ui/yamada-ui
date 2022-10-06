import { useTheme } from '@emotion/react'
import { Theme } from 'types'
import { getMemoizedObject as get } from 'utils'

export const useFontSize = (path: Theme['fontSizes']) => {
  const theme = useTheme()

  return get(theme, `fontSizes.${path}`)
}
