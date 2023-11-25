import type { Meta } from "@storybook/react"
import { Box, useBreakpoint, useBreakpointValue } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useBreakpoint",
}

export default meta

export const basic = () => {
  const breakpoint = useBreakpoint()

  return (
    <Box
      bg={{
        base: "red.500",
        xl: "blue.500",
        lg: "green.500",
        md: "yellow.500",
        sm: "purple.500",
      }}
      p="md"
      rounded="md"
      color="white"
      transitionProperty="all"
      transitionDuration="slower"
    >
      The current breakpoint is "{breakpoint}"
    </Box>
  )
}

export const withValue = () => {
  const breakpoint = useBreakpoint()
  const bg = useBreakpointValue({
    base: "red.500",
    xl: "blue.500",
    lg: "green.500",
    md: "yellow.500",
    sm: "purple.500",
  })

  return (
    <Box
      bg={bg}
      p="md"
      rounded="md"
      color="white"
      transitionProperty="all"
      transitionDuration="slower"
    >
      The current breakpoint is "{breakpoint}"
    </Box>
  )
}
