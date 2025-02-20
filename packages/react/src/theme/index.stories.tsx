import type { Meta } from "@storybook/react"
import { Box } from "../components/box"
import { Center } from "../components/center"
import { Container } from "../components/container"
import { For } from "../components/for"
import { Grid } from "../components/grid"
import { Heading } from "../components/heading"
import { Text } from "../components/text"
import {
  COLOR_SCHEMES,
  DEFAULT_COLOR_SCHEMES,
  SEMANTIC_COLOR_SCHEMES,
  TONES,
  toTitleCase,
} from "../utils"

const meta: Meta = {
  title: "Theme / Colors",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Colors</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <For each={DEFAULT_COLOR_SCHEMES}>
            {(colorScheme, index) => (
              <Grid
                key={index}
                gap="sm"
                templateColumns={`repeat(${TONES.length}, 1fr)`}
                w="full"
              >
                <For each={TONES}>
                  {(tone, index) => (
                    <Grid key={index} gap="xs">
                      <Box
                        bg={`${colorScheme}.${tone}`}
                        h="12"
                        rounded="md"
                        w="full"
                      />
                      <Text
                        color="muted"
                        fontSize="xs"
                        lineClamp={1}
                        textAlign="center"
                      >{`${colorScheme}.${tone}`}</Text>
                    </Grid>
                  )}
                </For>
              </Grid>
            )}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <For each={SEMANTIC_COLOR_SCHEMES}>
            {(colorScheme, index) => (
              <Grid
                key={index}
                gap="sm"
                templateColumns={`repeat(${TONES.length}, 1fr)`}
                w="full"
              >
                <For each={TONES}>
                  {(tone, index) => (
                    <Grid key={index} gap="xs">
                      <Box
                        bg={`${colorScheme}.${tone}`}
                        h="12"
                        rounded="md"
                        w="full"
                      />
                      <Text
                        color="muted"
                        fontSize="xs"
                        lineClamp={1}
                        textAlign="center"
                      >{`${colorScheme}.${tone}`}</Text>
                    </Grid>
                  )}
                </For>
              </Grid>
            )}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Background</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For
              each={[
                "",
                "subtle",
                "muted",
                "emphasized",
                "contrast",
                "panel",
                "info",
                "success",
                "warning",
                "error",
              ]}
            >
              {(value, index) => (
                <Grid key={index} gap="xs">
                  <Box
                    bg={value ? `bg.${value}` : "bg"}
                    borderColor="border.muted"
                    borderWidth="1px"
                    h="24"
                    rounded="md"
                    w="full"
                  />

                  <Text
                    color="muted"
                    fontSize="xs"
                    lineClamp={1}
                    textAlign="center"
                  >
                    {value ? `bg.${value}` : "bg"}
                  </Text>
                </Grid>
              )}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Foreground</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For
              each={[
                "",
                "subtle",
                "muted",
                "emphasized",
                "contrast",
                "info",
                "success",
                "warning",
                "error",
              ]}
            >
              {(value, index) => (
                <Grid key={index} gap="xs">
                  <Center
                    bg={value === "contrast" ? "bg.contrast" : undefined}
                    borderColor="border.muted"
                    borderWidth="1px"
                    h="24"
                    rounded="md"
                    w="full"
                  >
                    <Text color={value ? `fg.${value}` : "fg"}>Ag</Text>
                  </Center>

                  <Text
                    color="muted"
                    fontSize="xs"
                    lineClamp={1}
                    textAlign="center"
                  >
                    {value ? `fg.${value}` : "fg"}
                  </Text>
                </Grid>
              )}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Border</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For
              each={[
                "",
                "subtle",
                "muted",
                "emphasized",
                "contrast",
                "info",
                "success",
                "warning",
                "error",
              ]}
            >
              {(value, index) => (
                <Grid key={index} gap="xs">
                  <Box
                    borderColor={value ? `border.${value}` : "border"}
                    borderWidth="3px"
                    h="24"
                    rounded="md"
                    w="full"
                  />

                  <Text
                    color="muted"
                    fontSize="xs"
                    lineClamp={1}
                    textAlign="center"
                  >
                    {value ? `border.${value}` : "border"}
                  </Text>
                </Grid>
              )}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <For each={COLOR_SCHEMES}>
        {(colorScheme, index) => (
          <Container.Root key={index}>
            <Container.Header>
              <Heading size="xl">{toTitleCase(colorScheme)}</Heading>
            </Container.Header>

            <Container.Body gap="sm">
              <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
                <For
                  each={[
                    "",
                    "contrast",
                    "fg",
                    "bg",
                    "ghost",
                    "subtle",
                    "muted",
                    "emphasized",
                    "solid",
                    "outline",
                  ]}
                >
                  {(value, index) => (
                    <Grid key={index} gap="xs">
                      <Box
                        bg={value ? `${colorScheme}.${value}` : colorScheme}
                        borderColor="border.muted"
                        borderWidth="1px"
                        h="24"
                        rounded="md"
                        w="full"
                      />

                      <Text
                        color="muted"
                        fontSize="xs"
                        lineClamp={1}
                        textAlign="center"
                      >
                        {value ? `${colorScheme}.${value}` : colorScheme}
                      </Text>
                    </Grid>
                  )}
                </For>
              </Grid>
            </Container.Body>
          </Container.Root>
        )}
      </For>
    </>
  )
}
