import type { Meta, StoryFn } from "@storybook/react"
import { Apple, Cherry } from "@yamada-ui/lucide"
import { Flip, Avatar, Card, Center, Text } from "@yamada-ui/react"

type Story = StoryFn<typeof Flip>

const meta: Meta<typeof Flip> = {
  title: "Components / Transitions / Flip",
  component: Flip,
}

export default meta

const FrontOfCard = () => {
  return (
    <Card
      borderRadius="xl"
      bg="white"
      w="xs"
      h="sm"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="1px solid gray"
    >
      <Text fontSize="xl" color="black">
        Yamada UI
      </Text>
    </Card>
  )
}

const BackOfCard = () => {
  return (
    <Card
      borderRadius="xl"
      bg="black"
      w="xs"
      h="sm"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="1px solid gray"
    >
      <Avatar
        size="xl"
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Card>
  )
}

export const basic: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Flip
        from={<BackOfCard />}
        to={<FrontOfCard />}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 10,
        }}
      />

      <Flip
        from={<Apple fontSize="6xl" />}
        to={<Cherry fontSize="6xl" />}
        style={{
          cursor: "pointer",
        }}
      />
    </Center>
  )
}

export const verticalFlip: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Flip
        from={<BackOfCard />}
        to={<FrontOfCard />}
        flipDirection="vertical"
      />

      <Flip
        from={<Apple fontSize="6xl" />}
        to={<Cherry fontSize="6xl" />}
        flipDirection="vertical"
      />
    </Center>
  )
}