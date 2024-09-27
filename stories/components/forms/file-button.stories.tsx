import type { Meta, StoryFn } from "@storybook/react"
import { useRef, useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import { Plus } from "@yamada-ui/lucide"
import {
  Button,
  FileButton,
  FormControl,
  HStack,
  IconButton,
  Link,
  Text,
  Wrap,
  VStack,
} from "@yamada-ui/react"

type Story = StoryFn<typeof FileButton>

const meta: Meta<typeof FileButton> = {
  title: "Components / Forms / FileButton",
  component: FileButton,
}

export default meta

export const basic: Story = () => {
  return (
    <>
      <FileButton>Upload</FileButton>

      <FileButton
        as={IconButton}
        icon={<Plus fontSize="2xl" />}
        aria-label="Upload file"
      />

      <FileButton>
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const withMultiple: Story = () => {
  return (
    <>
      <FileButton multiple>Upload</FileButton>

      <FileButton
        as={IconButton}
        icon={<Plus fontSize="2xl" />}
        multiple
        aria-label="Upload file"
      />

      <FileButton multiple>
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const withAccept: Story = () => {
  return (
    <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton
        as={IconButton}
        icon={<Plus fontSize="2xl" />}
        accept="image/png,image/jpeg"
        aria-label="Upload file"
      />

      <FileButton accept="image/png,image/jpeg">
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const withSize: Story = () => {
  return (
    <Wrap gap="md">
      <FileButton colorScheme="primary" size="xs">
        X Small
      </FileButton>

      <FileButton colorScheme="secondary" size="sm">
        Small
      </FileButton>

      <FileButton colorScheme="warning" size="md">
        Medium
      </FileButton>

      <FileButton colorScheme="danger" size="lg">
        Large
      </FileButton>
    </Wrap>
  )
}

export const withColorScheme: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>
      ))}
    </Wrap>
  )
}

export const withVariant: Story = () => {
  return (
    <Wrap gap="md">
      <FileButton colorScheme="primary" variant="solid">
        Solid
      </FileButton>

      <FileButton colorScheme="secondary" variant="outline">
        Outline
      </FileButton>

      <FileButton colorScheme="warning" variant="ghost">
        Ghost
      </FileButton>

      <FileButton colorScheme="danger" variant="link">
        Link
      </FileButton>

      <FileButton variant="unstyled">Unstyle</FileButton>
    </Wrap>
  )
}

export const withBorderColor: Story = () => {
  return (
    <FileButton isInvalid errorBorderColor="orange.500">
      Upload
    </FileButton>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton
        as={IconButton}
        icon={<Plus fontSize="2xl" />}
        isDisabled
        aria-label="Upload file"
      />

      <FileButton isDisabled>
        {({ onClick, isDisabled }) => (
          <Link
            onClick={onClick}
            opacity={isDisabled ? 0.4 : 1}
            cursor={isDisabled ? "not-allowed" : "pointer"}
            _hover={
              isDisabled
                ? { textDecoration: "inherit" }
                : { textDecoration: "underline" }
            }
          >
            Upload
          </Link>
        )}
      </FileButton>

      <FormControl
        isDisabled
        label="Upload file"
        helperMessage="Please select a file to upload."
      >
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton
        as={IconButton}
        icon={<Plus fontSize="2xl" />}
        isReadOnly
        aria-label="Upload file"
      />

      <FileButton isReadOnly>
        {({ onClick, isReadOnly }) => (
          <Link
            onClick={onClick}
            cursor={isReadOnly ? "default" : "pointer"}
            _hover={
              isReadOnly
                ? { textDecoration: "inherit" }
                : { textDecoration: "underline" }
            }
          >
            Upload
          </Link>
        )}
      </FileButton>

      <FormControl
        isReadOnly
        label="Upload file"
        helperMessage="Please select a file to upload."
      >
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton
        as={IconButton}
        icon={<Plus fontSize="2xl" />}
        isInvalid
        aria-label="Upload file"
      />

      <FormControl
        isInvalid
        label="Upload file"
        errorMessage="File is required."
      >
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const useReset: Story = () => {
  const [files, onChange] = useState<File[] | undefined>(undefined)
  const resetRef = useRef<() => void>(null)

  const onReset = () => {
    onChange(undefined)
    resetRef.current?.()
  }

  return (
    <>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    fileButton: File[] | null
  }

  const resetRef = useRef<() => void>(null)
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Data>()

  const onReset = () => {
    setValue("fileButton", null)
    resetRef.current?.()
  }
  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.fileButton}
        label="Files"
        errorMessage={errors.fileButton?.message}
      >
        <Controller
          name="fileButton"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field: { ref, name, onChange, onBlur } }) => (
            <HStack>
              <FileButton
                {...{ ref, name, onChange, onBlur }}
                resetRef={resetRef}
              >
                Upload
              </FileButton>

              <Button onClick={onReset}>Reset</Button>
            </HStack>
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
