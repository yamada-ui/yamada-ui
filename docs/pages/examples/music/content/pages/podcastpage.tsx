import { Text, Center, Icon, Button, Flex } from "@yamada-ui/react"
import React from "react"
import { LuRadioTower } from "react-icons/lu"
import TitleBlockComponent from "../components/titleblock"

const Podcastpage = () => {
  return (
    <>
      <TitleBlockComponent
        title="New Episodes"
        outline="Your favorite podcasts. Updated daily."
      />

      <Center borderStyle="dotted" borderColor="gray" borderWidth={1} h="lg">
        <Flex direction="column" as={Center} gap={4}>
          <Icon as={LuRadioTower} size="5xl" />
          <Text as="b">No episodes added</Text>
          <Text fontSize="sm">
            You have not added any podcasts. Add one below.
          </Text>

          <Button size="md" variant="outline">
            Add podcast
          </Button>
        </Flex>
      </Center>
    </>
  )
}

export default Podcastpage
