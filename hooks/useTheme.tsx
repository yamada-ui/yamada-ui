import { ThemeContext } from '@emotion/react'
import { useContext, Context } from 'react'
import { Dict, StyledTheme, Theme } from '../types'

export const useTheme = <T extends object = StyledTheme<Dict>>() => {
  const theme = useContext(ThemeContext as unknown as Context<T | undefined>)

  if (!theme)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`',
    )

  return theme
}
