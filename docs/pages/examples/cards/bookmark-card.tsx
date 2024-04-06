import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  VStack,
  Spacer,
  IconButton,
  Image,
} from "@yamada-ui/react"
import { memo } from "react"
import { FaRegBookmark } from "react-icons/fa"

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

        <IconButton variant="ghost" icon={<FaRegBookmark />} />
      </CardHeader>

      <CardBody>
        <Image
          src="https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Japan"
          w="full"
          rounded="md"
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
