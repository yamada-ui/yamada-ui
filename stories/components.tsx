import type { ContainerProps, Dict } from "@yamada-ui/react"
import {
  Box,
  Container,
  HStack,
  Text,
  UIProvider,
  VStack,
  isArray,
  useColorMode,
} from "@yamada-ui/react"
import type { FC, ReactNode } from "react"
import { useEffect } from "react"
import { useDarkMode } from "storybook-dark-mode"

export const colorSchemes = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "gray",
  "neutral",
  "red",
  "rose",
  "pink",
  "flashy",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
]

export const JSX: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider>
      <App>{children}</App>
    </UIProvider>
  )
}

const App: FC<ContainerProps> = ({ children }) => {
  const { changeColorMode } = useColorMode()

  const colorMode = useDarkMode() ? "dark" : "light"

  useEffect(() => {
    changeColorMode(colorMode)
  }, [colorMode, changeColorMode])

  return <Container>{children}</Container>
}

type ColorPalletsProps = {
  name: string
  colors: Dict<Dict>
}

export const ColorPallets: FC<ColorPalletsProps> = ({ name, colors }) => {
  return Object.entries(colors[name]).map(([hue, value]) => (
    <ColorPallet key={hue} {...{ name, hue, value }} />
  ))
}

type ColorPalletProps = {
  name: string
  value: string
  hue?: string
}

export const ColorPallet: FC<ColorPalletProps> = ({ name, hue, value }) => {
  const colorMode = useDarkMode() ? "dark" : "light"

  return (
    <HStack key={hue}>
      <Box
        bg={hue ? `${name}.${hue}` : name}
        minW="12"
        minH="12"
        rounded="md"
        boxShadow="inner"
      />
      <VStack gap="1">
        <Text m="0" fontWeight="semibold" noOfLines={1}>
          {name.charAt(0).toUpperCase() + name.slice(1)} {hue}
        </Text>
        <Text m="0" noOfLines={1}>
          {!isArray(value)
            ? value
            : colorMode === "light"
              ? value[0]
              : value[1]}
        </Text>
      </VStack>
    </HStack>
  )
}
