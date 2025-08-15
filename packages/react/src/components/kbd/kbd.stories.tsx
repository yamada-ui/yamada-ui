import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { Kbd } from "."
import { COLOR_SCHEMES } from "../../utils"
import { Text } from "../text"

type Story = StoryFn<typeof Kbd>

const meta: Meta<typeof Kbd> = {
  component: Kbd,
  title: "Components / Kbd",
}

export default meta

export const Basic: Story = () => {
  return (
    <Text>
      <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd>
    </Text>
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
          <Text key={key}>
            <Kbd colorScheme={row} variant={column}>
              Shift
            </Kbd>{" "}
            +{" "}
            <Kbd colorScheme={row} variant={column}>
              Tab
            </Kbd>
          </Text>
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
          <Text key={key}>
            <Kbd colorScheme={row} size={column}>
              Shift
            </Kbd>{" "}
            +{" "}
            <Kbd colorScheme={row} size={column}>
              Tab
            </Kbd>
          </Text>
        )
      }}
    </PropsTable>
  )
}
