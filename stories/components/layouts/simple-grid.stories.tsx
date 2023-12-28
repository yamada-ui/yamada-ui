import type { Meta, StoryFn } from "@storybook/react"
import { GridItem, SimpleGrid } from "@yamada-ui/react"

type Story = StoryFn<typeof SimpleGrid>

const meta: Meta<typeof SimpleGrid> = {
  title: "Components / Layouts / SimpleGrid",
  component: SimpleGrid,
}

export default meta

export const basic: Story = () => {
  return (
    <SimpleGrid w="full" columns={{ base: 2, md: 1 }} gap="md">
      <GridItem
        p="md"
        rounded="4"
        bg="primary"
        color="white"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        p="md"
        rounded="4"
        bg="secondary"
        color="white"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        p="md"
        rounded="4"
        bg="warning"
        color="white"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem p="md" rounded="4" bg="danger" color="white" textAlign="center">
        GridItem
      </GridItem>
    </SimpleGrid>
  )
}

export const withGap: Story = () => {
  return (
    <SimpleGrid w="full" columns={2} columnGap="lg" rowGap="md">
      <GridItem
        p="md"
        rounded="4"
        bg="primary"
        color="white"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        p="md"
        rounded="4"
        bg="secondary"
        color="white"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        p="md"
        rounded="4"
        bg="warning"
        color="white"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem p="md" rounded="4" bg="danger" color="white" textAlign="center">
        GridItem
      </GridItem>
    </SimpleGrid>
  )
}

export const withMinChildWidth: Story = () => {
  return (
    <SimpleGrid w="full" minChildWidth={{ base: "3xs", lg: 100 }} gap="md">
      <GridItem
        p="md"
        rounded="4"
        bg="primary"
        color="white"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        p="md"
        rounded="4"
        bg="secondary"
        color="white"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem
        p="md"
        rounded="4"
        bg="warning"
        color="white"
        textAlign="center"
      >
        GridItem
      </GridItem>

      <GridItem p="md" rounded="4" bg="danger" color="white" textAlign="center">
        GridItem
      </GridItem>
    </SimpleGrid>
  )
}
