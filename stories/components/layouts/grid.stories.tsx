import type { Meta, StoryFn } from "@storybook/react"
import { Grid, GridItem } from "@yamada-ui/react"

type Story = StoryFn<typeof Grid>

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Components / Layouts / Grid",
}

export default meta

export const templateColumns: Story = () => {
  return (
    <Grid gap="md" templateColumns="repeat(4, 1fr)" w="full">
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
    </Grid>
  )
}

export const templateRows: Story = () => {
  return (
    <Grid gap="md" templateRows="repeat(4, 1fr)" w="full">
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
    </Grid>
  )
}

export const templateColumnsAndRows: Story = () => {
  return (
    <Grid
      gap="md"
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(4, 1fr)"
      w="full"
    >
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
    </Grid>
  )
}

export const templateAreas: Story = () => {
  return (
    <Grid
      gap="md"
      templateAreas={`
        "one one two three"
        "four five two six"
        "four seven seven eight"
      `}
      w="full"
    >
      <GridItem
        alignItems="center"
        area="one"
        bg="primary"
        color="white"
        justifyContent="center"
        p="md"
        rounded="4"
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        area="two"
        bg="secondary"
        color="white"
        justifyContent="center"
        p="md"
        rounded="4"
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        area="three"
        bg="warning"
        color="white"
        justifyContent="center"
        p="md"
        rounded="4"
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        area="four"
        bg="danger"
        color="white"
        justifyContent="center"
        p="md"
        rounded="4"
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        area="five"
        bg="primary"
        color="white"
        justifyContent="center"
        p="md"
        rounded="4"
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        area="six"
        bg="secondary"
        color="white"
        justifyContent="center"
        p="md"
        rounded="4"
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        area="seven"
        bg="warning"
        color="white"
        justifyContent="center"
        p="md"
        rounded="4"
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        area="eight"
        bg="danger"
        color="white"
        justifyContent="center"
        p="md"
        rounded="4"
      >
        GridItem
      </GridItem>
    </Grid>
  )
}

export const customStartAndEnd: Story = () => {
  return (
    <Grid
      gap="md"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
      w="full"
    >
      <GridItem
        alignItems="center"
        bg="primary"
        color="white"
        colSpan={2}
        justifyContent="center"
        p="md"
        rounded="4"
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        bg="secondary"
        color="white"
        colSpan={2}
        justifyContent="center"
        p="md"
        rounded="4"
        rowSpan={3}
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        bg="warning"
        color="white"
        justifyContent="center"
        p="md"
        rounded="4"
        rowEnd={4}
        rowStart={2}
      >
        GridItem
      </GridItem>

      <GridItem
        alignItems="center"
        bg="danger"
        colEnd={3}
        color="white"
        colStart={2}
        justifyContent="center"
        p="md"
        rounded="4"
        rowEnd={4}
        rowStart={2}
      >
        GridItem
      </GridItem>
    </Grid>
  )
}
