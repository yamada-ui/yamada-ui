import type { Meta } from "@storybook/react"
import { Box, useHover } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useHover",
}

export default meta

export const basic = () => {
  const { ref, hovered } = useHover()

  return (
    <Box ref={ref} bg="red.500" color="white" p="md" rounded="md" w="full">
      {hovered ? "I am hovered" : "Put mouse over me please"}
    </Box>
  )
}
