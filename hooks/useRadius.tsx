import { useTheme } from '@emotion/react'
import { Theme } from 'types'
import { getMemoizedObject as get } from 'utils'

export const useRadius = (path: Theme['radii']) => {
  const theme = useTheme()

  return get(theme, `radii.${path}`)
}
