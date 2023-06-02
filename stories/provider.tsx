import { Container, ContainerProps, UIProvider, useColorMode } from '@yamada-ui/react'
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
  const { changeColorMode } = useColorMode()

  const colorMode = useDarkMode() ? 'dark' : 'light'

  useEffect(() => {
    changeColorMode(colorMode)
  }, [colorMode, changeColorMode])

  return <Container p={p}>{children}</Container>
}
