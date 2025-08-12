import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { ToggleGroup } from "."
import { COLOR_SCHEMES } from "../../utils"
import { For } from "../for"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "../icon"

type Story = StoryFn<typeof ToggleGroup.Root>

const meta: Meta<typeof ToggleGroup.Root> = {
  component: ToggleGroup.Root,
  title: "Components / ToggleGroup",
}

export default meta

export const Basic: Story = () => {
  return (
    <ToggleGroup.Root>
      <ToggleGroup.Item
        aria-label="Toggle bold"
        icon={<BoldIcon />}
        value="bold"
      />
      <ToggleGroup.Item
        aria-label="Toggle italic"
        icon={<ItalicIcon />}
        value="italic"
      />
      <ToggleGroup.Item
        aria-label="Toggle underline"
        icon={<UnderlineIcon />}
        value="underline"
      />
    </ToggleGroup.Root>
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
          <ToggleGroup.Root
            key={key}
            colorScheme={row}
            variant={column}
            attached
          >
            <ToggleGroup.Item
              aria-label="Toggle bold"
              icon={<BoldIcon />}
              value="bold"
            />
            <ToggleGroup.Item
              aria-label="Toggle italic"
              icon={<ItalicIcon />}
              value="italic"
            />
            <ToggleGroup.Item
              aria-label="Toggle underline"
              icon={<UnderlineIcon />}
              value="underline"
            />
          </ToggleGroup.Root>
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
          <ToggleGroup.Root key={key} colorScheme={row} size={column} attached>
            <ToggleGroup.Item
              aria-label="Toggle bold"
              icon={<BoldIcon />}
              value="bold"
            />
            <ToggleGroup.Item
              aria-label="Toggle italic"
              icon={<ItalicIcon />}
              value="italic"
            />
            <ToggleGroup.Item
              aria-label="Toggle underline"
              icon={<UnderlineIcon />}
              value="underline"
            />
          </ToggleGroup.Root>
        )
      }}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  return (
    <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => (
        <ToggleGroup.Root key={index} variant={variant} attached disabled>
          <ToggleGroup.Item
            aria-label="Toggle bold"
            icon={<BoldIcon />}
            value="bold"
          />
          <ToggleGroup.Item
            aria-label="Toggle italic"
            icon={<ItalicIcon />}
            value="italic"
          />
          <ToggleGroup.Item
            aria-label="Toggle underline"
            icon={<UnderlineIcon />}
            value="underline"
          />
        </ToggleGroup.Root>
      )}
    </For>
  )
}

export const Readonly: Story = () => {
  return (
    <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => (
        <ToggleGroup.Root key={index} variant={variant} attached readOnly>
          <ToggleGroup.Item
            aria-label="Toggle bold"
            icon={<BoldIcon />}
            value="bold"
          />
          <ToggleGroup.Item
            aria-label="Toggle italic"
            icon={<ItalicIcon />}
            value="italic"
          />
          <ToggleGroup.Item
            aria-label="Toggle underline"
            icon={<UnderlineIcon />}
            value="underline"
          />
        </ToggleGroup.Root>
      )}
    </For>
  )
}

export const CustomControl: Story = () => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined)
  const [multiValue, setMultiValue] = useState<string[]>([])

  return (
    <>
      <ToggleGroup.Root value={singleValue} onChange={setSingleValue}>
        <ToggleGroup.Item
          aria-label="Toggle bold"
          icon={<BoldIcon />}
          value="bold"
        />
        <ToggleGroup.Item
          aria-label="Toggle italic"
          icon={<ItalicIcon />}
          value="italic"
        />
        <ToggleGroup.Item
          aria-label="Toggle underline"
          icon={<UnderlineIcon />}
          value="underline"
        />
      </ToggleGroup.Root>

      <ToggleGroup.Root value={multiValue} onChange={setMultiValue}>
        <ToggleGroup.Item
          aria-label="Toggle bold"
          icon={<BoldIcon />}
          value="bold"
        />
        <ToggleGroup.Item
          aria-label="Toggle italic"
          icon={<ItalicIcon />}
          value="italic"
        />
        <ToggleGroup.Item
          aria-label="Toggle underline"
          icon={<UnderlineIcon />}
          value="underline"
        />
      </ToggleGroup.Root>
    </>
  )
}
