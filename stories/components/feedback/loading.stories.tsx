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
      <Loading color="red.500" fontSize="6xl" variant="oval" />
      <Loading color="orange.500" fontSize="6xl" variant="grid" />
      <Loading color="yellow.500" fontSize="6xl" variant="audio" />
      <Loading color="green.500" fontSize="6xl" variant="dots" />
      <Loading color="teal.500" fontSize="6xl" variant="puff" />
      <Loading color="blue.500" fontSize="6xl" variant="rings" />
      <Loading color="cyan.500" fontSize="6xl" variant="circles" />
    </Wrap>
  )
}
