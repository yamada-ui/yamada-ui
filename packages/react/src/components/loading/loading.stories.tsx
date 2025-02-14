import type { Meta, StoryFn } from "@storybook/react"
import { Wrap } from "../flex"
import { Loading } from "./"

type Story = StoryFn<typeof Loading.Oval>

const meta: Meta<typeof Loading.Oval> = {
  component: Loading.Oval,
  title: "Components / Loading",
}

export default meta

export const Basic: Story = () => {
  return (
    <Wrap gap="md">
      <Loading.Oval color="red.500" fontSize="6xl" />
      <Loading.Rings color="orange.500" fontSize="6xl" />
      <Loading.Audio color="yellow.500" fontSize="6xl" />
      <Loading.Dots color="green.500" fontSize="6xl" />
      <Loading.Puff color="teal.500" fontSize="6xl" />
      <Loading.Rings color="blue.500" fontSize="6xl" />
      <Loading.Circles color="cyan.500" fontSize="6xl" />
    </Wrap>
  )
}
