import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import { Toggle, ToggleGroup } from "."
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { For } from "../for"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "../icon"

type Story = StoryFn<typeof Toggle>

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components / ToggleGroup",
}

export default meta

export const Basic: Story = () => {
  return (
    <ToggleGroup>
      <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
      <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
      <Toggle
        aria-label="Toggle underline"
        icon={<UnderlineIcon />}
        value="underline"
      />
    </ToggleGroup>
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
          <ToggleGroup key={key} colorScheme={row} variant={column} attached>
            <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <Toggle
              aria-label="Toggle italic"
              icon={<ItalicIcon />}
              value="italic"
            />
            <Toggle
              aria-label="Toggle underline"
              icon={<UnderlineIcon />}
              value="underline"
            />
          </ToggleGroup>
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
          <ToggleGroup key={key} colorScheme={row} size={column} attached>
            <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
            <Toggle
              aria-label="Toggle italic"
              icon={<ItalicIcon />}
              value="italic"
            />
            <Toggle
              aria-label="Toggle underline"
              icon={<UnderlineIcon />}
              value="underline"
            />
          </ToggleGroup>
        )
      }}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  return (
    <For each={["ghost", "subtle", "surface", "outline", "solid"]}>
      {(variant, index) => (
        <ToggleGroup key={index} variant={variant} attached disabled>
          <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <Toggle
            aria-label="Toggle italic"
            icon={<ItalicIcon />}
            value="italic"
          />
          <Toggle
            aria-label="Toggle underline"
            icon={<UnderlineIcon />}
            value="underline"
          />
        </ToggleGroup>
      )}
    </For>
  )
}

export const Readonly: Story = () => {
  return (
    <For each={["ghost", "subtle", "surface", "outline", "solid"]}>
      {(variant, index) => (
        <ToggleGroup key={index} variant={variant} attached readOnly>
          <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
          <Toggle
            aria-label="Toggle italic"
            icon={<ItalicIcon />}
            value="italic"
          />
          <Toggle
            aria-label="Toggle underline"
            icon={<UnderlineIcon />}
            value="underline"
          />
        </ToggleGroup>
      )}
    </For>
  )
}

export const CustomControl: Story = () => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined)
  const [multiValue, setMultiValue] = useState<string[]>([])

  return (
    <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <Toggle
          aria-label="Toggle italic"
          icon={<ItalicIcon />}
          value="italic"
        />
        <Toggle
          aria-label="Toggle underline"
          icon={<UnderlineIcon />}
          value="underline"
        />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <Toggle
          aria-label="Toggle italic"
          icon={<ItalicIcon />}
          value="italic"
        />
        <Toggle
          aria-label="Toggle underline"
          icon={<UnderlineIcon />}
          value="underline"
        />
      </ToggleGroup>
    </>
  )
}
