import { Meta } from "@storybook/react"
import { Box, useToken } from "@yamada-ui/react"

const meta: Meta = {
  title: "Hooks / useToken",
}

export default meta

export const basic = () => {
  const bg = useToken("colors", "primary")

  return (
    <Box bg={bg} p="md" rounded="md" color="white">
      Primary for color tokens is "{bg}"
    </Box>
  )
}
