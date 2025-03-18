import type { Meta, StoryFn } from "@storybook/react"
import type { Hsv } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import {
  Button,
  Fieldset,
  SaturationSlider,
  Text,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof SaturationSlider>

const meta: Meta<typeof SaturationSlider> = {
  component: SaturationSlider,
  title: "Components / Forms / SaturationSlider",
}

export default meta

export const basic: Story = () => {
  return <SaturationSlider />
}

export const withDefaultValue: Story = () => {
  return <SaturationSlider defaultValue={[320, 1, 1]} />
}

export const withSize: Story = () => {
  return (
    <>
      <SaturationSlider size="sm" defaultValue={[120, 0.33, 0.33]} />
      <SaturationSlider size="md" defaultValue={[180, 0.66, 0.66]} />
      <SaturationSlider size="lg" defaultValue={[240, 1, 1]} />
    </>
  )
}

export const withStep: Story = () => {
  const [value, onChange] = useState<Hsv>([180, 1, 1])

  return (
    <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider step={0.1} value={value} onChange={onChange} />
    </>
  )
}

export const withFocusThumbOnChange: Story = () => {
  const [value, setValue] = useState<Hsv>([180, 1, 1])
  const [, s, v] = value

  const onChange = (space: "s" | "v", type: "decrement" | "increment") => {
    const i = space === "s" ? 1 : 2

    setValue((prev) => {
      if (type === "increment") {
        if (prev[i] !== 1) prev[i] = Math.round((prev[i] + 0.1) * 10) / 10
      } else {
        if (prev[i] !== 0) prev[i] = Math.round((prev[i] - 0.1) * 10) / 10
      }

      return [...prev]
    })
  }

  return (
    <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider focusThumbOnChange={false} step={10} value={value} />

      <Wrap gap="md">
        <VStack gap="sm" w="auto">
          <Text>Saturation</Text>

          <Wrap gap="md">
            <Button
              disabled={s === 0}
              onClick={() => onChange("s", "decrement")}
            >
              -0.1
            </Button>

            <Button
              colorScheme="blue"
              disabled={s === 1}
              onClick={() => onChange("s", "increment")}
            >
              +0.1
            </Button>
          </Wrap>
        </VStack>

        <VStack gap="sm" w="auto">
          <Text>Brightness</Text>

          <Wrap gap="md">
            <Button
              disabled={v === 0}
              onClick={() => onChange("v", "decrement")}
            >
              -0.1
            </Button>

            <Button
              colorScheme="blue"
              disabled={v === 1}
              onClick={() => onChange("v", "increment")}
            >
              +0.1
            </Button>
          </Wrap>
        </VStack>
      </Wrap>
    </>
  )
}

export const disabledShadow: Story = () => {
  return <SaturationSlider withShadow={false} />
}

export const disabled: Story = () => {
  return (
    <>
      <SaturationSlider disabled />

      <Fieldset
        disabled
        helperMessage="Please select your favorite color"
        legend="Pick color"
      >
        <SaturationSlider />
      </Fieldset>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <SaturationSlider readOnly />

      <Fieldset
        helperMessage="Please select your favorite color"
        legend="Pick color"
        readOnly
      >
        <SaturationSlider />
      </Fieldset>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<Hsv>([180, 1, 1])

  return (
    <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider value={value} onChange={onChange} />
    </>
  )
}

export const onChangeStart: Story = () => {
  const [value, onChange] = useState<Hsv>([180, 1, 1])
  const [startValue, onChangeStart] = useState<Hsv>([180, 1, 1])

  return (
    <>
      <Text>
        Value: {JSON.stringify(value)}, Start Value:{" "}
        {JSON.stringify(startValue)}
      </Text>
      <SaturationSlider
        value={value}
        onChange={onChange}
        onChangeStart={onChangeStart}
      />
    </>
  )
}

export const onChangeEnd: Story = () => {
  const [value, onChange] = useState<Hsv>([180, 1, 1])
  const [endValue, onChangeEnd] = useState<Hsv>([180, 1, 1])

  return (
    <>
      <Text>
        Value: {JSON.stringify(value)}, End Value: {JSON.stringify(endValue)}
      </Text>
      <SaturationSlider
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
      />
    </>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    saturationSlider: Hsv
  }

  const defaultValues: Data = {
    saturationSlider: [180, 1, 1],
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset
        errorMessage={errors.saturationSlider?.message}
        invalid={!!errors.saturationSlider}
        legend="Pick color"
      >
        <Controller
          name="saturationSlider"
          control={control}
          render={({ field }) => <SaturationSlider {...field} />}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
