import type { Meta, StoryFn } from "@storybook/react"
import { DEFAULT_COLOR_SCHEMES } from "../../utils"
import { Box } from "../box"
import { For } from "../for"
import { Wrap } from "./"

type Story = StoryFn<typeof Wrap>

const meta: Meta<typeof Wrap> = {
  component: Wrap,
  title: "Components / Wrap",
}

export default meta

export const Basic: Story = () => {
  return (
    <Wrap gap="md">
      <For each={DEFAULT_COLOR_SCHEMES}>
        {(colorScheme, index) => (
          <Box
            key={index}
            bg={`${colorScheme}.500`}
            color="white"
            p="md"
            rounded="md"
          >
            Box
          </Box>
        )}
      </For>
    </Wrap>
  )
}
