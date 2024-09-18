import { Box, Center, HStack, Text, VStack, Wrap } from "@yamada-ui/react"

export default {
  title: "System / Styles / Pseudo",
}

export const after = () => {
  return (
    <Box
      pos="relative"
      bg="primary"
      m="lg"
      p="lg"
      rounded="lg"
      color="white"
      _after={{
        content: "'after'",
        pos: "absolute",
        top: "lg",
        left: "lg",
        bg: "secondary",
        p: "lg",
        rounded: "lg",
        color: "white",
      }}
    >
      Box
    </Box>
  )
}

export const before = () => {
  return (
    <Box
      pos="relative"
      bg="warning"
      m="lg"
      p="lg"
      rounded="lg"
      color="white"
      _before={{
        content: "'before'",
        pos: "absolute",
        top: "-lg",
        left: "-lg",
        bg: "danger",
        p: "lg",
        rounded: "lg",
        color: "white",
      }}
    >
      Box
    </Box>
  )
}

export const hover = () => {
  return (
    <Box
      bg="primary"
      p="md"
      rounded="md"
      color="white"
      cursor="pointer"
      transitionProperty="all"
      transitionDuration="slower"
      transitionTimingFunction="ease-in-out"
      _hover={{ bg: "secondary" }}
    >
      Please Hover
    </Box>
  )
}

export const group = () => {
  return (
    <VStack
      role="group"
      tabIndex={0}
      w="auto"
      p="md"
      borderWidth="1px"
      rounded="md"
      outline="0"
      _focusVisible={{ boxShadow: "outline" }}
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

export const peer = () => {
  return (
    <HStack>
      <Center
        data-peer
        tabIndex={0}
        p="md"
        borderWidth="1px"
        rounded="md"
        outline="0"
        _focusVisible={{ boxShadow: "outline" }}
      >
        Focus me!
      </Center>

      <Center p="md" bg="primary" rounded="md" _peerFocus={{ bg: "secondary" }}>
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
          _odd={{ bg: "red.500" }}
          _even={{ bg: "blue.500" }}
          boxSize="5xs"
          rounded="md"
          color="white"
        >
          {number}
        </Center>
      ))}
    </Wrap>
  )
}
