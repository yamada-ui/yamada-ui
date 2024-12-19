import { Grid, GridItem } from "../../components/grid"
import { VStack } from "../../components/stack"

export default {
  title: "Styled System / Grid",
}

export const Repeat = () => {
  return (
    <VStack
      borderWidth="1px"
      overflow="auto"
      p="md"
      resize="inline"
      rounded="md"
    >
      <Grid
        gap="md"
        templateColumns="repeat(fill, minmax(min(100%, sm), 1fr))"
        w="full"
      >
        <GridItem
          bg="primary"
          color="white"
          p="md"
          rounded="4"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          bg="secondary"
          color="white"
          p="md"
          rounded="4"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          bg="warning"
          color="white"
          p="md"
          rounded="4"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          bg="danger"
          color="white"
          p="md"
          rounded="4"
          textAlign="center"
        >
          Item
        </GridItem>
      </Grid>
    </VStack>
  )
}

export const Minmax = () => {
  return (
    <VStack
      borderWidth="1px"
      overflow="auto"
      p="md"
      resize="inline"
      rounded="md"
    >
      <Grid gap="md" templateColumns="minmax(2xs, xs) 1fr 1fr" w="full">
        <GridItem
          bg="primary"
          color="white"
          p="md"
          rounded="4"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          bg="secondary"
          color="white"
          p="md"
          rounded="4"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          bg="warning"
          color="white"
          p="md"
          rounded="4"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          bg="danger"
          color="white"
          p="md"
          rounded="4"
          textAlign="center"
        >
          Item
        </GridItem>
      </Grid>
    </VStack>
  )
}
