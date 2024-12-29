import type { Meta, StoryFn } from "@storybook/react"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES, noop } from "../../utils"
import { Wrap } from "../flex"
import { For } from "../for"
import { PlusIcon } from "../icon"
import { Tag } from "./"

type Story = StoryFn<typeof Tag.Root>

const meta: Meta<typeof Tag.Root> = {
  component: Tag.Root,
  title: "Components / Tag",
}

export default meta

export const Variants: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Tag.Root key={key} colorScheme={row} variant={column}>
            Tag
          </Tag.Root>
        )
      }}
    </PropsTable>
  )
}

export const Sizes: Story = () => {
  return (
    <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Tag.Root key={key} colorScheme={row} size={column}>
            Tag
          </Tag.Root>
        )
      }}
    </PropsTable>
  )
}

export const WithIcon: Story = () => {
  return (
    <>
      <PropsTable
        columns={["solid", "subtle", "surface", "outline"]}
        rows={COLOR_SCHEMES}
      >
        {(column, row, key) => {
          return (
            <Tag.Root
              key={key}
              colorScheme={row}
              variant={column}
              startIcon={<PlusIcon />}
            >
              Tag
            </Tag.Root>
          )
        }}
      </PropsTable>

      <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
          return (
            <Tag.Root
              key={key}
              colorScheme={row}
              size={column}
              endIcon={<PlusIcon />}
            >
              Tag
            </Tag.Root>
          )
        }}
      </PropsTable>
    </>
  )
}

export const WithCloseButton: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"]}>
        {(colorScheme, index) => (
          <Tag.Root
            key={index}
            colorScheme={colorScheme}
            rounded="full"
            onClose={noop}
          >
            {colorScheme}
          </Tag.Root>
        )}
      </For>
    </Wrap>
  )
}

export const WithDisabled: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <For each={["primary", "secondary", "success", "warning", "error"]}>
        {(colorScheme, index) => (
          <Tag.Root
            key={index}
            colorScheme={colorScheme}
            disabled
            rounded="full"
            onClose={noop}
          >
            {colorScheme}
          </Tag.Root>
        )}
      </For>
    </Wrap>
  )
}
