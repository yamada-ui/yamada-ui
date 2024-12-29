import type { Meta, StoryFn } from "@storybook/react"
import { GridItem } from "./grid-item"
import { SimpleGrid } from "./simple-grid"

type Story = StoryFn<typeof SimpleGrid>

const meta: Meta<typeof SimpleGrid> = {
  component: SimpleGrid,
  title: "Components / SimpleGrid",
}

export default meta

export const Basic: Story = () => {
  return (
    <SimpleGrid columns={2} gap="md" w="full">
      <GridItem
        bg="primary"
        color="white"
        p="md"
        rounded="4"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        bg="secondary"
        color="white"
        p="md"
        rounded="4"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        bg="warning"
        color="white"
        p="md"
        rounded="4"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem bg="danger" color="white" p="md" rounded="4" textAlign="center">
        GridItem
      </GridItem>
    </SimpleGrid>
  )
}

export const WithGap: Story = () => {
  return (
    <SimpleGrid columnGap="lg" columns={2} rowGap="md" w="full">
      <GridItem
        bg="primary"
        color="white"
        p="md"
        rounded="4"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        bg="secondary"
        color="white"
        p="md"
        rounded="4"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        bg="warning"
        color="white"
        p="md"
        rounded="4"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem bg="danger" color="white" p="md" rounded="4" textAlign="center">
        GridItem
      </GridItem>
    </SimpleGrid>
  )
}

export const WithMinChildWidth: Story = () => {
  return (
    <SimpleGrid gap="md" minChildWidth={{ base: "3xs", lg: 100 }} w="full">
      <GridItem
        bg="primary"
        color="white"
        p="md"
        rounded="4"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        bg="secondary"
        color="white"
        p="md"
        rounded="4"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        bg="warning"
        color="white"
        p="md"
        rounded="4"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem bg="danger" color="white" p="md" rounded="4" textAlign="center">
        GridItem
      </GridItem>
    </SimpleGrid>
  )
}
