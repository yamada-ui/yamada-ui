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
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <FileInput variant="outline" disabled placeholder="outline" />
      <FileInput variant="filled" disabled placeholder="filled" />
      <FileInput variant="flushed" disabled placeholder="flushed" />
      <FileInput variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <FileInput variant="outline" placeholder="outline" readOnly />
      <FileInput variant="filled" placeholder="filled" readOnly />
      <FileInput variant="flushed" placeholder="flushed" readOnly />
      <FileInput variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl label="Upload file" readOnly>
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <FileInput variant="outline" invalid placeholder="outline" />
      <FileInput variant="filled" invalid placeholder="filled" />
      <FileInput variant="flushed" invalid placeholder="flushed" />
      <FileInput variant="unstyled" invalid placeholder="unstyled" />

      <FormControl errorMessage="File is required." invalid label="Upload file">
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
          <InputRightElement clickable onClick={onReset}>
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
        invalid={!!errors.fileInput}
        label="Files"
      >
        <Controller
          name="fileInput"
          control={control}
          render={({ field }) => (
            <InputGroup>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? (
                <InputRightElement clickable onClick={onReset}>
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
