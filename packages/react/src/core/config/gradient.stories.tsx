import { Box } from "../../components/box"
import { Heading } from "../../components/heading"

export default {
  title: "Styled System / Gradient",
}

export const WithToken = () => {
  return (
    <Box
      bgGradient="linear(to-r, green.200, pink.500)"
      height="xs"
      rounded="lg"
      w="full"
    />
  )
}

export const WithColorCode = () => {
  return (
    <Heading
      size="2xl"
      bgClip="text"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      truncated
      w="full"
    >
      クリリンのことか……クリリンのことかーーーっ！！！！！
    </Heading>
  )
}

export const WithBreakpoint = () => {
  return (
    <Box
      bgGradient={{
        base: "linear(to-tr, teal.300, yellow.400)",
        md: "linear(to-b, orange.100, purple.300)",
        lg: "linear(to-t, blue.200, teal.500)",
      }}
      height="xs"
      rounded="lg"
      w="full"
    />
  )
}
