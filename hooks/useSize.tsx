import { useTheme } from '@emotion/react'
import { Theme } from 'types'
import { getMemoizedObject as get } from 'utils'

export const useSize = (path: Theme['sizes']) => {
  const theme = useTheme()

  return get(theme, `sizes.${path}`)
}
