import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import { Apple, Cherry } from "@yamada-ui/lucide"
import type { FlipIdent } from "@yamada-ui/react"
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
      <Flip from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip from={<Apple fontSize="6xl" />} to={<Cherry fontSize="6xl" />} />
    </Center>
  )
}

export const flipVertical: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Flip from={<BackOfCard />} to={<FrontOfCard />} orientation="vertical" />

      <Flip
        from={<Apple fontSize="6xl" />}
        to={<Cherry fontSize="6xl" />}
        orientation="vertical"
      />
    </Center>
  )
}

export const withDuration: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Flip from={<BackOfCard />} to={<FrontOfCard />} duration={1.5} />

      <Flip
        from={<Apple fontSize="6xl" />}
        to={<Cherry fontSize="6xl" />}
        duration={1.5}
      />
    </Center>
  )
}

export const withDelay: Story = () => {
  return (
    <Center
      w="calc(100vw - 16px * 2)"
      h="calc(100vh - 16px * 2)"
      display="flex"
      gap="4xl"
    >
      <Flip from={<BackOfCard />} to={<FrontOfCard />} delay={0.5} />

      <Flip
        from={<Apple fontSize="6xl" />}
        to={<Cherry fontSize="6xl" />}
        delay={0.5}
      />
    </Center>
  )
}

export const useSpring: Story = () => {
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
          stiffness: 80,
          damping: 10,
        }}
      />

      <Flip
        from={<Apple fontSize="6xl" />}
        to={<Cherry fontSize="6xl" />}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
      />
    </Center>
  )
}

export const customControl: Story = () => {
  const [currentIdent, onChange] = useState<FlipIdent>("from")

  const onChangeFlipAnimation = () => {
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
      <Flip
        value={currentIdent}
        onChange={onChangeFlipAnimation}
        from={<BackOfCard />}
        to={<FrontOfCard />}
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
      <Flip isDisabled from={<BackOfCard />} to={<FrontOfCard />} />
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
      <Flip isReadOnly from={<BackOfCard />} to={<FrontOfCard />} />
    </Center>
  )
}
