import type { Meta } from "@storybook/react-vite"
import { Box } from "../../components/box"
import { useBreakpointEffect } from "./use-breakpoint-effect"
import { useBreakpointState } from "./use-breakpoint-state"

const meta: Meta = {
  title: "Hooks / useBreakpointEffect",
}

export default meta

export const Basic = () => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    sm: "mobile",
    md: "tablet",
  })

  useBreakpointEffect((breakpoint) => {
    if (breakpoint === "sm") {
      setDevice("mobile")
    } else if (breakpoint === "md") {
      setDevice("tablet")
    } else {
      setDevice("desktop")
    }
  }, [])

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
      The current device is "{device}"
    </Box>
  )
}
