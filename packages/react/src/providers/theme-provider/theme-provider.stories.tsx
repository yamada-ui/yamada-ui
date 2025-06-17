import type { FC } from "react"
import type { ThemeScheme } from "../../core"
import { useMemo } from "react"
import { Badge } from "../../components/badge"
import { Button } from "../../components/button"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { HStack, VStack } from "../../components/stack"
import { Tag } from "../../components/tag"
import { Wrap } from "../../components/wrap"
import { defaultConfig, defaultTheme } from "../../theme"
import { toTitleCase } from "../../utils"
import { UIProvider } from "../ui-provider"
import { useTheme } from "./theme-provider"

export default {
  title: "Theme / Theming",
}

export const SwitchTheming = () => {
  const theme = useMemo(
    () => ({
      ...defaultTheme,
      themeSchemes: {
        blue: {
          semanticTokens: {
            colorSchemes: {
              primary: "blue",
              secondary: "cyan",
            },
          },
        },
        pink: {
          semanticTokens: {
            colorSchemes: {
              primary: "pink",
              secondary: "violet",
            },
          },
        },
        purple: {
          semanticTokens: {
            colorSchemes: {
              primary: "purple",
              secondary: "green",
            },
          },
        },
      },
    }),
    [],
  )
  const config = useMemo(
    () => ({ ...defaultConfig, initialThemeScheme: "pink" as ThemeScheme }),
    [],
  )

  const App: FC = () => {
    const { changeThemeScheme, themeScheme } = useTheme<typeof theme>()

    return (
      <VStack>
        <HStack>
          <For each={["base", "pink", "purple", "blue"] as const}>
            {(themeScheme) => (
              <Button
                key={themeScheme}
                colorScheme={"base" === themeScheme ? "mono" : themeScheme}
                onClick={() => changeThemeScheme(themeScheme)}
              >
                {toTitleCase(themeScheme)} Theme
              </Button>
            )}
          </For>
        </HStack>

        <Container.Root>
          <Container.Header>
            <Heading>{toTitleCase(themeScheme)} Theme</Heading>
          </Container.Header>

          <Container.Body gap="md">
            <Wrap gap="md">
              <For
                each={
                  [
                    "primary",
                    "secondary",
                    "info",
                    "success",
                    "warning",
                    "error",
                  ] as const
                }
              >
                {(colorScheme) => (
                  <Badge key={colorScheme} colorScheme={colorScheme}>
                    {colorScheme}
                  </Badge>
                )}
              </For>
            </Wrap>

            <Wrap gap="md">
              <For
                each={
                  [
                    "primary",
                    "secondary",
                    "info",
                    "success",
                    "warning",
                    "error",
                  ] as const
                }
              >
                {(colorScheme) => (
                  <Tag key={colorScheme} colorScheme={colorScheme}>
                    {toTitleCase(colorScheme)}
                  </Tag>
                )}
              </For>
            </Wrap>

            <Wrap gap="md">
              <For
                each={
                  [
                    "primary",
                    "secondary",
                    "info",
                    "success",
                    "warning",
                    "error",
                  ] as const
                }
              >
                {(colorScheme) => (
                  <Button key={colorScheme} colorScheme={colorScheme}>
                    {toTitleCase(colorScheme)}
                  </Button>
                )}
              </For>
            </Wrap>
          </Container.Body>
        </Container.Root>
      </VStack>
    )
  }

  return (
    <UIProvider config={config} theme={theme}>
      <App />
    </UIProvider>
  )
}
