import {
  Global,
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react'
import { Dict } from '@yamada-ui/utils'
import { FC, useMemo, useContext, Context } from 'react'
import { transformTheme, StyledTheme, ThemeScheme, ThemeConfig } from './'

export type ChangeThemeScheme = (
  themeSchemeOrFunc: ThemeScheme | ((themeScheme: ThemeScheme) => ThemeScheme),
) => void

type ThemeProviderOptions = {
  themeScheme: ThemeScheme | undefined
  changeThemeScheme: ChangeThemeScheme
  config: ThemeConfig
}

export type ThemeProviderProps = EmotionThemeProviderProps & ThemeProviderOptions

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  themeScheme,
  changeThemeScheme,
  config,
  children,
}) => {
  const computedTheme = useMemo(() => transformTheme(theme, config), [theme, config])

  return (
    <EmotionThemeProvider theme={{ themeScheme, changeThemeScheme, ...computedTheme }}>
      <CSSVars />
      {children}
    </EmotionThemeProvider>
  )
}

export const CSSVars: FC = () => {
  return <Global styles={({ __cssVars }: Dict) => ({ ':host, :root, [data-theme]': __cssVars })} />
}

export const useTheme = <T extends object = Dict>() => {
  const { themeScheme, changeThemeScheme, ...theme } = useContext(
    ThemeContext as unknown as Context<
      Pick<ThemeProviderOptions, 'themeScheme' | 'changeThemeScheme'> & StyledTheme<T>
    >,
  )

  if (!theme)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`',
    )

  return { themeScheme, changeThemeScheme, theme } as Pick<
    ThemeProviderOptions,
    'themeScheme' | 'changeThemeScheme'
  > & { theme: StyledTheme<T> }
}
