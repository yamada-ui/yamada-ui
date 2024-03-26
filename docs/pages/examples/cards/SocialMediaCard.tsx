import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"

export const SocialMediaCard = memo(() => {
  return (
    <Card rounded="xl" variant="outline">
      <CardHeader>
        <Avatar src="https://avatars.githubusercontent.com/u/84060430?v=4" />
        <VStack gap={0}>
          <Text>Hirotomo Yamada</Text>
          <Text color="muted">@hirotomoyamada</Text>
        </VStack>
        <Button colorScheme="primary" rounded="full" px={6} size="sm">
          Follow
        </Button>
      </CardHeader>
      <CardBody>
        <Text color="muted">
          UI Designer & Developer / Currently planning & producing Yamada UI,
          Yamada Colors / Contributing Next.js, Chakra UI, Mantine, Refine
        </Text>
      </CardBody>
      <CardFooter>
        <Text color="muted">
          <Text as="span" fontWeight="semibold">
            200
          </Text>{" "}
          Following
        </Text>
        <Text color="muted">
          <Text as="span" fontWeight="semibold">
            6000
          </Text>{" "}
          Followers
        </Text>
      </CardFooter>
    </Card>
  )
})

SocialMediaCard.displayName = "SocialMediaCard"
