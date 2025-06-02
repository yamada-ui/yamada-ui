import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { For } from "../for"
import { Progress } from "./"

type Story = StoryFn<typeof Progress>

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Components / Progress",
}

export default meta

export const Basic: Story = () => {
  return <Progress value={50} />
}

export const Variant: Story = () => {
  return (
    <PropsTable columns={["outline", "subtle"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Progress key={key} colorScheme={row} variant={column} value={50} />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="column" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
        return <Progress key={key} size={row} value={50} />
      }}
    </PropsTable>
  )
}

export const Shape: Story = () => {
  return (
    <For each={["rounded", "square", "circle"] as const}>
      {(shape, index) => <Progress key={index} shape={shape} value={50} />}
    </For>
  )
}

export const Indeterminate: Story = () => {
  return <Progress value={null} />
}

export const Striped: Story = () => {
  return <Progress striped value={50} />
}

export const Animated: Story = () => {
  return <Progress animated striped value={50} />
}

export const Duration: Story = () => {
  return <Progress animated duration={2} striped value={50} />
}

export const CustomColor: Story = () => {
  return <Progress rangeColor="red.500" trackColor="blue.500" value={50} />
}
