import type { Meta, StoryFn } from "@storybook/react"
import { Loading, Wrap } from "@yamada-ui/react"

type Story = StoryFn<typeof Loading>

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: "Components / Feedback / Loading",
}

export default meta

export const basic: Story = () => {
  return (
    <Wrap gap="md">
      <Loading variant="oval" color="red.500" fontSize="6xl" />
      <Loading variant="grid" color="orange.500" fontSize="6xl" />
      <Loading variant="audio" color="yellow.500" fontSize="6xl" />
      <Loading variant="dots" color="green.500" fontSize="6xl" />
      <Loading variant="puff" color="teal.500" fontSize="6xl" />
      <Loading variant="rings" color="blue.500" fontSize="6xl" />
      <Loading variant="circles" color="cyan.500" fontSize="6xl" />
    </Wrap>
  )
}
