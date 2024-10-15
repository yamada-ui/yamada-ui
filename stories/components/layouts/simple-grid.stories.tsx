import type { Meta, StoryFn } from "@storybook/react"
import { GridItem, SimpleGrid } from "@yamada-ui/react"

type Story = StoryFn<typeof SimpleGrid>

const meta: Meta<typeof SimpleGrid> = {
  component: SimpleGrid,
  title: "Components / Layouts / SimpleGrid",
}

export default meta

export const basic: Story = () => {
  return (
    <SimpleGrid columns={{ base: 2, md: 1 }} gap="md" w="full">
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

export const withGap: Story = () => {
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

export const withMinChildWidth: Story = () => {
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
