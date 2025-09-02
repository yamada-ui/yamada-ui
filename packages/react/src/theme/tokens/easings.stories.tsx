import type { Meta } from "@storybook/react-vite"
import { Fragment } from "react"
import { Box } from "../../components/box"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { easings } from "./easings"

const meta: Meta = {
  title: "Theme / Tokens",
}

export default meta

export const Easings = () => {
  return (
    <>
      <Heading>Easings</Heading>

      <Container.Root>
        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="auto auto 1fr"
        >
          <For each={Object.entries(easings)}>
            {([token, value], index) => (
              <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box h="10" position="relative">
                  <Box
                    css={{
                      "--animation-from-x": "0%",
                      "--animation-to-x": "calc(100% - {spaces.10})",
                    }}
                    animationDirection="alternate"
                    animationDuration="1s"
                    animationIterationCount="infinite"
                    animationName="position"
                    animationTimingFunction={value}
                    bg="green"
                    boxSize="10"
                    position="absolute"
                    rounded="l2"
                  />
                </Box>
              </Fragment>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
