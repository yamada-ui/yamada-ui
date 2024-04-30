import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
  Image,
} from "@yamada-ui/react"
import { memo } from "react"

export const OverflowImageCard = memo(() => {
  return (
    <Card breakInside="avoid" rounded="xl" variant="outline" h="xl">
      <CardHeader
        h="md"
        overflow="hidden"
        as={Image}
        src="https://picsum.photos/400"
        objectFit="cover"
        p="0"
        roundedTop="xl"
      />

      <CardBody gap="xs">
        <Heading as="h2" size="md">
          Yamada UI
        </Heading>

        <Text color="muted">
          Yamada UI is a versatile React component library, unleashing the power
          of your application's animation and flexibility. It provides an
          intuitive and efficient way to integrate advanced styling into your
          application, bringing your ideas to life.
        </Text>
      </CardBody>

      <Divider />

      <CardFooter backdropFilter="blur(10px)" roundedBottom="xl" pt="md">
        <Text fontSize="sm">1.2k views</Text>

        <Divider orientation="vertical" />

        <Text fontSize="sm">1 hour ago</Text>
      </CardFooter>
    </Card>
  )
})

OverflowImageCard.displayName = "OverflowImageCard"
