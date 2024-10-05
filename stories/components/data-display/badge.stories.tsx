import type { Meta, StoryFn } from "@storybook/react"
import { Badge, Wrap } from "@yamada-ui/react"
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
          {colorScheme}
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
          {colorScheme}
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
          {colorScheme}
        </Badge>
      ))}
    </Wrap>
  )
}
