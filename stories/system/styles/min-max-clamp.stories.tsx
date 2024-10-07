import { Center, VStack } from "@yamada-ui/react"

export default {
  title: "System / Styles / Min Max Clamp",
}

export const min = () => {
  return (
    <VStack
      borderWidth="1px"
      overflow="auto"
      p="md"
      resize="inline"
      rounded="md"
    >
      <Center bg="primary" color="white" p="md" rounded="md" w="min(100%, lg)">
        Min
      </Center>

      <Center
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        w="min(100%, calc(md + md))"
      >
        Min with calc
      </Center>

      <Center bg="secondary" color="white" p="md" rounded="md" w="min(md)">
        Omitted Min
      </Center>
    </VStack>
  )
}

export const max = () => {
  return (
    <VStack
      borderWidth="1px"
      overflow="auto"
      p="md"
      resize="inline"
      rounded="md"
    >
      <Center bg="primary" color="white" p="md" rounded="md" w="max(100%, lg)">
        Max
      </Center>

      <Center
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        w="max(100%, calc(md + md))"
      >
        Max with calc
      </Center>

      <Center bg="secondary" color="white" p="md" rounded="md" w="max(md)">
        Omitted Max
      </Center>
    </VStack>
  )
}

export const clamp = () => {
  return (
    <VStack
      borderWidth="1px"
      overflow="auto"
      p="md"
      resize="inline"
      rounded="md"
    >
      <Center
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        w="clamp(md, 100%, xl)"
      >
        Clamp
      </Center>

      <Center
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        w="clamp(md, 100%, calc(md + md))"
      >
        Clamp with calc
      </Center>

      <Center
        bg="secondary"
        color="white"
        p="md"
        rounded="md"
        w="clamp(md, lg)"
      >
        Omitted Clamp
      </Center>
    </VStack>
  )
}
