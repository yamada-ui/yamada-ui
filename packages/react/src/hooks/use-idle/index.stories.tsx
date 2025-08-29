import type { Meta } from "@storybook/react-vite"
import { useIdle } from "."
import { Box } from "../../components/box"

const meta: Meta = {
  title: "Hooks / useIdle",
}

export default meta

export const Basic = () => {
  const idle = useIdle(2000)

  return (
    <Box
      bg={idle ? "blue.500" : "red.500"}
      color="white"
      p="md"
      rounded="l2"
      transitionDuration="moderate"
      transitionProperty="all"
    >
      Current state: {idle ? "idle" : "not idle"}
    </Box>
  )
}
