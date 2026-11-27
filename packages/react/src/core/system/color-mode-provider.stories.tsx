import { Box } from "../../components/box"
import { Button } from "../../components/button"
import { VStack } from "../../components/stack"
import { Text } from "../../components/text"
import { antonym } from "../../utils"
import { ColorModeScope, useColorMode } from "./color-mode-provider"
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
      rounded="l2"
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
      rounded="l2"
      transitionDuration="moderate"
      transitionProperty="all"
    >
      The current colorMode is "{colorMode}"
    </Box>
  )
}

export const Scope = () => {
  const { colorMode } = useColorMode()

  return (
    <VStack
      alignItems="start"
      borderWidth="1px"
      gap="md"
      p="md"
      rounded="l2"
      transitionDuration="moderate"
      transitionProperty="all"
    >
      <Text>The current colorMode is "{colorMode}"</Text>

      <Button>Button</Button>

      <ColorModeScope colorMode={antonym(colorMode)}>
        <VStack
          alignItems="start"
          bg="bg"
          borderWidth="1px"
          gap="md"
          p="md"
          rounded="l2"
        >
          <Text color="fg">
            The current colorMode is "{antonym(colorMode)}"
          </Text>
          <Button colorScheme="mono">Button</Button>
        </VStack>
      </ColorModeScope>
    </VStack>
  )
}
