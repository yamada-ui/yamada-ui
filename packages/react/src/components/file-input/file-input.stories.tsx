import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Button } from "../button"
import { Center } from "../center"
import { Field } from "../field"
import { For } from "../for"
import { FileIcon, XIcon } from "../icon"
import { InputGroup } from "../input"
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
  return <FileInput placeholder="placeholder" />
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="column"
      columns={["outline", "filled", "flushed"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <FileInput
            key={key}
            colorScheme={row}
            variant={column}
            placeholder={toTitleCase(column)}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable
      variant="column"
      columns={["xs", "sm", "md", "lg", "xl"]}
      rows={["outline", "filled", "flushed"]}
    >
      {(column, row, key) => {
        return (
          <FileInput
            key={key}
            size={column}
            variant={row}
            placeholder={`Size (${column})`}
          />
        )
      }}
    </PropsTable>
  )
}

export const Multiple: Story = () => {
  return <FileInput multiple placeholder="multiple" />
}

export const Accept: Story = () => {
  return (
    <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />
  )
}

export const Separator: Story = () => {
  return <FileInput multiple placeholder="multiple" separator=";" />
}

export const Component: Story = () => {
  return (
    <FileInput
      component={({ value: { name } }) => <Tag>{name}</Tag>}
      gapY="xs"
      multiple
      placeholder="multiple"
    />
  )
}

export const Format: Story = () => {
  return (
    <FileInput
      format={({ name }) => name.substring(0, name.indexOf("."))}
      multiple
      placeholder="multiple"
    />
  )
}

export const Children: Story = () => {
  return (
    <FileInput multiple>
      {(files) => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <FileInput
            key={index}
            variant={variant}
            disabled
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <Field.Root disabled label="Upload file">
        <FileInput placeholder="your file" />
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <FileInput
            key={index}
            variant={variant}
            placeholder={toTitleCase(variant)}
            readOnly
          />
        )}
      </For>

      <Field.Root label="Upload file" readOnly>
        <FileInput placeholder="your file" />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <FileInput
            key={index}
            variant={variant}
            invalid
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <Field.Root errorMessage="File is required." invalid label="Upload file">
        <FileInput placeholder="your file" />
      </Field.Root>
    </>
  )
}

export const Addon: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"]}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <FileIcon />
          </InputGroup.Addon>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const Element: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"]}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <FileIcon />
          </InputGroup.Element>
          <FileInput placeholder="Please upload file" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <FileInput placeholder="default border color" />

      <FileInput
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <FileIcon />
        </InputGroup.Element>
        <FileInput placeholder="Custom border color" />
      </InputGroup.Root>

      <FileInput
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <FileIcon />
        </InputGroup.Addon>
        <FileInput placeholder="Custom border color" />
      </InputGroup.Root>
    </>
  )
}

export const Reset: Story = () => {
  const [value, onChange] = useState<File[] | undefined>(undefined)
  const resetRef = useRef<() => void>(null)

  const onReset = () => {
    onChange(undefined)
    resetRef.current?.()
  }

  return (
    <VStack gap="md">
      <Text>files: {value?.length ?? 0}</Text>

      <InputGroup.Root>
        <FileInput
          multiple
          placeholder="placeholder"
          resetRef={resetRef}
          value={value}
          onChange={onChange}
        />

        {value?.length ? (
          <InputGroup.Element clickable onClick={onReset}>
            <Center as="button" focusVisibleRing="outside" p="0.5" rounded="xs">
              <XIcon fontSize="xl" />
            </Center>
          </InputGroup.Element>
        ) : null}
      </InputGroup.Root>
    </VStack>
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<File[] | undefined>([])

  return (
    <VStack gap="md">
      <Text>files: {value?.length}</Text>

      <FileInput placeholder="placeholder" value={value} onChange={onChange} />
    </VStack>
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
      <Field.Root
        errorMessage={errors.fileInput?.message}
        invalid={!!errors.fileInput}
        label="Files"
      >
        <Controller
          name="fileInput"
          control={control}
          render={({ field }) => (
            <InputGroup.Root>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? (
                <InputGroup.Element clickable onClick={onReset}>
                  <Center
                    as="button"
                    focusVisibleRing="outside"
                    p="0.5"
                    rounded="xs"
                  >
                    <XIcon fontSize="xl" />
                  </Center>
                </InputGroup.Element>
              ) : null}
            </InputGroup.Root>
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
