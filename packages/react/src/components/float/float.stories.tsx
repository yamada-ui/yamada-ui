import type { Meta, StoryFn } from "@storybook/react"
import { Box } from "../box"
import { Grid, GridItem } from "../grid"
import { Float } from "./float"

type Story = StoryFn<typeof Float>

const meta: Meta<typeof Float> = {
  component: Float,
  title: "Components / Float",
}

export default meta

export const Basic: Story = () => {
  return (
    <Box bg="bg.panel" boxSize="3xs" position="relative">
      <Float
        bg="bg.contrast"
        color="fg.contrast"
        fontSize="sm"
        px="1.5"
        rounded="l1"
      >
        New
      </Float>
    </Box>
  )
}

export const Placement: Story = () => {
  const placements = [
    "start-start",
    "start-center",
    "start-end",
    "center-start",
    "center-center",
    "center-end",
    "end-start",
    "end-center",
    "end-end",
  ] as const

  return (
    <Grid gap="lg" p="lg" templateColumns="repeat(3, 1fr)">
      {placements.map((placement) => (
        <GridItem
          key={placement}
          bg="bg.panel"
          boxSize="3xs"
          position="relative"
        >
          <Float
            bg="bg.contrast"
            color="fg.contrast"
            fontSize="sm"
            placement={placement}
            px="1.5"
            rounded="md"
          >
            New
          </Float>
        </GridItem>
      ))}
    </Grid>
  )
}

export const Offset: Story = () => {
  return (
    <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      <GridItem bg="bg.panel" boxSize="3xs" position="relative">
        <Float
          bg="bg.contrast"
          color="fg.contrast"
          fontSize="sm"
          offset="md"
          placement="start-start"
          px="1.5"
          rounded="md"
        >
          New
        </Float>
      </GridItem>

      <GridItem bg="bg.panel" boxSize="3xs" position="relative">
        <Float
          bg="bg.contrast"
          color="fg.contrast"
          fontSize="sm"
          offset={["0", "md"]}
          placement="center-start"
          px="1.5"
          rounded="md"
        >
          New
        </Float>
      </GridItem>

      <GridItem bg="bg.panel" boxSize="3xs" position="relative">
        <Float
          bg="bg.contrast"
          color="fg.contrast"
          fontSize="sm"
          offset={["md", "0"]}
          placement="end-end"
          px="1.5"
          rounded="md"
        >
          New
        </Float>
      </GridItem>
    </Grid>
  )
}
