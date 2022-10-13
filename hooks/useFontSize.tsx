import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useFontSize = (path: Theme['fontSizes']) => {
  const theme = useTheme()

  return get(theme, `fontSizes.${path}`)
}
