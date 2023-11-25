import type { Meta, StoryFn } from "@storybook/react"
import type { MotionVariants } from "@yamada-ui/react"
import { Center, Motion } from "@yamada-ui/react"
import { useMemo } from "react"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  title: "Components / Motion / Gestures",
  component: Motion,
}

export default meta

export const basic: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        whileFocus={{ scale: 1.2 }}
        onHoverStart={(_, info) => console.log("Hover starts", info)}
        onHoverEnd={(_, info) => console.log("Hover ends", info)}
        onTapStart={(_, info) => console.log("Tap starts", info)}
        onTapCancel={(_, info) => console.log("Tap cancels", info)}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="pointer"
      />
    </Center>
  )
}

export const withTransition: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        whileTap={{ scale: 0.9 }}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="pointer"
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
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        whileHover="enlarge"
        whileTap="reduce"
        variants={variants}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="pointer"
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
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Motion
        whileHover="enlarge"
        whileTap="reduce"
        variants={variants}
        w="2xs"
        h="2xs"
        bg="primary"
        rounded="3xl"
        cursor="pointer"
        display="flex"
        placeContent="center"
        placeItems="center"
      >
        <Motion
          w="4xs"
          h="4xs"
          bg="white"
          rounded="2xl"
          onPointerDownCapture={(ev) => ev.stopPropagation()}
        />
      </Motion>
    </Center>
  )
}
