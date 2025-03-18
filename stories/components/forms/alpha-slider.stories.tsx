import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import {
  AlphaSlider,
  Button,
  Center,
  Fieldset,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof AlphaSlider>

const meta: Meta<typeof AlphaSlider> = {
  component: AlphaSlider,
  title: "Components / Forms / AlphaSlider",
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
      <AlphaSlider size="sm" color="#4387f4" defaultValue={0.3} />
      <AlphaSlider size="md" color="#895af6" defaultValue={0.6} />
      <AlphaSlider size="lg" color="#3cc360" defaultValue={0.9} />
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
        max={0.8}
        min={0.3}
        value={value}
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
        step={0.1}
        value={value}
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
        focusThumbOnChange={false}
        step={0.1}
        value={value}
      />

      <Center gap="md" w="full">
        <Button
          disabled={value === 0}
          onClick={() =>
            setValue((prev) =>
              prev !== 0 ? Math.round((prev - 0.1) * 10) / 10 : prev,
            )
          }
        >
          -0.1
        </Button>

        <Button
          colorScheme="blue"
          disabled={value === 1}
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

export const disabled: Story = () => {
  return (
    <>
      <AlphaSlider color="#4387f4" disabled />

      <Fieldset
        disabled
        helperMessage="Please select your favorite color"
        legend="Pick color"
      >
        <AlphaSlider color="#4387f4" />
      </Fieldset>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <AlphaSlider color="#4387f4" readOnly />

      <Fieldset
        helperMessage="Please select your favorite color"
        legend="Pick color"
        readOnly
      >
        <AlphaSlider color="#4387f4" />
      </Fieldset>
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
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset
        errorMessage={errors.alphaSlider?.message}
        invalid={!!errors.alphaSlider}
        legend="Pick color"
      >
        <Controller
          name="alphaSlider"
          control={control}
          render={({ field }) => <AlphaSlider color="#4387f4" {...field} />}
          rules={{ max: { message: "The maximum value is 0.5.", value: 0.5 } }}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
