import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useFont = (path: Theme['fonts']) => {
  const theme = useTheme()

  return get(theme, `fonts.${path}`)
}
