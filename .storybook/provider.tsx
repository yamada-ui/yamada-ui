import React, { FC, ReactNode, useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { Container, ContainerProps, UIProvider, useColorMode } from '@yamada-ui/react'

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider>
      <App p='md'>{children}</App>
    </UIProvider>
  )
}

const App: FC<ContainerProps> = ({ p, children }) => {
  const { changeColorMode } = useColorMode()

  const colorMode = useDarkMode() ? 'dark' : 'light'

  useEffect(() => {
    changeColorMode(colorMode)
  }, [colorMode])

  return (
    <Container p={p} gap='md' alignItems='flex-start'>
      {children}
    </Container>
  )
}
