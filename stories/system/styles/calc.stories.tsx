import { Center } from "@yamada-ui/react"

export default {
  title: "System / Styles / Calc",
}

export const basic = () => {
  return (
    <Center
      w="calc(lg - sm)"
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
      w="calc(lg - calc(2xs + 2xs))"
      bg="primary"
      p="calc(md + md)"
      rounded="md"
      color="white"
    >
      Calc
    </Center>
  )
}

export const notUseToken = () => {
  return (
    <Center
      w="calc(100% / !2)"
      bg="primary"
      p="calc(md + md)"
      rounded="md"
      color="white"
    >
      Use "!"
    </Center>
  )
}
