import type { Meta } from "@storybook/react"
import { Center } from "../../components/center"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { radii as semanticRadii } from "../semantic-tokens/radii"
import { radii } from "./radii"

const meta: Meta = {
  title: "Theme / Tokens / Radii",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Radii</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))"
        >
          <For each={Object.entries(radii)}>
            {([token, value], index) => (
              <Center
                key={index}
                aspectRatio={1}
                bg="bg"
                borderColor="border.subtle"
                borderWidth="1px"
                flexDirection="column"
                rounded={token}
              >
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </Center>
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
          gap="xl"
          gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))"
        >
          <For each={Object.entries(semanticRadii)}>
            {([token, value], index) => (
              <Center
                key={index}
                aspectRatio={1}
                bg="bg"
                borderColor="border.subtle"
                borderWidth="1px"
                flexDirection="column"
                rounded={token}
              >
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </Center>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
