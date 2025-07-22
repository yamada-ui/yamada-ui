import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { AlphaSlider } from "."
import { Text } from "../text"
import { Tooltip } from "../tooltip"

type Story = StoryFn<typeof AlphaSlider.Root>

const meta: Meta<typeof AlphaSlider.Root> = {
  component: AlphaSlider.Root,
  title: "Components / AlphaSlider",
}

export default meta

export const Basic: Story = () => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} />
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
        return (
          <AlphaSlider.Root
            key={key}
            size={row}
            color="#775999"
            defaultValue={0.5}
          />
        )
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.7} />
}

export const MinMax: Story = () => {
  return (
    <AlphaSlider.Root
      color="#775999"
      defaultValue={0.5}
      max={0.75}
      min={0.25}
    />
  )
}

export const Vertical: Story = () => {
  return (
    <AlphaSlider.Root
      color="#775999"
      defaultValue={0.5}
      h="xs"
      orientation="vertical"
    />
  )
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
        return (
          <AlphaSlider.Root
            key={key}
            color="#775999"
            defaultValue={0.5}
            shape={row}
          />
        )
      }}
    </PropsTable>
  )
}

export const Step: Story = () => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} step={0.1} />
}

export const Disabled: Story = () => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} disabled />
}

export const Readonly: Story = () => {
  return <AlphaSlider.Root color="#775999" defaultValue={0.5} readOnly />
}

export const ThumbWithTooltip: Story = () => {
  const [value, setValue] = useState(0.5)

  return (
    <AlphaSlider.Root color="#775999" value={value} onChange={setValue}>
      <AlphaSlider.Track>
        <Tooltip content={value}>
          <AlphaSlider.Thumb />
        </Tooltip>

        <AlphaSlider.Overlay />
      </AlphaSlider.Track>
    </AlphaSlider.Root>
  )
}

export const OnChange: Story = () => {
  const [value, onChange] = useState(0.5)
  const [startValue, onChangeStart] = useState(0.5)
  const [endValue, onChangeEnd] = useState(0.5)

  return (
    <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <AlphaSlider.Root
        color="#775999"
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState(0.5)

  return <AlphaSlider.Root color="#775999" value={value} onChange={setValue} />
}

// linear-gradient(117deg, rgb(102, 102, 102) 0%, rgb(216, 44, 69) 22%, rgb(255, 142, 95) 44%, rgb(113, 232, 255) 76%, rgb(245, 245, 245) 100%)
