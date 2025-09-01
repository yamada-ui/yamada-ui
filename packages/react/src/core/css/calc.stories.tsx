import { Center } from "../../components/center"
import { VStack } from "../../components/stack"

export default {
  title: "Styled System / Calc",
}

export const Basic = () => {
  return (
    <Center
      bg="bg.contrast"
      color="fg.contrast"
      p="calc(md + md)"
      rounded="l2"
      w="calc(lg / 2)"
    >
      Calc
    </Center>
  )
}

export const Nested = () => {
  return (
    <Center
      bg="bg.contrast"
      color="fg.contrast"
      p="calc(md + md)"
      rounded="l2"
      w="calc(lg - calc(2xs * 2))"
    >
      Calc
    </Center>
  )
}

export const NumericToken = () => {
  return (
    <Center
      bg="bg.contrast"
      color="fg.contrast"
      p="calc(md + md)"
      rounded="l2"
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
      rounded="l2"
    >
      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        w="min(100%, lg)"
      >
        Min
      </Center>

      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        w="min(100%, calc(md + md))"
      >
        Min with calc
      </Center>

      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        w="min(md)"
      >
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
      rounded="l2"
    >
      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        w="max(100%, lg)"
      >
        Max
      </Center>

      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        w="max(100%, calc(md + md))"
      >
        Max with calc
      </Center>

      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        w="max(md)"
      >
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
      rounded="l2"
    >
      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        w="clamp(md, 100%, xl)"
      >
        Clamp
      </Center>

      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        w="clamp(md, 100%, calc(md + md))"
      >
        Clamp with calc
      </Center>

      <Center
        bg="bg.contrast"
        color="fg.contrast"
        p="md"
        rounded="l2"
        w="clamp(md, lg)"
      >
        Omitted Clamp
      </Center>
    </VStack>
  )
}
