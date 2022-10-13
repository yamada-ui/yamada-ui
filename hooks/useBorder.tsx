import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useBorder = (path: Theme['borders']) => {
  const theme = useTheme()

  return get(theme, `borders.${path}`)
}
