import { Center, Text, TONES } from "@yamada-ui/react"

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

export const tint = () => {
  return (
    <>
      <Center
        bg="tint(red.500, 50%)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        Tint color
      </Center>

      <Center
        bg="tint(green, 50)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        Tint color
      </Center>

      <Center
        bg="tint(rgb(255, 0, 0), 50%)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        Tint color
      </Center>
    </>
  )
}

export const shade = () => {
  return (
    <>
      <Center
        bg="shade(red.500, 50%)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        Shade color
      </Center>

      <Center
        bg="shade(green, 50)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        Shade color
      </Center>

      <Center
        bg="shade(rgb(255, 0, 0), 50%)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        Shade color
      </Center>
    </>
  )
}

export const transparentize = () => {
  return (
    <>
      <Center
        bg="transparentize(red.500, 50%)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        Transparentize color
      </Center>

      <Center
        bg="transparentize(green, 50)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        Transparentize color
      </Center>

      <Center
        bg="transparentize(rgb(255, 0, 0), 50%)"
        w="full"
        height="2xs"
        p="md"
        rounded="md"
        color="white"
      >
        Transparentize color
      </Center>
    </>
  )
}

export const tone = () => {
  return (
    <>
      {TONES.map((tone) => (
        <Center
          key={tone}
          bg={`tone(purple.500, ${tone})`}
          w="full"
          height="5xs"
          p="md"
          rounded="md"
          color="white"
        >
          <Text
            color={`tone(purple.500, ${tone})`}
            as="span"
            filter="invert(100%) grayscale(100%) contrast(100)"
          >
            Tone {tone}
          </Text>
        </Center>
      ))}
    </>
  )
}
