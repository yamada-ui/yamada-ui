import type { Meta, StoryFn } from "@storybook/react"
import {
  AlphaSlider,
  Button,
  Center,
  FormControl,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof AlphaSlider>

const meta: Meta<typeof AlphaSlider> = {
  title: "Components / Forms / AlphaSlider",
  component: AlphaSlider,
}

export default meta

export const basic: Story = () => {
  return <AlphaSlider />
}

export const withDefaultValue: Story = () => {
  return <AlphaSlider color="#4387f4" defaultValue={0.3} />
}

export const withSize: Story = () => {
  return (
    <>
      <AlphaSlider color="#4387f4" size="sm" defaultValue={0.3} />
      <AlphaSlider color="#895af6" size="md" defaultValue={0.6} />
      <AlphaSlider color="#3cc360" size="lg" defaultValue={0.9} />
    </>
  )
}

export const withMinMax: Story = () => {
  const [value, onChange] = useState<number>(0.5)

  return (
    <>
      <Text>Value: {value}</Text>
      <AlphaSlider
        color="#4387f4"
        value={value}
        min={0.3}
        max={0.8}
        onChange={onChange}
      />
    </>
  )
}

export const withStep: Story = () => {
  const [value, onChange] = useState<number>(0.5)

  return (
    <>
      <Text>Value: {value}</Text>
      <AlphaSlider
        color="#4387f4"
        value={value}
        step={0.1}
        onChange={onChange}
      />
    </>
  )
}

export const withFocusThumbOnChange: Story = () => {
  const [value, setValue] = useState<number>(0.5)

  return (
    <>
      <Text>Value: {value}</Text>
      <AlphaSlider
        color="#4387f4"
        value={value}
        step={0.1}
        focusThumbOnChange={false}
      />

      <Center w="full" gap="md">
        <Button
          isDisabled={value === 0}
          onClick={() =>
            setValue((prev) =>
              prev !== 0 ? Math.round((prev - 0.1) * 10) / 10 : prev,
            )
          }
        >
          -0.1
        </Button>

        <Button
          isDisabled={value === 1}
          colorScheme="blue"
          onClick={() =>
            setValue((prev) =>
              prev !== 1 ? Math.round((prev + 0.1) * 10) / 10 : prev,
            )
          }
        >
          +0.1
        </Button>
      </Center>
    </>
  )
}

export const disabledShadow: Story = () => {
  return <AlphaSlider withShadow={false} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <AlphaSlider color="#4387f4" isDisabled />

      <FormControl
        isDisabled
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <AlphaSlider color="#4387f4" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <AlphaSlider color="#4387f4" isReadOnly />

      <FormControl
        isReadOnly
        label="Pick color"
        helperMessage="Please select your favorite color"
      >
        <AlphaSlider color="#4387f4" />
      </FormControl>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<number>(0.5)

  return (
    <>
      <Text>Value: {value}</Text>
      <AlphaSlider color="#4387f4" value={value} onChange={onChange} />
    </>
  )
}

export const onChangeStart: Story = () => {
  const [value, onChange] = useState<number>(0.5)
  const [startValue, onChangeStart] = useState<number>(0.5)

  return (
    <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <AlphaSlider
        color="#4387f4"
        value={value}
        onChange={onChange}
        onChangeStart={onChangeStart}
      />
    </>
  )
}

export const onChangeEnd: Story = () => {
  const [value, onChange] = useState<number>(0.5)
  const [endValue, onChangeEnd] = useState<number>(0.5)

  return (
    <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <AlphaSlider
        color="#4387f4"
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
      />
    </>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    alphaSlider: number
  }

  const defaultValues: Data = {
    alphaSlider: 0.5,
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
        isInvalid={!!errors.alphaSlider}
        label="Pick color"
        errorMessage={errors.alphaSlider?.message}
      >
        <Controller
          name="alphaSlider"
          control={control}
          rules={{ max: { value: 0.5, message: "The maximum value is 0.5." } }}
          render={({ field }) => <AlphaSlider color="#4387f4" {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
