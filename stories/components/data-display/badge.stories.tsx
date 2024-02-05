import type { Meta, StoryFn } from "@storybook/react"
import { Wrap, Badge } from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Badge>

const meta: Meta<typeof Badge> = {
  title: "Components / Data Display / Badge",
  component: Badge,
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
        <Badge key={colorScheme} variant="solid" colorScheme={colorScheme}>
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
        <Badge key={colorScheme} variant="outline" colorScheme={colorScheme}>
          {colorScheme}
        </Badge>
      ))}
    </Wrap>
  )
}
