import type { Meta, StoryFn } from "@storybook/react"
import type { RotateIdent } from "@yamada-ui/react"
import {
  AppleIcon,
  CherryIcon,
  GrabIcon,
  HandMetalIcon,
  MoonIcon,
  SunIcon,
} from "@yamada-ui/lucide"
import { Center, Rotate } from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof Rotate>

const meta: Meta<typeof Rotate> = {
  component: Rotate,
  title: "Components / Transitions / Rotate",
}

export default meta

export const basic: Story = () => {
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

export const withRotate: Story = () => {
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

export const withDuration: Story = () => {
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

export const withDelay: Story = () => {
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

export const isDisabled: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Rotate
        from={<SunIcon fontSize="2xl" />}
        isDisabled
        to={<MoonIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const isReadonly: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Rotate
        from={<SunIcon fontSize="2xl" />}
        isReadOnly
        to={<MoonIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const customControl: Story = () => {
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
