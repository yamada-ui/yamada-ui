import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import { Toggle } from "."
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { Field } from "../field"
import { For } from "../for"
import { BoldIcon, ItalicIcon } from "../icon"
import { Text } from "../text"
import { Wrap } from "../wrap"

type Story = StoryFn<typeof Toggle>

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components / Toggle",
}

export default meta

export const Basic: Story = () => {
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} />
}

export const WithText: Story = () => {
  return (
    <Toggle px="4">
      <ItalicIcon />
      <Text as="span" fontSize="md">
        Italic
      </Text>
    </Toggle>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["ghost", "subtle", "surface", "outline", "solid"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Toggle
            key={key}
            colorScheme={row}
            variant={column}
            aria-label="Toggle bold"
            icon={<BoldIcon />}
          />
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
          <Toggle
            key={key}
            colorScheme={row}
            size={column}
            aria-label="Toggle bold"
            icon={<BoldIcon />}
          />
        )
      }}
    </PropsTable>
  )
}

export const Rounded: Story = () => {
  return (
    <Wrap gap="md">
      <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
        {(variant, index) => (
          <Toggle
            key={index}
            variant={variant}
            aria-label="Toggle bold"
            fullRounded
            icon={<BoldIcon />}
          />
        )}
      </For>
    </Wrap>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
          {(variant, index) => (
            <Toggle
              key={index}
              variant={variant}
              aria-label="Toggle bold"
              disabled
              icon={<BoldIcon />}
            />
          )}
        </For>
      </Wrap>

      <Field.Root disabled label="Bold">
        <Toggle alignSelf="flex-start" icon={<BoldIcon />} />
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
          {(variant, index) => (
            <Toggle
              key={index}
              variant={variant}
              aria-label="Toggle bold"
              icon={<BoldIcon />}
              readOnly
            />
          )}
        </For>
      </Wrap>

      <Field.Root label="Bold" readOnly>
        <Toggle alignSelf="flex-start" icon={<BoldIcon />} />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
          {(variant, index) => (
            <Toggle
              key={index}
              variant={variant}
              aria-label="Toggle bold"
              icon={<BoldIcon />}
              invalid
            />
          )}
        </For>
      </Wrap>

      <Field.Root invalid label="Bold">
        <Toggle alignSelf="flex-start" icon={<BoldIcon />} />
      </Field.Root>
    </>
  )
}

export const BorderColor: Story = () => {
  return (
    <Toggle
      aria-label="Toggle bold"
      errorBorderColor="orange.500"
      icon={<BoldIcon />}
      invalid
    />
  )
}

export const CustomControl: Story = () => {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <Toggle
      aria-label="Toggle bold"
      checked={checked}
      icon={<BoldIcon />}
      onChange={setChecked}
    />
  )
}
