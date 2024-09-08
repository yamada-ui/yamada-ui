import type { Meta, StoryFn } from "@storybook/react"
import { Apple, Cherry, Menu, Moon, Sun, X } from "@yamada-ui/lucide"
import { Avatar, Card, Center, Swap, Text } from "@yamada-ui/react"

type Story = StoryFn<typeof Swap>

const meta: Meta<typeof Swap> = {
  title: "Components / Motion / Swap",
  component: Swap,
}

export default meta

export const airy: Story = () => {
  return (
    <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Swap
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
        animation="airy"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      />

      <Swap
        from={<Menu fontSize="50px" />}
        to={<X fontSize="50px" />}
        animation="airy"
      />
    </Center>
  )
}

export const rotate: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Swap
        from={<Sun fontSize="50px" />}
        to={<Moon fontSize="50px" />}
        animation="rotate"
        rotate="45deg"
        motionTransition={{
          duration: 0.1,
        }}
        style={{
          cursor: "pointer",
        }}
      />

      <Swap
        from={<Apple fontSize="50px" />}
        to={<Cherry fontSize="50px" />}
        animation="rotate"
        rotate="360deg"
        style={{
          cursor: "pointer",
        }}
      />
    </Center>
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

export const horizontalFlip: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Swap
        from={<BackOfCard />}
        to={<FrontOfCard />}
        animation="horizontalFlip"
        motionTransition={{
          type: "spring",
          stiffness: 20,
          damping: 10,
        }}
      />

      <Swap
        from={<Apple fontSize="50px" />}
        to={<Cherry fontSize="50px" />}
        animation="horizontalFlip"
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
      <Swap
        from={<BackOfCard />}
        to={<FrontOfCard />}
        animation="verticalFlip"
      />

      <Swap
        from={<Apple fontSize="50px" />}
        to={<Cherry fontSize="50px" />}
        animation="verticalFlip"
      />
    </Center>
  )
}
