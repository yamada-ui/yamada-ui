import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { SaturationSlider } from "."
import { Text } from "../text"
import { Tooltip } from "../tooltip"

type Story = StoryFn<typeof SaturationSlider.Root>

const meta: Meta<typeof SaturationSlider.Root> = {
  component: SaturationSlider.Root,
  title: "Components / SaturationSlider",
}

export default meta

export const Basic: Story = () => {
  return <SaturationSlider.Root maxW="sm" />
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
        return <SaturationSlider.Root key={key} size={row} maxW="sm" />
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  return <SaturationSlider.Root defaultValue={[120, 0.33, 0.33]} maxW="sm" />
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
        return (
          <SaturationSlider.Root
            key={key}
            defaultValue={[120, 0.33, 0.33]}
            maxW="sm"
            shape={row}
          />
        )
      }}
    </PropsTable>
  )
}

export const Step: Story = () => {
  return <SaturationSlider.Root maxW="sm" step={0.1} />
}

export const Disabled: Story = () => {
  return <SaturationSlider.Root disabled maxW="sm" />
}

export const ReadOnly: Story = () => {
  return <SaturationSlider.Root maxW="sm" readOnly />
}

export const ThumbWithTooltip: Story = () => {
  const [value, setValue] = useState<[number, number, number]>([
    120, 0.33, 0.33,
  ])
  const hue = `${value[0]}°`
  const saturation = `${Math.round(value[1] * 100)}%`
  const brightness = `${Math.round(value[2] * 100)}%`

  return (
    <SaturationSlider.Root maxW="sm" value={value} onChange={setValue}>
      <SaturationSlider.Track>
        <Tooltip content={`${hue}, ${saturation}, ${brightness}`}>
          <SaturationSlider.Thumb />
        </Tooltip>
      </SaturationSlider.Track>
    </SaturationSlider.Root>
  )
}

export const OnChange: Story = () => {
  const defaultValue: [number, number, number] = [120, 0.33, 0.33]
  const [value, onChange] = useState(defaultValue)
  const [startValue, onChangeStart] = useState(defaultValue)
  const [endValue, onChangeEnd] = useState(defaultValue)

  return (
    <>
      <Text>
        Value: {JSON.stringify(value)}, Start Value:{" "}
        {JSON.stringify(startValue)}, End Value: {JSON.stringify(endValue)}
      </Text>

      <SaturationSlider.Root
        maxW="sm"
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState<[number, number, number]>([
    120, 0.33, 0.33,
  ])

  return <SaturationSlider.Root maxW="sm" value={value} onChange={setValue} />
}
