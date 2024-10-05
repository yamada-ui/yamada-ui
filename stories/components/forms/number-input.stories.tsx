import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import {
  Button,
  FormControl,
  HStack,
  Input,
  NumberInput,
  useNumberInput,
  VStack,
} from "@yamada-ui/react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof NumberInput>

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  title: "Components / Forms / NumberInput",
}

export default meta

export const basic: Story = () => {
  return <NumberInput placeholder="basic" />
}

export const withSize: Story = () => {
  return (
    <>
      <NumberInput placeholder="extra small size" size="xs" />
      <NumberInput placeholder="small size" size="sm" />
      <NumberInput placeholder="medium size" size="md" />
      <NumberInput placeholder="large size" size="lg" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <NumberInput placeholder="outline" variant="outline" />
      <NumberInput placeholder="filled" variant="filled" />
      <NumberInput placeholder="flushed" variant="flushed" />
      <NumberInput placeholder="unstyled" variant="unstyled" />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <NumberInput disabled placeholder="default border color" />
      <NumberInput
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <NumberInput
        errorBorderColor="orange.500"
        isInvalid
        placeholder="custom border color"
      />
    </>
  )
}

export const withDefaultValue: Story = () => {
  return <NumberInput defaultValue={18} aria-label="Number input" />
}

export const withMinMax: Story = () => {
  return (
    <NumberInput defaultValue={18} max={31} min={8} aria-label="Number input" />
  )
}

export const withStep: Story = () => {
  return (
    <NumberInput
      defaultValue={15}
      max={30}
      min={5}
      step={5}
      aria-label="Number input"
    />
  )
}

export const withPrecision: Story = () => {
  return (
    <NumberInput
      defaultValue={15}
      precision={2}
      step={0.2}
      aria-label="Number input"
    />
  )
}

export const disabledClampValueOnBlur: Story = () => {
  return (
    <NumberInput
      clampValueOnBlur={false}
      defaultValue={15}
      max={30}
      aria-label="Number input"
    />
  )
}

export const disabledKeepWithinRange: Story = () => {
  return (
    <NumberInput
      clampValueOnBlur={false}
      defaultValue={15}
      keepWithinRange={false}
      max={30}
      aria-label="Number input"
    />
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <NumberInput isDisabled placeholder="outline" variant="outline" />
      <NumberInput isDisabled placeholder="filled" variant="filled" />
      <NumberInput isDisabled placeholder="flushed" variant="flushed" />
      <NumberInput isDisabled placeholder="unstyled" variant="unstyled" />

      <FormControl
        helperMessage="Please enter the quantity you wish to order."
        isDisabled
        label="Order quantity"
      >
        <NumberInput />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <NumberInput isReadOnly placeholder="outline" variant="outline" />
      <NumberInput isReadOnly placeholder="filled" variant="filled" />
      <NumberInput isReadOnly placeholder="flushed" variant="flushed" />
      <NumberInput isReadOnly placeholder="unstyled" variant="unstyled" />

      <FormControl
        helperMessage="Please enter the quantity you wish to order."
        isReadOnly
        label="Order quantity"
      >
        <NumberInput />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <NumberInput isInvalid placeholder="outline" variant="outline" />
      <NumberInput isInvalid placeholder="filled" variant="filled" />
      <NumberInput isInvalid placeholder="flushed" variant="flushed" />
      <NumberInput isInvalid placeholder="unstyled" variant="unstyled" />

      <FormControl
        errorMessage="Order quantity is required."
        isInvalid
        label="Order quantity"
      >
        <NumberInput />
      </FormControl>
    </>
  )
}

export const customStepper: Story = () => {
  return (
    <NumberInput
      aria-label="Number input"
      decrementProps={{ children: "-", px: "xs" }}
      incrementProps={{ children: "+", px: "xs" }}
    />
  )
}

export const customComponent: Story = () => {
  const { getDecrementProps, getIncrementProps, getInputProps } =
    useNumberInput({
      defaultValue: 3.14,
      max: 4,
      min: 3,
      precision: 2,
      step: 0.01,
    })

  return (
    <HStack gap="sm" maxW="xs">
      <Button {...getIncrementProps()}>+</Button>
      <Input {...getInputProps()} aria-label="Number input" />
      <Button {...getDecrementProps()}>-</Button>
    </HStack>
  )
}

export const stylingPlaceholder: Story = () => {
  return (
    <>
      <NumberInput placeholder="default placeholder" />
      <NumberInput
        _placeholder={{ color: "gray.500", opacity: 1 }}
        placeholder="custom placeholder"
      />
      <NumberInput
        _placeholder={{ color: "inherit" }}
        color="green.500"
        placeholder="custom placeholder"
      />
    </>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    numberInput: string
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.numberInput?.message}
        isInvalid={!!errors.numberInput}
        label="Age"
      >
        <Controller
          name="numberInput"
          control={control}
          render={({ field }) => <NumberInput {...field} />}
          rules={{
            max: { message: "The maximum value is 5.", value: 5 },
            required: { message: "This is required.", value: true },
          }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  interface Data {
    numberInput: string
  }

  const defaultValues: Data = {
    numberInput: "5",
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
      <FormControl
        errorMessage={errors.numberInput?.message}
        isInvalid={!!errors.numberInput}
        label="Age"
      >
        <Controller
          name="numberInput"
          control={control}
          render={({ field }) => <NumberInput {...field} />}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
