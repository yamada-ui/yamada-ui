import type { Meta, StoryFn } from "@storybook/react-vite"
import { expect, screen } from "storybook/test"
import { Tip } from "."
import { HStack, MessageCircleWarningIcon, Text, toTitleCase } from "../.."
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

Basic.play = async ({ canvas, userEvent }) => {
  const button = canvas.getByRole("button", { name: /俺は俺の責務を全うする/ })
  await userEvent.hover(button)
  await new Promise((resolve) => setTimeout(resolve, 100))
  const tooltip = await screen.findByRole("tooltip")
  await expect(tooltip).toBeVisible()
}

export const Status: Story = () => {
  return (
    <For each={["help", "info", "success", "warning", "error"] as const}>
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

Status.play = async ({ canvas, userEvent }) => {
  await userEvent.hover(
    canvas.getAllByRole("button", { name: /俺は俺の責務を全うする/ })[0],
  )
  await expect(await screen.findByRole("tooltip")).toBeVisible()
}

export const ColorScheme: Story = () => {
  return (
    <For each={["help", "info", "success", "warning", "error"] as const}>
      {(status) => (
        <HStack key={status} alignSelf="center" gap="xs">
          <Text as="span" whiteSpace="nowrap">
            Open "{toTitleCase(status)}" Tip
          </Text>
          <Tip
            colorScheme={status === "help" ? "mono" : status}
            content="俺は俺の責務を全うする!!"
            status={status}
          />
        </HStack>
      )}
    </For>
  )
}

ColorScheme.play = async ({ canvas, userEvent }) => {
  await userEvent.hover(
    canvas.getAllByRole("button", { name: /俺は俺の責務を全うする/ })[0],
  )
  await expect(await screen.findByRole("tooltip")).toBeVisible()
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

Duration.play = async ({ canvas, userEvent }) => {
  await userEvent.hover(
    canvas.getByRole("button", { name: /俺は俺の責務を全うする/ }),
  )
  await expect(await screen.findByRole("tooltip")).toBeVisible()
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

Delay.play = async ({ canvas, userEvent }) => {
  await userEvent.hover(
    canvas.getAllByRole("button", { name: /俺は俺の責務を全うする/ })[0],
  )
  await expect(
    await screen.findByRole("tooltip", {}, { timeout: 2000 }),
  ).toBeVisible()
  await userEvent.unhover(
    canvas.getAllByRole("button", { name: /俺は俺の責務を全うする/ })[0],
  )
  await userEvent.hover(
    canvas.getAllByRole("button", { name: /俺は俺の責務を全うする/ })[1],
  )
  await expect(await screen.findByRole("tooltip")).toBeVisible()
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

Offset.play = async ({ canvas, userEvent }) => {
  await userEvent.hover(
    canvas.getByRole("button", { name: /俺は俺の責務を全うする/ }),
  )
  await expect(await screen.findByRole("tooltip")).toBeVisible()
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

Gutter.play = async ({ canvas, userEvent }) => {
  await userEvent.hover(
    canvas.getByRole("button", { name: /俺は俺の責務を全うする/ }),
  )
  await expect(await screen.findByRole("tooltip")).toBeVisible()
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

AnimationScheme.play = async ({ canvas, userEvent }) => {
  const animationSchemes = [
    "scale",
    "block-end",
    "inline-start",
    "inline-end",
    "block-start",
  ] as const
  for (let i = 0; i < animationSchemes.length; i++) {
    if (i > 0) {
      await userEvent.unhover(
        canvas.getAllByRole("button", { name: /俺は俺の責務を全うする/ })[
          i - 1
        ],
      )
    }
    await userEvent.hover(
      canvas.getAllByRole("button", { name: /俺は俺の責務を全うする/ })[i],
    )
    await expect(await screen.findByRole("tooltip")).toBeVisible()
  }
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
          "center-start-start",
          "center-start-end",
          "center-end",
          "center-end-start",
          "center-end-end",
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

Placement.play = async ({ canvas, userEvent }) => {
  const placements = [
    "start",
    "start-start",
    "start-end",
    "start-center",
    "end",
    "end-start",
    "end-end",
    "end-center",
    "center-start",
    "center-start-start",
    "center-start-end",
    "center-end",
    "center-end-start",
    "center-end-end",
  ] as const
  for (let i = 0; i < placements.length; i++) {
    if (i > 0) {
      await userEvent.unhover(
        canvas.getAllByRole("button", { name: /俺は俺の責務を全うする/ })[
          i - 1
        ],
      )
    }
    await userEvent.hover(
      canvas.getAllByRole("button", { name: /俺は俺の責務を全うする/ })[i],
    )
    await expect(await screen.findByRole("tooltip")).toBeVisible()
  }
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

Disabled.parameters = {
  chromatic: { disableSnapshot: true },
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

AlwaysOpen.play = async () => {
  await expect(screen.getByRole("tooltip")).toBeVisible()
}

export const CustomIcon: Story = () => {
  return (
    <HStack gap="xs">
      <Text as="span" whiteSpace="nowrap">
        煉獄杏寿郎
      </Text>
      <Tip
        content="俺は俺の責務を全うする!!"
        icon={<MessageCircleWarningIcon />}
      />
    </HStack>
  )
}

CustomIcon.play = async ({ canvas, userEvent }) => {
  await userEvent.hover(
    canvas.getByRole("button", { name: /俺は俺の責務を全うする/ }),
  )
  await expect(await screen.findByRole("tooltip")).toBeVisible()
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

CustomControl.play = async ({ canvas, userEvent }) => {
  await userEvent.hover(
    canvas.getByRole("button", { name: /俺は俺の責務を全うする/ }),
  )
  await expect(await screen.findByRole("tooltip")).toBeVisible()
}
