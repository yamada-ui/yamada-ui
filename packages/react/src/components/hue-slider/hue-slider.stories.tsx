import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { HueSlider } from "."
import { Text } from "../text"
import { Tooltip } from "../tooltip"

type Story = StoryFn<typeof HueSlider.Root>

const meta: Meta<typeof HueSlider.Root> = {
  component: HueSlider.Root,
  title: "Components / HueSlider",
}

export default meta

export const Basic: Story = () => {
  return <HueSlider.Root defaultValue={180} />
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
        return <HueSlider.Root key={key} size={row} defaultValue={180} />
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  return <HueSlider.Root defaultValue={270} />
}

export const MinMax: Story = () => {
  return <HueSlider.Root defaultValue={300} max={360} min={270} />
}

export const Vertical: Story = () => {
  return <HueSlider.Root defaultValue={180} h="xs" orientation="vertical" />
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
        return <HueSlider.Root key={key} defaultValue={180} shape={row} />
      }}
    </PropsTable>
  )
}

export const Step: Story = () => {
  return <HueSlider.Root defaultValue={180} step={10} />
}

export const Disabled: Story = () => {
  return <HueSlider.Root defaultValue={180} disabled />
}

export const ReadOnly: Story = () => {
  return <HueSlider.Root defaultValue={180} readOnly />
}

export const ThumbWithTooltip: Story = () => {
  const [value, setValue] = useState(50)

  return (
    <HueSlider.Root value={value} onChange={setValue}>
      <HueSlider.Track>
        <Tooltip content={value}>
          <HueSlider.Thumb />
        </Tooltip>

        <HueSlider.Overlay />
      </HueSlider.Track>
    </HueSlider.Root>
  )
}

export const OnChange: Story = () => {
  const [value, onChange] = useState(180)
  const [startValue, onChangeStart] = useState(180)
  const [endValue, onChangeEnd] = useState(180)

  return (
    <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <HueSlider.Root
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState(180)

  return <HueSlider.Root value={value} onChange={setValue} />
}
