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
        rounded="l2"
        w="full"
      >
        Change {`"{colors.primary}"`} to "var(--ui-colors-primary)"
      </Center>

      <Center
        border="{sizes.1} solid {colors.secondary}"
        color="white"
        p="md"
        rounded="l2"
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
      css={{ "--bg": "colors.bg.contrast" }}
      bg="{bg}"
      color="{fg}"
      p="md"
      rounded="l2"
      {...{ "--fg": "colors.fg.contrast" }}
    >
      Box
    </Box>
  )
}
