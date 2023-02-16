import { Global } from '@emotion/react'
import {
  css,
  StyledTheme,
  ThemeConfig,
  ThemeScheme,
  ThemeProvider,
  ColorSchemeProvider,
  useColorScheme,
  ChangeThemeScheme,
} from '@yamada-ui/core'
import { defaultTheme, defaultConfig } from '@yamada-ui/theme'
import { Dict, getMemoizedObject as get, isUndefined, runIfFunc } from '@yamada-ui/utils'
import { FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { LoadingProvider, NoticeProvider } from '.'

export type UIProviderProps = {
  theme?: Dict | Dict[]
  config?: ThemeConfig
  reset?: boolean
  colorSchemeManager?: any
  children: ReactNode
}

export const UIProvider: FC<UIProviderProps> = ({
  theme: initialTheme = defaultTheme,
  config = defaultConfig,
  reset = true,
  colorSchemeManager,
  children,
}) => {
  const [themeScheme, setThemeScheme] = useState<ThemeScheme | undefined>(
    config?.initialThemeScheme,
  )
  const theme = useMemo(
    () => (isUndefined(themeScheme) ? initialTheme : initialTheme[themeScheme]),
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
      <ColorSchemeProvider colorSchemeManager={colorSchemeManager} config={config}>
        <LoadingProvider {...config.loading}>
          {reset ? <ResetStyle /> : null}
          <GlobalStyle />

          {children}

          <NoticeProvider {...config.notice} />
        </LoadingProvider>
      </ColorSchemeProvider>
    </ThemeProvider>
  )
}

const ResetStyle: FC = () => {
  const { colorScheme } = useColorScheme()

  return (
    <Global
      styles={(theme: StyledTheme<Dict>) => {
        let style = get(theme, 'styles.resetStyle', {})

        style = runIfFunc(style, { theme, colorScheme })

        if (!style) return undefined

        style = css(style)(theme)

        return style
      }}
    />
  )
}

const GlobalStyle: FC = () => {
  const { colorScheme } = useColorScheme()

  return (
    <Global
      styles={(theme: StyledTheme<Dict>) => {
        let style = get(theme, 'styles.globalStyle', {})

        style = runIfFunc(style, { theme, colorScheme })

        if (!style) return undefined

        style = css(style)(theme)

        return style
      }}
    />
  )
}
