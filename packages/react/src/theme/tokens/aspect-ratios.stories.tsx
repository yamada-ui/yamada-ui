import type { Meta } from "@storybook/react-vite"
import { Center } from "../../components/center"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { aspectRatios } from "./aspect-ratios"

const meta: Meta = {
  title: "Theme / Tokens",
}

export default meta

export const AspectRatios = () => {
  return (
    <>
      <Heading>Aspect Ratios</Heading>

      <Container.Root>
        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="repeat(auto-fill, minmax({sizes.xs}, 1fr))"
        >
          <For each={Object.entries(aspectRatios)}>
            {([token, value], index) => (
              <Center
                key={index}
                aspectRatio={token}
                bg="bg"
                borderColor="border.subtle"
                borderWidth="1px"
                flexDirection="column"
                rounded="l2"
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
