import React, { FC, ReactNode, useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { Container, ContainerProps, UIProvider, useColorScheme } from '@yamada-ui/react'

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider>
      <App p='md'>{children}</App>
    </UIProvider>
  )
}

const App: FC<ContainerProps> = ({ p, children }) => {
  const { changeColorScheme } = useColorScheme()

  const colorScheme = useDarkMode() ? 'dark' : 'light'

  useEffect(() => {
    changeColorScheme(colorScheme)
  }, [colorScheme])

  return (
    <Container p={p} gap='md' alignItems='flex-start'>
      {children}
    </Container>
  )
}
