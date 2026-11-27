import type { FC } from "react"
import type { ThemeScheme } from "./index.type"
import { useMemo } from "react"
import { Badge } from "../../components/badge"
import { Button } from "../../components/button"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { HStack, VStack } from "../../components/stack"
import { Tag } from "../../components/tag"
import { Wrap } from "../../components/wrap"
import {
  extendConfig,
  extendTheme,
  UIProvider,
} from "../../providers/ui-provider"
import { toTitleCase } from "../../utils"
import {
  SemanticTokenScope,
  ThemeSchemeScope,
  useTheme,
} from "./theme-provider"

export default {
  title: "Theme / Theming",
}

export const SwitchTheming = () => {
  const theme = useMemo(
    () =>
      extendTheme({
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
    () => extendConfig({ defaultThemeScheme: "pink" as ThemeScheme }),
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

        <ThemeSchemeScope themeScheme={"purple" as ThemeScheme}>
          <Container.Root>
            <Container.Header>
              <Heading>Data Theme</Heading>
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
        </ThemeSchemeScope>
      </VStack>
    )
  }

  return (
    <UIProvider config={config} theme={theme}>
      <App />
    </UIProvider>
  )
}

export const ThemeScope = () => {
  const theme = useMemo(
    () =>
      extendTheme({
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
    () => extendConfig({ defaultThemeScheme: "pink" as ThemeScheme }),
    [],
  )
  const App: FC<Container.RootProps & { themeScheme: ThemeScheme }> = ({
    themeScheme,
    ...rest
  }) => {
    return (
      <Container.Root {...rest}>
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
    )
  }

  return (
    <UIProvider config={config} theme={theme}>
      <VStack>
        <App themeScheme="base" />

        <ThemeSchemeScope themeScheme={"pink" as ThemeScheme}>
          <App themeScheme={"pink" as ThemeScheme} />
        </ThemeSchemeScope>

        <ThemeSchemeScope themeScheme={"purple" as ThemeScheme}>
          <App themeScheme={"purple" as ThemeScheme} />
        </ThemeSchemeScope>

        <ThemeSchemeScope themeScheme={"blue" as ThemeScheme}>
          <App themeScheme={"blue" as ThemeScheme} />
        </ThemeSchemeScope>
      </VStack>
    </UIProvider>
  )
}

export const TokenScope = () => {
  const App: FC<Container.RootProps> = (props) => {
    return (
      <Container.Root {...props}>
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
    )
  }

  return (
    <VStack gap="md">
      <App />

      <SemanticTokenScope tokens={{ colorSchemes: { primary: "pink" } }}>
        <App />
      </SemanticTokenScope>
    </VStack>
  )
}
