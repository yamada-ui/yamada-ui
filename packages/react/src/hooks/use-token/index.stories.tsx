import type { Meta } from "@storybook/react-vite"
import { useToken } from "."
import { Box } from "../../components/box"

const meta: Meta = {
  title: "Hooks / useToken",
}

export default meta

export const Basic = () => {
  const bg = useToken("colors", "primary")

  return (
    <Box bg={bg} color="white" p="md" rounded="md">
      Primary for color tokens is "{bg}"
    </Box>
  )
}
