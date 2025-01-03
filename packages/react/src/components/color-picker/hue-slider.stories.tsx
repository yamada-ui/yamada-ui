import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "../button"
import { Center } from "../center"
import { Fieldset } from "../form-control"
import { VStack } from "../stack"
import { Text } from "../text"
import { HueSlider } from "./"

type Story = StoryFn<typeof HueSlider>

const meta: Meta<typeof HueSlider> = {
  component: HueSlider,
  title: "Components / HueSlider",
}

export default meta

export const Basic: Story = () => {
  return <HueSlider />
}

export const WithDefaultValue: Story = () => {
  return <HueSlider defaultValue={320} />
}

export const WithSize: Story = () => {
  return (
    <>
      <HueSlider size="sm" defaultValue={120} />
      <HueSlider size="md" defaultValue={180} />
      <HueSlider size="lg" defaultValue={240} />
    </>
  )
}

export const WithMinMax: Story = () => {
  const [value, onChange] = useState<number>(140)

  return (
    <>
      <Text>Value: {value}</Text>
      <HueSlider max={180} min={120} value={value} onChange={onChange} />
    </>
  )
}

export const WithStep: Story = () => {
  const [value, onChange] = useState<number>(180)

  return (
    <>
      <Text>Value: {value}</Text>
      <HueSlider step={10} value={value} onChange={onChange} />
    </>
  )
}

export const WithFocusThumbOnChange: Story = () => {
  const [value, setValue] = useState<number>(180)

  return (
    <>
      <Text>Value: {value}</Text>
      <HueSlider focusThumbOnChange={false} step={10} value={value} />

      <Center gap="md" w="full">
        <Button
          disabled={value === 0}
          onClick={() => setValue((prev) => (prev !== 0 ? prev - 10 : prev))}
        >
          -10
        </Button>

        <Button
          colorScheme="blue"
          disabled={value === 100}
          onClick={() => setValue((prev) => (prev !== 100 ? prev + 10 : prev))}
        >
          +10
        </Button>
      </Center>
    </>
  )
}

export const DisabledShadow: Story = () => {
  return <HueSlider withShadow={false} />
}

export const Disabled: Story = () => {
  return (
    <>
      <HueSlider disabled />

      <Fieldset
        disabled
        helperMessage="Please select your favorite color"
        legend="Pick color"
      >
        <HueSlider />
      </Fieldset>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <HueSlider readOnly />

      <Fieldset
        helperMessage="Please select your favorite color"
        legend="Pick color"
        readOnly
      >
        <HueSlider />
      </Fieldset>
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<number>(180)

  return (
    <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  )
}

export const OnChangeStart: Story = () => {
  const [value, onChange] = useState<number>(180)
  const [startValue, onChangeStart] = useState<number>(180)

  return (
    <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <HueSlider
        value={value}
        onChange={onChange}
        onChangeStart={onChangeStart}
      />
    </>
  )
}

export const OnChangeEnd: Story = () => {
  const [value, onChange] = useState<number>(180)
  const [endValue, onChangeEnd] = useState<number>(180)

  return (
    <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <HueSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    hueSlider: number
  }

  const defaultValues: Data = {
    hueSlider: 180,
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
        errorMessage={errors.hueSlider?.message}
        invalid={!!errors.hueSlider}
        legend="Pick color"
      >
        <Controller
          name="hueSlider"
          control={control}
          render={({ field }) => <HueSlider {...field} />}
          rules={{ max: { message: "The maximum value is 180.", value: 180 } }}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
