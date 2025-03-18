import type { Meta, StoryFn } from "@storybook/react"
import { GhostIcon } from "@yamada-ui/lucide"
import { Pagination, VStack, Wrap } from "@yamada-ui/react"
import { useState } from "react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Pagination>

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Components / Navigation / Pagination",
}

export default meta

export const basic: Story = () => {
  return <Pagination total={10} />
}

export const withSize: Story = () => {
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

export const withVariant: Story = () => {
  return (
    <>
      <Pagination variant="solid" total={10} />
      <Pagination variant="subtle" total={10} />
      <Pagination variant="surface" total={10} />
      <Pagination variant="outline" total={10} />
      <Pagination variant="ghost" total={10} />
      <Pagination variant="unstyled" total={10} />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <Wrap gap="md" w="full">
      <VStack w="auto">
        {colorSchemes.map((colorScheme) => (
          <Pagination
            key={colorScheme}
            colorScheme={colorScheme}
            variant="solid"
            total={10}
          />
        ))}
      </VStack>

      <VStack w="auto">
        {colorSchemes.map((colorScheme) => (
          <Pagination
            key={colorScheme}
            colorScheme={colorScheme}
            variant="outline"
            total={10}
          />
        ))}
      </VStack>

      <VStack w="auto">
        {colorSchemes.map((colorScheme) => (
          <Pagination
            key={colorScheme}
            colorScheme={colorScheme}
            variant="ghost"
            total={10}
          />
        ))}
      </VStack>
    </Wrap>
  )
}

export const withDefaultPage: Story = () => {
  return <Pagination defaultPage={3} total={10} />
}

export const withTotal: Story = () => {
  return <Pagination total={77} />
}

export const withEdge: Story = () => {
  return <Pagination total={10} withEdges />
}

export const withSiblings: Story = () => {
  return <Pagination siblings={3} total={77} />
}

export const withBoundaries: Story = () => {
  return <Pagination boundaries={3} total={77} />
}

export const withDisabled: Story = () => {
  return (
    <>
      <Pagination variant="solid" disabled total={10} />
      <Pagination variant="outline" disabled total={10} />
      <Pagination variant="ghost" disabled total={10} />
      <Pagination variant="unstyled" disabled total={10} />
    </>
  )
}

export const disabledControlButton: Story = () => {
  return <Pagination total={10} withControls={false} />
}

export const customControl: Story = () => {
  const [page, onChange] = useState<number>(1)

  return <Pagination page={page} total={10} onChange={onChange} />
}

export const customControlButton: Story = () => {
  return (
    <>
      <Pagination total={10} controlProps={{ children: <GhostIcon /> }} />
      <Pagination total={10} controlPrevProps={{ children: <GhostIcon /> }} />
      <Pagination total={10} controlNextProps={{ children: <GhostIcon /> }} />
    </>
  )
}

export const customEdgeButton: Story = () => {
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
