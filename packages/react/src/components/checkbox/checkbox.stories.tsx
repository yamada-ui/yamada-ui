import type { Meta, StoryFn } from "@storybook/react-vite"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"
import type { HTMLProps } from "../../core"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Checkbox, CheckboxGroup, useCheckboxGroup } from "."
import { COLOR_SCHEMES, toTitleCase, useIds } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { HeartIcon, KeyIcon } from "../icon"
import { HStack, VStack } from "../stack"
import { Text } from "../text"

type Story = StoryFn<typeof Checkbox>

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components / Checkbox",
}

export default meta

export const Basic: Story = () => {
  return <Checkbox>ソラ</Checkbox>
}

export const Group: Story = () => {
  return (
    <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">ソラ</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">リク</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">カイリ</CheckboxGroup.Item>
    </CheckboxGroup.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  return <CheckboxGroup.Root items={items} />
}

export const Variant: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
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
          <CheckboxGroup.Root
            key={key}
            colorScheme={row}
            variant={column}
            defaultValue={["1"]}
            items={items}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
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
          <CheckboxGroup.Root
            key={key}
            colorScheme={row}
            size={column}
            defaultValue={["1"]}
            items={items}
          />
        )
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  return <CheckboxGroup.Root defaultValue={["1"]} items={items} />
}

export const DefaultChecked: Story = () => {
  return <Checkbox defaultChecked>ソラ</Checkbox>
}

export const Indeterminate: Story = () => {
  const [id0, id1, id2] = useIds()
  const [values, setValues] = useState([true, false, false])

  const allChecked = values.every(Boolean)
  const indeterminate = values.some(Boolean) && !allChecked

  return (
    <VStack gap="sm">
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        inputProps={{ "aria-controls": `${id0} ${id1} ${id2}` }}
        onChange={(ev) =>
          setValues([ev.target.checked, ev.target.checked, ev.target.checked])
        }
      >
        デスティニーアイランド
      </Checkbox>

      <VStack gap="sm" ms="md">
        <Checkbox
          id={id0}
          checked={values[0]}
          onChange={(ev) =>
            setValues([ev.target.checked, values[1]!, values[2]!])
          }
        >
          ソラ
        </Checkbox>
        <Checkbox
          id={id1}
          checked={values[1]}
          onChange={(ev) =>
            setValues([values[0]!, ev.target.checked, values[2]!])
          }
        >
          リク
        </Checkbox>
        <Checkbox
          id={id2}
          checked={values[2]}
          onChange={(ev) =>
            setValues([values[0]!, values[1]!, ev.target.checked])
          }
        >
          カイリ
        </Checkbox>
      </VStack>
    </VStack>
  )
}

export const Max: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  return <CheckboxGroup.Root items={items} max={2} />
}

export const Orientation: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  return <CheckboxGroup.Root items={items} orientation="horizontal" />
}

export const Shape: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { defaultChecked: true, label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["rounded", "square"]}>
      {(_, row, key) => (
        <CheckboxGroup.Root key={key} items={items} shape={row} />
      )}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { defaultChecked: true, label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  return (
    <>
      <CheckboxGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => (
            <CheckboxGroup.Item
              key={index}
              variant={variant}
              disabled
              value={variant}
            >
              {toTitleCase(variant)}
            </CheckboxGroup.Item>
          )}
        </For>
      </CheckboxGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <CheckboxGroup.Root
            key={index}
            variant={variant}
            disabled
            items={items}
          />
        )}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <CheckboxGroup.Root items={items} />
      </Field.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { defaultChecked: true, label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  return (
    <>
      <CheckboxGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => (
            <CheckboxGroup.Item
              key={index}
              variant={variant}
              readOnly
              value={variant}
            >
              {toTitleCase(variant)}
            </CheckboxGroup.Item>
          )}
        </For>
      </CheckboxGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <CheckboxGroup.Root
            key={index}
            variant={variant}
            items={items}
            readOnly
          />
        )}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <CheckboxGroup.Root items={items} />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { defaultChecked: true, label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  return (
    <>
      <CheckboxGroup.Root>
        <For each={["solid", "subtle", "surface", "outline"] as const}>
          {(variant, index) => (
            <CheckboxGroup.Item
              key={index}
              variant={variant}
              invalid
              value={variant}
            >
              {toTitleCase(variant)}
            </CheckboxGroup.Item>
          )}
        </For>
      </CheckboxGroup.Root>

      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <CheckboxGroup.Root
            key={index}
            variant={variant}
            invalid
            items={items}
          />
        )}
      </For>

      <Field.Root invalid label="Who is your favorite character?">
        <CheckboxGroup.Root items={items} />
      </Field.Root>
    </>
  )
}

