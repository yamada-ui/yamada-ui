import type { Meta, StoryFn } from "@storybook/react-vite"
import type { KeyframeIdent } from "../../core"
import { useState } from "react"
import { AppleIcon, CherryIcon } from "../icon"
import { Flip } from "./"

type Story = StoryFn<typeof Flip>

const meta: Meta<typeof Flip> = {
  component: Flip,
  title: "Components / Flip",
}

export default meta

export const Basic: Story = () => {
  return (
    <Flip
      aria-label="Toggle icon"
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const Orientation: Story = () => {
  return (
    <Flip
      aria-label="Toggle icon"
      from={<AppleIcon fontSize="2xl" />}
      orientation="vertical"
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const Duration: Story = () => {
  return (
    <Flip
      aria-label="Toggle icon"
      duration={1.4}
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const Delay: Story = () => {
  return (
    <Flip
      aria-label="Toggle icon"
      delay={1}
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const Transition: Story = () => {
  return (
    <Flip
      aria-label="Toggle icon"
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 120,
      }}
    />
  )
}

export const Disabled: Story = () => {
  return (
    <Flip
      aria-label="Toggle icon"
      disabled
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const ReadOnly: Story = () => {
  return (
    <Flip
      aria-label="Toggle icon"
      from={<AppleIcon fontSize="2xl" />}
      readOnly
      to={<CherryIcon fontSize="2xl" />}
    />
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<KeyframeIdent>("from")

  return (
    <Flip
      aria-label="Toggle icon"
      from={<AppleIcon fontSize="2xl" />}
      to={<CherryIcon fontSize="2xl" />}
      value={value}
      onChange={onChange}
    />
  )
}
