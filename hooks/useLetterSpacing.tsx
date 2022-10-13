import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useLetterSpacing = (path: Theme['letterSpacings']) => {
  const theme = useTheme()

  return get(theme, `letterSpacings.${path}`)
}
