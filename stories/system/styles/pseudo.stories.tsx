import { Box, Center, HStack, Text, VStack, Wrap } from "@yamada-ui/react"

export default {
  title: "System / Styles / Pseudo",
}

export const after = () => {
  return (
    <Box
      bg="primary"
      color="white"
      m="lg"
      p="lg"
      pos="relative"
      rounded="lg"
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

export const before = () => {
  return (
    <Box
      bg="warning"
      color="white"
      m="lg"
      p="lg"
      pos="relative"
      rounded="lg"
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
    >
      Box
    </Box>
  )
}

export const hover = () => {
  return (
    <Box
      bg="primary"
      color="white"
      cursor="pointer"
      p="md"
      rounded="md"
      transitionDuration="slower"
      transitionProperty="all"
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
      borderWidth="1px"
      outline="0"
      p="md"
      role="group"
      rounded="md"
      tabIndex={0}
      w="auto"
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
        borderWidth="1px"
        outline="0"
        p="md"
        rounded="md"
        tabIndex={0}
        _focusVisible={{ boxShadow: "outline" }}
      >
        Focus me!
      </Center>

      <Center bg="primary" p="md" rounded="md" _peerFocus={{ bg: "secondary" }}>
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
          boxSize="5xs"
          color="white"
          rounded="md"
          _even={{ bg: "blue.500" }}
          _odd={{ bg: "red.500" }}
        >
          {number}
        </Center>
      ))}
    </Wrap>
  )
}
