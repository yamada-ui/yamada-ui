import type { Meta, StoryFn } from "@storybook/react-vite"
import { useState } from "react"
import { Pagination } from "."
import { COLOR_SCHEMES } from "../../utils"
import { GhostIcon } from "../icon"
import { VStack } from "../stack"
import { Wrap } from "../wrap"

type Story = StoryFn<typeof Pagination.Root>

const meta: Meta<typeof Pagination.Root> = {
  component: Pagination.Root,
  title: "Components / Pagination",
}

export default meta

export const Basic: Story = () => {
  return <Pagination.Root total={10} />
}

export const WithSize: Story = () => {
  return (
    <>
      <Pagination.Root size="xs" total={10} />
      <Pagination.Root size="sm" total={10} />
      <Pagination.Root size="md" total={10} />
      <Pagination.Root size="lg" total={10} />
      <Pagination.Root size="xl" total={10} />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <Pagination.Root variant="solid" total={10} />
      <Pagination.Root variant="subtle" total={10} />
      <Pagination.Root variant="surface" total={10} />
      <Pagination.Root variant="outline" total={10} />
      <Pagination.Root variant="ghost" total={10} />
      <Pagination.Root variant="unstyled" total={10} />
    </>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <Wrap gap="md" w="full">
      <VStack w="auto">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Pagination.Root
            key={colorScheme}
            colorScheme={colorScheme}
            variant="solid"
            total={10}
          />
        ))}
      </VStack>

      <VStack w="auto">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Pagination.Root
            key={colorScheme}
            colorScheme={colorScheme}
            variant="subtle"
            total={10}
          />
        ))}
      </VStack>

      <VStack w="auto">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Pagination.Root
            key={colorScheme}
            colorScheme={colorScheme}
            variant="surface"
            total={10}
          />
        ))}
      </VStack>

      <VStack w="auto">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Pagination.Root
            key={colorScheme}
            colorScheme={colorScheme}
            variant="outline"
            total={10}
          />
        ))}
      </VStack>

      <VStack w="auto">
        {COLOR_SCHEMES.map((colorScheme) => (
          <Pagination.Root
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

export const WithDefaultPage: Story = () => {
  return <Pagination.Root defaultPage={3} total={10} />
}

export const WithTotal: Story = () => {
  return <Pagination.Root total={77} />
}

export const WithEdge: Story = () => {
  return <Pagination.Root total={10} withEdges />
}

export const WithSiblings: Story = () => {
  return <Pagination.Root siblings={3} total={77} />
}

export const WithBoundaries: Story = () => {
  return <Pagination.Root boundaries={3} total={77} />
}

export const WithDisabled: Story = () => {
  return (
    <>
      <Pagination.Root variant="solid" disabled total={10} />
      <Pagination.Root variant="subtle" disabled total={10} />
      <Pagination.Root variant="surface" disabled total={10} />
      <Pagination.Root variant="outline" disabled total={10} />
      <Pagination.Root variant="ghost" disabled total={10} />
      <Pagination.Root variant="unstyled" disabled total={10} />
    </>
  )
}

export const DisabledControlButton: Story = () => {
  return <Pagination.Root total={10} withControls={false} />
}

export const CustomControl: Story = () => {
  const [page, onChange] = useState<number>(1)

  return <Pagination.Root page={page} total={10} onChange={onChange} />
}

export const CustomControlButton: Story = () => {
  return (
    <>
      <Pagination.Root total={10} controlProps={{ children: <GhostIcon /> }} />
      <Pagination.Root
        total={10}
        controlPrevProps={{ children: <GhostIcon /> }}
      />
      <Pagination.Root
        total={10}
        controlNextProps={{ children: <GhostIcon /> }}
      />
    </>
  )
}

export const CustomEdgeButton: Story = () => {
  return (
    <>
      <Pagination.Root
        total={10}
        withEdges
        edgeProps={{ children: <GhostIcon /> }}
      />
      <Pagination.Root
        total={10}
        withEdges
        edgeFirstProps={{ children: <GhostIcon /> }}
      />
      <Pagination.Root
        total={10}
        withEdges
        edgeLastProps={{ children: <GhostIcon /> }}
      />
    </>
  )
}

export const CustomItemComponent: Story = () => {
  return (
    <Pagination.Root
      component={({ page }) => {
        switch (page) {
          case "ellipsis":
            return <span>...</span>
          case "prev":
            return <span>Previous</span>
          case "next":
            return <span>Next</span>
          case "first":
            return <span>First</span>
          case "last":
            return <span>Last</span>
          default:
            return <span>{page}</span>
        }
      }}
      total={10}
      withEdges
    />
  )
}
