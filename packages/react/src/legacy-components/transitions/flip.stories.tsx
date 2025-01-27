import type { Meta, StoryFn } from "@storybook/react"
import type { FlipIdent } from "."
import { useState } from "react"
import { Flip } from "."
import { Avatar } from "../../components/avatar"
import { Center } from "../../components/center"
import { AppleIcon, CherryIcon } from "../../components/icon"
import { Text } from "../../components/text"

type Story = StoryFn<typeof Flip>

const meta: Meta<typeof Flip> = {
  component: Flip,
  title: "Components / Flip",
}

export default meta

const FrontOfCard = () => {
  return (
    <Center bg="white" borderRadius="lg" borderWidth="1px" h="2xs" w="3xs">
      <Text color="black" fontSize="lg">
        Yamada UI
      </Text>
    </Center>
  )
}

const BackOfCard = () => {
  return (
    <Center bg="black" borderRadius="lg" borderWidth="1px" h="2xs" w="3xs">
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
        size="lg"
      />
    </Center>
  )
}

export const Basic: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Flip from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip
        from={<AppleIcon fontSize="2xl" />}
        to={<CherryIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const FlipVertical: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Flip from={<BackOfCard />} orientation="vertical" to={<FrontOfCard />} />

      <Flip
        from={<AppleIcon fontSize="2xl" />}
        orientation="vertical"
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
      <Flip duration={1.4} from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip
        duration={1.4}
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
      <Flip delay={1} from={<BackOfCard />} to={<FrontOfCard />} />

      <Flip
        delay={1}
        from={<AppleIcon fontSize="2xl" />}
        to={<CherryIcon fontSize="2xl" />}
      />
    </Center>
  )
}

export const UseSpring: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Flip
        from={<BackOfCard />}
        to={<FrontOfCard />}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 80,
        }}
      />

      <Flip
        from={<AppleIcon fontSize="2xl" />}
        to={<CherryIcon fontSize="2xl" />}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 120,
        }}
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
      <Flip disabled from={<BackOfCard />} to={<FrontOfCard />} />
    </Center>
  )
}

export const ReadOnly: Story = () => {
  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Flip from={<BackOfCard />} readOnly to={<FrontOfCard />} />
    </Center>
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<FlipIdent>("from")

  return (
    <Center
      display="flex"
      gap="4xl"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Flip
        from={<BackOfCard />}
        to={<FrontOfCard />}
        value={value}
        onChange={onChange}
      />
    </Center>
  )
}
