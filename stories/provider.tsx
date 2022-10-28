import { Container, ContainerProps, UIProvider, useScheme } from '@yamada-ui/react'
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
  const { changeScheme } = useScheme()

  const scheme = useDarkMode() ? 'dark' : 'light'

  useEffect(() => {
    changeScheme(scheme)
  }, [changeScheme, scheme])

  return <Container p={p}>{children}</Container>
}
