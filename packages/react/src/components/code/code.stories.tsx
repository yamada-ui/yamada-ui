import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { COLOR_SCHEMES } from "../../utils"
import { Code } from "./code"

type Story = StoryFn<typeof Code>

const meta: Meta<typeof Code> = {
  component: Code,
  title: "Components / Code",
}

export default meta

export const Basic: Story = () => {
  return <Code>console.log("Hello, Yamada!")</Code>
}

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Code key={key} colorScheme={row} variant={column}>
            console.log("Hello, Yamada!")
          </Code>
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Code key={key} colorScheme={row} size={column}>
            console.log("Hello, Yamada!")
          </Code>
        )
      }}
    </PropsTable>
  )
}
