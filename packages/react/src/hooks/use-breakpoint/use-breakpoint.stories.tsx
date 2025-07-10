import type { Meta } from "@storybook/react-vite"
import { Box } from "../../components/box"
import { useBreakpoint } from "./use-breakpoint"

const meta: Meta = {
  title: "Hooks / useBreakpoint",
}

export default meta

export const Basic = () => {
  const breakpoint = useBreakpoint()

  return (
    <Box
      bg={{
        base: "red.500",
        sm: "purple.500",
        md: "yellow.500",
        lg: "green.500",
        xl: "blue.500",
      }}
      color="white"
      p="md"
      rounded="md"
      transitionDuration="moderate"
      transitionProperty="all"
    >
      The current breakpoint is "{breakpoint}"
    </Box>
  )
}
