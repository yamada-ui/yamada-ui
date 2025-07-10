import type { Meta } from "@storybook/react-vite"
import { Fragment } from "react"
import { Box } from "../../components/box"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { spaces as semanticSpaces } from "../semantic-tokens/spaces"
import { spaces } from "./spaces"

const meta: Meta = {
  title: "Theme / Tokens / Spaces",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Spaces</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body
          alignItems="center"
          display="grid"
          gapX="lg"
          gapY="md"
          gridTemplateColumns="auto auto 1fr"
        >
          <For
            each={Object.entries(spaces)
              .filter(([key]) => !isNaN(Number(key)))
              .sort(([a], [b]) => parseInt(a) - parseInt(b))}
          >
            {([token, value], index) => (
              <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={value} rounded="l1" />
              </Fragment>
            )}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body
          alignItems="center"
          display="grid"
          gapX="lg"
          gapY="md"
          gridTemplateColumns="auto auto 1fr"
        >
          <For each={Object.entries(semanticSpaces)}>
            {([token, value], index) => (
              <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW="full" rounded="l1" w={value} />
              </Fragment>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
