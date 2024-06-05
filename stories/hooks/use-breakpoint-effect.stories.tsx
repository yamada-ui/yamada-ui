import type { Meta } from "@storybook/react"
import {
  Box,
  useBreakpointEffect,
  useBreakpointState,
  useUpdateBreakpointEffect,
} from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useBreakpointEffect",
}

export default meta

export const basic = () => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    md: "tablet",
    sm: "mobile",
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
      The current device is "{device}"
    </Box>
  )
}

export const skipSideEffects = () => {
  const [device, setDevice] = useBreakpointState({
    base: "desktop",
    md: "tablet",
    sm: "mobile",
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
      The current device is "{device}"
    </Box>
  )
}
