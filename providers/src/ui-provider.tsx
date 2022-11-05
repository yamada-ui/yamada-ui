import { Global } from '@emotion/react'
import { css, StyledTheme } from '@yamada-ui/styled'
import { defaultTheme, resetStyle } from '@yamada-ui/theme'
import { Dict, getMemoizedObject as get, runIfFunc } from '@yamada-ui/utils'
import { FC, ReactNode } from 'react'
import { ThemeProvider, ColorSchemeProvider, useColorScheme } from './'

export type UIProviderProps = {
  theme?: Dict
  reset?: boolean
  colorSchemeManager?: any
  children: ReactNode
}

export const UIProvider: FC<UIProviderProps> = ({
  theme = defaultTheme,
  reset = true,
  colorSchemeManager,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorSchemeProvider colorSchemeManager={colorSchemeManager} options={theme.config}>
        {reset ? <ResetStyle /> : null}
        <GlobalStyle />

        {children}
      </ColorSchemeProvider>
    </ThemeProvider>
  )
}

const ResetStyle: FC = () => {
  const { colorScheme } = useColorScheme()

  return (
    <Global
      styles={(theme) => {
        let style = get(theme, 'styles.resetStyle') ?? resetStyle

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
        let style = get(theme, 'styles.globalStyle')

        style = runIfFunc(style, { theme, colorScheme })

        if (!style) return undefined

        style = css(style)(theme as StyledTheme<Dict>)

        return style
      }}
    />
  )
}
