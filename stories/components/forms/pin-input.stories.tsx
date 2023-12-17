import type { Meta, StoryFn } from "@storybook/react"
import {
  Button,
  FormControl,
  PinInput,
  PinInputField,
  VStack,
  useLoading,
} from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof PinInput>

const meta: Meta<typeof PinInput> = {
  title: "Components / Forms / PinInput",
  component: PinInput,
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

      <PinInput isInvalid errorBorderColor="orange.500" />
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

export const isDisabled: Story = () => {
  return (
    <>
      <PinInput isDisabled />

      <PinInput>
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
      </PinInput>

      <FormControl
        isDisabled
        label="Please one-time password"
        helperMessage="Just sent you a one-time password to your e-mail address."
        errorMessage="one-time password is required."
      >
        <PinInput />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <PinInput isReadOnly />

      <PinInput>
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
      </PinInput>

      <FormControl
        isReadOnly
        label="Please one-time password"
        helperMessage="Just sent you a one-time password to your e-mail address."
        errorMessage="one-time password is required."
      >
        <PinInput />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <PinInput isInvalid />

      <PinInput>
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
      </PinInput>

      <FormControl
        isInvalid
        label="Please one-time password"
        helperMessage="Just sent you a one-time password to your e-mail address."
        errorMessage="one-time password is required."
      >
        <PinInput />
      </FormControl>
    </>
  )
}

export const reactHookForm: Story = () => {
  type Data = { pinInput: string }

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
        isInvalid={!!errors.pinInput}
        label="Token"
        errorMessage={errors.pinInput?.message}
      >
        <Controller
          name="pinInput"
          control={control}
          rules={{
            required: { value: true, message: "This is required." },
            minLength: { value: 4, message: "This is required." },
          }}
          render={({ field }) => <PinInput {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  type Data = { pinInput: string }

  const defaultValues: Data = {
    pinInput: "5",
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
        isInvalid={!!errors.pinInput}
        label="Token"
        errorMessage={errors.pinInput?.message}
      >
        <Controller
          name="pinInput"
          control={control}
          rules={{
            required: { value: true, message: "This is required." },
            minLength: { value: 4, message: "This is required." },
          }}
          render={({ field }) => <PinInput {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
