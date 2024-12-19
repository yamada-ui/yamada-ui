import type { FC } from "react"
import type {
  ThemeSemantics,
  ThemeTokens,
  UIStyle,
  UsageTheme,
} from "../../core"
import { Badge } from "../../components/badge"
import { Box } from "../../components/box"
import { Button } from "../../components/button"
import { Center } from "../../components/center"
import { Container } from "../../components/container"
import { Wrap } from "../../components/flex"
import { Heading } from "../../components/heading"
import { Image } from "../../components/image"
import { HStack, VStack } from "../../components/stack"
import { Tag } from "../../components/tag"
import {
  extendConfig,
  extendStyle,
  extendTheme,
  extendToken,
} from "../../utils"
import { useColorMode } from "../color-mode-provider"
import { UIProvider } from "../ui-provider"
import { useTheme } from "./theme-provider"

export default {
  title: "Theme / Theming",
}

export const CustomToken = () => {
  const { colorMode } = useColorMode()

  const colors: ThemeTokens = {
    primary: ["#2196F3", "#F44336"],
  }

  const theme = extendTheme({ colors })()

  return (
    <UIProvider theme={theme}>
      <Box
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        transitionDuration="normal"
        transitionProperty="all"
      >
        The current colorMode is "{colorMode}"
      </Box>
    </UIProvider>
  )
}

export const CustomSemanticToken = () => {
  const semantics: ThemeSemantics = {
    colors: {
      extendPrimary: "primary",
      newPrimary: "red.500",
      primary: "#FF7F0B", // override token primary
    },
  }

  const theme = extendTheme({ semantics })()

  return (
    <UIProvider theme={theme}>
      <Box bg="primary" color="white" p="4" rounded="md" w="full">
        override primary
      </Box>

      <Box bg="newPrimary" color="white" p="4" rounded="md" w="full">
        new primary
      </Box>

      <Box bg="extendPrimary" color="white" p="4" rounded="md" w="full">
        extend primary
      </Box>
    </UIProvider>
  )
}

export const OverrideTheming = () => {
  const theme: UsageTheme = {
    /**
     * Define the theme you want to customize
     */
    styles: {
      globalStyle: {
        bg: ["white", "black"],
        color: ["black", "white"],
        fontFamily: "body",
      },
    },
  }

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

export const ExtendTheming = () => {
  const theme = extendTheme({
    /**
     * Define the theme you want to customize, merging them with the default theme
     */
  })({
    merge: true, // If false, not merge default themes
    omit: [], // Tokens of default themes you want to omit in the merge
    pick: [], // Tokens of default themes you want to pick in the merge
  })

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

export const ExtendMultiTheming = () => {
  const theme = extendTheme(
    { colors: { black: "#1F2123" } },
    { colors: { white: "#F6F6F6" } },
  )()

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

export const SwitchTheming = () => {
  const theme = extendTheme({
    themeSchemes: {
      green: {
        semantics: {
          colors: {
            primary: "green.500",
            secondary: "cyan.500",
          },
          colorSchemes: {
            primary: "green",
            secondary: "cyan",
          },
        },
      },
      pink: {
        semantics: {
          colors: {
            primary: "pink.500",
            secondary: "violet.500",
          },
          colorSchemes: {
            primary: "pink",
            secondary: "violet",
          },
        },
      },
      purple: {
        semantics: {
          colors: {
            primary: "purple.500",
            secondary: "teal.500",
          },
          colorSchemes: {
            primary: "purple",
            secondary: "teal",
          },
        },
      },
    },
  })()
  const config = extendConfig({ initialThemeScheme: "pink" })

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

        <Container
          border="1px solid"
          borderColor="inherit"
          boxShadow="md"
          gap="md"
          p="md"
          rounded="md"
        >
          <Heading>{themeScheme} Theme</Heading>

          <Wrap gap="md">
            <Badge colorScheme="primary">Primary</Badge>
            <Badge colorScheme="secondary">Secondary</Badge>
            <Badge colorScheme="warning">Warning</Badge>
            <Badge colorScheme="danger">Danger</Badge>
          </Wrap>

          <Wrap gap="md">
            <Tag colorScheme="primary">Primary</Tag>
            <Tag colorScheme="secondary">Secondary</Tag>
            <Tag colorScheme="warning">Warning</Tag>
            <Tag colorScheme="danger">Danger</Tag>
          </Wrap>

          <Wrap gap="md">
            <Button colorScheme="primary" size="sm">
              Primary
            </Button>
            <Button colorScheme="secondary" size="sm">
              Secondary
            </Button>
            <Button colorScheme="warning" size="sm">
              Warning
            </Button>
            <Button colorScheme="danger" size="sm">
              Danger
            </Button>
          </Wrap>
        </Container>
      </VStack>
    )
  }

  return (
    <UIProvider config={config} theme={theme}>
      <App />
    </UIProvider>
  )
}

export const ExtendStyleAndToken = () => {
  const resetStyle: UIStyle = extendStyle("resetStyle", {
    /**
     * Define a new style
     */
  })

  const colors: ThemeTokens = extendToken("colors", {
    /**
     * Define the token you want to customize
     */
  })

  const theme = extendTheme({
    colors,
    styles: { resetStyle },
  })({ merge: false })

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

const App: FC = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Image
        src="https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png"
        maxW="32rem"
        w="full"
      />
    </Center>
  )
}
