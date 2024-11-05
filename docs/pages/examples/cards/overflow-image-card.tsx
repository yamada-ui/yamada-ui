import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Separator,
  Text,
} from "@yamada-ui/react"
import { memo } from "react"

export const OverflowImageCard = memo(() => {
  return (
    <Card variant="outline" breakInside="avoid" h="xl" rounded="xl">
      <CardHeader
        as={Image}
        src="https://picsum.photos/400"
        h="md"
        objectFit="cover"
        overflow="hidden"
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

      <Separator />

      <CardFooter backdropFilter="blur(10px)" pt="md" roundedBottom="xl">
        <Text fontSize="sm">1.2k views</Text>

        <Separator orientation="vertical" />

        <Text fontSize="sm">1 hour ago</Text>
      </CardFooter>
    </Card>
  )
})

OverflowImageCard.displayName = "OverflowImageCard"
