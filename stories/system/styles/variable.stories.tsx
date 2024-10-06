import { Box } from "@yamada-ui/react"

export default {
  title: "System / Styles / Variable",
}

export const basic = () => {
  return (
    <Box
      bg="$bg"
      color="white"
      p="md"
      rounded="md"
      vars={[{ name: "bg", token: "colors", value: "primary" }]}
    >
      Box
    </Box>
  )
}
