import type { Meta, StoryFn } from "@storybook/react"
import { Badge, toTitleCase, Wrap } from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Badge>

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components / Data Display / Badge",
}

export default meta

export const subtle: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme}>
          {toTitleCase(colorScheme)}
        </Badge>
      ))}
    </Wrap>
  )
}

export const surface: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme} variant="surface">
          {toTitleCase(colorScheme)}
        </Badge>
      ))}
    </Wrap>
  )
}

export const solid: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme} variant="solid">
          {toTitleCase(colorScheme)}
        </Badge>
      ))}
    </Wrap>
  )
}

export const outline: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Badge key={colorScheme} colorScheme={colorScheme} variant="outline">
          {toTitleCase(colorScheme)}
        </Badge>
      ))}
    </Wrap>
  )
}
