import type { Meta } from "@storybook/react-vite"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { HStack, VStack } from "../../components/stack"
import { Text } from "../../components/text"
import { letterSpacings } from "./letter-spacings"

const meta: Meta = {
  title: "Theme / Tokens",
}

export default meta

export const LetterSpacings = () => {
  return (
    <>
      <Heading>Letter Spacings</Heading>

      <Container.Root>
        <Container.Body gap="lg">
          <For each={Object.entries(letterSpacings)}>
            {([token, value], index) => (
              <VStack key={index}>
                <HStack>
                  <Text>{token}</Text>
                  <Text color="fg.muted">{value}</Text>
                </HStack>

                <Text fontSize="2xl" letterSpacing={token}>
                  Hirotomo Yamada
                </Text>
              </VStack>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
