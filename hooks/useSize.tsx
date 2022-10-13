import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useSize = (path: Theme['sizes']) => {
  const theme = useTheme()

  return get(theme, `sizes.${path}`)
}
