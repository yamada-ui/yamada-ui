import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Button } from "../button"
import { IconButton } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { GaugeIcon, MinusIcon, PlusIcon } from "../icon"
import { Input, InputGroup } from "../input"
import { HStack, VStack } from "../stack"
import { NumberInput, useNumberInput } from "./"

type Story = StoryFn<typeof NumberInput>

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  title: "Components / NumberInput",
}

export default meta

export const Basic: Story = () => {
  return <NumberInput placeholder="Basic" />
}

export const Size: Story = () => {
  return (
    <PropsTable
      variant="stack"
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
      variant="stack"
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

export const DefaultValue: Story = () => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />
}

export const MinMax: Story = () => {
  return (
    <NumberInput
      defaultValue={18}
      max={31}
      min={8}
      placeholder="Order quantity"
    />
  )
}

export const Step: Story = () => {
  return (
    <NumberInput
      defaultValue={15}
      max={30}
      min={5}
      placeholder="Order quantity"
      step={5}
    />
  )
}

export const Precision: Story = () => {
  return (
    <NumberInput
      defaultValue={15}
      placeholder="Order quantity"
      precision={2}
      step={0.2}
    />
  )
}

export const DisabledClampValueOnBlur: Story = () => {
  return (
    <NumberInput
      clampValueOnBlur={false}
      defaultValue={15}
      max={30}
      placeholder="Order quantity"
    />
  )
}

export const DisabledKeepWithinRange: Story = () => {
  return (
    <NumberInput
      clampValueOnBlur={false}
      defaultValue={15}
      keepWithinRange={false}
      max={30}
      placeholder="Order quantity"
    />
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <NumberInput
            key={index}
            variant={variant}
            disabled
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <GaugeIcon />
            </InputGroup.Addon>
            <NumberInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

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
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <NumberInput
            key={index}
            variant={variant}
            placeholder={toTitleCase(variant)}
            readOnly
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <GaugeIcon />
            </InputGroup.Addon>
            <NumberInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

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
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <NumberInput
            key={index}
            variant={variant}
            invalid
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <GaugeIcon />
            </InputGroup.Addon>
            <NumberInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

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

export const Addon: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const Element: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <NumberInput disabled placeholder="Default border color" />

      <NumberInput
        focusBorderColor="green.500"
        placeholder="Custom border color"
      />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <GaugeIcon />
        </InputGroup.Element>
        <NumberInput placeholder="Custom border color" />
      </InputGroup.Root>

      <NumberInput
        errorBorderColor="orange.500"
        invalid
        placeholder="Custom border color"
      />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Element>
          <GaugeIcon />
        </InputGroup.Element>
        <NumberInput placeholder="Custom border color" />
      </InputGroup.Root>
    </>
  )
}

export const CustomStepper: Story = () => {
  return (
    <NumberInput
      placeholder="Order quantity"
      decrementProps={{ children: <MinusIcon /> }}
      incrementProps={{ children: <PlusIcon /> }}
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
