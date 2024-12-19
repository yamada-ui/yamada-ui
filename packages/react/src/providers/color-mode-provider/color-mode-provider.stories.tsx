import { Box } from "../../components/box"
import { Button } from "../../components/button"
import { Calendar } from "../../components/calendar"
import { Tag } from "../../components/tag"
import { Text } from "../../components/text"
import { useColorMode } from "./color-mode-provider"
import { useColorModeValue } from "./use-color-mode-value"

export default {
  title: "Styled System / Color Mode",
}

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

export const UseHook = () => {
  const { colorMode } = useColorMode()
  const bg = useColorModeValue("blackAlpha.800", "whiteAlpha.800")
  const color = useColorModeValue("whiteAlpha.800", "blackAlpha.800")

  return (
    <Box
      bg={bg}
      color={color}
      p="md"
      rounded="md"
      transitionDuration="normal"
      transitionProperty="all"
    >
      The current colorMode is "{colorMode}"
    </Box>
  )
}

export const Components = () => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Text>The current colorMode is "{colorMode}"</Text>

      <Button variant={["solid", "outline"]}>Button</Button>

      <Tag variant={["solid", "subtle"]}>Tag</Tag>

      <Calendar variant={["solid", "subtle"]} />
    </>
  )
}
