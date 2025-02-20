import type { Meta } from "@storybook/react"
import { Fragment } from "react"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { fontSizes } from "./font-sizes"

const meta: Meta = {
  title: "Theme / Tokens / Font Sizes",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Font Sizes</Heading>

      <Container.Root>
        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="auto auto 1fr"
        >
          <For each={Object.entries(fontSizes)}>
            {([token, value], index) => (
              <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Text fontSize={token}>Ag</Text>
              </Fragment>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
