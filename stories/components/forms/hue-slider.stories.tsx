import type { Meta, StoryFn } from "@storybook/react"
import {
  Button,
  Center,
  FormControl,
  HueSlider,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof HueSlider>

const meta: Meta<typeof HueSlider> = {
  title: "Components / Forms / HueSlider",
  component: HueSlider,
}

export default meta

export const basic: Story = () => {
  return <HueSlider />
}

export const withDefaultValue: Story = () => {
  return <HueSlider defaultValue={320} />
}

export const withSize: Story = () => {
  return (
    <>
      <HueSlider size="sm" defaultValue={120} />
      <HueSlider size="md" defaultValue={180} />
      <HueSlider size="lg" defaultValue={240} />
    </>
  )
}

export const withMinMax: Story = () => {
  const [value, onChange] = useState<number>(140)

  return (
    <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} min={120} max={180} onChange={onChange} />
    </>
  )
}

export const withStep: Story = () => {
  const [value, onChange] = useState<number>(180)

  return (
    <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} step={10} onChange={onChange} />
    </>
  )
}

export const withFocusThumbOnChange: Story = () => {
  const [value, setValue] = useState<number>(180)

  return (
    <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} step={10} focusThumbOnChange={false} />

      <Center w="full" gap="md">
        <Button
          isDisabled={value === 0}
          onClick={() => setValue((prev) => (prev !== 0 ? prev - 10 : prev))}
        >
          -10
        </Button>

        <Button
          isDisabled={value === 100}
          colorScheme="blue"
          onClick={() => setValue((prev) => (prev !== 100 ? prev + 10 : prev))}
        >
          +10
        </Button>
      </Center>
    </>
  )
}

export const disabledShadow: Story = () => {
  return <HueSlider withShadow={false} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <HueSlider isDisabled />

      <FormControl
        isDisabled
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <HueSlider />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <HueSlider isReadOnly />

      <FormControl
        isReadOnly
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <HueSlider />
      </FormControl>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<number>(180)

  return (
    <>
      <Text>Value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  )
}

export const onChangeStart: Story = () => {
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

export const onChangeEnd: Story = () => {
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

export const reactHookForm: Story = () => {
  interface Data {
    hueSlider: number
  }

  const defaultValues: Data = {
    hueSlider: 180,
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
        isInvalid={!!errors.hueSlider}
        label="Pick color"
        errorMessage={errors.hueSlider?.message}
      >
        <Controller
          name="hueSlider"
          control={control}
          rules={{ max: { value: 180, message: "The maximum value is 180." } }}
          render={({ field }) => <HueSlider {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
