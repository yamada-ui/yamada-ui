import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { MinusIcon, PlusIcon } from "@yamada-ui/lucide"
import {
  Button,
  FormControl,
  HStack,
  IconButton,
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
      <NumberInput size="xs" placeholder="extra small size" />
      <NumberInput size="sm" placeholder="small size" />
      <NumberInput size="md" placeholder="medium size" />
      <NumberInput size="lg" placeholder="large size" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <NumberInput variant="outline" placeholder="outline" />
      <NumberInput variant="filled" placeholder="filled" />
      <NumberInput variant="flushed" placeholder="flushed" />
      <NumberInput variant="unstyled" placeholder="unstyled" />
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
  return <NumberInput aria-label="Number input" defaultValue={18} />
}

export const withMinMax: Story = () => {
  return (
    <NumberInput aria-label="Number input" defaultValue={18} max={31} min={8} />
  )
}

export const withStep: Story = () => {
  return (
    <NumberInput
      aria-label="Number input"
      defaultValue={15}
      max={30}
      min={5}
      step={5}
    />
  )
}

export const withPrecision: Story = () => {
  return (
    <NumberInput
      aria-label="Number input"
      defaultValue={15}
      precision={2}
      step={0.2}
    />
  )
}

export const disabledClampValueOnBlur: Story = () => {
  return (
    <NumberInput
      aria-label="Number input"
      clampValueOnBlur={false}
      defaultValue={15}
      max={30}
    />
  )
}

export const disabledKeepWithinRange: Story = () => {
  return (
    <NumberInput
      aria-label="Number input"
      clampValueOnBlur={false}
      defaultValue={15}
      keepWithinRange={false}
      max={30}
    />
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <NumberInput variant="outline" isDisabled placeholder="outline" />
      <NumberInput variant="filled" isDisabled placeholder="filled" />
      <NumberInput variant="flushed" isDisabled placeholder="flushed" />
      <NumberInput variant="unstyled" isDisabled placeholder="unstyled" />

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
      <NumberInput variant="outline" isReadOnly placeholder="outline" />
      <NumberInput variant="filled" isReadOnly placeholder="filled" />
      <NumberInput variant="flushed" isReadOnly placeholder="flushed" />
      <NumberInput variant="unstyled" isReadOnly placeholder="unstyled" />

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
      <NumberInput variant="outline" isInvalid placeholder="outline" />
      <NumberInput variant="filled" isInvalid placeholder="filled" />
      <NumberInput variant="flushed" isInvalid placeholder="flushed" />
      <NumberInput variant="unstyled" isInvalid placeholder="unstyled" />

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
      <IconButton icon={<PlusIcon fontSize="2xl" />} {...getIncrementProps()} />
      <Input {...getInputProps()} aria-label="Number input" />
      <IconButton
        icon={<MinusIcon fontSize="2xl" />}
        {...getDecrementProps()}
      />
    </HStack>
  )
}

export const stylingPlaceholder: Story = () => {
  return (
    <>
      <NumberInput placeholder="default placeholder" />
      <NumberInput
        placeholder="custom placeholder"
        _placeholder={{ color: "gray.500", opacity: 1 }}
      />
      <NumberInput
        color="green.500"
        placeholder="custom placeholder"
        _placeholder={{ color: "inherit" }}
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
