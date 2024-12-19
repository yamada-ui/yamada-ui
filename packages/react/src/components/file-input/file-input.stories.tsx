import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "../button"
import { FormControl } from "../form-control"
import { FileIcon, XIcon } from "../icon"
import {
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
} from "../input"
import { VStack } from "../stack"
import { Tag } from "../tag"
import { Text } from "../text"
import { FileInput } from "./file-input"

type Story = StoryFn<typeof FileInput>

const meta: Meta<typeof FileInput> = {
  component: FileInput,
  title: "Components / FileInput",
}

export default meta

export const Basic: Story = () => {
  return <FileInput placeholder="basic" />
}

export const WithMultiple: Story = () => {
  return <FileInput multiple placeholder="multiple" />
}

export const WithAccept: Story = () => {
  return (
    <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />
  )
}

export const WithSeparator: Story = () => {
  return <FileInput multiple placeholder="multiple" separator=";" />
}

export const WithTag: Story = () => {
  return (
    <FileInput
      component={({ value: { name } }) => <Tag>{name}</Tag>}
      multiple
      placeholder="multiple"
    />
  )
}

export const WithFormat: Story = () => {
  return (
    <FileInput
      format={({ name }) => name.substring(0, name.indexOf("."))}
      multiple
      placeholder="multiple"
    />
  )
}

export const WithChildren: Story = () => {
  return (
    <FileInput multiple>
      {(files) => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>
  )
}

export const WithSize: Story = () => {
  return (
    <>
      <FileInput size="xs" placeholder="extra small size" />
      <FileInput size="sm" placeholder="small size" />
      <FileInput size="md" placeholder="medium size" />
      <FileInput size="lg" placeholder="large size" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <FileInput variant="outline" placeholder="outline" />
      <FileInput variant="filled" placeholder="filled" />
      <FileInput variant="flushed" placeholder="flushed" />
      <FileInput variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <FileInput placeholder="default border color" />
      <FileInput
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <FileInput
        errorBorderColor="orange.500"
        isInvalid
        placeholder="custom border color"
      />
    </>
  )
}

export const IsDisabled: Story = () => {
  return (
    <>
      <FileInput variant="outline" isDisabled placeholder="outline" />
      <FileInput variant="filled" isDisabled placeholder="filled" />
      <FileInput variant="flushed" isDisabled placeholder="flushed" />
      <FileInput variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>
  )
}

export const IsReadonly: Story = () => {
  return (
    <>
      <FileInput variant="outline" isReadOnly placeholder="outline" />
      <FileInput variant="filled" isReadOnly placeholder="filled" />
      <FileInput variant="flushed" isReadOnly placeholder="flushed" />
      <FileInput variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>
  )
}

export const IsInvalid: Story = () => {
  return (
    <>
      <FileInput variant="outline" isInvalid placeholder="outline" />
      <FileInput variant="filled" isInvalid placeholder="filled" />
      <FileInput variant="flushed" isInvalid placeholder="flushed" />
      <FileInput variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl
        errorMessage="File is required."
        isInvalid
        label="Upload file"
      >
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>
  )
}

export const UseAddon: Story = () => {
  return (
    <InputGroup>
      <InputLeftAddon>
        <FileIcon />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>
  )
}

export const UseElement: Story = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <FileIcon color="gray.500" />
      </InputLeftElement>
      <FileInput type="email" placeholder="Please upload file" />
    </InputGroup>
  )
}

export const UseReset: Story = () => {
  const [value, onChange] = useState<File[] | undefined>(undefined)
  const resetRef = useRef<() => void>(null)

  const onReset = () => {
    onChange(undefined)
    resetRef.current?.()
  }

  return (
    <>
      <Text>files: {value?.length ?? 0}</Text>

      <InputGroup>
        <FileInput
          multiple
          resetRef={resetRef}
          value={value}
          onChange={onChange}
        />

        {value?.length ? (
          <InputRightElement isClickable onClick={onReset}>
            <XIcon color="gray.500" />
          </InputRightElement>
        ) : null}
      </InputGroup>
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<File[] | undefined>(undefined)

  return (
    <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    fileInput: File[] | undefined
  }

  const resetRef = useRef<() => void>(null)
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<Data>()

  const onReset = () => {
    setValue("fileInput", undefined)
    resetRef.current?.()
  }
  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.fileInput?.message}
        isInvalid={!!errors.fileInput}
        label="Files"
      >
        <Controller
          name="fileInput"
          control={control}
          render={({ field }) => (
            <InputGroup>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? (
                <InputRightElement isClickable onClick={onReset}>
                  <XIcon color="gray.500" />
                </InputRightElement>
              ) : null}
            </InputGroup>
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
