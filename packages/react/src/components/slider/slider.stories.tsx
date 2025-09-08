import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { Slider } from "."
import { COLOR_SCHEMES } from "../../utils"
import { Field } from "../field"
import { For } from "../for"
import { AudioLinesIcon } from "../icon"
import { Text } from "../text"
import { Tooltip } from "../tooltip"

type Story = StoryFn<typeof Slider.Root>

const meta: Meta<typeof Slider.Root> = {
  component: Slider.Root,
  title: "Components / Slider",
}

export default meta

export const Basic: Story = () => {
  return <Slider.Root defaultValue={50} />
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["outline", "solid"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Slider.Root
            key={key}
            colorScheme={row}
            variant={column}
            defaultValue={50}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => {
        return <Slider.Root key={key} size={row} defaultValue={50} />
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  return <Slider.Root defaultValue={50} />
}

export const MinMax: Story = () => {
  return <Slider.Root defaultValue={50} max={200} min={0} />
}

export const Range: Story = () => {
  return <Slider.Root defaultValue={[25, 75]} />
}

export const BetweenThumbs: Story = () => {
  return <Slider.Root betweenThumbs={25} defaultValue={[25, 75]} />
}

export const Vertical: Story = () => {
  return <Slider.Root defaultValue={50} h="xs" orientation="vertical" />
}

export const Mark: Story = () => {
  return (
    <>
      <Slider.Root defaultValue={50} marks={[25, 50, 75]} />

      <Slider.Root
        defaultValue={50}
        marks={[
          { label: "25", value: 25 },
          { label: "50", value: 50 },
          { label: "75", value: 75 },
        ]}
      />
    </>
  )
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
        return <Slider.Root key={key} defaultValue={50} shape={row} />
      }}
    </PropsTable>
  )
}

export const Step: Story = () => {
  return <Slider.Root defaultValue={50} step={10} />
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["outline", "solid"] as const}>
        {(variant, index) => (
          <Slider.Root
            key={index}
            variant={variant}
            defaultValue={50}
            disabled
          />
        )}
      </For>

      <Field.Root
        disabled
        helperMessage="Please select your preferred volume."
        label="Sound volume"
      >
        <Slider.Root defaultValue={50} />
      </Field.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  return (
    <>
      <For each={["outline", "solid"] as const}>
        {(variant, index) => (
          <Slider.Root
            key={index}
            variant={variant}
            defaultValue={50}
            readOnly
          />
        )}
      </For>

      <Field.Root
        helperMessage="Please select your preferred volume."
        label="Sound volume"
        readOnly
      >
        <Slider.Root defaultValue={50} />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  const [value, onChange] = useState(15)

  return (
    <>
      <For each={["outline", "solid"] as const}>
        {(variant, index) => (
          <Slider.Root
            key={index}
            variant={variant}
            invalid={value < 20}
            value={value}
            onChange={onChange}
          />
        )}
      </For>

      <Field.Root
        errorMessage="Volume should be set to 20 or higher."
        invalid={value < 20}
        label="Sound volume"
      >
        <Slider.Root value={value} onChange={onChange} />
      </Field.Root>
    </>
  )
}

export const ThumbWithTooltip: Story = () => {
  const [value, setValue] = useState(50)

  return (
    <Slider.Root value={value} onChange={setValue}>
      <Slider.Track>
        <Slider.Range />
        <Tooltip content={value}>
          <Slider.Thumb />
        </Tooltip>
      </Slider.Track>

      <Slider.Marks marks={[25, 50, 75]} />
    </Slider.Root>
  )
}

export const OnChange: Story = () => {
  const [value, onChange] = useState(50)
  const [startValue, onChangeStart] = useState(50)
  const [endValue, onChangeEnd] = useState(50)

  return (
    <>
      <Text>
        Value: {value}, Start Value: {startValue}, End Value: {endValue}
      </Text>

      <Slider.Root
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />
    </>
  )
}

export const CustomColor: Story = () => {
  return (
    <Slider.Root
      defaultValue={50}
      rangeFill="red.bg"
      thumbFill="red"
      trackFill="red.bg"
      trackSize="5"
    />
  )
}

export const CustomThumb: Story = () => {
  return (
    <Slider.Root defaultValue={50}>
      <Slider.Track>
        <Slider.Range />
        <Slider.Thumb>
          <AudioLinesIcon fontSize="sm" />
        </Slider.Thumb>
      </Slider.Track>
    </Slider.Root>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState(50)

  return <Slider.Root value={value} onChange={setValue} />
}
