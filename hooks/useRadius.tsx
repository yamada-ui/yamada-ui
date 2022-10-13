import { Theme } from '../types'
import { getMemoizedObject as get } from '../utils'
import { useTheme } from './'

export const useRadius = (path: Theme['radii']) => {
  const theme = useTheme()

  return get(theme, `radii.${path}`)
}
