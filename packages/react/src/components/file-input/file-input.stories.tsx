import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useRef, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Button } from "../button"
import { Center } from "../center"
import { Field } from "../field"
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
      <FileInput variant="outline" disabled placeholder="outline" />
      <FileInput variant="filled" disabled placeholder="filled" />
      <FileInput variant="flushed" disabled placeholder="flushed" />
      <FileInput variant="unstyled" disabled placeholder="unstyled" />

      <Field.Root disabled label="Upload file">
        <FileInput placeholder="your file" />
      </Field.Root>
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

      <Field.Root label="Upload file" readOnly>
        <FileInput placeholder="your file" />
      </Field.Root>
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

      <Field.Root errorMessage="File is required." invalid label="Upload file">
        <FileInput placeholder="your file" />
      </Field.Root>
    </>
  )
}

export const Addon: Story = () => {
  return (
    <InputGroup.Root>
      <InputGroup.Addon>
        <FileIcon />
      </InputGroup.Addon>
      <FileInput placeholder="Please upload file" />
    </InputGroup.Root>
  )
}

export const Element: Story = () => {
  return (
    <InputGroup.Root>
      <InputGroup.Element>
        <FileIcon />
      </InputGroup.Element>
      <FileInput placeholder="Please upload file" />
    </InputGroup.Root>
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
      <FileInput
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
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
  const [value, onChange] = useState<File[] | undefined>(undefined)

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
