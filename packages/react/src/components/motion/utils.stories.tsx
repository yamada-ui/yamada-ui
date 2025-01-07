import type { Meta, StoryFn } from "@storybook/react"
import { AnimatePresence, useScroll, useTransform } from "motion/react"
import { useBoolean } from "../../hooks/use-boolean"
import { UIProvider } from "../../providers/ui-provider"
import { extendConfig } from "../../theme"
import { Box } from "../box"
import { Button } from "../button"
import { Center } from "../center"
import { Text } from "../text"
import { Motion } from "./motion"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Utils",
}

export default meta

export const ExitPresenceAnimation: Story = () => {
  const [visible, { toggle }] = useBoolean()

  return (
    <>
      <Button onClick={toggle}>Please click</Button>

      <AnimatePresence>
        {visible ? (
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

export const MotionConfig: Story = () => {
  const config = extendConfig({
    motion: { config: { transition: { duration: 2 } } },
  })

  return (
    <UIProvider config={config}>
      <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
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
    </UIProvider>
  )
}

export const UseScrollAndTransform: Story = () => {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <Box h="300vh" position="relative" w="full">
      <Text>Please scroll</Text>

      <Motion
        style={{ y: y1 }}
        bg="primary"
        boxSize="2xs"
        left="0"
        position="absolute"
        rounded="full"
        top="110vh"
      />

      <Motion
        style={{ y: y2 }}
        bg="warning"
        boxSize="sm"
        left="20%"
        position="absolute"
        rounded="full"
        top="120vh"
      />

      <Motion
        style={{ y: y3 }}
        bg="danger"
        boxSize="3xs"
        position="absolute"
        right="30%"
        rounded="full"
        top="110vh"
      />

      <Motion
        style={{ y: y4 }}
        bg="secondary"
        boxSize="xs"
        position="absolute"
        right="0"
        rounded="full"
        top="120vh"
      />
    </Box>
  )
}
