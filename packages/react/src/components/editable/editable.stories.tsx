import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { Editable } from "."
import { Button, ButtonGroup } from "../button"
import { Field } from "../field"
import { CheckIcon, PencilIcon, XIcon } from "../icon"
import { IconButton } from "../icon-button"
import { VStack } from "../stack"

type Story = StoryFn<typeof Editable.Root>

const meta: Meta<typeof Editable.Root> = {
  component: Editable.Root,
  title: "Components / Editable",
}

export default meta

export const Basic: Story = () => {
  return (
    <Editable.Root defaultValue="オッス！オラ悟空！">
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}

export const Textarea: Story = () => {
  return (
    <Editable.Root
      defaultValue={`私の戦闘力は530000です。\nですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`}
    >
      <Editable.Preview />
      <Editable.Textarea />
    </Editable.Root>
  )
}

export const StartWithEditView: Story = () => {
  return (
    <Editable.Root defaultValue="オッス！オラ悟空！" startWithEditView>
      <Editable.Preview />
      <Editable.Input aria-label="Input character serif" />
    </Editable.Root>
  )
}

export const PreviewFocusable: Story = () => {
  return (
    <Editable.Root defaultValue="オッス！オラ悟空！" previewFocusable={false}>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}

export const SubmitOnBlur: Story = () => {
  return (
    <Editable.Root defaultValue="オッス！オラ悟空！" submitOnBlur={false}>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}

export const SelectAllOnFocus: Story = () => {
  return (
    <Editable.Root defaultValue="オッス！オラ悟空！" selectAllOnFocus={false}>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Editable.Root defaultValue="Your email address" disabled>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Field.Root
        disabled
        helperMessage="We'll never share your email."
        label="Email address"
      >
        <Editable.Root defaultValue="Your email address">
          <Editable.Preview />
          <Editable.Input />
        </Editable.Root>
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <Editable.Root defaultValue="Your email address" readOnly>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Field.Root
        helperMessage="We'll never share your email."
        label="Email address"
        readOnly
      >
        <Editable.Root defaultValue="Your email address">
          <Editable.Preview />
          <Editable.Input />
        </Editable.Root>
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <Editable.Root defaultValue="Your email address" invalid>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Field.Root
        errorMessage="Email is required."
        invalid
        label="Email address"
      >
        <Editable.Root defaultValue="Your email address">
          <Editable.Preview />
          <Editable.Input />
        </Editable.Root>
      </Field.Root>
    </>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <Editable.Root defaultValue="Default border color">
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Editable.Root
        defaultValue="Custom border color"
        focusBorderColor="green.500"
      >
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>

      <Editable.Root
        defaultValue="Custom border color"
        errorBorderColor="orange.500"
        invalid
      >
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>
    </>
  )
}

export const Control: Story = () => {
  return (
    <Editable.Root defaultValue="オッス！オラ悟空！">
      <Editable.Preview />
      <Editable.Input />

      <Editable.Control>
        <Editable.EditTrigger>
          <IconButton
            size="xs"
            variant="ghost"
            aria-label="Edit"
            icon={<PencilIcon />}
          />
        </Editable.EditTrigger>
        <Editable.SubmitTrigger>
          <IconButton
            size="xs"
            variant="outline"
            aria-label="Submit"
            icon={<CheckIcon />}
          />
        </Editable.SubmitTrigger>
        <Editable.CancelTrigger>
          <IconButton
            size="xs"
            variant="outline"
            aria-label="Cancel"
            icon={<XIcon />}
          />
        </Editable.CancelTrigger>
      </Editable.Control>
    </Editable.Root>
  )
}

export const CustomControl: Story = () => {
  const CustomControls = () => {
    const { getCancelProps, getEditProps, getSubmitProps } =
      Editable.useContext()

    return (
      <ButtonGroup size="xs">
        <IconButton
          icon={<PencilIcon />}
          {...getEditProps()}
          variant="ghost"
          aria-label="Edit"
        />

        <IconButton
          icon={<CheckIcon />}
          {...getSubmitProps()}
          variant="outline"
          aria-label="Submit"
        />

        <IconButton
          icon={<XIcon />}
          {...getCancelProps()}
          variant="outline"
          aria-label="Cancel"
        />
      </ButtonGroup>
    )
  }

  return (
    <Editable.Root defaultValue="オッス！オラ悟空！" previewFocusable={false}>
      <Editable.Preview />
      <Editable.Input />
      <CustomControls />
    </Editable.Root>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    input: string
    textarea: string
  }

  const defaultValues: Data = {
    input: "",
    textarea: "",
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
        errorMessage={errors.input?.message}
        invalid={!!errors.input}
        label="Name"
      >
        <Controller
          name="input"
          control={control}
          render={({ field }) => (
            <Editable.Root placeholder="孫悟空" {...field}>
              <Editable.Preview />
              <Editable.Input />
            </Editable.Root>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.textarea?.message}
        invalid={!!errors.textarea}
        label="Feedback"
      >
        <Controller
          name="textarea"
          control={control}
          render={({ field }) => (
            <Editable.Root placeholder="オッス！オラ悟空！" {...field}>
              <Editable.Preview />
              <Editable.Textarea />
            </Editable.Root>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
