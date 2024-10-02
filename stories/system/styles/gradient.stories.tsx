import { Box, Heading } from "@yamada-ui/react"

export default {
  title: "System / Styles / Gradient",
}

export const withToken = () => {
  return (
    <Box
      bgGradient="linear(to-r, green.200, pink.500)"
      height="xs"
      rounded="lg"
      w="full"
    />
  )
}

export const withColorCode = () => {
  return (
    <Heading
      bgClip="text"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      isTruncated
      size="2xl"
      w="full"
    >
      クリリンのことか……クリリンのことかーーーっ！！！！！
    </Heading>
  )
}

export const withBreakpoint = () => {
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
