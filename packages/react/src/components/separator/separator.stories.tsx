import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { Flex } from "../flex"
import { Separator } from "./separator"

type Story = StoryFn<typeof Separator>

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: "Components / Separator",
}

export default meta

export const Basic: Story = () => {
  return <Separator />
}

export const Variant: Story = () => {
  return (
    <PropsTable variant="stack" rows={["solid", "dashed", "dotted"]}>
      {(_, row, key) => <Separator key={key} variant={row} />}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg"]}>
      {(_, row, key) => <Separator key={key} size={row} />}
    </PropsTable>
  )
}

export const Vertical: Story = () => {
  return (
    <Flex gap="md">
      <Separator variant="solid" h="32" orientation="vertical" />

      <Separator variant="dashed" h="32" orientation="vertical" />

      <Separator variant="dotted" h="32" orientation="vertical" />
    </Flex>
  )
}
