import { faPoo } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Pagination, VStack, Wrap } from "@yamada-ui/react"
import { useState } from "react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Pagination>

const meta: Meta<typeof Pagination> = {
  title: "Components / Navigation / Pagination",
  component: Pagination,
}

export default meta

export const basic: Story = () => {
  return <Pagination total={10} />
}

export const withSize: Story = () => {
  return (
    <>
      <Pagination total={10} size="xs" />
      <Pagination total={10} size="sm" />
      <Pagination total={10} size="md" />
      <Pagination total={10} size="lg" />
      <Pagination total={10} size="xl" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Pagination total={10} variant="solid" />
      <Pagination total={10} variant="outline" />
      <Pagination total={10} variant="ghost" />
      <Pagination total={10} variant="unstyled" />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <Wrap w="full" gap="md">
      <VStack w="auto">
        {colorSchemes.map((colorScheme) => (
          <Pagination
            key={colorScheme}
            total={10}
            variant="solid"
            colorScheme={colorScheme}
          />
        ))}
      </VStack>

      <VStack w="auto">
        {colorSchemes.map((colorScheme) => (
          <Pagination
            key={colorScheme}
            total={10}
            variant="outline"
            colorScheme={colorScheme}
          />
        ))}
      </VStack>

      <VStack w="auto">
        {colorSchemes.map((colorScheme) => (
          <Pagination
            key={colorScheme}
            total={10}
            variant="ghost"
            colorScheme={colorScheme}
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
  return <Pagination total={77} siblings={3} />
}

export const withBoundaries: Story = () => {
  return <Pagination total={77} boundaries={3} />
}

export const withDisabled: Story = () => {
  return (
    <>
      <Pagination total={10} variant="solid" isDisabled />
      <Pagination total={10} variant="outline" isDisabled />
      <Pagination total={10} variant="ghost" isDisabled />
      <Pagination total={10} variant="unstyled" isDisabled />
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
      <Pagination
        total={10}
        controlProps={{ children: <Icon icon={faPoo} /> }}
      />
      <Pagination
        total={10}
        controlPrevProps={{ children: <Icon icon={faPoo} /> }}
      />
      <Pagination
        total={10}
        controlNextProps={{ children: <Icon icon={faPoo} /> }}
      />
    </>
  )
}

export const customEdgeButton: Story = () => {
  return (
    <>
      <Pagination
        total={10}
        withEdges
        edgeProps={{ children: <Icon icon={faPoo} /> }}
      />
      <Pagination
        total={10}
        withEdges
        edgeFirstProps={{ children: <Icon icon={faPoo} /> }}
      />
      <Pagination
        total={10}
        withEdges
        edgeLastProps={{ children: <Icon icon={faPoo} /> }}
      />
    </>
  )
}
