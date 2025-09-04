import type { FC } from "react"
import { useRef } from "react"
import { Box } from "../../components/box"
import { Text } from "../../components/text"
import { useBreakpoint, useBreakpointValue } from "../../hooks/use-breakpoint"
import { extendConfig, UIProvider } from "../../providers/ui-provider"

export default {
  title: "Styled System / Responsive",
}

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
        "2xl": "pink.500",
      }}
      color="white"
      p="md"
      rounded="l2"
      transitionDuration="moderate"
      transitionProperty="all"
    >
      The current breakpoint is "{breakpoint}"
    </Box>
  )
}

export const Direction = () => {
  const config = extendConfig({ breakpoint: { direction: "up" } })

  const App: FC = () => {
    const breakpoint = useBreakpoint()

    return (
      <Box
        bg={{
          base: "red.500",
          sm: "purple.500",
          md: "yellow.500",
          lg: "green.500",
          xl: "blue.500",
          "2xl": "pink.500",
        }}
        color="white"
        p="md"
        rounded="l2"
        transitionDuration="moderate"
        transitionProperty="all"
      >
        The current breakpoint is "{breakpoint}"
      </Box>
    )
  }

  return (
    <>
      <App />

      <UIProvider config={config}>
        <App />
      </UIProvider>
    </>
  )
}

export const Hook = () => {
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
      rounded="l2"
      transitionDuration="moderate"
      transitionProperty="all"
    >
      The current breakpoint is "{breakpoint}"
    </Box>
  )
}

export const Container = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const breakpoint = useBreakpoint()
  const config = extendConfig({
    breakpoint: { containerRef, identifier: "@container" },
  })

  const App: FC = () => {
    const breakpoint = useBreakpoint()

    return (
      <Text
        color={{
          base: "red.500",
          sm: "purple.500",
          md: "yellow.500",
          lg: "green.500",
          xl: "blue.500",
          "2xl": "pink.500",
        }}
      >
        The container breakpoint is "{breakpoint}"
      </Text>
    )
  }

  return (
    <Box
      ref={containerRef}
      borderWidth="1px"
      containerType="inline-size"
      overflow="auto"
      p="md"
      resize="inline"
      rounded="l2"
      w="full"
    >
      <Text
        color={{
          base: "red.500",
          sm: "purple.500",
          md: "yellow.500",
          lg: "green.500",
          xl: "blue.500",
          "2xl": "pink.500",
        }}
      >
        The root breakpoint is "{breakpoint}"
      </Text>

      <UIProvider config={config}>
        <App />
      </UIProvider>
    </Box>
  )
}
