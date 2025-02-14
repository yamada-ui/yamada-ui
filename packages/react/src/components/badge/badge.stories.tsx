import type { Meta, StoryFn } from "@storybook/react"
import type { BadgeProps } from "./badge"
import { useMemo } from "react"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { Wrap } from "../flex"
import { For } from "../for"
import { Badge, BadgePropsContext } from "./badge"

type Story = StoryFn<typeof Badge>

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components / Badge",
}

export default meta

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Badge key={key} colorScheme={row} variant={column}>
            Badge
          </Badge>
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
          <Badge key={key} colorScheme={row} size={column}>
            Badge
          </Badge>
        )
      }}
    </PropsTable>
  )
}

export const Context: Story = () => {
  const value = useMemo<BadgeProps>(() => ({ variant: "solid" }), [])

  return (
    <BadgePropsContext value={value}>
      <Wrap gap="md">
        <For each={COLOR_SCHEMES}>
          {(colorScheme, index) => (
            <Badge key={index} colorScheme={colorScheme}>
              Badge
            </Badge>
          )}
        </For>
      </Wrap>
    </BadgePropsContext>
  )
}
