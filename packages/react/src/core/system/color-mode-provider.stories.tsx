import { Box } from "../../components/box"
import { useColorMode } from "./color-mode-provider"
import { useColorModeValue } from "./use-color-mode-value"

export default {
  title: "Styled System / Color Mode",
}

export const Basic = () => {
  const { colorMode } = useColorMode()

  return (
    <Box
      bg="bg.contrast"
      color="fg.contrast"
      p="md"
      rounded="md"
      transitionDuration="moderate"
      transitionProperty="all"
    >
      The current colorMode is "{colorMode}"
    </Box>
  )
}

export const Hook = () => {
  const { colorMode } = useColorMode()
  const bg = useColorModeValue("black", "white")
  const color = useColorModeValue("white", "black")

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
