import {
  Global,
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
  ThemeProviderProps as EmotionThemeProviderProps,
  Interpolation,
  Theme,
} from '@emotion/react'
import {
  Dict,
  isUndefined,
  runIfFunc,
  getMemoizedObject as get,
} from '@yamada-ui/utils'
import { FC, useMemo, useContext, Context, useState, useCallback } from 'react'
import {
  transformTheme,
  StyledTheme,
  ThemeScheme,
  ThemeConfig,
  useColorMode,
  css,
  UIStyle,
} from '..'

export type ChangeThemeScheme = (
  themeSchemeOrFunc: ThemeScheme | ((themeScheme: ThemeScheme) => ThemeScheme),
) => void

type ThemeProviderOptions = {
  /**
   * The theme of the yamada ui.
   *
   * If omitted, uses the default theme provided by yamada ui.
   */
  theme: Dict | Dict[]
  /**
   * The config of the yamada ui.
   *
   * If omitted, uses the default config provided by yamada ui.
   */
  config?: ThemeConfig
}

export type ThemeProviderProps = Omit<EmotionThemeProviderProps, 'theme'> &
  ThemeProviderOptions

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme: initialTheme,
  config,
  children,
}) => {
  const [themeScheme, setThemeScheme] = useState<ThemeScheme | undefined>(
    config?.initialThemeScheme,
  )
  const theme = useMemo(
    () =>
      isUndefined(themeScheme)
        ? initialTheme
        : (initialTheme as Dict)[themeScheme],
    [initialTheme, themeScheme],
  )

  const changeThemeScheme: ChangeThemeScheme = useCallback(
    (
      themeSchemeOrFunc:
        | ThemeScheme
        | ((themeScheme: ThemeScheme) => ThemeScheme),
    ) => {
      if (isUndefined(themeScheme))
        throw Error(
          'changeThemeScheme: `themeScheme` is undefined. Seems you forgot to wrap your config in `initialThemeScheme`',
        )

      const nextThemeScheme = runIfFunc(themeSchemeOrFunc, themeScheme)

      setThemeScheme(nextThemeScheme)
    },
    [themeScheme],
  )

  const computedTheme = useMemo(
    () => transformTheme(theme, config),
    [theme, config],
  )

  return (
    <EmotionThemeProvider
      theme={{ themeScheme, changeThemeScheme, ...computedTheme }}
    >
      <CSSVars />
      {children}
    </EmotionThemeProvider>
  )
}

export const CSSVars: FC = () => {
  return (
    <Global
      styles={({ __cssVars }: Dict) => ({
        ':host, :root, [data-theme]': __cssVars,
      })}
    />
  )
}

export const ResetStyle: FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Global
      styles={
        ((theme: StyledTheme<Dict>) => {
          let style = get(theme, 'styles.resetStyle', {})

          const computedStyle = runIfFunc(style, { theme, colorMode })

          if (!computedStyle) return undefined

          return css(computedStyle)(theme)
        }) as Interpolation<Theme>
      }
    />
  )
}

export const GlobalStyle: FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Global
      styles={
        ((theme: StyledTheme<Dict>) => {
          let style: UIStyle = get(theme, 'styles.globalStyle', {})

          const computedStyle = runIfFunc(style, { theme, colorMode })

          if (!computedStyle) return undefined

          return css(computedStyle)(theme)
        }) as Interpolation<Theme>
      }
    />
  )
}

type ThemeContext<T extends object = Dict> = Context<
  {
    themeScheme: ThemeScheme
    changeThemeScheme: ChangeThemeScheme
  } & StyledTheme<T>
>

export const useTheme = <T extends object = Dict>() => {
  const { themeScheme, changeThemeScheme, ...theme } = useContext(
    ThemeContext as unknown as Context<
      {
        themeScheme: ThemeScheme
        changeThemeScheme: ChangeThemeScheme
      } & StyledTheme<T>
    >,
  )

  if (!theme)
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`',
    )

  return { themeScheme, changeThemeScheme, theme } as {
    themeScheme: ThemeScheme
    changeThemeScheme: ChangeThemeScheme
    theme: StyledTheme<T>
  }
}
