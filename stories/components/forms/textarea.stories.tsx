import type { Meta, StoryFn } from "@storybook/react"
import { Button, FormControl, Textarea, VStack } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"

type Story = StoryFn<typeof Textarea>

const meta: Meta<typeof Textarea> = {
  title: "Components / Forms / Textarea",
  component: Textarea,
}

export default meta

export const basic: Story = () => {
  return <Textarea placeholder="basic"></Textarea>
}

export const withSize: Story = () => {
  return (
    <>
      <Textarea placeholder="extra small size" size="xs" />
      <Textarea placeholder="small size" size="sm" />
      <Textarea placeholder="medium size" size="md" />
      <Textarea placeholder="large size" size="lg" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withResize: Story = () => {
  return (
    <>
      <Textarea resize="block" placeholder="block" />
      <Textarea resize="horizontal" placeholder="horizontal" />
      <Textarea resize="vertical" placeholder="vertical" />
      <Textarea resize="none" placeholder="none" />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <Textarea placeholder="default border color" />
      <Textarea
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <Textarea
        isInvalid
        errorBorderColor="orange.500"
        placeholder="custom border color"
      />
    </>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Textarea isDisabled variant="outline" placeholder="outline" />
      <Textarea isDisabled variant="filled" placeholder="filled" />
      <Textarea isDisabled variant="flushed" placeholder="flushed" />
      <Textarea isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl
        isDisabled
        label="Feedback"
        helperMessage="We would like to get your feedback."
      >
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Textarea isReadOnly variant="outline" placeholder="outline" />
      <Textarea isReadOnly variant="filled" placeholder="filled" />
      <Textarea isReadOnly variant="flushed" placeholder="flushed" />
      <Textarea isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl
        isReadOnly
        label="Feedback"
        helperMessage="We would like to get your feedback."
      >
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <Textarea isInvalid variant="outline" placeholder="outline" />
      <Textarea isInvalid variant="filled" placeholder="filled" />
      <Textarea isInvalid variant="flushed" placeholder="flushed" />
      <Textarea isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl
        isInvalid
        label="Feedback"
        errorMessage="Feedback is required."
      >
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>
  )
}

export const stylingPlaceholder: Story = () => {
  return (
    <>
      <Textarea placeholder="default placeholder" />
      <Textarea
        placeholder="custom placeholder"
        _placeholder={{ opacity: 1, color: "gray.500" }}
      />
      <Textarea
        color="green.500"
        placeholder="custom placeholder"
        _placeholder={{ color: "inherit" }}
      />
    </>
  )
}

export const reactHookForm: Story = () => {
  type Data = { textarea: string }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.textarea}
        label="Feedback"
        errorMessage={errors.textarea?.message}
      >
        <Textarea
          placeholder="your feedback"
          {...register("textarea", {
            required: { value: true, message: "This is required." },
          })}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  type Data = { textarea: string }

  const defaultValues: Data = {
    textarea: "孫悟空",
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.textarea}
        label="Feedback"
        errorMessage={errors.textarea?.message}
      >
        <Textarea
          placeholder="your feedback"
          {...register("textarea", {
            required: { value: true, message: "This is required." },
          })}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
