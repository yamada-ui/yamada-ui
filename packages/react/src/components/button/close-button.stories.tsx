import type { Meta, StoryFn } from "@storybook/react"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { PropsTable } from "../../../storybook/components"
import { Wrap } from "../flex"
import { CloseButton } from "./close-button"

type Story = StoryFn<typeof CloseButton>

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
  title: "Components / CloseButton",
}

export default meta

export const Basic: Story = () => {
  return <CloseButton />
}

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline", "ghost"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return <CloseButton key={key} colorScheme={row} variant={column} />
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return <CloseButton key={key} colorScheme={row} size={column} />
      }}
    </PropsTable>
  )
}

export const FullRounded: Story = () => {
  return (
    <Wrap gap="md">
      <CloseButton variant="solid" fullRounded />

      <CloseButton variant="subtle" fullRounded />

      <CloseButton variant="surface" fullRounded />

      <CloseButton variant="outline" fullRounded />

      <CloseButton variant="ghost" fullRounded />
    </Wrap>
  )
}

export const Disabled: Story = () => {
  return (
    <Wrap gap="md">
      <CloseButton variant="solid" disabled />

      <CloseButton variant="subtle" disabled />

      <CloseButton variant="surface" disabled />

      <CloseButton variant="outline" disabled />

      <CloseButton variant="ghost" disabled />
    </Wrap>
  )
}
