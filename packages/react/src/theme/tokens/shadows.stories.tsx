import type { Meta } from "@storybook/react"
import { Center } from "../../components/center"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { shadows } from "./shadows"

const meta: Meta = {
  title: "Theme / Tokens / Shadows",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Shadows</Heading>

      <Container.Root>
        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="repeat(auto-fill, minmax({sizes.4xs}, 1fr))"
        >
          <For each={Object.entries(shadows)}>
            {([token], index) => (
              <Center
                key={index}
                aspectRatio={1}
                bg="bg"
                borderColor="border.subtle"
                borderWidth="1px"
                boxShadow={token}
                flexDirection="column"
                rounded="l2"
              >
                <Text>{token}</Text>
              </Center>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
