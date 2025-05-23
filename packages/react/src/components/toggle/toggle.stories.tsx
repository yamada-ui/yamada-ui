import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import { Toggle } from "."
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { BoldIcon, ItalicIcon } from "../icon"

type Story = StoryFn<typeof Toggle>

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components / Toggle",
}

export default meta

export const Basic: Story = () => {
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} />
}

export const Text: Story = () => {
  return (
    <Toggle px="4">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
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

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
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

export const Rounded: Story = () => {
  return (
    <Toggle
      aria-label="Toggle bold"
      defaultSelected
      fullRounded
      icon={<BoldIcon />}
    />
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Toggle
        colorScheme="primary"
        variant="subtle"
        aria-label="Toggle bold"
        defaultSelected
        disabled
        icon={<BoldIcon />}
      />
      <Toggle
        colorScheme="secondary"
        variant="solid"
        aria-label="Toggle bold"
        defaultSelected
        disabled
        icon={<BoldIcon />}
      />
      <Toggle
        variant="outline"
        aria-label="Toggle bold"
        defaultSelected
        disabled
        icon={<BoldIcon />}
      />
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <Toggle
        colorScheme="primary"
        variant="subtle"
        aria-label="Toggle bold"
        defaultSelected
        icon={<BoldIcon />}
        readOnly
      />
      <Toggle
        colorScheme="secondary"
        variant="solid"
        aria-label="Toggle bold"
        defaultSelected
        icon={<BoldIcon />}
        readOnly
      />
      <Toggle
        variant="outline"
        aria-label="Toggle bold"
        defaultSelected
        icon={<BoldIcon />}
        readOnly
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <Toggle
      aria-label="Toggle bold"
      icon={<BoldIcon />}
      selected={isSelected}
      onChange={setIsSelected}
    />
  )
}
