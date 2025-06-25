import type { Meta, StoryFn } from "@storybook/react-vite"
import type { Variants } from "motion/react"
import { useMemo } from "react"
import {} from "../../../storybook/components"
import { Motion } from "./motion"

type Story = StoryFn<typeof Motion>

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "Components / Motion / Gestures",
}

export default meta

export const Basic: Story = () => {
  return (
    <Motion
      bg="mono"
      cursor="pointer"
      h="2xs"
      rounded="l3"
      w="2xs"
      whileFocus={{ scale: 1.2 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverEnd={(_, info) => console.log("Hover ends", info)}
      onHoverStart={(_, info) => console.log("Hover starts", info)}
      onTapCancel={(_, info) => console.log("Tap cancels", info)}
      onTapStart={(_, info) => console.log("Tap starts", info)}
    />
  )
}

export const Transition: Story = () => {
  return (
    <Motion
      bg="mono"
      cursor="pointer"
      h="2xs"
      rounded="l3"
      w="2xs"
      whileHover={{ scale: 1.2, transition: { duration: 1 } }}
      whileTap={{ scale: 0.9 }}
    />
  )
}

export const Variant: Story = () => {
  const variants: Variants = useMemo(
    () => ({
      enlarge: { scale: 1.2 },
      reduce: { scale: 0.9 },
    }),
    [],
  )

  return (
    <Motion
      bg="mono"
      cursor="pointer"
      h="2xs"
      rounded="l3"
      variants={variants}
      w="2xs"
      whileHover="enlarge"
      whileTap="reduce"
    />
  )
}

export const StopPropagation: Story = () => {
  const variants: Variants = useMemo(
    () => ({
      enlarge: { scale: 1.2 },
      reduce: { scale: 0.9 },
    }),
    [],
  )

  return (
    <Motion
      bg="mono"
      cursor="pointer"
      display="flex"
      h="2xs"
      placeContent="center"
      placeItems="center"
      rounded="l3"
      variants={variants}
      w="2xs"
      whileHover="enlarge"
      whileTap="reduce"
    >
      <Motion
        bg="mono.contrast"
        h="4xs"
        rounded="l3"
        w="4xs"
        onPointerDownCapture={(ev) => ev.stopPropagation()}
      />
    </Motion>
  )
}
