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
  Icon,
} from "@yamada-ui/react"
import { Bookmark } from "lucide-react"
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

        <IconButton variant="ghost" icon={<Icon as={Bookmark} size="2xl" />} />
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
