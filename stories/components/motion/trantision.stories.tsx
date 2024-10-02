import type { Meta, StoryFn } from "@storybook/react"
import type { MotionVariants } from "@yamada-ui/react"
import { Center, Motion } from "@yamada-ui/react"
import { useMemo } from "react"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Transition",
}

export default meta

export const basic: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ x: 100 }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        transition={{ delay: 1, duration: 2, ease: "easeOut" }}
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withType: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ x: 100 }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        transition={{ type: "spring", stiffness: 100 }}
      >
        Motion
      </Motion>
    </Center>
  )
}

export const useValueSpecific: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ opacity: 1, x: 100 }}
        bg="primary"
        color="white"
        initial={{ opacity: 0 }}
        p="md"
        rounded="md"
        transition={{
          delay: 1,
          ease: "easeOut",
          opacity: { duration: 1 },
          x: { duration: 2 },
        }}
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withDelayChildren: Story = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delayChildren: 1 } },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate="visible"
        bg="primary"
        cursor="pointer"
        display="flex"
        flexDirection="column"
        gap="md"
        initial="hidden"
        overflow="hidden"
        p="md"
        rounded="3xl"
        variants={list}
        w="2xs"
      >
        <Motion
          bg="white"
          custom={1}
          h="4"
          rounded="md"
          variants={item}
          w="full"
        />
        <Motion
          bg="white"
          custom={2}
          h="4"
          rounded="md"
          variants={item}
          w="full"
        />
        <Motion
          bg="white"
          custom={3}
          h="4"
          rounded="md"
          variants={item}
          w="full"
        />
        <Motion
          bg="white"
          custom={4}
          h="4"
          rounded="md"
          variants={item}
          w="full"
        />
      </Motion>
    </Center>
  )
}

export const withStaggerChildren: Story = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 1 } },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate="visible"
        bg="primary"
        cursor="pointer"
        display="flex"
        flexDirection="column"
        gap="md"
        initial="hidden"
        overflow="hidden"
        p="md"
        rounded="3xl"
        variants={list}
        w="2xs"
      >
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
      </Motion>
    </Center>
  )
}

export const withStaggerDirection: Story = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 1, staggerDirection: -1 },
      },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate="visible"
        bg="primary"
        cursor="pointer"
        display="flex"
        flexDirection="column"
        gap="md"
        initial="hidden"
        overflow="hidden"
        p="md"
        rounded="3xl"
        variants={list}
        w="2xs"
      >
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
      </Motion>
    </Center>
  )
}

export const withAfterChildren: Story = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, transition: { when: "afterChildren" } },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, transition: { duration: 1 } },
    }),
    [],
  )

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate="hidden"
        bg="primary"
        cursor="pointer"
        display="flex"
        flexDirection="column"
        gap="md"
        overflow="hidden"
        p="md"
        rounded="3xl"
        variants={list}
        w="2xs"
      >
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
        <Motion bg="white" h="4" rounded="md" variants={item} w="full" />
      </Motion>
    </Center>
  )
}

export const withRepeat: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ rotate: 360 }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        transition={{ duration: 2, repeat: Infinity }}
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withRepeatType: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ rotate: 360 }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withRepeatDelay: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ rotate: 360 }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withEasing: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate={{ x: 100 }}
        bg="primary"
        color="white"
        p="md"
        rounded="md"
        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      >
        Motion
      </Motion>
    </Center>
  )
}
