import { Center } from "@yamada-ui/react"

export default {
  title: "System / Styles / Interpolation",
}

export const basic = () => {
  return (
    <>
      <Center
        w="full"
        p="md"
        rounded="md"
        boxShadow="0 0 0 1px $colors.primary"
        color="white"
      >
        Change "$colors.primary" to "var(--ui-colors-primary)"
      </Center>

      <Center
        w="full"
        p="md"
        rounded="md"
        border="$sizes.1 solid $colors.secondary"
        color="white"
      >
        Change "$sizes.1" to "var(--ui-sizes-1)"
      </Center>
    </>
  )
}
