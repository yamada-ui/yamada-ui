import type { Meta } from "@storybook/react"
import { Box } from "../../components/box"
import { useColorMode } from "./color-mode-provider"

const meta: Meta = {
  title: "Hooks / useColorMode",
}

export default meta

export const Basic = () => {
  const { colorMode } = useColorMode()

  return (
    <Box
      bg={["blackAlpha.800", "whiteAlpha.800"]}
      color={["whiteAlpha.800", "blackAlpha.800"]}
      p="md"
      rounded="md"
      transitionDuration="normal"
      transitionProperty="all"
    >
      The current colorMode is "{colorMode}"
    </Box>
  )
}