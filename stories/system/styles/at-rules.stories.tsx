import { Box, Center, Text } from "@yamada-ui/react"

export default {
  title: "System / Styles / At-rules",
}

export const basic = () => {
  return (
    <Center
      borderWidth="1px"
      boxSize="3xs"
      p="md"
      rounded="md"
      _media={[{ type: "print", css: { color: "red" } }]}
    >
      <Text>Print me</Text>
    </Center>
  )
}

export const container = () => {
  return (
    <Center
      borderWidth="1px"
      boxSize="3xs"
      containerType="size"
      overflow="auto"
      p="md"
      resize="both"
      rounded="md"
    >
      <Text
        _container={[
          { css: { color: "primary" }, maxW: "560px", minW: "320px" },
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
      borderWidth="1px"
      boxSize="xs"
      containerName="parent"
      containerType="size"
      overflow="auto"
      p="md"
      resize="both"
      rounded="md"
    >
      <Center
        borderWidth="1px"
        boxSize="3xs"
        containerName="child"
        containerType="size"
        overflow="auto"
        p="md"
        resize="both"
        rounded="md"
      >
        <Text
          _container={[
            {
              name: "parent",
              css: { color: "primary" },
              orientation: "portrait",
            },
            {
              name: "child",
              css: { color: "danger" },
              orientation: "landscape",
            },
          ]}
        >
          Resize me
        </Text>
      </Center>
    </Center>
  )
}

export const supports = () => {
  return (
    <Box _supports={[{ css: { color: "red" }, query: "(display: flex)" }]}>
      <Text>Supported flex</Text>
    </Box>
  )
}
