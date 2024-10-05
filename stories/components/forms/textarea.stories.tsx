import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { Button, FormControl, Textarea, VStack } from "@yamada-ui/react"
import { useRef } from "react"
import { useForm } from "react-hook-form"

type Story = StoryFn<typeof Textarea>

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "Components / Forms / Textarea",
}

export default meta

export const basic: Story = () => {
  return <Textarea placeholder="basic" />
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
      <Textarea placeholder="outline" variant="outline" />
      <Textarea placeholder="filled" variant="filled" />
      <Textarea placeholder="flushed" variant="flushed" />
      <Textarea placeholder="unstyled" variant="unstyled" />
    </>
  )
}

export const withResize: Story = () => {
  return (
    <>
      <Textarea placeholder="block" resize="block" />
      <Textarea placeholder="horizontal" resize="horizontal" />
      <Textarea placeholder="vertical" resize="vertical" />
      <Textarea placeholder="none" resize="none" />
    </>
  )
}

export const withAutosize: Story = () => {
  return (
    <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
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
        errorBorderColor="orange.500"
        isInvalid
        placeholder="custom border color"
      />
    </>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Textarea isDisabled placeholder="outline" variant="outline" />
      <Textarea isDisabled placeholder="filled" variant="filled" />
      <Textarea isDisabled placeholder="flushed" variant="flushed" />
      <Textarea isDisabled placeholder="unstyled" variant="unstyled" />

      <FormControl
        helperMessage="We would like to get your feedback."
        isDisabled
        label="Feedback"
      >
        <Textarea placeholder="your feedback" variant="outline" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Textarea isReadOnly placeholder="outline" variant="outline" />
      <Textarea isReadOnly placeholder="filled" variant="filled" />
      <Textarea isReadOnly placeholder="flushed" variant="flushed" />
      <Textarea isReadOnly placeholder="unstyled" variant="unstyled" />

      <FormControl
        helperMessage="We would like to get your feedback."
        isReadOnly
        label="Feedback"
      >
        <Textarea placeholder="your feedback" variant="outline" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <Textarea isInvalid placeholder="outline" variant="outline" />
      <Textarea isInvalid placeholder="filled" variant="filled" />
      <Textarea isInvalid placeholder="flushed" variant="flushed" />
      <Textarea isInvalid placeholder="unstyled" variant="unstyled" />

      <FormControl
        errorMessage="Feedback is required."
        isInvalid
        label="Feedback"
      >
        <Textarea placeholder="your feedback" variant="outline" />
      </FormControl>
    </>
  )
}

export const stylingPlaceholder: Story = () => {
  return (
    <>
      <Textarea placeholder="default placeholder" />
      <Textarea
        _placeholder={{ color: "gray.500", opacity: 1 }}
        placeholder="custom placeholder"
      />
      <Textarea
        _placeholder={{ color: "inherit" }}
        color="green.500"
        placeholder="custom placeholder"
      />
    </>
  )
}

export const useResize: Story = () => {
  const resizeRef = useRef<() => void>(null)
  const onResize = () => {
    resizeRef.current?.()
  }

  return (
    <VStack>
      <Textarea placeholder="use resize" resizeRef={resizeRef} />
      <Button alignSelf="flex-end" onClick={onResize}>
        Resize
      </Button>
    </VStack>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    textarea: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.textarea?.message}
        isInvalid={!!errors.textarea}
        label="Feedback"
      >
        <Textarea
          placeholder="your feedback"
          {...register("textarea", {
            required: { message: "This is required.", value: true },
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
  interface Data {
    textarea: string
  }

  const defaultValues: Data = {
    textarea: "孫悟空",
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.textarea?.message}
        isInvalid={!!errors.textarea}
        label="Feedback"
      >
        <Textarea
          placeholder="your feedback"
          {...register("textarea", {
            required: { message: "This is required.", value: true },
          })}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
