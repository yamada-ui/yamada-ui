import type { Meta } from "@storybook/react-vite"
import { Fragment } from "react"
import { Box } from "../../components/box"
import { Center } from "../../components/center"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { VStack } from "../../components/stack"
import { Text } from "../../components/text"
import { durations } from "./durations"

const meta: Meta = {
  title: "Theme / Tokens",
}

export default meta

export const Durations = () => {
  return (
    <>
      <Heading>Durations</Heading>

      <Container.Root>
        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))"
        >
          <For each={Object.entries(durations)}>
            {([token, value], index) => (
              <VStack key={index} alignItems="center">
                <Center aspectRatio={1} w="full">
                  <Box
                    animationDirection="alternate"
                    animationDuration={value}
                    animationIterationCount="infinite"
                    animationName="spin"
                    animationTimingFunction="ease-in-out"
                    bg="green"
                    h="1"
                    w="full"
                  />
                </Center>

                <Text>{token}</Text>
              </VStack>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
