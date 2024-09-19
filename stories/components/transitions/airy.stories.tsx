import type { Meta, StoryFn } from "@storybook/react"
import { Menu, X } from "@yamada-ui/lucide"
import type { AiryIdent } from "@yamada-ui/react"
import { Airy, Text, Center } from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof Airy>

const meta: Meta<typeof Airy> = {
  title: "Components / Transitions / Airy",
  component: Airy,
}

export default meta

export const basic: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Airy
        from={
          <Text w="xs" fontSize="5xl">
            ON
          </Text>
        }
        to={
          <Text w="xs" fontSize="5xl">
            OFF
          </Text>
        }
      />

      <Airy from={<Menu fontSize="6xl" />} to={<X fontSize="6xl" />} />
    </Center>
  )
}

export const withDuration: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Airy
        from={
          <Text w="xs" fontSize="5xl">
            ON
          </Text>
        }
        to={
          <Text w="xs" fontSize="5xl">
            OFF
          </Text>
        }
        duration={0.6}
      />

      <Airy
        from={<Menu fontSize="6xl" />}
        to={<X fontSize="6xl" />}
        duration={0.6}
      />
    </Center>
  )
}

export const customControl: Story = () => {
  const [currentElement, onChange] = useState<AiryIdent>("to")

  const onChangeAiryAnimation = () => {
    console.log(`current element is ${currentElement}`)
    onChange((prev) => (prev === "from" ? "to" : "from"))
  }

  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Airy
        value={currentElement}
        onChange={onChangeAiryAnimation}
        from={
          <Text w="xs" fontSize="5xl">
            ON
          </Text>
        }
        to={
          <Text w="xs" fontSize="5xl">
            OFF
          </Text>
        }
      />
    </Center>
  )
}
