import { useTheme } from '@emotion/react'
import { Theme } from 'types'
import { getMemoizedObject as get } from 'utils'

export const useSpace = (path: Theme['spaces']) => {
  const theme = useTheme()

  return get(theme, `spaces.${path}`)
}
