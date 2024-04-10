import { Flex, Divider, VStack } from "@yamada-ui/react"
import { memo } from "react"
import Content from "./content/index"
import Header from "./header/index"
import Sidemenu from "./sidemenu/index"

export const Music = memo(() => {
  return (
    <VStack gap={0}>
      <Header />
      <Flex gap="md" h="100vh">
        <Sidemenu />
        <Divider orientation="vertical" variant="solid" />
        <Content />
      </Flex>
    </VStack>
  )
})

Music.displayName = "Music"
