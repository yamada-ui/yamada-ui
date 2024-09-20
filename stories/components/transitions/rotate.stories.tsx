import type { Meta, StoryFn } from "@storybook/react"
import { Apple, Cherry, Moon, Sun } from "@yamada-ui/lucide"
import type { RotateIdent } from "@yamada-ui/react"
import { Rotate, Center } from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof Rotate>

const meta: Meta<typeof Rotate> = {
  title: "Components / Transitions / Rotate",
  component: Rotate,
}

export default meta

export const basic: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Rotate from={<Sun fontSize="50px" />} to={<Moon fontSize="50px" />} />

      <Rotate from={<Apple fontSize="6xl" />} to={<Cherry fontSize="6xl" />} />
    </Center>
  )
}

export const withRotate: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Rotate
        from={<Sun fontSize="50px" />}
        to={<Moon fontSize="50px" />}
        rotate={360}
      />

      <Rotate
        from={<Apple fontSize="6xl" />}
        to={<Cherry fontSize="6xl" />}
        rotate={-360}
      />
    </Center>
  )
}

export const customControl: Story = () => {
  const [currentIdent, onChange] = useState<RotateIdent>("to")

  const onChangeRotateAnimation = () => {
    console.log(`current ident is ${currentIdent}`)
    onChange((prev) => (prev === "from" ? "to" : "from"))
  }

  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Rotate
        value={currentIdent}
        onChange={onChangeRotateAnimation}
        from={<Sun fontSize="50px" />}
        to={<Moon fontSize="50px" />}
      />
    </Center>
  )
}

export const withDisabled: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Rotate
        isDisabled
        from={<Sun fontSize="50px" />}
        to={<Moon fontSize="50px" />}
      />
    </Center>
  )
}

export const withReadOnly: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Rotate
        isReadOnly
        from={<Sun fontSize="50px" />}
        to={<Moon fontSize="50px" />}
      />
    </Center>
  )
}
