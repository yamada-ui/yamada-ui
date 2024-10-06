import type { Meta, StoryFn } from "@storybook/react"
import type { MotionVariants } from "@yamada-ui/react"
import { Center, Motion } from "@yamada-ui/react"
import { useMemo } from "react"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Variants",
}

export default meta

export const basic: Story = () => {
  const variants: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    [],
  )

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        animate="visible"
        bg="primary"
        cursor="pointer"
        h="2xs"
        initial="hidden"
        rounded="3xl"
        variants={variants}
        w="2xs"
      />
    </Center>
  )
}

export const usePropagation: Story = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
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

export const useOrchestration: Story = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        transition: { when: "afterChildren" },
      },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.5, when: "beforeChildren" },
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

export const useDynamicVariants: Story = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: (i) => ({
        opacity: 1,
        transition: { delay: i * 0.3 },
        x: 0,
      }),
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

export const useValueSpecific: Story = () => {
  const variants: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, pathLength: 0 },
      visible: (i) => {
        const delay = 1 + i * 0.5

        return {
          opacity: 1,
          pathLength: 1,
          transition: {
            opacity: { delay, duration: 0.01 },
            pathLength: { type: "spring", bounce: 0, delay, duration: 1.5 },
          },
        }
      },
    }),
    [],
  )

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        as="svg"
        animate="visible"
        h="200px"
        initial="hidden"
        viewBox="0 0 800 200"
        w="800px"
      >
        <Motion
          as="circle"
          custom={1}
          cx="100"
          cy="100"
          fill="transparent"
          r="80"
          stroke="#ed3237"
          strokeLinecap="round"
          strokeWidth="10px"
          variants={variants}
        />
        <Motion
          as="line"
          custom={2}
          fill="transparent"
          stroke="#f5c535"
          strokeLinecap="round"
          strokeWidth="10px"
          variants={variants}
          x1="220"
          x2="360"
          y1="30"
          y2="170"
        />
        <Motion
          as="line"
          custom={2.5}
          fill="transparent"
          stroke="#f5c535"
          strokeLinecap="round"
          strokeWidth="10px"
          variants={variants}
          x1="220"
          x2="360"
          y1="170"
          y2="30"
        />
        <Motion
          as="rect"
          custom={3}
          fill="transparent"
          h="140px"
          rx="20"
          stroke="#0789c7"
          strokeLinecap="round"
          strokeWidth="10px"
          variants={variants}
          w="140px"
          x="410"
          y="30"
        />
        <Motion
          as="polygon"
          custom={4}
          fill="transparent"
          points="670 30, 600 170, 740 170"
          stroke="#42b7a5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10px"
          variants={variants}
        />
      </Motion>
    </Center>
  )
}
