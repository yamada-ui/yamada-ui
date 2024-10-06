import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { Check, Pencil, X } from "@yamada-ui/lucide"
import {
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  FormControl,
  IconButton,
  useEditableControl,
  VStack,
} from "@yamada-ui/react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof Editable>

const meta: Meta<typeof Editable> = {
  component: Editable,
  title: "Components / Forms / Editable",
}

export default meta

export const basic: Story = () => {
  return (
    <Editable defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withTextarea: Story = () => {
  return (
    <Editable
      defaultValue={`私の戦闘力は530000です。\nですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……`}
      h="4lh"
    >
      <EditablePreview />
      <EditableTextarea h="4lh" />
    </Editable>
  )
}

export const withStartWithEditView: Story = () => {
  return (
    <Editable defaultValue="オッス！オラ悟空！" startWithEditView>
      <EditablePreview />
      <EditableInput aria-label="Input character serif" />
    </Editable>
  )
}

export const withIsPreviewFocusable: Story = () => {
  return (
    <Editable defaultValue="オッス！オラ悟空！" isPreviewFocusable={false}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withSubmitOnBlur: Story = () => {
  return (
    <Editable defaultValue="オッス！オラ悟空！" submitOnBlur={false}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withSelectAllOnFocus: Story = () => {
  return (
    <Editable defaultValue="オッス！オラ悟空！" selectAllOnFocus={false}>
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withPlaceholder: Story = () => {
  return (
    <Editable placeholder="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <Editable defaultValue="default border color">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable defaultValue="custom border color" focusBorderColor="green.500">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable
        defaultValue="custom border color"
        errorBorderColor="orange.500"
        isInvalid
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
    </>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Editable defaultValue="your email address" isDisabled>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl
        helperMessage="We'll never share your email."
        isDisabled
        label="Email address"
      >
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Editable defaultValue="your email address" isReadOnly>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl
        helperMessage="We'll never share your email."
        isReadOnly
        label="Email address"
      >
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <Editable defaultValue="your email address" isInvalid>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl
        errorMessage="Email is required."
        isInvalid
        label="Email address"
      >
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>
  )
}

export const customControl: Story = () => {
  const CustomControls = () => {
    const { isEditing, getCancelProps, getEditProps, getSubmitProps } =
      useEditableControl()

    return isEditing ? (
      <ButtonGroup gap="sm" size="sm">
        <IconButton
          icon={<Check />}
          {...getSubmitProps()}
          aria-label="Submit"
        />
        <IconButton icon={<X />} {...getCancelProps()} aria-label="Cancel" />
      </ButtonGroup>
    ) : (
      <ButtonGroup gap="sm" size="sm">
        <IconButton icon={<Pencil />} {...getEditProps()} aria-label="Edit" />
      </ButtonGroup>
    )
  }

  return (
    <Editable
      defaultValue="オッス！オラ悟空！"
      display="flex"
      gap="sm"
      isPreviewFocusable={false}
    >
      <EditablePreview w="full" />
      <EditableInput />
      <CustomControls />
    </Editable>
  )
}

export const reactHookForm: Story = () => {
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
      <FormControl
        errorMessage={errors.input?.message}
        isInvalid={!!errors.input}
        label="Name"
      >
        <Controller
          name="input"
          control={control}
          render={({ field }) => (
            <Editable placeholder="孫悟空" {...field}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.textarea?.message}
        isInvalid={!!errors.textarea}
        label="Feedback"
      >
        <Controller
          name="textarea"
          control={control}
          render={({ field }) => (
            <Editable placeholder="オッス！オラ悟空！" {...field}>
              <EditablePreview />
              <EditableTextarea />
            </Editable>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
