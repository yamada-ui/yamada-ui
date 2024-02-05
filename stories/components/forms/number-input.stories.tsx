import type { Meta, StoryFn } from "@storybook/react"
import {
  Button,
  FormControl,
  HStack,
  Input,
  NumberInput,
  VStack,
  useNumberInput,
} from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { useForm, Controller } from "react-hook-form"

type Story = StoryFn<typeof NumberInput>

const meta: Meta<typeof NumberInput> = {
  title: "Components / Forms / NumberInput",
  component: NumberInput,
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
        isInvalid
        errorBorderColor="orange.500"
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
    <NumberInput defaultValue={18} min={8} max={31} aria-label="Number input" />
  )
}

export const withStep: Story = () => {
  return (
    <NumberInput
      defaultValue={15}
      step={5}
      min={5}
      max={30}
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
      defaultValue={15}
      max={30}
      clampValueOnBlur={false}
      aria-label="Number input"
    />
  )
}

export const disabledKeepWithinRange: Story = () => {
  return (
    <NumberInput
      defaultValue={15}
      max={30}
      keepWithinRange={false}
      clampValueOnBlur={false}
      aria-label="Number input"
    />
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <NumberInput isDisabled variant="outline" placeholder="outline" />
      <NumberInput isDisabled variant="filled" placeholder="filled" />
      <NumberInput isDisabled variant="flushed" placeholder="flushed" />
      <NumberInput isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl
        isDisabled
        label="Order quantity"
        helperMessage="Please enter the quantity you wish to order."
      >
        <NumberInput />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <NumberInput isReadOnly variant="outline" placeholder="outline" />
      <NumberInput isReadOnly variant="filled" placeholder="filled" />
      <NumberInput isReadOnly variant="flushed" placeholder="flushed" />
      <NumberInput isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl
        isReadOnly
        label="Order quantity"
        helperMessage="Please enter the quantity you wish to order."
      >
        <NumberInput />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <NumberInput isInvalid variant="outline" placeholder="outline" />
      <NumberInput isInvalid variant="filled" placeholder="filled" />
      <NumberInput isInvalid variant="flushed" placeholder="flushed" />
      <NumberInput isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl
        isInvalid
        label="Order quantity"
        errorMessage="Order quantity is required."
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
      incrementProps={{ px: "xs", children: "+" }}
      decrementProps={{ px: "xs", children: "-" }}
    />
  )
}

export const customComponent: Story = () => {
  const { getInputProps, getIncrementProps, getDecrementProps } =
    useNumberInput({
      step: 0.01,
      defaultValue: 3.14,
      min: 3,
      max: 4,
      precision: 2,
    })

  return (
    <HStack maxW="xs" gap="sm">
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
        placeholder="custom placeholder"
        _placeholder={{ opacity: 1, color: "gray.500" }}
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
  type Data = { numberInput: string }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.numberInput}
        label="Age"
        errorMessage={errors.numberInput?.message}
      >
        <Controller
          name="numberInput"
          control={control}
          rules={{
            required: { value: true, message: "This is required." },
            max: { value: 5, message: "The maximum value is 5." },
          }}
          render={({ field }) => <NumberInput {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  type Data = { numberInput: string }

  const defaultValues: Data = {
    numberInput: "5",
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
        isInvalid={!!errors.numberInput}
        label="Age"
        errorMessage={errors.numberInput?.message}
      >
        <Controller
          name="numberInput"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => <NumberInput {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
