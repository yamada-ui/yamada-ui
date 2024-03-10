import { Center, Text } from "@yamada-ui/react"

export default {
  title: "System / Styles / At-rules",
}

export const basic = () => {
  return (
    <Center
      p="md"
      rounded="md"
      borderWidth="1px"
      boxSize="3xs"
      _media={[{ type: "print", css: { color: "red" } }]}
    >
      <Text>Print me</Text>
    </Center>
  )
}

export const container = () => {
  return (
    <Center
      containerType="size"
      p="md"
      rounded="md"
      borderWidth="1px"
      resize="both"
      overflow="auto"
      boxSize="3xs"
    >
      <Text
        _container={[
          { minW: "320px", maxW: "560px", css: { color: "primary" } },
        ]}
      >
        Resize me
      </Text>
    </Center>
  )
}

export const withContainerName = () => {
  return (
    <Center
      containerName="parent"
      containerType="size"
      p="md"
      rounded="md"
      borderWidth="1px"
      resize="both"
      overflow="auto"
      boxSize="xs"
    >
      <Center
        containerName="child"
        containerType="size"
        p="md"
        rounded="md"
        borderWidth="1px"
        resize="both"
        overflow="auto"
        boxSize="3xs"
      >
        <Text
          _container={[
            {
              name: "parent",
              orientation: "portrait",
              css: { color: "primary" },
            },
            {
              name: "child",
              orientation: "landscape",
              css: { color: "danger" },
            },
          ]}
        >
          Resize me
        </Text>
      </Center>
    </Center>
  )
}
