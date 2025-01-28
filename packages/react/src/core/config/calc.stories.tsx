import { Center } from "../../components/center"
import { VStack } from "../../components/stack"

export default {
  title: "Styled System / Calc",
}

export const Basic = () => {
  return (
    <Center
      bg="primary"
      color="white"
      p="calc(md + md)"
      rounded="md"
      w="calc(lg / 2)"
    >
      Calc
    </Center>
  )
}

export const Nested = () => {
  return (
    <Center
      bg="primary"
      color="white"
      p="calc(md + md)"
      rounded="md"
      w="calc(lg - calc(2xs * 2))"
    >
      Calc
    </Center>
  )
}

export const UseNumericToken = () => {
  return (
    <Center
      bg="primary"
      color="white"
      p="calc(md + md)"
      rounded="md"
      w="calc(100% / {spaces.2})"
    >
      Use interpolated token
    </Center>
  )
}

export const Min = () => {
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

export const Max = () => {
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

export const Clamp = () => {
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
