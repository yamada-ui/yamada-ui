import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { COLOR_SCHEMES } from "../../utils"
import { For } from "../for"
import { CircleProgress } from "./"

type Story = StoryFn<typeof CircleProgress.Root>

const meta: Meta<typeof CircleProgress.Root> = {
  component: CircleProgress.Root,
  title: "Components / CircleProgress",
}

export default meta

export const Basic: Story = () => {
  return <CircleProgress.Root value={75} />
}

export const Variant: Story = () => {
  return (
    <PropsTable columns={["outline", "subtle"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <CircleProgress.Root
            key={key}
            colorScheme={row}
            variant={column}
            value={75}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
        return <CircleProgress.Root key={key} size={row} value={75} />
      }}
    </PropsTable>
  )
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["rounded", "square"]}>
      {(_, row, key) => (
        <CircleProgress.Root key={key} shape={row} value={50} />
      )}
    </PropsTable>
  )
}

export const Indeterminate: Story = () => {
  return <CircleProgress.Root value={null} />
}

export const Duration: Story = () => {
  return <CircleProgress.Root duration={2} value={null} />
}

export const Thickness: Story = () => {
  return <CircleProgress.Root thickness={1} value={31} />
}

export const Label: Story = () => {
  return (
    <For each={["md", "lg", "xl"] as const}>
      {(size, index) => (
        <CircleProgress.Root key={index} size={size} value={75}>
          <CircleProgress.Label>75%</CircleProgress.Label>
        </CircleProgress.Root>
      )}
    </For>
  )
}

export const CustomColor: Story = () => {
  return (
    <CircleProgress.Root
      rangeColor="red.500"
      trackColor="blue.500"
      value={31}
    />
  )
}

export const CustomSize: Story = () => {
  return <CircleProgress.Root boxSize="100px" value={31} />
}
