import type { Meta, StoryFn } from "@storybook/react"
import type { RotateIdent } from "@yamada-ui/react"
import { Apple, Cherry, Grab, HandMetal, Moon, Sun } from "@yamada-ui/lucide"
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
      <Rotate from={<Sun fontSize="2xl" />} to={<Moon fontSize="2xl" />} />

      <Rotate from={<Apple fontSize="2xl" />} to={<Cherry fontSize="2xl" />} />
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
        from={<Grab fontSize="2xl" />}
        rotate={360}
        to={<HandMetal fontSize="2xl" />}
      />

      <Rotate
        from={<Apple fontSize="2xl" />}
        rotate={-360}
        to={<Cherry fontSize="2xl" />}
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
        from={<Sun fontSize="2xl" />}
        to={<Moon fontSize="2xl" />}
      />

      <Rotate
        duration={0.6}
        from={<Apple fontSize="2xl" />}
        to={<Cherry fontSize="2xl" />}
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
        from={<Sun fontSize="2xl" />}
        to={<Moon fontSize="2xl" />}
      />

      <Rotate
        delay={1}
        from={<Apple fontSize="2xl" />}
        to={<Cherry fontSize="2xl" />}
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
        from={<Sun fontSize="2xl" />}
        isDisabled
        to={<Moon fontSize="2xl" />}
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
        from={<Sun fontSize="2xl" />}
        isReadOnly
        to={<Moon fontSize="2xl" />}
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
        from={<Sun fontSize="2xl" />}
        to={<Moon fontSize="2xl" />}
        value={value}
        onChange={onChange}
      />
    </Center>
  )
}
