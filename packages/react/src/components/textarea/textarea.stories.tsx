import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../button"
import { FormControl } from "../form-control"
import { VStack } from "../stack"
import { Textarea } from "./"

type Story = StoryFn<typeof Textarea>

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "Components / Textarea",
}

export default meta

export const Basic: Story = () => {
  return <Textarea placeholder="basic" />
}

export const WithSize: Story = () => {
  return (
    <>
      <Textarea size="xs" placeholder="extra small size" />
      <Textarea size="sm" placeholder="small size" />
      <Textarea size="md" placeholder="medium size" />
      <Textarea size="lg" placeholder="large size" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <Textarea variant="outline" placeholder="outline" />
      <Textarea variant="filled" placeholder="filled" />
      <Textarea variant="flushed" placeholder="flushed" />
      <Textarea variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithResize: Story = () => {
  return (
    <>
      <Textarea placeholder="block" resize="block" />
      <Textarea placeholder="horizontal" resize="horizontal" />
      <Textarea placeholder="vertical" resize="vertical" />
      <Textarea placeholder="none" resize="none" />
    </>
  )
}

export const WithAutosize: Story = () => {
  return (
    <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
    </>
  )
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <Textarea placeholder="default border color" />
      <Textarea
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <Textarea
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Textarea variant="outline" disabled placeholder="outline" />
      <Textarea variant="filled" disabled placeholder="filled" />
      <Textarea variant="flushed" disabled placeholder="flushed" />
      <Textarea variant="unstyled" disabled placeholder="unstyled" />

      <FormControl
        disabled
        helperMessage="We would like to get your feedback."
        label="Feedback"
      >
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <Textarea variant="outline" placeholder="outline" readOnly />
      <Textarea variant="filled" placeholder="filled" readOnly />
      <Textarea variant="flushed" placeholder="flushed" readOnly />
      <Textarea variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl
        helperMessage="We would like to get your feedback."
        label="Feedback"
        readOnly
      >
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <Textarea variant="outline" invalid placeholder="outline" />
      <Textarea variant="filled" invalid placeholder="filled" />
      <Textarea variant="flushed" invalid placeholder="flushed" />
      <Textarea variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="Feedback is required."
        invalid
        label="Feedback"
      >
        <Textarea variant="outline" placeholder="your feedback" />
      </FormControl>
    </>
  )
}

export const StylingPlaceholder: Story = () => {
  return (
    <>
      <Textarea placeholder="default placeholder" />
      <Textarea
        placeholder="custom placeholder"
        _placeholder={{ color: "gray.500", opacity: 1 }}
      />
      <Textarea
        color="green.500"
        placeholder="custom placeholder"
        _placeholder={{ color: "inherit" }}
      />
    </>
  )
}

export const UseResize: Story = () => {
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

export const ReactHookForm: Story = () => {
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
        invalid={!!errors.textarea}
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

export const ReactHookFormWithDefaultValue: Story = () => {
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
        invalid={!!errors.textarea}
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
