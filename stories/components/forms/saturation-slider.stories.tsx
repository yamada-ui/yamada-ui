import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import {
  SaturationSlider,
  Button,
  FormControl,
  Text,
  VStack,
  Wrap,
} from "@yamada-ui/react"
import type { Hsv } from "@yamada-ui/react"

type Story = StoryFn<typeof SaturationSlider>

const meta: Meta<typeof SaturationSlider> = {
  title: "Components / Forms / SaturationSlider",
  component: SaturationSlider,
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
      <SaturationSlider value={value} step={0.1} onChange={onChange} />
    </>
  )
}

export const withFocusThumbOnChange: Story = () => {
  const [value, setValue] = useState<Hsv>([180, 1, 1])
  const [, s, v] = value

  const onChange = (space: "s" | "v", type: "increment" | "decrement") => {
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
      <SaturationSlider value={value} step={10} focusThumbOnChange={false} />

      <Wrap gap="md">
        <VStack w="auto" gap="sm">
          <Text>Saturation</Text>

          <Wrap gap="md">
            <Button
              isDisabled={s === 0}
              onClick={() => onChange("s", "decrement")}
            >
              -0.1
            </Button>

            <Button
              isDisabled={s === 1}
              colorScheme="blue"
              onClick={() => onChange("s", "increment")}
            >
              +0.1
            </Button>
          </Wrap>
        </VStack>

        <VStack w="auto" gap="sm">
          <Text>Brightness</Text>

          <Wrap gap="md">
            <Button
              isDisabled={v === 0}
              onClick={() => onChange("v", "decrement")}
            >
              -0.1
            </Button>

            <Button
              isDisabled={v === 1}
              colorScheme="blue"
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

export const isDisabled: Story = () => {
  return (
    <>
      <SaturationSlider isDisabled />

      <FormControl
        isDisabled
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <SaturationSlider />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <SaturationSlider isReadOnly />

      <FormControl
        isReadOnly
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <SaturationSlider />
      </FormControl>
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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.saturationSlider}
        label="Pick color"
        errorMessage={errors.saturationSlider?.message}
      >
        <Controller
          name="saturationSlider"
          control={control}
          render={({ field }) => <SaturationSlider {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
