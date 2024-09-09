import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {
  ui,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
  useColorMode,
  Center,
} from "@yamada-ui/react"
import {
  AppWindowMac,
  Blocks,
  Paintbrush,
  Palette,
  Smile,
} from "@yamada-ui/lucide"
import imgGatsby from "../images/gatsby-logo.svg"

const Image = ui("img", {
  disableStyleProp: (prop) => ["width", "height", "fill"].includes(prop),
})

const Link = ui("a", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    gap: "sm",
    color: ["blackAlpha.700", "whiteAlpha.700"],
    fontSize: { base: "md", sm: "sm" },
    textUnderlineOffset: "$spaces.1",
    _hover: {
      span: {
        textDecoration: "underline",
      },
    },
  },
})

const IndexPage: React.FC<PageProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Grid
      as="main"
      minH="100dvh"
      p="lg"
      templateRows={{ base: "$spaces.10 1fr $spaces.10", md: "1fr auto" }}
      alignItems="center"
      gap="lg"
    >
      <VStack
        alignItems="center"
        gap={{ base: "3xl", sm: "xl" }}
        gridRowStart="2"
      >
        <VStack alignItems="center" gap={{ base: "lg", sm: "md" }}>
          <HStack gap="lg">
            <Box
              as="a"
              href="https://yamada-ui.com"
              target="_blank"
              rel="noopener noreferrer"
              willChange="filter"
              transitionProperty="filter"
              transitionDuration="slower"
              _dark={{
                _hover: {
                  filter: "drop-shadow(0 0 1.4em $colors.primary)",
                },
              }}
            >
              <Image
                src="https://yamada-ui.com/logomark-black.svg"
                alt="Yamada UI logo"
                boxSize={{ base: "3xs", sm: "4xs" }}
                width={120}
                height={120}
                _dark={{
                  filter: "invert()",
                }}
              />
            </Box>

            <Box
              as="a"
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              willChange="filter"
              transitionProperty="filter"
              transitionDuration="slower"
              _dark={{
                _hover: {
                  filter: "drop-shadow(0 0 1.4em $colors.secondary)",
                },
              }}
            >
              <Image
                src={imgGatsby}
                alt="Gatsby logo"
                boxSize={{ base: "3xs", sm: "4xs" }}
                width={120}
                height={120}
              />
            </Box>
          </HStack>

          <Heading size={{ base: "3xl", sm: "xl" }} letterSpacing="wider">
            Yamada UI + Gatsby
          </Heading>
        </VStack>

        <Button fontWeight="medium" onClick={toggleColorMode}>
          Change {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>

        <Text color={["blackAlpha.500", "whiteAlpha.500"]} textAlign="center">
          Click on the Yamada UI and Gatsby logos to learn more
        </Text>
      </VStack>

      <Center
        as="footer"
        gridRowStart="3"
        flexDir={{ base: "row", md: "column" }}
        alignItems={{ base: "center", md: "start" }}
        gap={{ base: "md", sm: "sm" }}
      >
        <Link
          as="a"
          href="https://yamada-ui.com/components"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Blocks fontSize={{ base: "2xl", sm: "lg" }} />

          <Text as="span">Components</Text>
        </Link>

        <Link
          as="a"
          href="https://yamada-ui.com/styled-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Palette fontSize={{ base: "2xl", sm: "lg" }} />

          <Text as="span">Styled System</Text>
        </Link>

        <Link
          as="a"
          href="https://yamada-ui.com/icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Smile fontSize={{ base: "2xl", sm: "lg" }} />

          <Text as="span">Icons</Text>
        </Link>

        <Link
          as="a"
          href="https://yamada-ui.com/examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppWindowMac fontSize={{ base: "2xl", sm: "lg" }} />

          <Text as="span">Examples</Text>
        </Link>

        <Link
          as="a"
          href="https://yamada-colors.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Paintbrush fontSize={{ base: "2xl", sm: "lg" }} />

          <Text as="span">Colors Generator</Text>
        </Link>
      </Center>
    </Grid>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Create Gatsby App</title>
