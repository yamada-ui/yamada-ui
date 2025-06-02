import type { Meta } from "@storybook/react-vite"
import { Box } from "../../components/box"
import { useBreakpoint } from "./use-breakpoint"
import { useBreakpointValue } from "./use-breakpoint-value"

const meta: Meta = {
  title: "Hooks / useBreakpointValue",
}

export default meta

export const Basic = () => {
  const breakpoint = useBreakpoint()
  const bg = useBreakpointValue({
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500",
    "2xl": "pink.500",
  })

  return (
    <Box
      bg={bg}
      color="white"
      p="md"
      rounded="md"
      transitionDuration="slower"
      transitionProperty="all"
    >
      The current breakpoint is "{breakpoint}"
    </Box>
  )
}
