import type { Meta, StoryFn } from "@storybook/react-vite"
import { AnimatePresence, useScroll, useTransform } from "motion/react"
import { useBoolean } from "../../hooks/use-boolean"
import { UIProvider } from "../../providers/ui-provider"
import { defaultConfig } from "../../theme"
import { merge } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
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

export const MotionConfig: Story = () => {
  const config = merge(defaultConfig, {
    motion: { config: { transition: { duration: 2 } } },
  })

  return (
    <UIProvider config={config}>
      <Motion
        animate={{ x: 100 }}
        bg="mono"
        color="mono.contrast"
        p="md"
        rounded="l2"
      >
        Motion
      </Motion>
    </UIProvider>
  )
}

export const ScrollAndTransform: Story = () => {
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
        bg="info"
        boxSize="2xs"
        left="0"
        position="absolute"
        rounded="full"
        top="110vh"
      />

      <Motion
        style={{ y: y2 }}
        bg="success"
        boxSize="sm"
        left="20%"
        position="absolute"
        rounded="full"
        top="120vh"
      />

      <Motion
        style={{ y: y3 }}
        bg="warning"
        boxSize="3xs"
        position="absolute"
        right="30%"
        rounded="full"
        top="110vh"
      />

      <Motion
        style={{ y: y4 }}
        bg="danger"
        boxSize="xs"
        position="absolute"
        right="0"
        rounded="full"
        top="120vh"
      />
    </Box>
  )
}
