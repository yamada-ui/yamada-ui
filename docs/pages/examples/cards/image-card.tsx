import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Separator,
  Spacer,
  Tag,
  Text,
} from "@yamada-ui/react"
import { memo } from "react"

export const ImageCard = memo(() => {
  return (
    <Card
      variant="outline"
      bgImage="https://picsum.photos/400?grayscale"
      bgSize="cover"
      breakInside="avoid"
      h="sm"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <CardHeader>
        <Tag>New</Tag>
      </CardHeader>

      <CardBody>
        <Heading as="h2" size="lg">
          Example
        </Heading>
      </CardBody>

      <Separator />

      <CardFooter backdropFilter="blur(10px)" pt={4} roundedBottom="xl">
        <Text color="whiteAlpha.700">Captured on 26 March 2024</Text>

        <Spacer />

        <Button colorScheme="primary">Continue</Button>
      </CardFooter>
    </Card>
  )
})

ImageCard.displayName = "ImageCard"
