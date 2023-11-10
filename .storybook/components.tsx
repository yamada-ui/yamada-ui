import React, { FC, ReactNode, useEffect } from "react"
import { useDarkMode } from "storybook-dark-mode"
import {
  Container,
  ContainerProps,
  UIProvider,
  useColorMode,
} from "@yamada-ui/react"
import {
  DocsContainer as StorybookDocsContainer,
  DocsContainerProps,
} from "@storybook/blocks"
import { themes } from "@storybook/theming"

export const StoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider>
      <App p="md">{children}</App>
    </UIProvider>
  )
}

const App: FC<ContainerProps> = ({ p, children }) => {
  const { changeColorMode } = useColorMode()

  const colorMode = useDarkMode() ? "dark" : "light"

  useEffect(() => {
    changeColorMode(colorMode)
  }, [colorMode])

  return (
    <Container p={p} gap="md" alignItems="flex-start">
      {children}
    </Container>
  )
}

export const DocsContainer: FC<
  DocsContainerProps & { children: ReactNode }
> = ({ children, theme, ...rest }) => {
  const dark = useDarkMode()

  theme = dark ? themes.dark : themes.light

  return (
    <StorybookDocsContainer theme={theme} {...rest}>
      {children}
    </StorybookDocsContainer>
  )
}
