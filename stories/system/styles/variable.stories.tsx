import { Box } from "@yamada-ui/react"

export default {
  title: "System / Styles / Variable",
}

export const basic = () => {
  return (
    <Box
      p="md"
      rounded="md"
      color="white"
      vars={[{ name: "bg", token: "colors", value: "primary" }]}
      bg="$bg"
    >
      Box
    </Box>
  )
}
