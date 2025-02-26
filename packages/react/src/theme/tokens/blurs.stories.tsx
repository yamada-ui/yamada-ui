import type { Meta } from "@storybook/react"
import { Center } from "../../components/center"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { blurs } from "./blurs"

const meta: Meta = {
  title: "Theme / Tokens / Blurs",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Blurs</Heading>

      <Container.Root>
        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="repeat(auto-fill, minmax({sizes.xs}, 1fr))"
        >
          <For each={Object.entries(blurs)}>
            {([token, value], index) => (
              <Center
                key={index}
                aspectRatio={1}
                bg="bg"
                bgImage="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90"
                bgSize="cover"
                borderColor="border.subtle"
                borderWidth="1px"
                overflow="hidden"
                rounded="l2"
              >
                <Center
                  backdropBlur={token}
                  boxSize="full"
                  flexDirection="column"
                >
                  <Text>{token}</Text>
                  <Text>{value}</Text>
                </Center>
              </Center>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
