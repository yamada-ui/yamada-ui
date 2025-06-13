import type { Meta, StoryFn } from "@storybook/react-vite"
import { Kbd } from "."
import { PropsTable } from "../../../storybook/components"
import { Text } from "../../components/text"
import { COLOR_SCHEMES } from "../../utils"

type Story = StoryFn<typeof Kbd>

const meta: Meta<typeof Kbd> = {
  component: Kbd,
  title: "Components / Kbd",
}

export default meta

export const Basic: Story = () => {
  return (
    <Text>
      <Kbd>shift</Kbd> + <Kbd>Tab</Kbd>
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
              shift
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
              shift
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
