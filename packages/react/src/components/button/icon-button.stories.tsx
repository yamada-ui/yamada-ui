import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { BoldIcon, MinusIcon, MoonIcon, PlusIcon, SunIcon } from "../icon"
import { Wrap } from "../wrap"
import { IconButton } from "./icon-button"

type Story = StoryFn<typeof IconButton>

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "Components / IconButton",
}

export default meta

export const Basic: Story = () => {
  return <IconButton aria-label="Plus" icon={<PlusIcon />} />
}

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline", "ghost"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <IconButton
            key={key}
            colorScheme={row}
            variant={column}
            aria-label="Plus"
            icon={<PlusIcon />}
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
          <IconButton
            key={key}
            colorScheme={row}
            size={column}
            aria-label="Plus"
            icon={<PlusIcon />}
          />
        )
      }}
    </PropsTable>
  )
}

export const FullRounded: Story = () => {
  return (
    <Wrap gap="md">
      <IconButton
        variant="solid"
        aria-label="Plus"
        fullRounded
        icon={<PlusIcon />}
      />

      <IconButton
        variant="subtle"
        aria-label="Minus"
        fullRounded
        icon={<MinusIcon />}
      />

      <IconButton
        variant="surface"
        aria-label="Bold"
        fullRounded
        icon={<BoldIcon />}
      />

      <IconButton
        variant="outline"
        aria-label="Light"
        fullRounded
        icon={<SunIcon />}
      />

      <IconButton
        variant="ghost"
        aria-label="Dark"
        fullRounded
        icon={<MoonIcon />}
      />
    </Wrap>
  )
}

export const Disabled: Story = () => {
  return (
    <Wrap gap="md">
      <IconButton
        variant="solid"
        aria-label="Plus"
        disabled
        icon={<PlusIcon />}
      />

      <IconButton
        variant="subtle"
        aria-label="Minus"
        disabled
        icon={<MinusIcon />}
      />

      <IconButton
        variant="surface"
        aria-label="Bold"
        disabled
        icon={<BoldIcon />}
      />

      <IconButton
        variant="outline"
        aria-label="Light"
        disabled
        icon={<SunIcon />}
      />

      <IconButton
        variant="ghost"
        aria-label="Dark"
        disabled
        icon={<MoonIcon />}
      />
    </Wrap>
  )
}
