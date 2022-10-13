import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useSpace = (path: Theme['spaces']) => {
  const theme = useTheme()

  return get(theme, `spaces.${path}`)
}
