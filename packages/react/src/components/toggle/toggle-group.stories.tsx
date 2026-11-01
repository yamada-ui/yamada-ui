import type { Meta, StoryFn } from "@storybook/react-vite"
import { useMemo, useState } from "react"
import { PropsTable } from "#storybook"
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

export const Items: Story = () => {
  const items = useMemo<ToggleGroup.Item[]>(
    () => [
      {
        icon: <BoldIcon />,
        label: "Toggle bold",
        value: "bold",
      },
      {
        icon: <ItalicIcon />,
        label: "Toggle italic",
        value: "italic",
      },
      {
        icon: <UnderlineIcon />,
        label: "Toggle underline",
        value: "underline",
      },
    ],
    [],
  )

  return <ToggleGroup.Root items={items} />
}

export const Variant: Story = () => {
  const items = useMemo<ToggleGroup.Item[]>(
    () => [
      {
        icon: <BoldIcon />,
        label: "Toggle bold",
        value: "bold",
      },
      {
        icon: <ItalicIcon />,
        label: "Toggle italic",
        value: "italic",
      },
      {
        icon: <UnderlineIcon />,
        label: "Toggle underline",
        value: "underline",
      },
    ],
    [],
  )

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
            items={items}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<ToggleGroup.Item[]>(
    () => [
      {
        icon: <BoldIcon />,
        label: "Toggle bold",
        value: "bold",
      },
      {
        icon: <ItalicIcon />,
        label: "Toggle italic",
        value: "italic",
      },
      {
        icon: <UnderlineIcon />,
        label: "Toggle underline",
        value: "underline",
      },
    ],
    [],
  )

  return (
    <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <ToggleGroup.Root
            key={key}
            colorScheme={row}
            size={column}
            attached
            items={items}
          />
        )
      }}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  const items = useMemo<ToggleGroup.Item[]>(
    () => [
      {
        icon: <BoldIcon />,
        label: "Toggle bold",
        value: "bold",
      },
      {
        icon: <ItalicIcon />,
        label: "Toggle italic",
        value: "italic",
      },
      {
        icon: <UnderlineIcon />,
        label: "Toggle underline",
        value: "underline",
      },
    ],
    [],
  )

  return (
    <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => (
        <ToggleGroup.Root
          key={index}
          variant={variant}
          attached
          disabled
          items={items}
        />
      )}
    </For>
  )
}

export const ReadOnly: Story = () => {
  const items = useMemo<ToggleGroup.Item[]>(
    () => [
      {
        icon: <BoldIcon />,
        label: "Toggle bold",
        value: "bold",
      },
      {
        icon: <ItalicIcon />,
        label: "Toggle italic",
        value: "italic",
      },
      {
        icon: <UnderlineIcon />,
        label: "Toggle underline",
        value: "underline",
      },
    ],
    [],
  )

  return (
    <For each={["ghost", "subtle", "surface", "outline", "solid"] as const}>
      {(variant, index) => (
        <ToggleGroup.Root
          key={index}
          variant={variant}
          attached
          items={items}
          readOnly
        />
      )}
    </For>
  )
}

export const CustomControl: Story = () => {
  const items = useMemo<ToggleGroup.Item[]>(
    () => [
      {
        icon: <BoldIcon />,
        label: "Toggle bold",
        value: "bold",
      },
      {
        icon: <ItalicIcon />,
        label: "Toggle italic",
        value: "italic",
      },
      {
        icon: <UnderlineIcon />,
        label: "Toggle underline",
        value: "underline",
      },
    ],
    [],
  )
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined)
  const [multiValue, setMultiValue] = useState<string[]>([])

  return (
    <>
      <ToggleGroup.Root
        items={items}
        value={singleValue}
        onChange={setSingleValue}
      />

      <ToggleGroup.Root
        items={items}
        value={multiValue}
        onChange={setMultiValue}
      />
    </>
  )
}
