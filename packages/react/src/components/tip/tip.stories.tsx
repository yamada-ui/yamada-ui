import type { Meta, StoryFn } from "@storybook/react-vite"
import { Tip } from "."
import { CircleQuestionMarkIcon, HStack, Text, toTitleCase } from "../.."
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
  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip content="俺は俺の責務を全うする!!" />
    </HStack>
  )
}

export const Status: Story = () => {
  return (
    <For each={["info", "success", "warning", "error"] as const}>
      {(status) => (
        <HStack key={status} alignSelf="center" gap="xs">
          <Text as="span" whiteSpace="nowrap">
            Open "{toTitleCase(status)}" Tip
          </Text>
          <Tip content="俺は俺の責務を全うする!!" status={status} />
        </HStack>
      )}
    </For>
  )
}

export const ColorScheme: Story = () => {
  return (
    <For each={["info", "success", "warning", "error"] as const}>
      {(status) => (
        <HStack key={status} alignSelf="center" gap="xs">
          <Text as="span" whiteSpace="nowrap">
            Open "{toTitleCase(status)}" Tip
          </Text>
          <Tip
            colorScheme={status}
            content="俺は俺の責務を全うする!!"
            status={status}
          />
        </HStack>
      )}
    </For>
  )
}

export const Duration: Story = () => {
  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip content="俺は俺の責務を全うする!!" duration={0.7} />
    </HStack>
  )
}

export const Delay: Story = () => {
  return (
    <>
      <HStack gap="xs">
        <Text as="span" whiteSpace="nowrap">
          Delay Open 1000ms
        </Text>
        <Tip
          content="俺は俺の責務を全うする!!"
          openDelay={1000}
          placement="start"
        />
      </HStack>

      <HStack gap="xs">
        <Text as="span" whiteSpace="nowrap">
          Delay Close 1000ms
        </Text>
        <Tip
          closeDelay={1000}
          content="俺は俺の責務を全うする!!"
          placement="end"
        />
      </HStack>
    </>
  )
}

export const Offset: Story = () => {
  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip content="俺は俺の責務を全うする!!" offset={[16, 16]} />
    </HStack>
  )
}

export const Gutter: Story = () => {
  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip content="俺は俺の責務を全うする!!" gutter={32} />
    </HStack>
  )
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
        <HStack key={animationScheme} alignSelf="center" gap="xs">
          <Text as="span" whiteSpace="nowrap">
            Open "{animationScheme}" Tip
          </Text>
          <Tip
            animationScheme={animationScheme}
            content="俺は俺の責務を全うする!!"
          />
        </HStack>
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
        <HStack key={placement} alignSelf="center" gap="xs">
          <Text as="span" whiteSpace="nowrap">
            Open "{toTitleCase(placement)}" Tip
          </Text>
          <Tip content="俺は俺の責務を全うする!!" placement={placement} />
        </HStack>
      )}
    </For>
  )
}

export const Disabled: Story = () => {
  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip content="俺は俺の責務を全うする!!" disabled />
    </HStack>
  )
}

export const AlwaysOpen: Story = () => {
  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip content="俺は俺の責務を全うする!!" open />
    </HStack>
  )
}

export const CustomIcon: Story = () => {
  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip
        content="俺は俺の責務を全うする!!"
        icon={<CircleQuestionMarkIcon />}
      />
    </HStack>
  )
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip
        content="俺は俺の責務を全うする!!"
        open={open}
        onClose={onClose}
        onOpen={onOpen}
      />
    </HStack>
  )
}
