import type { Meta } from "@storybook/react-vite"
import { useValue } from "."
import { Box } from "../../components/box"
import { useColorMode } from "../../providers/color-mode-provider"
import { useBreakpoint } from "../use-breakpoint"

const meta: Meta = {
  title: "Hooks / useValue",
}

export default meta

export const Basic = () => {
  const { colorMode } = useColorMode()
  const breakpoint = useBreakpoint()
  const bg = useValue({
    base: "red.500",
    sm: "purple.500",
    md: "yellow.500",
    lg: "green.500",
    xl: "blue.500",
  })
  const color = useValue(["whiteAlpha.800", "blackAlpha.800"])

  return (
    <Box
      bg={bg}
      color={color}
      p="md"
      rounded="md"
      transitionDuration="slower"
      transitionProperty="all"
    >
      The current breakpoint is "{breakpoint}", colorMode is "{colorMode}"
    </Box>
  )
}
