import { FC, ReactNode, useEffect } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import { Container, ContainerProps, UIProvider, useScheme } from '@yamada-ui/react'

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider>
      <App>{children}</App>
    </UIProvider>
  )
}

const App: FC<ContainerProps> = ({ p, children }) => {
  const { changeScheme } = useScheme()

  const scheme = useDarkMode() ? 'dark' : 'light'

  useEffect(() => {
    changeScheme(scheme)
  }, [scheme])

  return <Container p={p}>{children}</Container>
}
