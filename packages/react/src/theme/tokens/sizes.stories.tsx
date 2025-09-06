import type { Meta } from "@storybook/react-vite"
import { Fragment } from "react"
import { Box } from "../../components/box"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { isSize } from "../../utils"
import { sizes as semanticSizes } from "../semantic-tokens/sizes"
import { sizes } from "./sizes"

const meta: Meta = {
  title: "Theme / Tokens",
}

export default meta

export const Sizes = () => {
  return (
    <>
      <Heading>Sizes</Heading>

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
            each={Object.entries(sizes)
              .filter(([key]) => !isNaN(Number(key)))
              .sort(([a], [b]) => parseInt(a) - parseInt(b))}
          >
            {([token, value], index) => (
              <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={token} rounded="l1" />
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
          <For
            each={Object.entries(semanticSizes).filter(([key]) => isSize(key))}
          >
            {([token, value], index) => (
              <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={token} rounded="l1" />
              </Fragment>
            )}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Fractional Tokens</Heading>
        </Container.Header>

        <Container.Body
          alignItems="center"
          display="grid"
          gapX="lg"
          gapY="md"
          gridTemplateColumns="auto auto 1fr"
        >
          <For
            each={Object.entries(semanticSizes).filter(([key]) =>
              key.includes("/"),
            )}
          >
            {([token, value], index) => (
              <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box bg="green" h="4" maxW={token} rounded="l1" />
              </Fragment>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
