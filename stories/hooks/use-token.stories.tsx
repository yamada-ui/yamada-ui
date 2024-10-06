import type { Meta } from "@storybook/react"
import { Box, useToken } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useToken",
}

export default meta

export const basic = () => {
  const bg = useToken("colors", "primary")

  return (
    <Box bg={bg} color="white" p="md" rounded="md">
      Primary for color tokens is "{bg}"
    </Box>
  )
}
