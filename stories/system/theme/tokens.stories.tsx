import type { ThemeSemantics, ThemeTokens } from "@yamada-ui/react"
import type { FC } from "react"
import {
  Box,
  Center,
  extendTheme,
  extendToken,
  Image,
  UIProvider,
  useColorMode,
} from "@yamada-ui/react"

export default {
  title: "System / Theme / Tokens",
}

export const useColorModeToken = () => {
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

export const useExtendToken = () => {
  const colors: ThemeTokens = extendToken("colors")

  const theme = extendTheme({ colors })()

  return (
    <UIProvider theme={theme}>
      <App />
    </UIProvider>
  )
}

export const useSemanticToken = () => {
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
