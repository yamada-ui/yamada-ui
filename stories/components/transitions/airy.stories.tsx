import type { Meta, StoryFn } from "@storybook/react"
import type { AiryIdent } from "@yamada-ui/react"
import { MenuIcon, XIcon } from "@yamada-ui/lucide"
import { Airy, Center, Text } from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof Airy>

const meta: Meta<typeof Airy> = {
  component: Airy,
  title: "Components / Transitions / Airy",
}

export default meta

export const basic: Story = () => {
  return (
    <Center
      flexDirection="column"
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Airy
        from={<Text fontSize="2xl">ON</Text>}
        to={<Text fontSize="2xl">OFF</Text>}
      />

      <Airy from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>
  )
}

export const withDuration: Story = () => {
  return (
    <Center
      flexDirection="column"
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Airy
        duration={0.6}
        from={<Text fontSize="2xl">ON</Text>}
        to={<Text fontSize="2xl">OFF</Text>}
      />

      <Airy
        duration={0.6}
        from={<MenuIcon fontSize="2xl" />}
        to={<XIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const withDelay: Story = () => {
  return (
    <Center
      flexDirection="column"
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Airy
        delay={1}
        from={<Text fontSize="2xl">ON</Text>}
        to={<Text fontSize="2xl">OFF</Text>}
      />

      <Airy
        delay={1}
        from={<MenuIcon fontSize="2xl" />}
        to={<XIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const disabled: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy
        disabled
        from={<Text fontSize="2xl">ON</Text>}
        to={<Text fontSize="2xl">OFF</Text>}
      />
    </Center>
  )
}

export const readOnly: Story = () => {
  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy
        from={<Text fontSize="2xl">ON</Text>}
        readOnly
        to={<Text fontSize="2xl">OFF</Text>}
      />
    </Center>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<AiryIdent>("to")

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy
        from={<Text fontSize="2xl">ON</Text>}
        to={<Text fontSize="2xl">OFF</Text>}
        value={value}
        onChange={onChange}
      />
    </Center>
  )
}
