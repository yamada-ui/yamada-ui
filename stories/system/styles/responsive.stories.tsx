import { Calendar } from "@yamada-ui/calendar"
import {
  Box,
  Button,
  extendConfig,
  Tag,
  Text,
  UIProvider,
  useBreakpoint,
  useBreakpointValue,
} from "@yamada-ui/react"
import { useRef, type FC } from "react"

export default {
  title: "System / Styles / Responsive",
}

export const basic = () => {
  const breakpoint = useBreakpoint()

  return (
    <Box
      bg={{
        base: "red.500",
        "2xl": "pink.500",
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

export const useHook = () => {
  const breakpoint = useBreakpoint()
  const bg = useBreakpointValue({
    base: "red.500",
    "2xl": "pink.500",
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

export const withContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const breakpoint = useBreakpoint()

  const config = extendConfig({
    breakpoint: {
      containerRef,
      identifier: "@container",
    },
  })

  const App: FC = () => {
    const breakpoint = useBreakpoint()

    return (
      <Text
        color={{
          base: "red.500",
          "2xl": "pink.500",
          xl: "blue.500",
          lg: "green.500",
          md: "yellow.500",
          sm: "purple.500",
        }}
      >
        The container breakpoint is "{breakpoint}"
      </Text>
    )
  }

  return (
    <Box
      ref={containerRef}
      containerType="inline-size"
      resize="inline"
      overflow="auto"
      w="full"
      p="md"
      borderWidth="1px"
      rounded="md"
    >
      <Text
        color={{
          base: "red.500",
          "2xl": "pink.500",
          xl: "blue.500",
          lg: "green.500",
          md: "yellow.500",
          sm: "purple.500",
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

export const components = () => {
  const breakpoint = useBreakpoint()

  return (
    <>
      <Text>The current breakpoint is "{breakpoint}"</Text>

      <Button size={{ base: "lg", md: "md" }}>Button</Button>

      <Tag size={{ base: "lg", md: "md" }}>Tag</Tag>

      <Calendar size={{ base: "lg", md: "md" }} />
    </>
  )
}
