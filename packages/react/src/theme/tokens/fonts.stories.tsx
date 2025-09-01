import type { Meta } from "@storybook/react-vite"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { VStack } from "../../components/stack"
import { Text } from "../../components/text"
import { fonts } from "./fonts"

const meta: Meta = {
  title: "Theme / Tokens",
}

export default meta

export const Fonts = () => {
  return (
    <>
      <Heading>Fonts</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(fonts)}>
            {([token, value], index) => (
              <VStack key={index} gap="xs">
                <Text fontFamily={token} fontSize="2xl">
                  Ag
                </Text>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
              </VStack>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
