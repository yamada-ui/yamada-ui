import type { Meta, StoryFn } from "@storybook/react-vite"
import type { Variants } from "motion/react"
import { useMemo } from "react"
import { Motion } from "./motion"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  parameters: { layout: "centered" },
  title: "Components / Motion / Transition",
}

export default meta

export const Basic: Story = () => {
  return (
    <Motion
      animate={{ x: 100 }}
      bg="mono"
      color="mono.contrast"
      p="md"
      rounded="l2"
      transition={{ delay: 1, duration: 2, ease: "easeOut" }}
    >
      Motion
    </Motion>
  )
}

export const Type: Story = () => {
  return (
    <Motion
      animate={{ x: 100 }}
      bg="mono"
      color="mono.contrast"
      p="md"
      rounded="l2"
      transition={{ type: "spring", stiffness: 100 }}
    >
      Motion
    </Motion>
  )
}

export const ValueSpecific: Story = () => {
  return (
    <Motion
      animate={{ opacity: 1, x: 100 }}
      bg="mono"
      color="mono.contrast"
      initial={{ opacity: 0 }}
      p="md"
      rounded="l2"
      transition={{
        delay: 1,
        ease: "easeOut",
        opacity: { duration: 1 },
        x: { duration: 2 },
      }}
    >
      Motion
    </Motion>
  )
}

export const DelayChildren: Story = () => {
  const list: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delayChildren: 1 } },
    }),
    [],
  )

  const item: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Motion
      animate="visible"
      bg="mono"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      gap="md"
      initial="hidden"
      overflow="hidden"
      p="md"
      rounded="l3"
      variants={list}
      w="2xs"
    >
      <Motion
        bg="mono.contrast"
        custom={1}
        h="4"
        rounded="l2"
        variants={item}
        w="full"
      />
      <Motion
        bg="mono.contrast"
        custom={2}
        h="4"
        rounded="l2"
        variants={item}
        w="full"
      />
      <Motion
        bg="mono.contrast"
        custom={3}
        h="4"
        rounded="l2"
        variants={item}
        w="full"
      />
      <Motion
        bg="mono.contrast"
        custom={4}
        h="4"
        rounded="l2"
        variants={item}
        w="full"
      />
    </Motion>
  )
}

export const StaggerChildren: Story = () => {
  const list: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 1 } },
    }),
    [],
  )

  const item: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Motion
      animate="visible"
      bg="mono"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      gap="md"
      initial="hidden"
      overflow="hidden"
      p="md"
      rounded="l2"
      variants={list}
      w="2xs"
    >
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
    </Motion>
  )
}

export const StaggerDirection: Story = () => {
  const list: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 1, staggerDirection: -1 },
      },
    }),
    [],
  )

  const item: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Motion
      animate="visible"
      bg="mono"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      gap="md"
      initial="hidden"
      overflow="hidden"
      p="md"
      rounded="l2"
      variants={list}
      w="2xs"
    >
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
    </Motion>
  )
}

export const AfterChildren: Story = () => {
  const list: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, transition: { when: "afterChildren" } },
    }),
    [],
  )

  const item: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, transition: { duration: 1 } },
    }),
    [],
  )

  return (
    <Motion
      animate="hidden"
      bg="mono"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      gap="md"
      overflow="hidden"
      p="md"
      rounded="l2"
      variants={list}
      w="2xs"
    >
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
      <Motion bg="mono.contrast" h="4" rounded="l2" variants={item} w="full" />
    </Motion>
  )
}

export const Repeat: Story = () => {
  return (
    <Motion
      animate={{ rotate: 360 }}
      bg="mono"
      color="mono.contrast"
      p="md"
      rounded="l2"
      transition={{ duration: 2, repeat: Infinity }}
    >
      Motion
    </Motion>
  )
}

export const RepeatType: Story = () => {
  return (
    <Motion
      animate={{ rotate: 360 }}
      bg="mono"
      color="mono.contrast"
      p="md"
      rounded="l2"
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      Motion
    </Motion>
  )
}

export const RepeatDelay: Story = () => {
  return (
    <Motion
      animate={{ rotate: 360 }}
      bg="mono"
      color="mono.contrast"
      p="md"
      rounded="l2"
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
    >
      Motion
    </Motion>
  )
}

export const Ease: Story = () => {
  return (
    <Motion
      animate={{ x: 100 }}
      bg="mono"
      color="mono.contrast"
      p="md"
      rounded="l2"
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
    >
      Motion
    </Motion>
  )
}
