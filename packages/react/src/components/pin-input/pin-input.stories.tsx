import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { useLoading } from "../loading"
import { VStack } from "../stack"
import { PinInput } from "./"

type Story = StoryFn<typeof PinInput.Root>

const meta: Meta<typeof PinInput.Root> = {
  component: PinInput.Root,
  title: "Components / PinInput",
}

export default meta

export const Basic: Story = () => {
  return <PinInput.Root />
}

export const Items: Story = () => {
  return (
    <For each={[3, 4, 5, 6]}>
      {(items, index) => <PinInput.Root key={index} items={items} />}
    </For>
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
        return <PinInput.Root key={key} colorScheme={row} variant={column} />
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["xs", "sm", "md", "lg", "xl"]}
      rows={["outline", "filled", "flushed"]}
    >
      {(column, row, key) => {
        return <PinInput.Root key={key} size={column} variant={row} />
      }}
    </PropsTable>
  )
}

export const Type: Story = () => {
  return (
    <>
      <PinInput.Root />

      <PinInput.Root type="alphanumeric" />
    </>
  )
}

export const DefaultValue: Story = () => {
  return (
    <>
      <PinInput.Root defaultValue="1234" />

      <PinInput.Root defaultValue="123" />
    </>
  )
}

export const HandleComplete: Story = () => {
  const { page } = useLoading()

  return <PinInput.Root onComplete={() => page.start({ duration: 5000 })} />
}

export const OneTimePassword: Story = () => {
  return <PinInput.Root otp />
}

export const MaskingValue: Story = () => {
  return <PinInput.Root mask />
}

export const DisabledFocusManagement: Story = () => {
  return <PinInput.Root manageFocus={false} />
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <PinInput.Root key={index} variant={variant} disabled />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <PinInput.Root key={index} variant={variant}>
            <PinInput.Field disabled />
            <PinInput.Field disabled />
            <PinInput.Field disabled />
            <PinInput.Field disabled />
          </PinInput.Root>
        )}
      </For>

      <Field.Root
        disabled
        errorMessage="one-time password is required."
        helperMessage="Just sent you a one-time password to your e-mail address."
        label="Please one-time password"
      >
        <PinInput.Root />
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <PinInput.Root key={index} variant={variant} readOnly />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <PinInput.Root key={index} variant={variant}>
            <PinInput.Field readOnly />
            <PinInput.Field readOnly />
            <PinInput.Field readOnly />
            <PinInput.Field readOnly />
          </PinInput.Root>
        )}
      </For>

      <Field.Root
        errorMessage="one-time password is required."
        helperMessage="Just sent you a one-time password to your e-mail address."
        label="Please one-time password"
        readOnly
      >
        <PinInput.Root />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <PinInput.Root key={index} variant={variant} invalid />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <PinInput.Root key={index} variant={variant}>
            <PinInput.Field invalid />
            <PinInput.Field invalid />
            <PinInput.Field invalid />
            <PinInput.Field invalid />
          </PinInput.Root>
        )}
      </For>

      <Field.Root
        errorMessage="one-time password is required."
        helperMessage="Just sent you a one-time password to your e-mail address."
        invalid
        label="Please one-time password"
      >
        <PinInput.Root />
      </Field.Root>
    </>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <PinInput.Root />

      <PinInput.Root focusBorderColor="green.500" />

      <PinInput.Root errorBorderColor="orange.500" invalid />
    </>
  )
}

export const CustomFields: Story = () => {
  return (
    <PinInput.Root>
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput.Root>
  )
}

export const CustomPlaceholder: Story = () => {
  return <PinInput.Root placeholder="💩" />
}

export const CustomControl: Story = () => {
  const { page } = useLoading()
  const [value, onChange] = useState("")

  const onComplete = () => page.start({ duration: 5000 })

  return (
    <PinInput.Root value={value} onChange={onChange} onComplete={onComplete} />
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    pinInput: string
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
        errorMessage={errors.pinInput?.message}
        invalid={!!errors.pinInput}
        label="Token"
      >
        <Controller
          name="pinInput"
          control={control}
          render={({ field }) => <PinInput.Root {...field} />}
          rules={{
            minLength: { message: "This is required.", value: 4 },
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

export const ReactHookFormDefaultValue: Story = () => {
  interface Data {
    pinInput: string
  }

  const defaultValues: Data = {
    pinInput: "5",
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
        errorMessage={errors.pinInput?.message}
        invalid={!!errors.pinInput}
        label="Token"
      >
        <Controller
          name="pinInput"
          control={control}
          render={({ field }) => <PinInput.Root {...field} />}
          rules={{
            minLength: { message: "This is required.", value: 4 },
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
