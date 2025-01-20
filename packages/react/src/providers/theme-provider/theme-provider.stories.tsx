import type { FC } from "react"
import { Badge } from "../../components/badge"
import { Button } from "../../components/button"
import { Container } from "../../components/container"
import { Wrap } from "../../components/flex"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { HStack, VStack } from "../../components/stack"
import { Tag } from "../../components/tag"
import { defaultConfig, defaultTheme } from "../../theme"
import { merge, toTitleCase } from "../../utils"
import { UIProvider } from "../ui-provider"
import { useTheme } from "./theme-provider"

export default {
  title: "Theme / Theming",
}

export const SwitchTheming = () => {
  const theme = merge(defaultTheme, {
    themeSchemes: {
      green: {
        semantics: {
          colorSchemes: {
            primary: "green",
            secondary: "cyan",
          },
        },
      },
      pink: {
        semantics: {
          colorSchemes: {
            primary: "pink",
            secondary: "violet",
          },
        },
      },
      purple: {
        semantics: {
          colorSchemes: {
            primary: "purple",
            secondary: "teal",
          },
        },
      },
    },
  })
  const config = merge(defaultConfig, { initialThemeScheme: "pink" })

  const App: FC = () => {
    const { changeThemeScheme, themeScheme } = useTheme()

    return (
      <VStack>
        <HStack>
          <Button colorScheme="gray" onClick={() => changeThemeScheme("base")}>
            Base Theme
          </Button>
          <Button colorScheme="pink" onClick={() => changeThemeScheme("pink")}>
            Pink Theme
          </Button>
          <Button
            colorScheme="purple"
            onClick={() => changeThemeScheme("purple")}
          >
            Purple Theme
          </Button>
          <Button
            colorScheme="green"
            onClick={() => changeThemeScheme("green")}
          >
            Green Theme
          </Button>
        </HStack>

        <Container.Root>
          <Container.Header>
            <Heading>{toTitleCase(themeScheme)} Theme</Heading>
          </Container.Header>

          <Container.Body gap="md">
            <Wrap gap="md">
              <For each={["primary", "secondary", "warning", "error"]}>
                {(colorScheme) => (
                  <Badge key={colorScheme} colorScheme={colorScheme}>
                    {colorScheme}
                  </Badge>
                )}
              </For>
            </Wrap>

            <Wrap gap="md">
              <For each={["primary", "secondary", "warning", "error"]}>
                {(colorScheme) => (
                  <Tag key={colorScheme} colorScheme={colorScheme}>
                    {toTitleCase(colorScheme)}
                  </Tag>
                )}
              </For>
            </Wrap>

            <Wrap gap="md">
              <For each={["primary", "secondary", "warning", "error"]}>
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
