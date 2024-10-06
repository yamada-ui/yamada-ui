import { Box, Center, HStack, Text, VStack, Wrap } from "@yamada-ui/react"

export default {
  title: "System / Styles / Pseudo",
}

export const after = () => {
  return (
    <Box
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
      bg="primary"
      color="white"
      m="lg"
      p="lg"
      pos="relative"
      rounded="lg"
    >
      Box
    </Box>
  )
}

export const before = () => {
  return (
    <Box
      _before={{
        bg: "danger",
        color: "white",
        content: "'before'",
        left: "-lg",
        p: "lg",
        pos: "absolute",
        rounded: "lg",
        top: "-lg",
      }}
      bg="warning"
      color="white"
      m="lg"
      p="lg"
      pos="relative"
      rounded="lg"
    >
      Box
    </Box>
  )
}

export const hover = () => {
  return (
    <Box
      _hover={{ bg: "secondary" }}
      bg="primary"
      color="white"
      cursor="pointer"
      p="md"
      rounded="md"
      transitionDuration="slower"
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
    >
      Please Hover
    </Box>
  )
}

export const group = () => {
  return (
    <VStack
      _focusVisible={{ boxShadow: "outline" }}
      borderWidth="1px"
      outline="0"
      p="md"
      role="group"
      rounded="md"
      tabIndex={0}
      w="auto"
    >
      <Text textAlign="center">Focus me!</Text>

      <HStack>
        <Center _groupFocus={{ color: "success" }} p="md">
          1
        </Center>
        <Center _groupFocus={{ color: "warning" }} p="md">
          2
        </Center>
        <Center _groupFocus={{ color: "danger" }} p="md">
          3
        </Center>
      </HStack>
    </VStack>
  )
}

export const peer = () => {
  return (
    <HStack>
      <Center
        _focusVisible={{ boxShadow: "outline" }}
        borderWidth="1px"
        outline="0"
        p="md"
        rounded="md"
        tabIndex={0}
        data-peer
      >
        Focus me!
      </Center>

      <Center _peerFocus={{ bg: "secondary" }} bg="primary" p="md" rounded="md">
        Focus the peer
      </Center>
    </HStack>
  )
}

export const other = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Wrap gap="md">
      {numbers.map((number) => (
        <Center
          key={number}
          _even={{ bg: "blue.500" }}
          _odd={{ bg: "red.500" }}
          boxSize="5xs"
          color="white"
          rounded="md"
        >
          {number}
        </Center>
      ))}
    </Wrap>
  )
}
