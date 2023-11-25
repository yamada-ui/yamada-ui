import type { Meta, StoryFn } from "@storybook/react"
import {
  AnimatePresence,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  LayoutGroup,
  Motion,
  VStack,
  useBoolean,
} from "@yamada-ui/react"
import type { FC } from "react"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  title: "Components / Motion / Animation",
  component: Motion,
}

export default meta

export const basic: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        animate={{ x: 100 }}
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

export const withTransition: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
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

export const withTransitionType: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
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

export const withInitial: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        initial={{ x: -100 }}
        animate={{ x: 100 }}
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

export const withExit: Story = () => {
  const [isVisible, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {isVisible ? (
          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            bg="primary"
            color="white"
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
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
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
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 3, times: [0, 0.2, 1] }}
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

export const withRepeat: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        w="xs"
        h="xs"
        bg="primary"
      />
    </Center>
  )
}

export const withLayout: Story = () => {
  const [flg, { toggle }] = useBoolean()

  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Box
        as="button"
        bg="primary"
        p="1"
        rounded="full"
        w="14"
        h="8"
        display="flex"
        justifyContent={!flg ? "flex-start" : "flex-end"}
        onClick={toggle}
      >
        <Motion
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          bg="white"
          w="6"
          h="6"
          rounded="full"
        />
      </Box>
    </Center>
  )
}

export const useLayoutGroup: Story = () => {
  const Accordion: FC = () => {
    const [isOpen, { toggle }] = useBoolean(false)

    return (
      <Motion
        as="button"
        layout
        w={isOpen ? "32" : "16"}
        h="16"
        p="md"
        bg="primary"
        rounded="md"
        onClick={toggle}
        display="flex"
        placeContent="center"
      />
    )
  }

  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)" gap="md">
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
