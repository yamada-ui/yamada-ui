import type { Meta, StoryFn } from "@storybook/react"
import { AudioPlayer } from "@yamada-ui/react"
import { FaRobot } from "react-icons/fa"

type Story = StoryFn<typeof AudioPlayer>

const meta: Meta<typeof AudioPlayer> = {
  title: "Components / Media And Icons / AudioPlayer",
  component: AudioPlayer,
}

export default meta

export const basic: Story = () => {
  return (
    <AudioPlayer src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed" />
  )
}

export const withDuration: Story = () => {
  return (
    <AudioPlayer
      src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
      showDuration
    />
  )
}

export const withTitle: Story = () => {
  return (
    <AudioPlayer
      src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
      title="Lofi Music"
    />
  )
}

export const withSlider: Story = () => {
  return (
    <AudioPlayer
      src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
      withSlider
    />
  )
}

export const withBgColorandBrdrColor: Story = () => {
  return (
    <AudioPlayer
      src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
      bgColor="red.500"
      borderColor="white"
    />
  )
}

export const withCustomIcons: Story = () => {
  return (
    <AudioPlayer
      src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
      startIcon={<FaRobot />}
      stopIcon={<FaRobot />}
    />
  )
}

export const withMuteButton: Story = () => {
  return (
    <AudioPlayer
      src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
      muteButton
    />
  )
}

//This will show the formatting of the title while using the slider
//This will show that there are no conflicts between the options
export const withAllOptions: Story = () => {
  return (
    <AudioPlayer
      src="https://ncs.io/track/download/8a2ef9d5-e558-4e5d-8406-7efbb13b07ed"
      showDuration
      title="Lofi Music"
      withSlider
      bgColor="red.500"
      borderColor="white"
      muteButton
    />
  )
}
