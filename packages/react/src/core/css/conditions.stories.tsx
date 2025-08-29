import { Box } from "../../components/box"
import { Center } from "../../components/center"
import { HStack, VStack } from "../../components/stack"
import { Text } from "../../components/text"
import { Wrap } from "../../components/wrap"

export default {
  title: "Styled System / Conditions",
}

export const After = () => {
  return (
    <Box
      bg="bg.contrast"
      color="fg.contrast"
      m="lg"
      p="lg"
      pos="relative"
      rounded="l3"
      _after={{
        bg: "secondary",
        color: "white",
        content: "'after'",
        left: "lg",
        p: "lg",
        pos: "absolute",
        rounded: "lg",
        top: "lg",
      }}
    >
      Box
    </Box>
  )
}

export const Before = () => {
  return (
    <Box
      bg="bg.contrast"
      color="fg.contrast"
      m="lg"
      p="lg"
      pos="relative"
      rounded="l3"
      _before={{
        bg: "secondary",
        color: "white",
        content: "'before'",
        left: "-lg",
        p: "lg",
        pos: "absolute",
        rounded: "lg",
        top: "-lg",
      }}
    >
      Box
    </Box>
  )
}

export const Hover = () => {
  return (
    <Box
      bg="bg.contrast"
      color="fg.contrast"
      cursor="pointer"
      p="md"
      rounded="l2"
      transitionDuration="slower"
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
      _hover={{ bg: "secondary" }}
    >
      Please Hover
    </Box>
  )
}

export const Group = () => {
  return (
    <VStack
      borderWidth="1px"
      focusVisibleRing="outline"
      p="md"
      role="group"
      rounded="l2"
      tabIndex={0}
      w="auto"
    >
      <Text textAlign="center">Focus me!</Text>

      <HStack>
        <Center p="md" _groupFocus={{ color: "success" }}>
          1
        </Center>
        <Center p="md" _groupFocus={{ color: "warning" }}>
          2
        </Center>
        <Center p="md" _groupFocus={{ color: "danger" }}>
          3
        </Center>
      </HStack>
    </VStack>
  )
}

export const Peer = () => {
  return (
    <HStack>
      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        _peerFocus={{ bg: "secondary" }}
      >
        Focus the peer
      </Center>

      <Center
        data-peer
        borderWidth="1px"
        focusVisibleRing="outline"
        p="md"
        rounded="l2"
        tabIndex={0}
      >
        Focus me!
      </Center>

      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        _peerFocus={{ bg: "secondary" }}
      >
        Focus the peer
      </Center>
    </HStack>
  )
}

export const Orientation = () => {
  return (
    <Box
      bg="bg.contrast"
      color="fg.contrast"
      p="md"
      rounded="l3"
      _portrait={{ bg: "secondary" }}
    >
      Box
    </Box>
  )
}

export const Other = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <Wrap gap="md">
      {numbers.map((number) => (
        <Center
          key={number}
          boxSize="5xs"
          color="white"
          rounded="l2"
          _even={{ bg: "blue.500" }}
          _odd={{ bg: "red.500" }}
        >
          {number}
        </Center>
      ))}
    </Wrap>
  )
}
