import {
  Button,
  Center,
  Heading,
  Loading,
  Text,
  VStack,
} from "@yamada-ui/react"

export function Processing() {
  return (
    <VStack
      as="section"
      layerStyle="card"
      alignItems="center"
      bg="bg.panel"
      gap="md"
      mb="{space}"
      p="{space}"
    >
      <Center py="{space}">
        <Loading.Oval color="primary" fontSize="6xl" />
      </Center>

      <Heading as="h2" size="xl">
        Processing your request
      </Heading>

      <Text
        color="fg.muted"
        fontSize="sm"
        textAlign="center"
        textWrap="balance"
      >
        Please wait while we process your request. Do not refresh the page.
      </Text>

      <Button variant="subtle">Cancel</Button>
    </VStack>
  )
}
