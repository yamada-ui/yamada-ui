import type { Meta } from "@storybook/react"
import { Box } from "../../components/box"
import { Center } from "../../components/center"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { VStack } from "../../components/stack"
import { Text } from "../../components/text"
import { keyframes } from "./keyframes"

const meta: Meta = {
  title: "Theme / Tokens / Keyframes",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Keyframes</Heading>

      <Container.Root>
        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))"
        >
          <For each={Object.entries(keyframes)}>
            {([token], index) => (
              <VStack key={index} alignItems="center" gap="sm">
                <Center
                  aspectRatio={1}
                  bg="bg"
                  borderColor="border.subtle"
                  borderWidth="1px"
                  boxSize="full"
                  flexDirection="column"
                  overflow="hidden"
                  position="relative"
                  rounded="l2"
                >
                  <Box
                    css={{
                      "--animation-from-x": "25%",
                      "--animation-from-y": "25%",
                      "--animation-height": "{sizes.12}",
                      "--animation-to-x": "50%",
                      "--animation-to-y": "50%",
                      "--animation-width": "{sizes.12}",
                    }}
                    animationDirection="alternate"
                    animationDuration="1s"
                    animationIterationCount="infinite"
                    animationName={token}
                    animationTimingFunction="ease-in-out"
                    bg="green"
                    boxSize="12"
                    position="absolute"
                    rounded="l2"
                  />
                </Center>

                <Text lineClamp={1}>{token}</Text>
              </VStack>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
