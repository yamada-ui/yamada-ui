import { Center, VStack } from "@yamada-ui/react"

export default {
  title: "System / Styles / Min Max Clamp",
}

export const min = () => {
  return (
    <VStack
      p="md"
      rounded="md"
      borderWidth="1px"
      resize="inline"
      overflow="auto"
    >
      <Center w="min(100%, lg)" bg="primary" p="md" rounded="md" color="white">
        Min
      </Center>

      <Center
        w="min(100%, calc(md + md))"
        bg="primary"
        p="md"
        rounded="md"
        color="white"
      >
        Min with calc
      </Center>

      <Center w="min(md)" bg="secondary" p="md" rounded="md" color="white">
        Omitted Min
      </Center>
    </VStack>
  )
}

export const max = () => {
  return (
    <VStack
      p="md"
      rounded="md"
      borderWidth="1px"
      resize="inline"
      overflow="auto"
    >
      <Center w="max(100%, lg)" bg="primary" p="md" rounded="md" color="white">
        Max
      </Center>

      <Center
        w="max(100%, calc(md + md))"
        bg="primary"
        p="md"
        rounded="md"
        color="white"
      >
        Max with calc
      </Center>

      <Center w="max(md)" bg="secondary" p="md" rounded="md" color="white">
        Omitted Max
      </Center>
    </VStack>
  )
}

export const clamp = () => {
  return (
    <VStack
      p="md"
      rounded="md"
      borderWidth="1px"
      resize="inline"
      overflow="auto"
    >
      <Center
        w="clamp(md, 100%, xl)"
        bg="primary"
        p="md"
        rounded="md"
        color="white"
      >
        Clamp
      </Center>

      <Center
        w="clamp(md, 100%, calc(md + md))"
        bg="primary"
        p="md"
        rounded="md"
        color="white"
      >
        Clamp with calc
      </Center>

      <Center
        w="clamp(md, lg)"
        bg="secondary"
        p="md"
        rounded="md"
        color="white"
      >
        Omitted Clamp
      </Center>
    </VStack>
  )
}
