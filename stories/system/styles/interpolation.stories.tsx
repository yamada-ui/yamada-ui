import { Center } from "@yamada-ui/react"

export default {
  title: "System / Styles / Interpolation",
}

export const basic = () => {
  return (
    <>
      <Center
        boxShadow="0 0 0 1px $colors.primary"
        color="white"
        p="md"
        rounded="md"
        w="full"
      >
        Change "$colors.primary" to "var(--ui-colors-primary)"
      </Center>

      <Center
        border="$sizes.1 solid $colors.secondary"
        color="white"
        p="md"
        rounded="md"
        w="full"
      >
        Change "$sizes.1" to "var(--ui-sizes-1)"
      </Center>
    </>
  )
}
