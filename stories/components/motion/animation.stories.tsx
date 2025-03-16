import type { Meta, StoryFn } from "@storybook/react"
import type { FC } from "react"
import {
  AnimatePresence,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  LayoutGroup,
  Motion,
  useBoolean,
  VStack,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Animation",
}

export default meta

export const basic: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ x: 100 }}
        bg={["primary", "secondary"]}
        color="white"
        p="md"
        rounded="md"
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withTransition: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ x: 100 }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withTransitionType: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ rotate: 360, scale: 1 }}
        bg="primary"
        color="white"
        initial={{ scale: 0 }}
        p="md"
        rounded="md"
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 260,
        }}
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withInitial: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ x: 100 }}
        bg="primary"
        color="white"
        initial={{ x: -100 }}
        p="md"
        rounded="md"
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withExit: Story = () => {
  const [isVisible, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {isVisible ? (
          <Motion
            animate={{ opacity: 1 }}
            bg="primary"
            color="white"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            p="md"
            rounded="md"
          >
            Motion
          </Motion>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export const useKeyframes: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ x: [0, 100, 0] }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withTimes: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ x: [0, 100, 0] }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        transition={{ duration: 3, times: [0, 0.2, 1] }}
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withRepeat: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          rotate: [0, 0, 180, 180, 0],
          scale: [1, 2, 2, 1, 1],
        }}
        bg="primary"
        h="xs"
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        w="xs"
      />
    </Center>
  )
}

export const withLayout: Story = () => {
  const [flg, { toggle }] = useBoolean()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Box
        as="button"
        bg="primary"
        display="flex"
        h="8"
        justifyContent={!flg ? "flex-start" : "flex-end"}
        p="1"
        rounded="full"
        w="14"
        onClick={toggle}
      >
        <Motion
          bg="white"
          h="6"
          layout
          rounded="full"
          transition={{ type: "spring", damping: 30, stiffness: 700 }}
          w="6"
        />
      </Box>
    </Center>
  )
}

export const useLayoutGroup: Story = () => {
  const Accordion: FC = () => {
    const [open, { toggle }] = useBoolean(false)

    return (
      <Motion
        as="button"
        bg="primary"
        display="flex"
        h="16"
        layout
        p="md"
        placeContent="center"
        rounded="md"
        w={open ? "32" : "16"}
        onClick={toggle}
      />
    )
  }

  return (
    <Center gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <VStack>
        <Heading size="md">Not using LayoutGroup</Heading>

        <HStack>
          <Accordion />
          <Accordion />
        </HStack>
      </VStack>

      <VStack>
        <Heading size="md">Using LayoutGroup</Heading>

        <HStack>
          <LayoutGroup>
            <Accordion />
            <Accordion />
          </LayoutGroup>
        </HStack>
      </VStack>
    </Center>
  )
}
