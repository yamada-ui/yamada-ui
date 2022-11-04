import { Global } from '@emotion/react'
import { css, StyledTheme } from '@yamada-ui/styled'
import { defaultTheme, resetStyle } from '@yamada-ui/theme'
import { Dict, getMemoizedObject as get, runIfFunc } from '@yamada-ui/utils'
import { FC, ReactNode } from 'react'
import { ThemeProvider, SchemeProvider, useScheme } from './'

export type UIProviderProps = {
  theme?: Dict
  reset?: boolean
  schemeManager?: any
  children: ReactNode
}

export const UIProvider: FC<UIProviderProps> = ({
  theme = defaultTheme,
  reset = true,
  schemeManager,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <SchemeProvider schemeManager={schemeManager} options={theme.config}>
        {reset ? <ResetStyle /> : null}
        <GlobalStyle />

        {children}
      </SchemeProvider>
    </ThemeProvider>
  )
}

const ResetStyle: FC = () => {
  const { scheme } = useScheme()

  return (
    <Global
      styles={(theme) => {
        let style = get(theme, 'styles.resetStyle') ?? resetStyle

        style = runIfFunc(style, { theme, scheme })

        if (!style) return undefined

        style = css(style)(theme as StyledTheme<Dict>)

        return style
      }}
    />
  )
}

const GlobalStyle: FC = () => {
  const { scheme } = useScheme()

  return (
    <Global
      styles={(theme) => {
        let style = get(theme, 'styles.globalStyle')

        style = runIfFunc(style, { theme, scheme })

        if (!style) return undefined

        style = css(style)(theme as StyledTheme<Dict>)

        return style
      }}
    />
  )
}
