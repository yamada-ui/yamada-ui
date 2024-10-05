import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { File, X } from "@yamada-ui/lucide"
import {
  Button,
  FileInput,
  FormControl,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Tag,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof FileInput>

const meta: Meta<typeof FileInput> = {
  component: FileInput,
  title: "Components / Forms / FileInput",
}

export default meta

export const basic: Story = () => {
  return <FileInput placeholder="basic" />
}

export const withMultiple: Story = () => {
  return <FileInput multiple placeholder="multiple" />
}

export const withAccept: Story = () => {
  return (
    <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />
  )
}

export const withSeparator: Story = () => {
  return <FileInput multiple placeholder="multiple" separator=";" />
}

export const withTag: Story = () => {
  return (
    <FileInput
      component={({ value: { name } }) => <Tag>{name}</Tag>}
      multiple
      placeholder="multiple"
    />
  )
}

export const withFormat: Story = () => {
  return (
    <FileInput
      format={({ name }) => name.substring(0, name.indexOf("."))}
      multiple
      placeholder="multiple"
    />
  )
}

export const withChildren: Story = () => {
  return (
    <FileInput multiple>
      {(files) => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <FileInput placeholder="extra small size" size="xs" />
      <FileInput placeholder="small size" size="sm" />
      <FileInput placeholder="medium size" size="md" />
      <FileInput placeholder="large size" size="lg" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <FileInput placeholder="outline" variant="outline" />
      <FileInput placeholder="filled" variant="filled" />
      <FileInput placeholder="flushed" variant="flushed" />
      <FileInput placeholder="unstyled" variant="unstyled" />
    </>
  )
}

export const withBorderColor: Story = () => {
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

export const isDisabled: Story = () => {
  return (
    <>
      <FileInput isDisabled placeholder="outline" variant="outline" />
      <FileInput isDisabled placeholder="filled" variant="filled" />
      <FileInput isDisabled placeholder="flushed" variant="flushed" />
      <FileInput isDisabled placeholder="unstyled" variant="unstyled" />

      <FormControl isDisabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <FileInput isReadOnly placeholder="outline" variant="outline" />
      <FileInput isReadOnly placeholder="filled" variant="filled" />
      <FileInput isReadOnly placeholder="flushed" variant="flushed" />
      <FileInput isReadOnly placeholder="unstyled" variant="unstyled" />

      <FormControl isReadOnly label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <FileInput isInvalid placeholder="outline" variant="outline" />
      <FileInput isInvalid placeholder="filled" variant="filled" />
      <FileInput isInvalid placeholder="flushed" variant="flushed" />
      <FileInput isInvalid placeholder="unstyled" variant="unstyled" />

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

export const useAddon: Story = () => {
  return (
    <InputGroup>
      <InputLeftAddon>
        <File />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>
  )
}

export const useElement: Story = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <File color="gray.500" />
      </InputLeftElement>
      <FileInput type="email" placeholder="Please upload file" />
    </InputGroup>
  )
}

export const useReset: Story = () => {
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
            <X color="gray.500" />
          </InputRightElement>
        ) : null}
      </InputGroup>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<File[] | undefined>(undefined)

  return (
    <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>
  )
}

export const reactHookForm: Story = () => {
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
                  <X color="gray.500" />
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
