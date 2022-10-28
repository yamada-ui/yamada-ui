import {
  Global,
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react'
import { transformTheme, StyledTheme } from '@yamada-ui/styled'
import { Dict } from '@yamada-ui/utils'
import { FC, useMemo, useContext, Context } from 'react'

export type ThemeProviderProps = EmotionThemeProviderProps

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  const computedTheme = useMemo(() => transformTheme(theme), [theme])

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <CSSVars />
      {children}
    </EmotionThemeProvider>
  )
}

export const CSSVars: FC = () => {
  return <Global styles={(theme: Dict) => ({ ':host, :root, [data-theme]': theme.__cssVars })} />
}

export const useTheme = <T extends object = StyledTheme<Dict>>() => {
  const theme = useContext(ThemeContext as unknown as Context<T | undefined>)

  if (!theme)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`',
    )

  return theme
}
