import type { Meta, StoryFn } from "@storybook/react"
import { Loading, Wrap } from "@yamada-ui/react"

type Story = StoryFn<typeof Loading>

const meta: Meta<typeof Loading> = {
  title: "Components / Feedback / Loading",
  component: Loading,
}

export default meta

export const basic: Story = () => {
  return (
    <Wrap gap="md">
      <Loading variant="oval" fontSize="6xl" color="red.500" />
      <Loading variant="grid" fontSize="6xl" color="orange.500" />
      <Loading variant="audio" fontSize="6xl" color="yellow.500" />
      <Loading variant="dots" fontSize="6xl" color="green.500" />
      <Loading variant="puff" fontSize="6xl" color="teal.500" />
      <Loading variant="rings" fontSize="6xl" color="blue.500" />
      <Loading variant="circles" fontSize="6xl" color="cyan.500" />
    </Wrap>
  )
}
