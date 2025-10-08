import {
  BookmarkIcon,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@yamada-ui/react"

export function Bookmark() {
  return (
    <VStack
      as="section"
      layerStyle="card"
      alignItems="center"
      bg="bg.panel"
      gap="md"
      mb="{space}"
      p="{space}"
    >
      <HStack w="full">
        <VStack flex="1" gap="xs">
          <Heading as="h2" size="xl">
            Japan
          </Heading>

          <Text color="fg.muted">Tokyo, Japan</Text>
        </VStack>

        <IconButton variant="ghost" icon={<BookmarkIcon />} />
      </HStack>

      <Image
        src="https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Japan"
        rounded="l2"
        w="full"
      />

      <HStack w="full">
        <Text flex="1">Photo by Pixabay from Pexels</Text>

        <Button colorScheme="primary">Explore</Button>
      </HStack>
    </VStack>
  )
}
