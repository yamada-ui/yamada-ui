import type { Meta } from "@storybook/react-vite"
import { Box } from "../../components/box"
import { useBreakpointState } from "./use-breakpoint-state"
import { useUpdateBreakpointEffect } from "./use-update-breakpoint-effect"

const meta: Meta = {
  title: "Hooks / useUpdateBreakpointEffect",
}

export default meta

export const Basic = () => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    sm: "mobile",
    md: "tablet",
  })

  useUpdateBreakpointEffect((breakpoint) => {
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
      rounded="l2"
      transitionDuration="moderate"
      transitionProperty="all"
    >
      The current device is "{device}"
    </Box>
  )
}
