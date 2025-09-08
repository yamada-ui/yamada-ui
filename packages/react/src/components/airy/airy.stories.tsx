import type { Meta, StoryFn } from "@storybook/react-vite"
import type { KeyframeIdent } from "../../core"
import { useState } from "react"
import { Airy } from "."
import { MenuIcon, XIcon } from "../icon"

type Story = StoryFn<typeof Airy>

const meta: Meta<typeof Airy> = {
  component: Airy,
  title: "Components / Airy",
}

export default meta

export const Basic: Story = () => {
  return (
    <Airy from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
  )
}

export const Duration: Story = () => {
  return (
    <Airy
      duration={0.6}
      from={<MenuIcon fontSize="2xl" />}
      to={<XIcon fontSize="2xl" />}
    />
  )
}

export const Delay: Story = () => {
  return (
    <Airy
      delay={1}
      from={<MenuIcon fontSize="2xl" />}
      to={<XIcon fontSize="2xl" />}
    />
  )
}

export const Disabled: Story = () => {
  return (
    <Airy
      disabled
      from={<MenuIcon fontSize="2xl" />}
      to={<XIcon fontSize="2xl" />}
    />
  )
}

export const ReadOnly: Story = () => {
  return (
    <Airy
      from={<MenuIcon fontSize="2xl" />}
      readOnly
      to={<XIcon fontSize="2xl" />}
    />
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<KeyframeIdent>("to")

  return (
    <Airy
      from={<MenuIcon fontSize="2xl" />}
      to={<XIcon fontSize="2xl" />}
      value={value}
      onChange={onChange}
    />
  )
}
