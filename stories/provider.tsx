import { Container, ContainerProps, UIProvider, useColorScheme } from '@yamada-ui/react'
import { FC, ReactNode, useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider>
      <App>{children}</App>
    </UIProvider>
  )
}

const App: FC<ContainerProps> = ({ p, children }) => {
  const { changeColorScheme } = useColorScheme()

  const colorScheme = useDarkMode() ? 'dark' : 'light'

  useEffect(() => {
    changeColorScheme(colorScheme)
  }, [colorScheme, changeColorScheme])

  return <Container p={p}>{children}</Container>
}
