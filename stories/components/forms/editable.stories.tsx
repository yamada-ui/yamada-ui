import { faCheck, faPen, faXmark } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  FormControl,
  IconButton,
  useEditableControl,
  Button,
  VStack,
} from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof Editable>

const meta: Meta<typeof Editable> = {
  title: "Components / Forms / Editable",
  component: Editable,
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
    <Editable startWithEditView defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput aria-label="Input character serif" />
    </Editable>
  )
}

export const withIsPreviewFocusable: Story = () => {
  return (
    <Editable isPreviewFocusable={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withSubmitOnBlur: Story = () => {
  return (
    <Editable submitOnBlur={false} defaultValue="オッス！オラ悟空！">
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

export const withSelectAllOnFocus: Story = () => {
  return (
    <Editable selectAllOnFocus={false} defaultValue="オッス！オラ悟空！">
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

      <Editable focusBorderColor="green.500" defaultValue="custom border color">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable
        isInvalid
        errorBorderColor="orange.500"
        defaultValue="custom border color"
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
      <Editable isDisabled defaultValue="your email address">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl
        isDisabled
        label="Email address"
        helperMessage="We'll never share your email."
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
      <Editable isReadOnly defaultValue="your email address">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl
        isReadOnly
        label="Email address"
        helperMessage="We'll never share your email."
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
      <Editable isInvalid defaultValue="your email address">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl
        isInvalid
        label="Email address"
        errorMessage="Email is required."
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
    const { isEditing, getSubmitProps, getCancelProps, getEditProps } =
      useEditableControl()

    return isEditing ? (
      <ButtonGroup size="sm" gap="sm">
        <IconButton
          icon={<Icon icon={faCheck} />}
          {...getSubmitProps()}
          aria-label="Submit"
        />
        <IconButton
          icon={<Icon icon={faXmark} />}
          {...getCancelProps()}
          aria-label="Cancel"
        />
      </ButtonGroup>
    ) : (
      <ButtonGroup size="sm" gap="sm">
        <IconButton
          icon={<Icon icon={faPen} />}
          {...getEditProps()}
          aria-label="Edit"
        />
      </ButtonGroup>
    )
  }

  return (
    <Editable
      display="flex"
      gap="sm"
      isPreviewFocusable={false}
      defaultValue="オッス！オラ悟空！"
    >
      <EditablePreview w="full" />
      <EditableInput />
      <CustomControls />
    </Editable>
  )
}

export const reactHookForm: Story = () => {
  type Data = { input: string; textarea: string }

  const defaultValues: Data = {
    input: "",
    textarea: "",
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
        isInvalid={!!errors.input}
        label="Name"
        errorMessage={errors.input?.message}
      >
        <Controller
          name="input"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Editable placeholder="孫悟空" {...field}>
              <EditablePreview />
              <EditableInput />
            </Editable>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.textarea}
        label="Feedback"
        errorMessage={errors.textarea?.message}
      >
        <Controller
          name="textarea"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Editable placeholder="オッス！オラ悟空！" {...field}>
              <EditablePreview />
              <EditableTextarea />
            </Editable>
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
