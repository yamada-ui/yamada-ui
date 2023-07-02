import { Global, Theme } from '@emotion/react'
import {
  css,
  StyledTheme,
  ThemeConfig,
  ThemeScheme,
  ThemeProvider,
  ColorModeProvider,
  useColorMode,
  ChangeThemeScheme,
  UIStyle,
  Interpolation,
  ColorModeManager,
} from '@yamada-ui/core'
import { defaultTheme, defaultConfig } from '@yamada-ui/theme'
import { Dict, getMemoizedObject as get, isUndefined, runIfFunc } from '@yamada-ui/utils'
import { FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { EnvironmentProvider, Environment } from './environment-provider'
import { LoadingProvider } from './loading-provider'
import { NoticeProvider } from './notice-provider'

export type UIProviderProps = {
  /**
   * The theme of the yamada ui.
   *
   * If omitted, uses the default theme provided by yamada ui.
   */
  theme?: Dict | Dict[]
  /**
   * The config of the yamada ui.
   *
   * If omitted, uses the default config provided by yamada ui.
   */
  config?: ThemeConfig
  /**
   * If `true`, `ResetStyle` component will be mounted to help reset browser styles.
   *
   * @default true
   */
  disableResetStyle?: boolean
  /**
   * If `true`, will not mount the global styles defined in the theme.
   *
   * @default true
   */
  disableGlobalStyle?: boolean
  /**
   * Manager to persist a user's color mode preference.
   *
   * Omit if you don't render server-side.
   * For SSR, choose `cookieStorageManager`.
   *
   * @default 'localStorageManager'
   */
  colorModeManager?: ColorModeManager
  /**
   * The environment `window` and `document` to be used by all components and hooks.
   *
   * By default, we smartly determine the ownerDocument and defaultView
   * based on where `UIProvider` is rendered.
   */
  environment?: Environment
  /**
   * If `true`,  the use of automatic window and document detection will be disabled.
   *
   * @default false
   */
  disableEnvironment?: boolean
  /**
   * Application content.
   */
  children: ReactNode
}

export const UIProvider: FC<UIProviderProps> = ({
  theme: initialTheme = defaultTheme,
  config = defaultConfig,
  disableResetStyle,
  disableGlobalStyle,
  colorModeManager,
  environment,
  disableEnvironment,
  children,
}) => {
  const [themeScheme, setThemeScheme] = useState<ThemeScheme | undefined>(
    config?.initialThemeScheme,
  )
  const theme = useMemo(
    () => (isUndefined(themeScheme) ? initialTheme : (initialTheme as Dict)[themeScheme]),
    [initialTheme, themeScheme],
  )

  const changeThemeScheme: ChangeThemeScheme = useCallback(
    (themeSchemeOrFunc: ThemeScheme | ((themeScheme: ThemeScheme) => ThemeScheme)) => {
      if (isUndefined(themeScheme))
        throw Error(
          'changeThemeScheme: `themeScheme` is undefined. Seems you forgot to wrap your config in `initialThemeScheme`',
        )

      const nextThemeScheme = runIfFunc(themeSchemeOrFunc, themeScheme)

      setThemeScheme(nextThemeScheme)
    },
    [themeScheme],
  )

  return (
    <ThemeProvider
      theme={theme}
      themeScheme={themeScheme}
      changeThemeScheme={changeThemeScheme}
      config={config}
    >
      <ColorModeProvider colorModeManager={colorModeManager} config={config}>
        <EnvironmentProvider environment={environment} disabled={disableEnvironment}>
          <LoadingProvider {...config.loading}>
            {!disableResetStyle ? <ResetStyle /> : null}
            {!disableGlobalStyle ? <GlobalStyle /> : null}

            {children}

            <NoticeProvider {...config.notice} />
          </LoadingProvider>
        </EnvironmentProvider>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const ResetStyle: FC = () => {
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

const GlobalStyle: FC = () => {
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
