import type { Meta } from "@storybook/react"
import { useHover } from "."
import { Box } from "../../components/box"

const meta: Meta = {
  title: "Hooks / useHover",
}

export default meta

export const Basic = () => {
  const { ref, hovered } = useHover()

  return (
    <Box ref={ref} bg="red.500" color="white" p="md" rounded="md" w="full">
      {hovered ? "I am hovered" : "Put mouse over me please"}
    </Box>
  )
}
