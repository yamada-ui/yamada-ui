import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Button, IconButton } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { PlusIcon } from "../icon"
import { HStack, VStack } from "../stack"
import { Text } from "../text"
import { Wrap } from "../wrap"
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
    </>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline", "ghost"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <FileButton key={key} colorScheme={row} variant={column}>
            FileButton
          </FileButton>
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <FileButton key={key} colorScheme={row} size={column}>
            FileButton
          </FileButton>
        )
      }}
    </PropsTable>
  )
}

export const Multiple: Story = () => {
  return (
    <>
      <FileButton multiple>Upload</FileButton>

      <FileButton
        as={IconButton}
        aria-label="Upload file"
        icon={<PlusIcon fontSize="2xl" />}
        multiple
      />
    </>
  )
}

export const Accept: Story = () => {
  return (
    <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton
        as={IconButton}
        aria-label="Upload file"
        accept="image/png,image/jpeg"
        icon={<PlusIcon fontSize="2xl" />}
      />
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => (
            <FileButton key={index} variant={variant} disabled>
              {toTitleCase(variant)}
            </FileButton>
          )}
        </For>
      </Wrap>

      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => (
            <FileButton
              key={index}
              as={IconButton}
              variant={variant}
              aria-label="Upload file"
              disabled
              icon={<PlusIcon fontSize="2xl" />}
            />
          )}
        </For>
      </Wrap>

      <Field.Root
        disabled
        helperMessage="Please select a file to upload."
        label="Upload file"
      >
        <FileButton justifySelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => (
            <FileButton key={index} variant={variant} readOnly>
              {toTitleCase(variant)}
            </FileButton>
          )}
        </For>
      </Wrap>

      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => (
            <FileButton
              key={index}
              as={IconButton}
              variant={variant}
              aria-label="Upload file"
              icon={<PlusIcon fontSize="2xl" />}
              readOnly
            />
          )}
        </For>
      </Wrap>

      <Field.Root
        helperMessage="Please select a file to upload."
        label="Upload file"
        readOnly
      >
        <FileButton justifySelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => (
            <FileButton key={index} variant={variant} invalid>
              {toTitleCase(variant)}
            </FileButton>
          )}
        </For>
      </Wrap>

      <Wrap gap="md">
        <For each={["solid", "subtle", "surface", "outline", "ghost"] as const}>
          {(variant, index) => (
            <FileButton
              key={index}
              as={IconButton}
              variant={variant}
              aria-label="Upload file"
              icon={<PlusIcon fontSize="2xl" />}
              invalid
            />
          )}
        </For>
      </Wrap>

      <Field.Root errorMessage="File is required." invalid label="Upload file">
        <FileButton justifySelf="flex-start">Upload</FileButton>
      </Field.Root>
    </>
  )
}

export const BorderColor: Story = () => {
  return (
    <FileButton errorBorderColor="orange.500" invalid>
      Upload
    </FileButton>
  )
}

export const Reset: Story = () => {
  const [files, onChange] = useState<File[] | undefined>(undefined)
  const resetRef = useRef<() => void>(null)

  const onReset = () => {
    onChange(undefined)
    resetRef.current?.()
  }

  return (
    <VStack>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton multiple resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </VStack>
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
      <Field.Root
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
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
