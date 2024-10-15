import { Center } from "@yamada-ui/react"

export default {
  title: "System / Styles / Calc",
}

export const basic = () => {
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

export const nested = () => {
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

export const useNumericToken = () => {
  return (
    <Center
      bg="primary"
      color="white"
      p="calc(md + md)"
      rounded="md"
      w="calc(100% / $spaces.2)"
    >
      Use "$"
    </Center>
  )
}
