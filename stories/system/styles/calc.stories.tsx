import { Center } from "@yamada-ui/react"

export default {
  title: "System / Styles / Calc",
}

export const basic = () => {
  return (
    <Center
      w="calc(lg / 2)"
      bg="primary"
      p="calc(md + md)"
      rounded="md"
      color="white"
    >
      Calc
    </Center>
  )
}

export const nested = () => {
  return (
    <Center
      w="calc(lg - calc(2xs * 2))"
      bg="primary"
      p="calc(md + md)"
      rounded="md"
      color="white"
    >
      Calc
    </Center>
  )
}

export const useNumericToken = () => {
  return (
    <Center
      w="calc(100% / $spaces.2)"
      bg="primary"
      p="calc(md + md)"
      rounded="md"
      color="white"
    >
      Use "$"
    </Center>
  )
}
