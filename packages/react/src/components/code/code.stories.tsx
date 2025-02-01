import type { Meta, StoryFn } from "@storybook/react"
import { PropsTable } from "../../../storybook/components"
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

export const WithSize: Story = () => {
  return (
    <>
      <Code colorScheme="primary" size="xs">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="secondary" size="sm">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="warning" size="md">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="danger" size="lg">
        console.log("Hello, Yamada!")
      </Code>
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <Code colorScheme="primary" variant="solid">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="secondary" variant="outline">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="warning" variant="subtle">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="danger" variant="surface">
        console.log("Hello, Yamada!")
      </Code>
    </>
  )
}

export const WithColorScheme: Story = () => {
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
