import type { Meta } from "@storybook/react-vite"
import { Fragment } from "react"
import { Box } from "../../components/box"
import { Container } from "../../components/container"
import { For } from "../../components/for"
import { Heading } from "../../components/heading"
import { Text } from "../../components/text"
import { borders } from "./borders"

const meta: Meta = {
  title: "Theme / Tokens / Borders",
}

export default meta

export const Basic = () => {
  return (
    <>
      <Heading>Borders</Heading>

      <Container.Root>
        <Container.Body
          alignItems="center"
          display="grid"
          gap="lg"
          gridTemplateColumns="auto auto 1fr"
        >
          <For each={Object.entries(borders)}>
            {([token, value], index) => (
              <Fragment key={index}>
                <Text>{token}</Text>
                <Text color="fg.muted">{value}</Text>
                <Box borderTop={token} />
              </Fragment>
            )}
          </For>
        </Container.Body>
      </Container.Root>
    </>
  )
}