export const BorderColor: Story = () => {
  return (
    <CheckboxGroup.Root>
      <CheckboxGroup.Item value="1">Default border color</CheckboxGroup.Item>
      <CheckboxGroup.Item focusBorderColor="green.500" value="2">
        Custom border color
      </CheckboxGroup.Item>
      <CheckboxGroup.Item errorBorderColor="orange.500" invalid value="3">
        Custom border color
      </CheckboxGroup.Item>
    </CheckboxGroup.Root>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState(["1"])
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  return <CheckboxGroup.Root items={items} value={value} onChange={setValue} />
}

export const CustomHook: Story = () => {
  const { getInputProps, getLabelProps, getRootProps } = useCheckboxGroup({
    defaultValue: ["1"],
    max: 2,
  })

  const CustomCheckbox: FC<HTMLProps<"input">> = ({ children, ...rest }) => {
    return (
      <Box
        as="label"
        css={{
          "&:has(input:checked)": {
            bg: "colorScheme.solid",
            borderColor: "colorScheme.solid",
            color: "colorScheme.contrast",
          },
          "&:has(input:disabled)": {
            layerStyle: "disabled",
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
      <CustomCheckbox value="1">ソラ</CustomCheckbox>
      <CustomCheckbox value="2">リク</CustomCheckbox>
      <CustomCheckbox value="3">カイリ</CustomCheckbox>
    </HStack>
  )
}

export const CustomIcon: Story = () => {
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { checkedIcon: <HeartIcon />, label: "カイリ", value: "3" },
    ],
    [],
  )

  return <CheckboxGroup.Root checkedIcon={<KeyIcon />} items={items} />
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
      <Checkbox h="6" />

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
    checkbox: boolean
    checkboxGroup: string[]
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>()
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.checkbox?.message}
        invalid={!!errors.checkbox}
        label="Who is your favorite character?"
      >
        <Controller
          name="checkbox"
          control={control}
          render={({ field: { value, ...rest } }) => (
            <Checkbox checked={value} {...rest}>
              ソラ
            </Checkbox>
          )}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.checkboxGroup?.message}
        invalid={!!errors.checkboxGroup}
        label="Who is your favorite character?"
      >
        <Controller
          name="checkboxGroup"
          control={control}
          render={({ field }) => (
            <CheckboxGroup.Root items={items} {...field} />
          )}
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
    checkbox: boolean
    checkboxGroup: string[]
  }

  const defaultValues: Data = {
    checkbox: true,
    checkboxGroup: ["1"],
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })
  const items = useMemo<CheckboxGroup.RootProps["items"]>(
    () => [
      { label: "ソラ", value: "1" },
      { label: "リク", value: "2" },
      { label: "カイリ", value: "3" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.checkbox?.message}
        invalid={!!errors.checkbox}
        label="Who is your favorite character?"
      >
        <Controller
          name="checkbox"
          control={control}
          render={({ field: { value, ...rest } }) => (
            <Checkbox checked={value} {...rest}>
              ソラ
            </Checkbox>
          )}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.checkboxGroup?.message}
        invalid={!!errors.checkboxGroup}
        label="Who is your favorite character?"
      >
        <Controller
          name="checkboxGroup"
          control={control}
          render={({ field }) => (
            <CheckboxGroup.Root items={items} {...field} />
          )}
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
