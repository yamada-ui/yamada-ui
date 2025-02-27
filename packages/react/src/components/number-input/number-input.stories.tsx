import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Button } from "../button"
import { Field } from "../field"
import { MinusIcon, PlusIcon } from "../icon"
import { IconButton } from "../icon-button"
import { Input } from "../input"
import { HStack, VStack } from "../stack"
import { NumberInput, useNumberInput } from "./"

type Story = StoryFn<typeof NumberInput>

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  title: "Components / NumberInput",
}

export default meta

export const Basic: Story = () => {
  return <NumberInput placeholder="basic" />
}

export const Size: Story = () => {
  return (
    <PropsTable
      variant="column"
      columns={["xs", "sm", "md", "lg", "xl"]}
      rows={["outline", "filled", "flushed"]}
    >
      {(column, row, key) => {
        return (
          <NumberInput
            key={key}
            size={column}
            variant={row}
            placeholder={`Size (${column})`}
          />
        )
      }}
    </PropsTable>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="column"
      columns={["outline", "filled", "flushed"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <NumberInput
            key={key}
            colorScheme={row}
            variant={column}
            placeholder={toTitleCase(column)}
          />
        )
      }}
    </PropsTable>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <NumberInput disabled placeholder="default border color" />
      <NumberInput
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <NumberInput
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const DefaultValue: Story = () => {
  return <NumberInput aria-label="Number input" defaultValue={18} />
}

export const MinMax: Story = () => {
  return (
    <NumberInput aria-label="Number input" defaultValue={18} max={31} min={8} />
  )
}

export const Step: Story = () => {
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

export const Precision: Story = () => {
  return (
    <NumberInput
      aria-label="Number input"
      defaultValue={15}
      precision={2}
      step={0.2}
    />
  )
}

export const DisabledClampValueOnBlur: Story = () => {
  return (
    <NumberInput
      aria-label="Number input"
      clampValueOnBlur={false}
      defaultValue={15}
      max={30}
    />
  )
}

export const DisabledKeepWithinRange: Story = () => {
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

export const Disabled: Story = () => {
  return (
    <>
      <NumberInput variant="outline" disabled placeholder="outline" />
      <NumberInput variant="filled" disabled placeholder="filled" />
      <NumberInput variant="flushed" disabled placeholder="flushed" />
      <NumberInput variant="unstyled" disabled placeholder="unstyled" />

      <Field.Root
        disabled
        helperMessage="Please enter the quantity you wish to order."
        label="Order quantity"
      >
        <NumberInput />
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <NumberInput variant="outline" placeholder="outline" readOnly />
      <NumberInput variant="filled" placeholder="filled" readOnly />
      <NumberInput variant="flushed" placeholder="flushed" readOnly />
      <NumberInput variant="unstyled" placeholder="unstyled" readOnly />

      <Field.Root
        helperMessage="Please enter the quantity you wish to order."
        label="Order quantity"
        readOnly
      >
        <NumberInput />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <NumberInput variant="outline" invalid placeholder="outline" />
      <NumberInput variant="filled" invalid placeholder="filled" />
      <NumberInput variant="flushed" invalid placeholder="flushed" />
      <NumberInput variant="unstyled" invalid placeholder="unstyled" />

      <Field.Root
        errorMessage="Order quantity is required."
        invalid
        label="Order quantity"
      >
        <NumberInput />
      </Field.Root>
    </>
  )
}

export const CustomStepper: Story = () => {
  return (
    <NumberInput
      aria-label="Number input"
      decrementProps={{ children: "-", overflow: "hidden", px: "xs" }}
      incrementProps={{ children: "+", overflow: "hidden", px: "xs" }}
    />
  )
}

export const CustomComponent: Story = () => {
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
      <IconButton
        icon={<PlusIcon fontSize="2xl" />}
        {...getIncrementProps()}
        aria-label="Increment"
      />
      <Input {...getInputProps()} aria-label="Number input" />
      <IconButton
        icon={<MinusIcon fontSize="2xl" />}
        {...getDecrementProps()}
        aria-label="Decrement"
      />
    </HStack>
  )
}

export const StylingPlaceholder: Story = () => {
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

export const ReactHookForm: Story = () => {
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
      <Field.Root
        errorMessage={errors.numberInput?.message}
        invalid={!!errors.numberInput}
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
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const ReactHookFormWithDefaultValue: Story = () => {
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
      <Field.Root
        errorMessage={errors.numberInput?.message}
        invalid={!!errors.numberInput}
        label="Age"
      >
        <Controller
          name="numberInput"
          control={control}
          render={({ field }) => <NumberInput {...field} />}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
