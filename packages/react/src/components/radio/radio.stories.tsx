import type { Meta, StoryFn } from "@storybook/react-vite"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"
import type { HTMLProps } from "../../core"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Radio, RadioGroup, useRadioGroup } from "."
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { HStack, VStack } from "../stack"
import { Text } from "../text"

type Story = StoryFn<typeof Radio>

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Components / Radio",
}

export default meta

export const Basic: Story = () => {
  return (
    <RadioGroup.Root>
      <RadioGroup.Item value="1">織田信長</RadioGroup.Item>
      <RadioGroup.Item value="2">豊臣秀吉</RadioGroup.Item>
      <RadioGroup.Item value="3">徳川家康</RadioGroup.Item>
    </RadioGroup.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  return <RadioGroup.Root items={items} />
}

export const Variant: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { label: "Checked", value: "1" },
      { label: "No checked", value: "2" },
    ],
    [],
  )

  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <RadioGroup.Root
            key={key}
            colorScheme={row}
            variant={column}
            defaultValue="1"
            items={items}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { label: "Checked", value: "1" },
      { label: "No checked", value: "2" },
    ],
    [],
  )

  return (
    <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <RadioGroup.Root
            key={key}
            colorScheme={row}
            size={column}
            defaultValue="1"
            items={items}
          />
        )
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  return <RadioGroup.Root defaultValue="1" items={items} />
}

export const DefaultChecked: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { defaultChecked: true, label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  return <RadioGroup.Root items={items} />
}

export const Orientation: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  return <RadioGroup.Root items={items} orientation="horizontal" />
}

export const Shape: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["circle", "square", "rounded"]}>
      {(_, row, key) => (
        <RadioGroup.Root key={key} defaultValue="1" items={items} shape={row} />
      )}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { defaultChecked: true, label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  return (
    <>
      <RadioGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => (
            <RadioGroup.Item
              key={index}
              variant={variant}
              disabled
              value={variant}
            >
              {toTitleCase(variant)}
            </RadioGroup.Item>
          )}
        </For>
      </RadioGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <RadioGroup.Root
            key={index}
            variant={variant}
            disabled
            items={items}
          />
        )}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <RadioGroup.Root items={items} />
      </Field.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { defaultChecked: true, label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  return (
    <>
      <RadioGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => (
            <RadioGroup.Item
              key={index}
              variant={variant}
              readOnly
              value={variant}
            >
              {toTitleCase(variant)}
            </RadioGroup.Item>
          )}
        </For>
      </RadioGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <RadioGroup.Root
            key={index}
            variant={variant}
            items={items}
            readOnly
          />
        )}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <RadioGroup.Root items={items} />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { defaultChecked: true, label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  return (
    <>
      <RadioGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => (
            <RadioGroup.Item
              key={index}
              variant={variant}
              invalid
              value={variant}
            >
              {toTitleCase(variant)}
            </RadioGroup.Item>
          )}
        </For>
      </RadioGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <RadioGroup.Root
            key={index}
            variant={variant}
            invalid
            items={items}
          />
        )}
      </For>

      <Field.Root invalid label="Who is your favorite character?">
        <RadioGroup.Root items={items} />
      </Field.Root>
    </>
  )
}

export const BorderColor: Story = () => {
  return (
    <RadioGroup.Root>
      <RadioGroup.Item value="1">Default border color</RadioGroup.Item>
      <RadioGroup.Item focusBorderColor="green.500" value="2">
        Custom border color
      </RadioGroup.Item>
      <RadioGroup.Item errorBorderColor="orange.500" invalid value="3">
        Custom border color
      </RadioGroup.Item>
    </RadioGroup.Root>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState("1")
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  return <RadioGroup.Root items={items} value={value} onChange={setValue} />
}

export const CustomHook: Story = () => {
  const { getInputProps, getLabelProps, getRootProps } = useRadioGroup({
    defaultValue: "1",
  })

  const CustomRadio: FC<HTMLProps<"input">> = ({ children, ...rest }) => {
    return (
      <Box
        as="label"
        css={{
          "&:has(input:checked)": {
            bg: "colorScheme.solid",
            borderColor: "colorScheme.solid",
            color: "colorScheme.contrast",
          },
          alignItems: "center",
          borderWidth: "1px",
          display: "flex",
          h: "10",
          px: "3",
          rounded: "l2",
        }}
        {...getLabelProps()}
      >
        <Box as="input" {...getInputProps(rest)} />

        {children}
      </Box>
    )
  }

  return (
    <HStack {...getRootProps()}>
      <CustomRadio value="1">織田信長</CustomRadio>
      <CustomRadio value="2">豊臣秀吉</CustomRadio>
      <CustomRadio value="3">徳川家康</CustomRadio>
    </HStack>
  )
}

export const CustomComponent: Story = () => {
  return (
    <HStack
      as="label"
      css={{
        "&:has(input:checked)": {
          bg: "colorScheme.subtle",
          borderColor: "colorScheme.muted",
        },
      }}
      colorScheme="green"
      alignItems="flex-start"
      borderWidth="1px"
      px="md"
      py="3"
      rounded="l2"
    >
      <Radio as="div" h="6" />

      <VStack gap="xs" userSelect="none">
        <Text>Enable notifications</Text>
        <Text color="fg.muted" fontSize="sm">
          You can enable or disable notifications at any time.
        </Text>
      </VStack>
    </HStack>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    radio: string
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>()
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.radio?.message}
        invalid={!!errors.radio}
        label="Who is your favorite character?"
      >
        <Controller
          name="radio"
          control={control}
          render={({ field }) => <RadioGroup.Root items={items} {...field} />}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const ReactHookFormWithDefaultValue: Story = () => {
  interface Data {
    radio: string
  }

  const defaultValues: Data = {
    radio: "1",
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })
  const items = useMemo<RadioGroup.RootProps["items"]>(
    () => [
      { label: "織田信長", value: "1" },
      { label: "豊臣秀吉", value: "2" },
      { label: "徳川家康", value: "3" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.radio?.message}
        invalid={!!errors.radio}
        label="Who is your favorite character?"
      >
        <Controller
          name="radio"
          control={control}
          render={({ field }) => <RadioGroup.Root items={items} {...field} />}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
