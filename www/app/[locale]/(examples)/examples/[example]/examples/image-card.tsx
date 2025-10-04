import {
  Button,
  Card,
  Heading,
  Separator,
  Spacer,
  Tag,
  Text,
} from "@yamada-ui/react"
import { memo } from "react"

export const ImageCard = memo(() => {
  return (
    <Card.Root
      variant="outline"
      bgImage="https://picsum.photos/400?grayscale"
      bgSize="cover"
      breakInside="avoid"
      h="sm"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Header>
        <Tag>New</Tag>
      </Card.Header>

      <Card.Body>
        <Heading as="h2" size="lg">
          Example
        </Heading>
      </Card.Body>

      <Separator />

      <Card.Footer backdropFilter="blur(10px)" pt={4} roundedBottom="xl">
        <Text color="whiteAlpha.700">Captured on 26 March 2024</Text>

        <Spacer />

        <Button colorScheme="primary">Continue</Button>
      </Card.Footer>
    </Card.Root>
  )
})

ImageCard.displayName = "ImageCard"
