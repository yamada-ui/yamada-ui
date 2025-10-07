import {
  BookmarkIcon,
  Button,
  Card,
  Heading,
  IconButton,
  Image,
  Spacer,
  Text,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"

export const BookmarkCard = memo(() => {
  return (
    <Card.Root
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Header>
        <VStack gap="xs">
          <Heading as="h2" size="md">
            Japan
          </Heading>

          <Text color="muted">Tokyo, Japan</Text>
        </VStack>

        <IconButton variant="ghost" icon={<BookmarkIcon fontSize="2xl" />} />
      </Card.Header>

      <Card.Body>
        <Image
          src="https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Japan"
          rounded="md"
          w="full"
        />
      </Card.Body>

      <Card.Footer>
        <Text>Photo by Pixabay from Pexels</Text>

        <Spacer />

        <Button colorScheme="primary">Explore</Button>
      </Card.Footer>
    </Card.Root>
  )
})

BookmarkCard.displayName = "BookmarkCard"
