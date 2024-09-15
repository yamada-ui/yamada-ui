import type { Meta, StoryFn } from "@storybook/react"
import { Apple, Cherry, Moon, Sun } from "@yamada-ui/lucide"
import { Rotate, Center } from "@yamada-ui/react"

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
      <Rotate
        from={<Sun fontSize="50px" />}
        to={<Moon fontSize="50px" />}
        style={{
          cursor: "pointer",
        }}
      />

      <Rotate
        from={<Apple fontSize="6xl" />}
        to={<Cherry fontSize="6xl" />}
        style={{
          cursor: "pointer",
        }}
      />
    </Center>
  )
}
