import {
  Global,
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react'
import { Dict } from '@yamada-ui/utils'
import { FC, useMemo, useContext, Context } from 'react'
import { UIContext } from '../../providers/src'
import { transformTheme, StyledTheme, ThemeConfig } from './'

export type ThemeProviderProps = EmotionThemeProviderProps & { config: ThemeConfig }

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, config, children }) => {
  const computedTheme = useMemo(() => transformTheme(theme, config), [theme, config])

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <CSSVars />
      {children}
    </EmotionThemeProvider>
  )
}

export const CSSVars: FC = () => {
  return <Global styles={({ __cssVars }: Dict) => ({ ':host, :root, [data-theme]': __cssVars })} />
}

export const useTheme = <T extends object = StyledTheme<Dict>>() => {
  const { themeScheme, changeThemeScheme } = useContext(UIContext)
  const theme = useContext(ThemeContext as unknown as Context<T | undefined>)

  if (!theme)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`',
    )

  return { theme, themeScheme, changeThemeScheme }
}
