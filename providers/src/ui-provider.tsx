import { Global } from '@emotion/react'
import {
  css,
  StyledTheme,
  ThemeConfig,
  ThemeScheme,
  ThemeProvider,
  ColorSchemeProvider,
  useColorScheme,
} from '@yamada-ui/system'
import { defaultTheme, defaultConfig } from '@yamada-ui/theme'
import { Dict, getMemoizedObject as get, isUndefined, runIfFunc } from '@yamada-ui/utils'
import { createContext, FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { NoticeProvider } from './'

type UIContext = {
  themeScheme: ThemeScheme | undefined
  changeThemeScheme: (
    themeSchemeOrFunc: ThemeScheme | ((themeScheme: ThemeScheme) => ThemeScheme),
  ) => void
}

export const UIContext = createContext({} as UIContext)

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

  const changeThemeScheme = useCallback(
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

  const value = useMemo(
    () => ({
      themeScheme,
      changeThemeScheme,
    }),
    [themeScheme, changeThemeScheme],
  )

  return (
    <UIContext.Provider value={value}>
      <ThemeProvider theme={theme} config={config}>
        <ColorSchemeProvider colorSchemeManager={colorSchemeManager} config={config}>
          {reset ? <ResetStyle /> : null}
          <GlobalStyle />

          {children}

          <NoticeProvider {...config.notice} />
        </ColorSchemeProvider>
      </ThemeProvider>
    </UIContext.Provider>
  )
}

const ResetStyle: FC = () => {
  const { colorScheme } = useColorScheme()

  return (
    <Global
      styles={(theme) => {
        let style = get(theme, 'styles.resetStyle', {})

        style = runIfFunc(style, { theme, colorScheme })

        if (!style) return undefined

        style = css(style)(theme as StyledTheme<Dict>)

        return style
      }}
    />
  )
}

const GlobalStyle: FC = () => {
  const { colorScheme } = useColorScheme()

  return (
    <Global
      styles={(theme) => {
        let style = get(theme, 'styles.globalStyle', {})

        style = runIfFunc(style, { theme, colorScheme })

        if (!style) return undefined

        style = css(style)(theme as StyledTheme<Dict>)

        return style
      }}
    />
  )
}
