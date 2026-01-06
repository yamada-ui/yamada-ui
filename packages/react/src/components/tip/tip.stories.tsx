import type { Meta, StoryFn } from "@storybook/react-vite"
import { Tip } from "."
import { CircleQuestionMarkIcon, HStack, Text } from "../.."
import { useDisclosure } from "../../hooks/use-disclosure"
import { For } from "../for"

type Story = StoryFn<typeof Tip>

const meta: Meta<typeof Tip> = {
  component: Tip,
  parameters: { layout: "centered" },
  title: "Components / Tip",
}

export default meta

export const Basic: Story = () => {
  return <Tip content="俺は俺の責務を全うする!!" />
}

export const WithText: Story = () => {
  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip content="俺は俺の責務を全うする!!" iconProps={{ size: "xs" }} />
    </HStack>
  )
}

export const Duration: Story = () => {
  return <Tip content="俺は俺の責務を全うする!!" duration={0.7} />
}

export const Delay: Story = () => {
  return (
    <>
      <Tip content="Delay Open 1000ms" openDelay={1000} placement="start" />
      <Tip closeDelay={1000} content="Delay Close 1000ms" placement="end" />
    </>
  )
}

export const Offset: Story = () => {
  return <Tip content="俺は俺の責務を全うする!!" offset={[16, 16]} />
}

export const Gutter: Story = () => {
  return <Tip content="俺は俺の責務を全うする!!" gutter={32} />
}

export const AnimationScheme: Story = () => {
  return (
    <For
      each={
        [
          "scale",
          "block-end",
          "inline-start",
          "inline-end",
          "block-start",
        ] as const
      }
    >
      {(animationScheme) => (
        <Tip
          key={animationScheme}
          animationScheme={animationScheme}
          content="俺は俺の責務を全うする!!"
        />
      )}
    </For>
  )
}

export const Placement: Story = () => {
  return (
    <For
      each={
        [
          "start",
          "start-start",
          "start-end",
          "start-center",
          "end",
          "end-start",
          "end-end",
          "end-center",
          "center-start",
          "center-end",
        ] as const
      }
    >
      {(placement) => (
        <Tip
          key={placement}
          content="俺は俺の責務を全うする!! "
          placement={placement}
        />
      )}
    </For>
  )
}

export const Disabled: Story = () => {
  return <Tip content="俺は俺の責務を全うする!!" disabled />
}

export const AlwaysOpen: Story = () => {
  return <Tip content="俺は俺の責務を全うする!!" open />
}

export const CustomIcon: Story = () => {
  return (
    <>
      <Tip
        content="俺は俺の責務を全うする!!"
        placement="start"
        iconProps={{ color: "orange" }}
      />
      <Tip
        content="俺は俺の責務を全うする!!"
        icon={<CircleQuestionMarkIcon />}
        placement="end"
        iconProps={{ "aria-label": "question" }}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <Tip
      content="俺は俺の責務を全うする!!"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    />
  )
}
