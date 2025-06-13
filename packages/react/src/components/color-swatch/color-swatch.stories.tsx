import type { Meta, StoryFn } from "@storybook/react"
import { PropsTable } from "../../../storybook/components"
import { defaultTheme } from "../../theme"
import { Wrap } from "../wrap"
import { ColorSwatch, ColorSwatchGroup } from "./"

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
    <PropsTable variant="stack" rows={["plain", "circle", "square"]}>
      {(_, row, key) => (
        <Wrap key={key} gap="md">
          <ColorSwatch variant={row} color="#4387f4" />
          <ColorSwatch variant={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch variant={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable
      variant="stack"
      rows={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}
    >
      {(_, row, key) => (
        <Wrap key={key} gap="md">
          <ColorSwatch size={row} color="#4387f4" />
          <ColorSwatch size={row} color="rgba(234, 22, 174, 0.5)" />
          <ColorSwatch size={row} color="hsla(251, 87%, 67%, 0.7)" />
        </Wrap>
      )}
    </PropsTable>
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

export const Group: Story = () => {
  return (
    <Wrap gap="md">
      <ColorSwatchGroup
        items={["green.500", "green.600", "green.700", "green.800"]}
      />
      <ColorSwatchGroup items={["red.500", "red.400", "red.300"]} />
      <ColorSwatchGroup items={[]} />
    </Wrap>
  )
}
