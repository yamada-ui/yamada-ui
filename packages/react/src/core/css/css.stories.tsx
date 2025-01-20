import { Box } from "../../components/box"
import { Center } from "../../components/center"

export default {
  title: "Styled System / CSS",
}

export const Interpolation = () => {
  return (
    <>
      <Center
        boxShadow="0 0 0 1px {colors.primary}"
        color="white"
        p="md"
        rounded="md"
        w="full"
      >
        Change {`"{colors.primary}"`} to "var(--ui-colors-primary)"
      </Center>

      <Center
        border="{sizes.1} solid {colors.secondary}"
        color="white"
        p="md"
        rounded="md"
        w="full"
      >
        Change {`"{sizes.1}"`} to "var(--ui-sizes-1)"
      </Center>
    </>
  )
}

export const Variable = () => {
  return (
    <Box
      bg="{bg}"
      color="white"
      p="md"
      rounded="md"
      vars={[{ name: "bg", token: "colors", value: "primary" }]}
    >
      Box
    </Box>
  )
}
