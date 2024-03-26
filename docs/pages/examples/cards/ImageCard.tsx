import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
  Spacer,
  Tag,
} from "@yamada-ui/react"
import { memo } from "react"

export const ImageCard = memo(() => {
  return (
    <Card
      rounded="xl"
      variant="outline"
      h="sm"
      bgImage="url('https://picsum.photos/400?grayscale')"
      bgSize="cover"
    >
      <CardHeader>
        <Tag>New</Tag>
      </CardHeader>
      <CardBody pt={2}>
        <Heading size="md">Example</Heading>
      </CardBody>
      <Divider />
      <CardFooter backdropFilter="blur(10px)" roundedBottom="xl" pt={4}>
        <Text>Captured on 26 March 2024</Text>
        <Spacer />
        <Button colorScheme="primary">Continue</Button>
      </CardFooter>
    </Card>
  )
})

ImageCard.displayName = "ImageCard"
