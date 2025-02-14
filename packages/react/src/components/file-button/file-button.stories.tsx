import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button, IconButton } from "../button"
import { Wrap } from "../flex"
import { FormControl } from "../form-control"
import { PlusIcon } from "../icon"
import { Link } from "../link"
import { HStack, VStack } from "../stack"
import { Text } from "../text"
import { FileButton } from "./file-button"

type Story = StoryFn<typeof FileButton>

const meta: Meta<typeof FileButton> = {
  component: FileButton,
  title: "Components / FileButton",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <FileButton>Upload</FileButton>

      <FileButton
        as={IconButton}
        aria-label="Upload file"
        icon={<PlusIcon fontSize="2xl" />}
      />

      <FileButton>
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const WithMultiple: Story = () => {
  return (
    <>
      <FileButton multiple>Upload</FileButton>

      <FileButton
        as={IconButton}
        aria-label="Upload file"
        icon={<PlusIcon fontSize="2xl" />}
        multiple
      />

      <FileButton multiple>
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const WithAccept: Story = () => {
  return (
    <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton
        as={IconButton}
        aria-label="Upload file"
        accept="image/png,image/jpeg"
        icon={<PlusIcon fontSize="2xl" />}
      />

      <FileButton accept="image/png,image/jpeg">
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const WithSize: Story = () => {
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

export const WithColorScheme: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>
      ))}
    </Wrap>
  )
}

export const WithVariant: Story = () => {
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

export const WithBorderColor: Story = () => {
  return (
    <FileButton errorBorderColor="orange.500" invalid>
      Upload
    </FileButton>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <FileButton disabled>Upload</FileButton>

      <FileButton
        as={IconButton}
        aria-label="Upload file"
        disabled
        icon={<PlusIcon fontSize="2xl" />}
      />

      <FileButton disabled>
        {({ disabled, onClick }) => (
          <Link
            cursor={disabled ? "not-allowed" : "pointer"}
            opacity={disabled ? 0.4 : 1}
            _hover={
              disabled
                ? { textDecoration: "inherit" }
                : { textDecoration: "underline" }
            }
            onClick={onClick}
          >
            Upload
          </Link>
        )}
      </FileButton>

      <FormControl
        disabled
        helperMessage="Please select a file to upload."
        label="Upload file"
      >
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <FileButton readOnly>Upload</FileButton>

      <FileButton
        as={IconButton}
        aria-label="Upload file"
        icon={<PlusIcon fontSize="2xl" />}
        readOnly
      />

      <FileButton readOnly>
        {({ readOnly, onClick }) => (
          <Link
            cursor={readOnly ? "default" : "pointer"}
            _hover={
              readOnly
                ? { textDecoration: "inherit" }
                : { textDecoration: "underline" }
            }
            onClick={onClick}
          >
            Upload
          </Link>
        )}
      </FileButton>

      <FormControl
        helperMessage="Please select a file to upload."
        label="Upload file"
        readOnly
      >
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <FileButton invalid>Upload</FileButton>

      <FileButton
        as={IconButton}
        aria-label="Upload file"
        icon={<PlusIcon fontSize="2xl" />}
        invalid
      />

      <FormControl errorMessage="File is required." invalid label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const UseReset: Story = () => {
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

export const ReactHookForm: Story = () => {
  interface Data {
    fileButton: File[] | null
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
    setValue("fileButton", null)
    resetRef.current?.()
  }
  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.fileButton?.message}
        invalid={!!errors.fileButton}
        label="Files"
      >
        <Controller
          name="fileButton"
          control={control}
          render={({ field: { ref, name, onBlur, onChange } }) => (
            <HStack>
              <FileButton
                {...{ ref, name, onBlur, onChange }}
                resetRef={resetRef}
              >
                Upload
              </FileButton>

              <Button onClick={onReset}>Reset</Button>
            </HStack>
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
