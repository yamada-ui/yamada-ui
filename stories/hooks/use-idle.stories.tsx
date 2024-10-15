import type { Meta } from "@storybook/react"
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
      color="white"
      p="md"
      rounded="md"
      transitionDuration="slower"
      transitionProperty="all"
    >
      Current state: {idle ? "idle" : "not idle"}
    </Box>
  )
}
