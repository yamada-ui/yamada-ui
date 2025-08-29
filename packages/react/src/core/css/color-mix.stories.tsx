import { Center } from "../../components/center"
import { Text } from "../../components/text"
import { TONES } from "../../utils"

export default {
  title: "Styled System / Color Mix",
}

export const Basic = () => {
  return (
    <>
      <Center
        bg="mix(red.500, blue.500)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        "in srgb" + "red.500" + "blue.500"
      </Center>

      <Center
        bg="mix(in srgb, green.500 50, #000000)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        "in srgb" + "gree.500" + "#000000"
      </Center>

      <Center
        bg="mix(in lab, orange.500 80%, purple.500 20%)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        "in lab" + "orange.500 80%" + "purple.500 20%"
      </Center>

      <Center
        bg="mix(in lch longer hue, hsl(200deg 50% 80%), #000000)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        "in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"
      </Center>
    </>
  )
}

export const Tint = () => {
  return (
    <>
      <Center
        bg="tint(red.500, 50%)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Tint color
      </Center>

      <Center
        bg="tint(green, 50)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Tint color
      </Center>

      <Center
        bg="tint(rgb(255, 0, 0), 50%)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Tint color
      </Center>
    </>
  )
}

export const Shade = () => {
  return (
    <>
      <Center
        bg="shade(red.500, 50%)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Shade color
      </Center>

      <Center
        bg="shade(green, 50)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Shade color
      </Center>

      <Center
        bg="shade(rgb(255, 0, 0), 50%)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Shade color
      </Center>
    </>
  )
}

export const Transparentize = () => {
  return (
    <>
      <Center
        bg="blue.500/50"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Transparentize color
      </Center>

      <Center
        bg="transparentize(red.500, 50%)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Transparentize color
      </Center>

      <Center
        bg="transparentize(green, 50)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Transparentize color
      </Center>

      <Center
        bg="transparentize(rgb(255, 0, 0), 50%)"
        color="white"
        height="2xs"
        p="md"
        rounded="l2"
        w="full"
      >
        Transparentize color
      </Center>
    </>
  )
}

export const Tone = () => {
  return (
    <>
      {TONES.map((tone) => (
        <Center
          key={tone}
          bg={`tone(purple.500, ${tone})`}
          color="white"
          height="5xs"
          p="md"
          rounded="l2"
          w="full"
        >
          <Text
            as="span"
            color={`tone(purple.500, ${tone})`}
            filter="invert(100%) grayscale(100%) contrast(100)"
          >
            Tone {tone}
          </Text>
        </Center>
      ))}
    </>
  )
}
