import {
  Global,
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react'
import { FC, useMemo } from 'react'
import { transformTheme } from 'functions'
import { Dict } from 'types'

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
