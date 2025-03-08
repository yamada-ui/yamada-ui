import type { Meta, StoryFn } from "@storybook/react"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { useState } from "react"
import { Pagination } from "."
import { Wrap } from "../flex"
import { For } from "../for"
import { GhostIcon } from "../icon"
import { VStack } from "../stack"

type Story = StoryFn<typeof Pagination>

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Components / Pagination",
}

export default meta

export const Basic: Story = () => {
  return <Pagination total={10} />
}

export const Size: Story = () => {
  return (
    <>
      <Pagination size="xs" total={10} />
      <Pagination size="sm" total={10} />
      <Pagination size="md" total={10} />
      <Pagination size="lg" total={10} />
      <Pagination size="xl" total={10} />
    </>
  )
}

export const Theme: Story = () => {
  return (
    <Wrap gap="md" w="full">
      <For each={["solid", "subtle", "surface", "outline", "ghost"]}>
        {(variant) => (
          <VStack w="auto">
            {COLOR_SCHEMES.map((colorScheme) => (
              <Pagination
                key={colorScheme}
                colorScheme={colorScheme}
                variant={variant}
                total={10}
              />
            ))}
          </VStack>
        )}
      </For>
    </Wrap>
  )
}

export const DefaultPage: Story = () => {
  return <Pagination defaultPage={3} total={10} />
}

export const Total: Story = () => {
  return <Pagination total={77} />
}

export const Edge: Story = () => {
  return <Pagination total={10} withEdges />
}

export const Siblings: Story = () => {
  return <Pagination siblings={3} total={77} />
}

export const Boundaries: Story = () => {
  return <Pagination boundaries={3} total={77} />
}

export const Disabled: Story = () => {
  return (
    <>
      <Pagination variant="solid" disabled total={10} />
      <Pagination variant="outline" disabled total={10} />
      <Pagination variant="ghost" disabled total={10} />
      <Pagination variant="unstyled" disabled total={10} />
    </>
  )
}

export const DisabledControlButton: Story = () => {
  return <Pagination total={10} withControls={false} />
}

export const CustomControl: Story = () => {
  const [page, onChange] = useState<number>(1)

  return <Pagination page={page} total={10} onChange={onChange} />
}

export const CustomControlButton: Story = () => {
  return (
    <>
      <Pagination total={10} controlProps={{ children: <GhostIcon /> }} />
      <Pagination total={10} controlPrevProps={{ children: <GhostIcon /> }} />
      <Pagination total={10} controlNextProps={{ children: <GhostIcon /> }} />
    </>
  )
}

export const CustomEdgeButton: Story = () => {
  return (
    <>
      <Pagination
        total={10}
        withEdges
        edgeProps={{ children: <GhostIcon /> }}
      />
      <Pagination
        total={10}
        withEdges
        edgeFirstProps={{ children: <GhostIcon /> }}
      />
      <Pagination
        total={10}
        withEdges
        edgeLastProps={{ children: <GhostIcon /> }}
      />
    </>
  )
}
