import { Center } from "@yamada-ui/react"

export default {
  title: "System / Styles / Color Mix",
}

export const basic = () => {
  return (
    <>
      <Center
        bg="mix(red.500, blue.500)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        "in srgb" + "red.500" + "blue.500"
      </Center>

      <Center
        bg="mix(in srgb, green.500 50, #000000)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        "in srgb" + "gree.500" + "#000000"
      </Center>

      <Center
        bg="mix(in lab, orange.500 80%, purple.500 20%)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        "in lab" + "orange.500 80%" + "purple.500 20%"
      </Center>

      <Center
        bg="mix(in lch longer hue, hsl(200deg 50% 80%), #000000)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        "in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"
      </Center>
    </>
  )
}
