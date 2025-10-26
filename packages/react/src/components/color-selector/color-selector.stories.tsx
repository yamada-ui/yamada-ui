import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { convertColor } from "../../utils"
import { Field } from "../field"
import { Input, InputGroup } from "../input"
import { ColorSelector } from "./"

type Story = StoryFn<typeof ColorSelector.Root>

const meta: Meta<typeof ColorSelector.Root> = {
  component: ColorSelector.Root,
  title: "Components / ColorSelector",
}

export default meta

export const Basic: Story = () => {
  return <ColorSelector.Root maxW="md" />
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
        return <ColorSelector.Root key={key} size={row} maxW="md" />
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  return <ColorSelector.Root defaultValue="#775999" maxW="md" />
}

export const Alpha: Story = () => {
  return <ColorSelector.Root defaultValue="#775999A0" maxW="md" />
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
        return (
          <ColorSelector.Root key={key} format="hexa" maxW="md" shape={row} />
        )
      }}
    </PropsTable>
  )
}

export const ColorSwatches: Story = () => {
  return (
    <ColorSelector.Root
      colorSwatches={[
        "hsl(0, 100%, 50%)",
        "hsl(45, 100%, 50%)",
        "hsl(90, 100%, 50%)",
        "hsl(135, 100%, 50%)",
        "hsl(180, 100%, 50%)",
        "hsl(225, 100%, 50%)",
        "hsl(270, 100%, 50%)",
        "hsl(315, 100%, 50%)",
      ]}
      colorSwatchGroupLabel="Pick a color"
      maxW="md"
    />
  )
}

export const ColorSwatchGroupColumns: Story = () => {
  return (
    <ColorSelector.Root
      colorSwatches={[
        "hsl(0, 100%, 50%)",
        "hsl(36, 100%, 50%)",
        "hsl(72, 100%, 50%)",
        "hsl(108, 100%, 50%)",
        "hsl(144, 100%, 50%)",
        "hsl(180, 100%, 50%)",
        "hsl(216, 100%, 50%)",
        "hsl(252, 100%, 50%)",
        "hsl(288, 100%, 50%)",
        "hsl(324, 100%, 50%)",
      ]}
      colorSwatchGroupColumns={10}
      colorSwatchGroupLabel="Pick a color"
      maxW="md"
    />
  )
}

export const Disabled: Story = () => {
  return <ColorSelector.Root disabled maxW="md" />
}

export const ReadOnly: Story = () => {
  return <ColorSelector.Root maxW="md" readOnly />
}

export const CustomComponent: Story = () => {
  const fallbackValue = "#FF0000FF"
  const format = "hexa"
  const [value, setValue] = useState(fallbackValue)

  return (
    <ColorSelector.Root
      format={format}
      maxW="md"
      value={value}
      onChange={setValue}
    >
      <ColorSelector.SaturationSlider />
      <ColorSelector.HueSlider />
      <ColorSelector.AlphaSlider />

      <Field.Root label="Hex">
        <InputGroup.Root>
          <Input
            value={value.toLocaleUpperCase()}
            onBlur={(ev) =>
              setValue(convertColor(ev.target.value, fallbackValue)(format))
            }
            onChange={(ev) => setValue(ev.target.value)}
          />

          <InputGroup.Element clickable>
            <ColorSelector.EyeDropper />
          </InputGroup.Element>
        </InputGroup.Root>
      </Field.Root>
    </ColorSelector.Root>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState("#FF0000A0")

  return <ColorSelector.Root maxW="md" value={value} onChange={setValue} />
}
