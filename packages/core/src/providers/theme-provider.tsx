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
import {
  FC,
  useMemo,
  useContext,
  Context,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { css, UIStyle } from '../css'
import { transformTheme } from '../theme'
import { StyledTheme, ThemeConfig, ThemeScheme } from '../theme.types'
import { useColorMode } from './color-mode-provider'
import { themeSchemeManager, ThemeSchemeManager } from './theme-manager'

const { localStorage } = themeSchemeManager

export type ChangeThemeScheme = (themeScheme: ThemeScheme) => void

type ThemeProviderOptions = {
  /**
   * The theme of the yamada ui.
   *
   * If omitted, uses the default theme provided by yamada ui.
   */
  theme: Dict
  /**
   * The config of the yamada ui.
   *
   * If omitted, uses the default config provided by yamada ui.
   */
  config?: ThemeConfig
  /**
   * Manager to persist a user's theme scheme preference.
   *
   * Omit if you don't render server-side.
   * For SSR, choose `cookieStorageManager`.
   *
   * @default 'localStorageManager'
   */
  themeSchemeManager?: ThemeSchemeManager
}

export type ThemeProviderProps = Omit<EmotionThemeProviderProps, 'theme'> &
  ThemeProviderOptions

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme: initialTheme,
  config,
  themeSchemeManager = localStorage,
  children,
}) => {
  const [themeScheme, setThemeScheme] = useState<ThemeScheme | undefined>(
    themeSchemeManager.get(config?.initialThemeScheme),
  )

  const theme = useMemo(() => {
    if (isUndefined(themeScheme)) return initialTheme

    if (themeScheme in initialTheme) return initialTheme[themeScheme]

    return initialTheme
  }, [initialTheme, themeScheme])

  const changeThemeScheme: ChangeThemeScheme = useCallback(
    (themeScheme: ThemeScheme) => {
      const cleanup = config?.disableTransitionOnChange
        ? preventTransition()
        : undefined

      document.documentElement.dataset.theme = themeScheme

      cleanup?.()

      setThemeScheme(themeScheme)

      themeSchemeManager.set(themeScheme)
    },
    [config, themeSchemeManager],
  )

  const computedTheme = useMemo(
    () => transformTheme(theme, config),
    [theme, config],
  )

  useEffect(() => {
    const managerValue = themeSchemeManager.get()

    if (managerValue) changeThemeScheme(managerValue)
  }, [changeThemeScheme, themeSchemeManager])

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
        ':host, :root, [data-mode]': __cssVars,
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
          let style = get<UIStyle>(theme, 'styles.resetStyle', {})

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
          let style = get<UIStyle>(theme, 'styles.globalStyle', {})

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

  const value = useMemo(
    () =>
      ({ themeScheme, changeThemeScheme, theme }) as {
        themeScheme: ThemeScheme
        changeThemeScheme: ChangeThemeScheme
        theme: StyledTheme<T>
      },
    [changeThemeScheme, theme, themeScheme],
  )

  return value
}

const preventTransition = () => {
  const css = document.createElement('style')

  const node = document.createTextNode(
    `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
  )

  css.appendChild(node)

  document.head.appendChild(css)

  return () => {
    ;(() => window.getComputedStyle(document.body))()

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(css)
      })
    })
  }
}
