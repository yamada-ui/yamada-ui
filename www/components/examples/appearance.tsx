"use client"

import type { CenterProps, ThemeScheme } from "@yamada-ui/react"
import {
  Center,
  CheckIcon,
  Heading,
  HStack,
  Separator,
  Switch,
  Text,
  useColorMode,
  useTheme,
  VStack,
} from "@yamada-ui/react"

export function Appearance() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack
      as="section"
      layerStyle="card"
      bg="bg.panel"
      gap="md"
      mb="{space}"
      p="{space}"
      separator={<Separator />}
    >
      <Heading as="h2" size="xl">
        Appearance
      </Heading>

      <HStack>
        <Text as="label" htmlFor="dark-mode" flex="1">
          Accent
        </Text>

        <HStack gap="sm">
          <AccentButton value="base" />
          <AccentButton value="blue" />
          <AccentButton value="red" />
          <AccentButton value="orange" />
          <AccentButton value="yellow" />
          <AccentButton value="green" />
          <AccentButton value="violet" />
          <AccentButton value="pink" />
        </HStack>
      </HStack>

      <HStack>
        <Text as="label" htmlFor="dark-mode" flex="1">
          Dark Mode
        </Text>

        <Switch
          id="dark-mode"
          colorScheme="primary"
          checked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </HStack>
    </VStack>
  )
}

interface AccentButtonProps extends Omit<CenterProps, "as" | "ref"> {
  value: string
}

function AccentButton({ value, ...rest }: AccentButtonProps) {
  const { changeThemeScheme, themeScheme } = useTheme()
  const selected = themeScheme === value

  return (
    <Center
      as="button"
      type="button"
      bg={value === "base" ? "mono" : value}
      boxSize="6"
      color={`${value === "base" ? "mono" : value}.contrast`}
      rounded="full"
      onClick={() => changeThemeScheme(value as unknown as ThemeScheme)}
      {...rest}
    >
      {selected ? <CheckIcon /> : null}
    </Center>
  )
}
