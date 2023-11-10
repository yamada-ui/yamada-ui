import { Meta } from "@storybook/react"
import { Box, useIdle } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useIdle",
}

export default meta

export const basic = () => {
  const idle = useIdle(2000)

  return (
    <Box
      bg={idle ? "blue.500" : "red.500"}
      p="md"
      rounded="md"
      color="white"
      transitionProperty="all"
      transitionDuration="slower"
    >
      Current state: {idle ? "idle" : "not idle"}
    </Box>
  )
}
