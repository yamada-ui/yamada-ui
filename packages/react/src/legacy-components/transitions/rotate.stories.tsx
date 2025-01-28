import type { Meta, StoryFn } from "@storybook/react"
import type { RotateIdent } from "."
import { useState } from "react"
import { Rotate } from "."
import { Center } from "../../components/center"
import {
  AppleIcon,
  CherryIcon,
  GrabIcon,
  HandMetalIcon,
  MoonIcon,
  SunIcon,
} from "../../components/icon"

type Story = StoryFn<typeof Rotate>

const meta: Meta<typeof Rotate> = {
  component: Rotate,
  title: "Components / Rotate",
}

export default meta

export const Basic: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Rotate
        from={<SunIcon fontSize="2xl" />}
        to={<MoonIcon fontSize="2xl" />}
      />

      <Rotate
        from={<AppleIcon fontSize="2xl" />}
        to={<CherryIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const WithRotate: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Rotate
        from={<GrabIcon fontSize="2xl" />}
        rotate={360}
        to={<HandMetalIcon fontSize="2xl" />}
      />

      <Rotate
        from={<AppleIcon fontSize="2xl" />}
        rotate={-360}
        to={<CherryIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const WithDuration: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Rotate
        duration={0.6}
        from={<SunIcon fontSize="2xl" />}
        to={<MoonIcon fontSize="2xl" />}
      />

      <Rotate
        duration={0.6}
        from={<AppleIcon fontSize="2xl" />}
        to={<CherryIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const WithDelay: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Rotate
        delay={1}
        from={<SunIcon fontSize="2xl" />}
        to={<MoonIcon fontSize="2xl" />}
      />

      <Rotate
        delay={1}
        from={<AppleIcon fontSize="2xl" />}
        to={<CherryIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const Disabled: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Rotate
        disabled
        from={<SunIcon fontSize="2xl" />}
        to={<MoonIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const Readonly: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Rotate
        from={<SunIcon fontSize="2xl" />}
        readOnly
        to={<MoonIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<RotateIdent>("to")

  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Rotate
        from={<SunIcon fontSize="2xl" />}
        to={<MoonIcon fontSize="2xl" />}
        value={value}
        onChange={onChange}
      />
    </Center>
  )
}
