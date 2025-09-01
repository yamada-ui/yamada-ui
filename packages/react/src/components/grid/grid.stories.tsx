import type { Meta, StoryFn } from "@storybook/react-vite"
import { Grid } from "./"

type Story = StoryFn<typeof Grid.Root>

const meta: Meta<typeof Grid.Root> = {
  component: Grid.Root,
  title: "Components / Grid",
}

export default meta

export const TemplateColumns: Story = () => {
  return (
    <Grid.Root gap="md" templateColumns="repeat(4, 1fr)" w="full">
      <Grid.Item bg="info" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="success"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="warning"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="danger"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>
    </Grid.Root>
  )
}

export const TemplateRows: Story = () => {
  return (
    <Grid.Root gap="md" templateRows="repeat(4, 1fr)" w="full">
      <Grid.Item bg="info" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="success"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="warning"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="danger"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>
    </Grid.Root>
  )
}

export const TemplateColumnsAndRows: Story = () => {
  return (
    <Grid.Root
      gap="md"
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(4, 1fr)"
      w="full"
    >
      <Grid.Item bg="info" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="success"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="warning"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="danger"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item bg="info" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="success"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="warning"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="danger"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item bg="info" color="white" p="md" rounded="l2" textAlign="center">
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="success"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="warning"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        bg="danger"
        color="white"
        p="md"
        rounded="l2"
        textAlign="center"
      >
        GridItem
      </Grid.Item>
    </Grid.Root>
  )
}

export const TemplateAreas: Story = () => {
  return (
    <Grid.Root
      gap="md"
      templateAreas={`
        "one one two three"
        "four five two six"
        "four seven seven eight"
      `}
      w="full"
    >
      <Grid.Item
        alignItems="center"
        area="one"
        bg="info"
        color="white"
        justifyContent="center"
        p="md"
        rounded="l2"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        area="two"
        bg="success"
        color="white"
        justifyContent="center"
        p="md"
        rounded="l2"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        area="three"
        bg="warning"
        color="white"
        justifyContent="center"
        p="md"
        rounded="l2"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        area="four"
        bg="danger"
        color="white"
        justifyContent="center"
        p="md"
        rounded="l2"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        area="five"
        bg="info"
        color="white"
        justifyContent="center"
        p="md"
        rounded="l2"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        area="six"
        bg="success"
        color="white"
        justifyContent="center"
        p="md"
        rounded="l2"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        area="seven"
        bg="warning"
        color="white"
        justifyContent="center"
        p="md"
        rounded="l2"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        area="eight"
        bg="danger"
        color="white"
        justifyContent="center"
        p="md"
        rounded="l2"
      >
        GridItem
      </Grid.Item>
    </Grid.Root>
  )
}

export const CustomStartAndEnd: Story = () => {
  return (
    <Grid.Root
      gap="md"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
      w="full"
    >
      <Grid.Item
        alignItems="center"
        bg="info"
        color="white"
        colSpan={2}
        justifyContent="center"
        p="md"
        rounded="l2"
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        bg="success"
        color="white"
        colSpan={2}
        justifyContent="center"
        p="md"
        rounded="l2"
        rowSpan={3}
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        bg="warning"
        color="white"
        justifyContent="center"
        p="md"
        rounded="l2"
        rowEnd={4}
        rowStart={2}
      >
        GridItem
      </Grid.Item>

      <Grid.Item
        alignItems="center"
        bg="danger"
        colEnd={3}
        color="white"
        colStart={2}
        justifyContent="center"
        p="md"
        rounded="l2"
        rowEnd={4}
        rowStart={2}
      >
        GridItem
      </Grid.Item>
    </Grid.Root>
  )
}
