import type { Meta, StoryFn } from "@storybook/react-vite"
import type { BadgeProps } from "./badge"
import { PropsTable } from "#storybook"
import { useMemo } from "react"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { For } from "../for"
import { Wrap } from "../wrap"
import { Badge, BadgePropsContext } from "./badge"

type Story = StoryFn<typeof Badge>

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components / Badge",
}

export default meta

export const Basic: Story = () => {
  return <Badge>Badge</Badge>
}

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Badge key={key} colorScheme={row} variant={column}>
            {toTitleCase(column)}
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
            {toTitleCase(column)}
          </Badge>
        )
      }}
    </PropsTable>
  )
}

export const FullRounded: Story = () => {
  return (
    <Wrap gap="md">
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <Badge key={index} variant={variant} fullRounded>
            {toTitleCase(variant)}
          </Badge>
        )}
      </For>
    </Wrap>
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
