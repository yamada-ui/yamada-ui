import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import {
  Button,
  Fieldset,
  PinInput,
  PinInputField,
  useLoading,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof PinInput>

const meta: Meta<typeof PinInput> = {
  component: PinInput,
  title: "Components / Forms / PinInput",
}

export default meta

export const basic: Story = () => {
  return <PinInput />
}

export const withSize: Story = () => {
  return (
    <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>
  )
}

export const withFields: Story = () => {
  return (
    <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>
  )
}

export const withType: Story = () => {
  return (
    <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>
  )
}

export const withDefaultValue: Story = () => {
  return (
    <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput errorBorderColor="orange.500" invalid />
    </>
  )
}

export const withOnComplete: Story = () => {
  const { page } = useLoading()

  return <PinInput onComplete={() => page.start({ duration: 5000 })} />
}

export const useOneTimePassword: Story = () => {
  return <PinInput otp />
}

export const maskingValue: Story = () => {
  return <PinInput mask />
}

export const customFields: Story = () => {
  return (
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}

export const customPlaceholder: Story = () => {
  return <PinInput placeholder="💩" />
}

export const customControl: Story = () => {
  const { page } = useLoading()
  const [value, onChange] = useState("")

  const onComplete = () => page.start({ duration: 5000 })

  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />
}

export const disabledFocusManagement: Story = () => {
  return <PinInput manageFocus={false} />
}

export const disabled: Story = () => {
  return (
    <>
      <PinInput disabled />

      <PinInput>
        <PinInputField disabled />
        <PinInputField disabled />
        <PinInputField disabled />
        <PinInputField disabled />
      </PinInput>

      <Fieldset
        disabled
        errorMessage="one-time password is required."
        helperMessage="Just sent you a one-time password to your e-mail address."
        legend="Please one-time password"
      >
        <PinInput />
      </Fieldset>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <PinInput readOnly />

      <PinInput>
        <PinInputField readOnly />
        <PinInputField readOnly />
        <PinInputField readOnly />
        <PinInputField readOnly />
      </PinInput>

      <Fieldset
        errorMessage="one-time password is required."
        helperMessage="Just sent you a one-time password to your e-mail address."
        legend="Please one-time password"
        readOnly
      >
        <PinInput />
      </Fieldset>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <PinInput invalid />

      <PinInput>
        <PinInputField invalid />
        <PinInputField invalid />
        <PinInputField invalid />
        <PinInputField invalid />
      </PinInput>

      <Fieldset
        errorMessage="one-time password is required."
        helperMessage="Just sent you a one-time password to your e-mail address."
        invalid
        legend="Please one-time password"
      >
        <PinInput />
      </Fieldset>
    </>
  )
}

export const reactHookForm: Story = () => {
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
      <Fieldset
        errorMessage={errors.pinInput?.message}
        invalid={!!errors.pinInput}
        legend="Token"
      >
        <Controller
          name="pinInput"
          control={control}
          render={({ field }) => <PinInput {...field} />}
          rules={{
            minLength: { message: "This is required.", value: 4 },
            required: { message: "This is required.", value: true },
          }}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
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
      <Fieldset
        errorMessage={errors.pinInput?.message}
        invalid={!!errors.pinInput}
        legend="Token"
      >
        <Controller
          name="pinInput"
          control={control}
          render={({ field }) => <PinInput {...field} />}
          rules={{
            minLength: { message: "This is required.", value: 4 },
            required: { message: "This is required.", value: true },
          }}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
