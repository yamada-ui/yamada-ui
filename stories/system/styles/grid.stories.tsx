import { Grid, GridItem, VStack } from "@yamada-ui/react"

export default {
  title: "System / Styles / Grid",
}

export const repeat = () => {
  return (
    <VStack
      p="md"
      rounded="md"
      borderWidth="1px"
      resize="inline"
      overflow="auto"
    >
      <Grid
        w="full"
        templateColumns="repeat(fill, minmax(min(100%, sm), 1fr))"
        gap="md"
      >
        <GridItem
          p="md"
          rounded="4"
          bg="primary"
          color="white"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          p="md"
          rounded="4"
          bg="secondary"
          color="white"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          p="md"
          rounded="4"
          bg="warning"
          color="white"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          p="md"
          rounded="4"
          bg="danger"
          color="white"
          textAlign="center"
        >
          Item
        </GridItem>
      </Grid>
    </VStack>
  )
}

export const minmax = () => {
  return (
    <VStack
      p="md"
      rounded="md"
      borderWidth="1px"
      resize="inline"
      overflow="auto"
    >
      <Grid w="full" templateColumns="minmax(2xs, xs) 1fr 1fr" gap="md">
        <GridItem
          p="md"
          rounded="4"
          bg="primary"
          color="white"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          p="md"
          rounded="4"
          bg="secondary"
          color="white"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          p="md"
          rounded="4"
          bg="warning"
          color="white"
          textAlign="center"
        >
          Item
        </GridItem>

        <GridItem
          p="md"
          rounded="4"
          bg="danger"
          color="white"
          textAlign="center"
        >
          Item
        </GridItem>
      </Grid>
    </VStack>
  )
}
