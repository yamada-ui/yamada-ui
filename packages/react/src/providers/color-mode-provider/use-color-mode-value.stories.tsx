import type { Meta } from "@storybook/react"
import { Box } from "../../components/box"
import { useColorMode } from "./color-mode-provider"
import { useColorModeValue } from "./use-color-mode-value"

const meta: Meta = {
  title: "Hooks / useColorModeValue",
}

export default meta

export const Basic = () => {
  const { colorMode } = useColorMode()
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800")
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800")

  return (
    <Box
      bg={bg}
      color={color}
      p="md"
      rounded="md"
      transitionDuration="moderate"
      transitionProperty="all"
    >
      The current colorMode is "{colorMode}"
    </Box>
  )
}
