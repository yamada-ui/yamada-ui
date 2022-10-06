import { useTheme } from '@emotion/react'
import { Theme } from 'types'
import { getMemoizedObject as get } from 'utils'

export const useColor = (path: Theme['colors']) => {
  const theme = useTheme()

  return get(theme, `colors.${path}`)
}
