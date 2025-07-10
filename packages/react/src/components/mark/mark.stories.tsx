import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { Mark } from "./mark"

type Story = StoryFn<typeof Mark>

const meta: Meta<typeof Mark> = {
  component: Mark,
  title: "Components / Mark",
}

export default meta

export const Basic: Story = () => {
  return <Mark>Mark</Mark>
}

export const Variant: Story = () => {
  return (
    <PropsTable columns={["solid", "subtle", "accent"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Mark key={key} colorScheme={row} variant={column}>
            Mark
          </Mark>
        )
      }}
    </PropsTable>
  )
}
