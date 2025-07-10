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
        {Array.from({ length: 4 }).map((_, index) => (
          <GridItem
            key={index}
            bg="bg.contrast"
            color="fg.contrast"
            p="md"
            rounded="4"
            textAlign="center"
          >
            Item
          </GridItem>
        ))}
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
        {Array.from({ length: 4 }).map((_, index) => (
          <GridItem
            key={index}
            bg="bg.contrast"
            color="fg.contrast"
            p="md"
            rounded="4"
            textAlign="center"
          >
            Item
          </GridItem>
        ))}
      </Grid>
    </VStack>
  )
}
