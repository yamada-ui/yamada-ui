import type { Meta } from "@storybook/react-vite"
import { Fragment } from "react"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { fontWeights } from "./font-weights"

const meta: Meta = {
  title: "Theme / Tokens / Font Weights",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Font Weights</Heading>

      <Container.Root>
        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="auto auto 1fr"
        >
          <For each={Object.entries(fontWeights)}>
            {([token, value], index) => (
              <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Text fontSize="2xl" fontWeight={token}>
                  Ag
                </Text>
              </Fragment>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
