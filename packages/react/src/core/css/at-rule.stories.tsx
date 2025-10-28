import { Box } from "../../components/box"
import { Button } from "../../components/button"
import { Center } from "../../components/center"
import { Text } from "../../components/text"
import { useBoolean } from "../../hooks/use-boolean"

export default {
  title: "Styled System / At-rule",
}

export const Basic = () => {
  return (
    <Center
      borderWidth="1px"
      boxSize="3xs"
      p="md"
      rounded="l2"
      _print={{ color: "success" }}
    >
      <Text>Print me</Text>
    </Center>
  )
}

export const Container = () => {
  return (
    <Center
      borderWidth="1px"
      boxSize="3xs"
      containerType="size"
      overflow="auto"
      p="md"
      resize="both"
      rounded="l2"
    >
      <Text
        _container={[
          { css: { color: "success" }, maxW: "560px", minW: "320px" },
        ]}
      >
        Resize me
      </Text>
    </Center>
  )
}

export const ContainerName = () => {
  return (
    <Center
      borderWidth="1px"
      boxSize="xs"
      containerName="parent"
      containerType="size"
      overflow="auto"
      p="md"
      resize="both"
      rounded="l2"
    >
      <Center
        borderWidth="1px"
        boxSize="3xs"
        containerName="child"
        containerType="size"
        overflow="auto"
        p="md"
        resize="both"
        rounded="l2"
      >
        <Text
          _container={[
            {
              name: "parent",
              css: { color: "success" },
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

export const Supports = () => {
  return (
    <Box _supports={[{ css: { color: "success" }, query: "(display: flex)" }]}>
      <Text>Supported flex</Text>
    </Box>
  )
}

export const StartingStyle = () => {
  const [open, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Toggle</Button>
      {open ? (
        <Center
          bg="bg.contrast"
          color="fg.contrast"
          p="md"
          transition="all 0.3s ease-out"
          w="fit-content"
          _startingStyle={{ opacity: 0, transform: "translateY(-20px)" }}
        >
          <Text>Starting style</Text>
        </Center>
      ) : null}
    </>
  )
}
