import type { Meta, StoryFn } from "@storybook/react-vite"
import type { KeyframeIdent } from "../../core"
import { useState } from "react"
import { AppleIcon, CherryIcon } from "../icon"
import { Rotate } from "./"

type Story = StoryFn<typeof Rotate>

const meta: Meta<typeof Rotate> = {
  component: Rotate,
  title: "Components / Rotate",
}

export default meta

export const Basic: Story = () => {
  return (
    <Rotate
      aria-label="Toggle icon"
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const RotateDegree: Story = () => {
  return (
    <Rotate
      aria-label="Toggle icon"
      from={<AppleIcon fontSize="2xl" />}
      rotate={-360}
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const Duration: Story = () => {
  return (
    <Rotate
      aria-label="Toggle icon"
      duration={0.6}
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const Delay: Story = () => {
  return (
    <Rotate
      aria-label="Toggle icon"
      delay={1}
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const Disabled: Story = () => {
  return (
    <Rotate
      aria-label="Toggle icon"
      disabled
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const ReadOnly: Story = () => {
  return (
    <Rotate
      aria-label="Toggle icon"
      from={<AppleIcon fontSize="2xl" />}
      readOnly
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<KeyframeIdent>("to")

  return (
    <Rotate
      aria-label="Toggle icon"
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
      value={value}
      onChange={onChange}
    />
  )
}
