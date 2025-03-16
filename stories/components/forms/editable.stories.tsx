import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { CheckIcon, PencilIcon, XIcon } from "@yamada-ui/lucide"
import {
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Fieldset,
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
      <EditableInput aria-legend="Input character serif" />
    </Editable>
  )
}

export const withIsPreviewFocusable: Story = () => {
  return (
    <Editable defaultValue="オッス！オラ悟空！" previewFocusable={false}>
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
        invalid
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
    </>
  )
}

export const disabled: Story = () => {
  return (
    <>
      <Editable defaultValue="your email address" disabled>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Fieldset
        disabled
        helperMessage="We'll never share your email."
        legend="Email address"
      >
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Fieldset>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <Editable defaultValue="your email address" readOnly>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Fieldset
        helperMessage="We'll never share your email."
        legend="Email address"
        readOnly
      >
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Fieldset>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <Editable defaultValue="your email address" invalid>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Fieldset
        errorMessage="Email is required."
        invalid
        legend="Email address"
      >
        <Editable defaultValue="your email address">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Fieldset>
    </>
  )
}

export const customControl: Story = () => {
  const CustomControls = () => {
    const { editing, getCancelProps, getEditProps, getSubmitProps } =
      useEditableControl()

    return editing ? (
      <ButtonGroup size="sm" gap="sm">
        <IconButton
          icon={<CheckIcon />}
          {...getSubmitProps()}
          aria-legend="Submit"
        />

        <IconButton
          icon={<XIcon />}
          {...getCancelProps()}
          aria-label="Cancel"
        />
      </ButtonGroup>
    ) : (
      <ButtonGroup size="sm" gap="sm">
        <IconButton
          icon={<PencilIcon />}
          {...getEditProps()}
          aria-label="Edit"
        />
      </ButtonGroup>
    )
  }

  return (
    <Editable
      defaultValue="オッス！オラ悟空！"
      display="flex"
      gap="sm"
      previewFocusable={false}
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
      <Fieldset
        errorMessage={errors.input?.message}
        invalid={!!errors.input}
        legend="Name"
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
      </Fieldset>

      <Fieldset
        errorMessage={errors.textarea?.message}
        invalid={!!errors.textarea}
        legend="Feedback"
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
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
