import type { Meta, StoryFn } from "@storybook/react"
import type { MotionVariants } from "@yamada-ui/react"
import { Center, Motion } from "@yamada-ui/react"
import { useMemo } from "react"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Gestures",
}

export default meta

export const basic: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        bg="primary"
        cursor="pointer"
        h="2xs"
        rounded="3xl"
        w="2xs"
        whileFocus={{ scale: 1.2 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onHoverEnd={(_, info) => console.log("Hover ends", info)}
        onHoverStart={(_, info) => console.log("Hover starts", info)}
        onTapCancel={(_, info) => console.log("Tap cancels", info)}
        onTapStart={(_, info) => console.log("Tap starts", info)}
      />
    </Center>
  )
}

export const withTransition: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        bg="primary"
        cursor="pointer"
        h="2xs"
        rounded="3xl"
        w="2xs"
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        whileTap={{ scale: 0.9 }}
      />
    </Center>
  )
}

export const withVariants: Story = () => {
  const variants: MotionVariants = useMemo(
    () => ({
      enlarge: { scale: 1.2 },
      reduce: { scale: 0.9 },
    }),
    [],
  )

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        bg="primary"
        cursor="pointer"
        h="2xs"
        rounded="3xl"
        variants={variants}
        w="2xs"
        whileHover="enlarge"
        whileTap="reduce"
      />
    </Center>
  )
}

export const useStopPropagation: Story = () => {
  const variants: MotionVariants = useMemo(
    () => ({
      enlarge: { scale: 1.2 },
      reduce: { scale: 0.9 },
    }),
    [],
  )

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Motion
        bg="primary"
        cursor="pointer"
        display="flex"
        h="2xs"
        placeContent="center"
        placeItems="center"
        rounded="3xl"
        variants={variants}
        w="2xs"
        whileHover="enlarge"
        whileTap="reduce"
      >
        <Motion
          bg="white"
          h="4xs"
          rounded="2xl"
          w="4xs"
          onPointerDownCapture={(ev) => ev.stopPropagation()}
        />
      </Motion>
    </Center>
  )
}
