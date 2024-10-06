import { Bookmark } from "@yamada-ui/lucide"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
    <Card
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader>
        <VStack gap="xs">
          <Heading as="h2" size="md">
            Japan
          </Heading>

          <Text color="muted">Tokyo, Japan</Text>
        </VStack>

        <IconButton icon={<Bookmark fontSize="2xl" />} variant="ghost" />
      </CardHeader>

      <CardBody>
        <Image
          alt="Japan"
          rounded="md"
          src="https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          w="full"
        />
      </CardBody>

      <CardFooter>
        <Text>Photo by Pixabay from Pexels</Text>

        <Spacer />

        <Button colorScheme="primary">Explore</Button>
      </CardFooter>
    </Card>
  )
})

BookmarkCard.displayName = "BookmarkCard"
