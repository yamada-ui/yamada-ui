import type { Meta, StoryFn } from "@storybook/react"
import { toTitleCase } from "../../utils"
import { COLOR_SCHEMES } from "../../utils"
import { Wrap } from "../flex"
import { Badge } from "./badge"

type Story = StoryFn<typeof Badge>

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components / Badge",
}

export default meta

export const Subtle: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme}>
          {toTitleCase(colorScheme)}
        </Badge>
      ))}
    </Wrap>
  )
}

export const Surface: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme} variant="surface">
          {toTitleCase(colorScheme)}
        </Badge>
      ))}
    </Wrap>
  )
}

export const Solid: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme} variant="solid">
          {toTitleCase(colorScheme)}
        </Badge>
      ))}
    </Wrap>
  )
}

export const Outline: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme} variant="outline">
          {toTitleCase(colorScheme)}
        </Badge>
      ))}
    </Wrap>
  )
}
