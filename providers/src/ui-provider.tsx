import { Global } from '@emotion/react'
import { FC, ReactNode } from 'react'
import { css, StyledTheme } from '@yamada-ui/styled'
import { defaultTheme, resetStyle } from '@yamada-ui/theme'
import { Dict, getMemoizedObject as get, runIfFunc } from '@yamada-ui/utils'
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
  return <Global styles={resetStyle} />
}

const GlobalStyle: FC = () => {
  const { scheme } = useScheme()

  return (
    <Global
      styles={(theme: Dict) => {
        let globalStyle = get(theme, 'styles.globalStyle')

        globalStyle = runIfFunc(globalStyle, { theme, scheme })

        if (!globalStyle) return undefined

        globalStyle = css(globalStyle)(theme as StyledTheme<Dict>)

        return globalStyle
      }}
    />
  )
}
