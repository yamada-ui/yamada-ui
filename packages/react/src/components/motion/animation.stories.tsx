import type { Meta, StoryFn } from "@storybook/react"
import type { FC } from "react"
import { AnimatePresence, LayoutGroup } from "motion/react"
import { App } from "../../../storybook/components"
import { useBoolean } from "../../hooks/use-boolean"
import { Box } from "../box"
import { Button } from "../button"
import { Heading } from "../heading"
import { HStack } from "../stack"
import { VStack } from "../stack"
import { Motion } from "./motion"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Animation",
}

export default meta

export const Basic: Story = () => {
  return (
    <App>
      <Motion
        animate={{ x: 100 }}
        bg="mono"
        color="mono.contrast"
        p="md"
        rounded="l2"
      >
        Motion
      </Motion>
    </App>
  )
}

export const Transition: Story = () => {
  return (
    <App>
      <Motion
        animate={{ x: 100 }}
        bg="mono"
        color="mono.contrast"
        p="md"
        rounded="l2"
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Motion
      </Motion>
    </App>
  )
}

export const TransitionType: Story = () => {
  return (
    <App>
      <Motion
        animate={{ rotate: 360, scale: 1 }}
        bg="mono"
        color="mono.contrast"
        initial={{ scale: 0 }}
        p="md"
        rounded="l2"
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 260,
        }}
      >
        Motion
      </Motion>
    </App>
  )
}

export const Initial: Story = () => {
  return (
    <App>
      <Motion
        animate={{ x: 100 }}
        bg="mono"
        color="mono.contrast"
        initial={{ x: -100 }}
        p="md"
        rounded="l2"
      >
        Motion
      </Motion>
    </App>
  )
}

export const Exit: Story = () => {
  const [visible, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {visible ? (
          <Motion
            animate={{ opacity: 1 }}
            bg="mono"
            color="mono.contrast"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            p="md"
            rounded="l2"
          >
            Motion
          </Motion>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export const Keyframes: Story = () => {
  return (
    <App>
      <Motion
        animate={{ x: [0, 100, 0] }}
        bg="mono"
        color="mono.contrast"
        p="md"
        rounded="l2"
      >
        Motion
      </Motion>
    </App>
  )
}

export const Times: Story = () => {
  return (
    <App>
      <Motion
        animate={{ x: [0, 100, 0] }}
        bg="mono"
        color="mono.contrast"
        p="md"
        rounded="l2"
        transition={{ duration: 3, times: [0, 0.2, 1] }}
      >
        Motion
      </Motion>
    </App>
  )
}

export const Repeat: Story = () => {
  return (
    <App>
      <Motion
        animate={{
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          rotate: [0, 0, 180, 180, 0],
          scale: [1, 2, 2, 1, 1],
        }}
        bg="mono"
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
    </App>
  )
}

export const Layout: Story = () => {
  const [flg, { toggle }] = useBoolean()

  return (
    <App>
      <Box
        as="button"
        bg="mono"
        display="flex"
        h="8"
        justifyContent={!flg ? "flex-start" : "flex-end"}
        p="1"
        rounded="full"
        w="14"
        onClick={toggle}
      >
        <Motion
          bg="mono.contrast"
          h="6"
          layout
          rounded="full"
          transition={{ type: "spring", damping: 30, stiffness: 700 }}
          w="6"
        />
      </Box>
    </App>
  )
}

export const GroupLayout: Story = () => {
  const Accordion: FC = () => {
    const [open, { toggle }] = useBoolean(false)

    return (
      <Motion
        as="button"
        bg="mono"
        display="flex"
        h="16"
        layout
        p="md"
        placeContent="center"
        rounded="l2"
        w={open ? "32" : "16"}
        onClick={toggle}
      />
    )
  }

  return (
    <App>
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
    </App>
  )
}
