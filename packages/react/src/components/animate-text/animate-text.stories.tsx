import type { Meta, StoryFn } from "@storybook/react-vite"
import { useState } from "react"
import { Box } from "../box"
import { Button } from "../button"
import { Heading } from "../heading"
import { VStack } from "../stack"
import { AnimateText } from "./"

type Story = StoryFn<typeof AnimateText.FadeIn>

const meta: Meta<typeof AnimateText.FadeIn> = {
  component: AnimateText.FadeIn,
  title: "Components / AnimateText",
}

export default meta

export const FadeIn: Story = () => {
  return (
    <Heading fontSize="4xl">
      <AnimateText.FadeIn>Fade In Animation</AnimateText.FadeIn>
    </Heading>
  )
}

export const FadeInLoop: Story = () => {
  return (
    <Heading fontSize="4xl">
      <AnimateText.FadeIn loop>Fade In Animation</AnimateText.FadeIn>
    </Heading>
  )
}

export const FadeInByWord: Story = () => {
  return (
    <Heading fontSize="4xl">
      <AnimateText.FadeIn delayStep={0.2} splitBy="word">
        Hello Yamada UI World
      </AnimateText.FadeIn>
    </Heading>
  )
}

export const Typewriter: Story = () => {
  return (
    <Box fontFamily="mono" fontSize="2xl">
      <AnimateText.Typewriter>Hello, I am typing...</AnimateText.Typewriter>
    </Box>
  )
}

export const TypewriterLoop: Story = () => {
  return (
    <Box fontFamily="mono" fontSize="2xl">
      <AnimateText.Typewriter loop repeatDelay={1500}>
        Hello, I am typing...
      </AnimateText.Typewriter>
    </Box>
  )
}

export const Replay: Story = () => {
  const [key, setKey] = useState(0)

  return (
    <VStack alignItems="flex-start">
      <Button onClick={() => setKey((n) => n + 1)}>Replay</Button>

      <Heading fontSize="3xl">
        <AnimateText.FadeIn key={key}>Replay this animation</AnimateText.FadeIn>
      </Heading>
    </VStack>
  )
}
