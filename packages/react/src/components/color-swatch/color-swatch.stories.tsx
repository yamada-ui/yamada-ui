import type { Meta, StoryFn } from "@storybook/react"
import { defaultTheme } from "../../theme"
import { Wrap } from "../wrap"
import { ColorSwatch } from "./"

type Story = StoryFn<typeof ColorSwatch>

const meta: Meta<typeof ColorSwatch> = {
  component: ColorSwatch,
  title: "Components / ColorSwatch",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <ColorSwatch color="#4387f4" />
        <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
        <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" />
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.whiteAlpha).map(([key, color]) => (
          <ColorSwatch key={key} color={color} />
        ))}
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.blackAlpha).map(([key, color]) => (
          <ColorSwatch key={key} color={color} />
        ))}
      </Wrap>
    </>
  )
}

export const Variant: Story = () => {
  return (
    <Wrap gap="md">
      <ColorSwatch variant="basic" color="#4387f4" />
      <ColorSwatch variant="rounded" color="rgba(234, 22, 174, 0.5)" />
    </Wrap>
  )
}

export const Size: Story = () => {
  return (
    <Wrap gap="md">
      <ColorSwatch size="sm" color="#4387f4" />
      <ColorSwatch size="md" color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch size="lg" color="hsla(251, 87%, 67%, 0.7)" />
    </Wrap>
  )
}

export const DisabledShadow: Story = () => {
  return (
    <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>
  )
}
