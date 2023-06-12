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
} from '@yamada-ui/core'
import { defaultTheme, defaultConfig } from '@yamada-ui/theme'
import { Dict, getMemoizedObject as get, isUndefined, runIfFunc } from '@yamada-ui/utils'
import { FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { EnvironmentProvider, EnvironmentProviderProps, LoadingProvider, NoticeProvider } from '.'

export type UIProviderProps = {
  theme?: Dict | Dict[]
  config?: ThemeConfig
  reset?: boolean
  colorModeManager?: any
  environment?: EnvironmentProviderProps['environment']
  disableEnvironment?: boolean
  children: ReactNode
}

export const UIProvider: FC<UIProviderProps> = ({
  theme: initialTheme = defaultTheme,
  config = defaultConfig,
  reset = true,
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
            {reset ? <ResetStyle /> : null}
            <GlobalStyle />

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
