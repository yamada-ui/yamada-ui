import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { COLOR_SCHEMES, noop } from "../../utils"
import { For } from "../for"
import { PlusIcon } from "../icon"
import { Wrap } from "../wrap"
import { Tag } from "./"

type Story = StoryFn<typeof Tag>

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Components / Tag",
}

export default meta

export const Basic: Story = () => {
  return <Tag>Tag</Tag>
}

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Tag key={key} colorScheme={row} variant={column}>
            Tag
          </Tag>
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Tag key={key} colorScheme={row} size={column}>
            Tag
          </Tag>
        )
      }}
    </PropsTable>
  )
}

export const Icon: Story = () => {
  return (
    <>
      <PropsTable
        columns={["solid", "subtle", "surface", "outline"]}
        rows={COLOR_SCHEMES}
      >
        {(column, row, key) => {
          return (
            <Tag
              key={key}
              colorScheme={row}
              variant={column}
              startIcon={<PlusIcon />}
            >
              Tag
            </Tag>
          )
        }}
      </PropsTable>

      <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
          return (
            <Tag
              key={key}
              colorScheme={row}
              size={column}
              endIcon={<PlusIcon />}
            >
              Tag
            </Tag>
          )
        }}
      </PropsTable>
    </>
  )
}

export const CloseButton: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <For
        each={["primary", "secondary", "success", "warning", "error"] as const}
      >
        {(colorScheme, index) => (
          <Tag
            key={index}
            colorScheme={colorScheme}
            rounded="full"
            onClose={noop}
          >
            {colorScheme}
          </Tag>
        )}
      </For>
    </Wrap>
  )
}

export const Disabled: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <For
        each={["primary", "secondary", "success", "warning", "error"] as const}
      >
        {(colorScheme, index) => (
          <Tag
            key={index}
            colorScheme={colorScheme}
            disabled
            rounded="full"
            onClose={noop}
          >
            {colorScheme}
          </Tag>
        )}
      </For>
    </Wrap>
  )
}
