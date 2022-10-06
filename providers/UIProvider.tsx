import { Global } from '@emotion/react'
import { FC, ReactNode } from 'react'
import { css } from 'functions'
import { useScheme } from 'hooks'
import { ThemeProvider, SchemeProvider } from 'providers'
import { defaultTheme, resetStyle } from 'themes'
import { Dict, StyledTheme } from 'types'
import { getMemoizedObject as get, runIfFunc } from 'utils'

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
