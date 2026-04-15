import type { Meta, StoryFn } from "@storybook/react-vite"
import { expect, screen } from "storybook/test"
import { useDisclosure } from "../../hooks/use-disclosure"
import { toTitleCase } from "../../utils"
import { Button } from "../button"
import { For } from "../for"
import { Tooltip } from "./tooltip"

type Story = StoryFn<typeof Tooltip>

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: { layout: "centered" },
  title: "Components / Tooltip",
}

export default meta

export const Basic: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ">
      <Button>Please Hover</Button>
    </Tooltip>
  )
}

Basic.play = async ({ canvas, userEvent }) => {
  const button = canvas.getByRole("button", { name: /please hover/i })
  await userEvent.hover(button)
  await new Promise((resolve) => setTimeout(resolve, 100))
  const tooltip = await screen.findByRole("tooltip")
  await expect(tooltip).toBeVisible()
}

export const Duration: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" duration={0.7}>
      <Button>Please Hover</Button>
    </Tooltip>
  )
}

Duration.play = async ({ canvas, userEvent }) => {
  const button = canvas.getByRole("button", { name: /please hover/i })
  await userEvent.hover(button)
  await new Promise((resolve) => setTimeout(resolve, 100))
  const tooltip = await screen.findByRole("tooltip")
  await expect(tooltip).toBeVisible()
}

export const Delay: Story = () => {
  return (
    <>
      <Tooltip
        content="へっ！きたねぇ花火だ"
        openDelay={1000}
        placement="start"
      >
        <Button>Delay Open 1000ms</Button>
      </Tooltip>

      <Tooltip closeDelay={1000} content="へっ！きたねぇ花火だ" placement="end">
        <Button>Delay Close 1000ms</Button>
      </Tooltip>
    </>
  )
}

Delay.play = async ({ canvas, userEvent }) => {
  const openButton = canvas.getByRole("button", { name: /delay open 1000ms/i })
  const closeButton = canvas.getByRole("button", {
    name: /delay close 1000ms/i,
  })

  await userEvent.hover(openButton)
  await new Promise((resolve) => setTimeout(resolve, 1500))
  await expect(await screen.findByRole("tooltip")).toBeVisible()

  await userEvent.unhover(openButton)
  await userEvent.hover(closeButton)
  await expect(await screen.findByRole("tooltip")).toBeVisible()

  await userEvent.unhover(closeButton)
  await new Promise((resolve) => setTimeout(resolve, 1500))
  await expect(screen.queryByRole("tooltip")).not.toBeVisible()
}

export const Offset: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" offset={[16, 16]}>
      <Button>Please Hover</Button>
    </Tooltip>
  )
}

Offset.play = async ({ canvas, userEvent }) => {
  const button = canvas.getByRole("button", { name: /please hover/i })
  await userEvent.hover(button)
  await new Promise((resolve) => setTimeout(resolve, 100))
  const tooltip = await screen.findByRole("tooltip")
  await expect(tooltip).toBeVisible()
}

export const Gutter: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" gutter={32}>
      <Button>Please Hover</Button>
    </Tooltip>
  )
}

Gutter.play = async ({ canvas, userEvent }) => {
  const button = canvas.getByRole("button", { name: /please hover/i })
  await userEvent.hover(button)
  await new Promise((resolve) => setTimeout(resolve, 100))
  const tooltip = await screen.findByRole("tooltip")
  await expect(tooltip).toBeVisible()
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
        <Tooltip
          key={animationScheme}
          animationScheme={animationScheme}
          content="へっ！きたねぇ花火だ"
        >
          <Button minW="xs">Open "{animationScheme}" Tooltip</Button>
        </Tooltip>
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
        canvas.getByRole("button", {
          name: `Open "${animationSchemes[i - 1]}" Tooltip`,
        }),
      )
    }
    await userEvent.hover(
      canvas.getByRole("button", {
        name: `Open "${animationSchemes[i]}" Tooltip`,
      }),
    )
    await new Promise((resolve) => setTimeout(resolve, 100))
    const tooltip = await screen.findByRole("tooltip")
    await expect(tooltip).toBeVisible()
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
        <Tooltip
          key={placement}
          content="へっ！きたねぇ花火だ"
          placement={placement}
        >
          <Button minW="xs">Open "{toTitleCase(placement)}" Tooltip</Button>
        </Tooltip>
      )}
    </For>
  )
}

Placement.play = async ({ canvas, userEvent }) => {
  const buttons = canvas.getAllByRole("button")
  for (const button of buttons) {
    await userEvent.hover(button)
    await new Promise((resolve) => setTimeout(resolve, 100))
    const tooltip = await screen.findByRole("tooltip")
    await expect(tooltip).toBeVisible()
  }
}

export const Disabled: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" disabled>
      <Button>Please Hover</Button>
    </Tooltip>
  )
}

Disabled.parameters = {
  chromatic: { disableSnapshot: true },
}

Disabled.play = async ({ canvas, userEvent }) => {
  await userEvent.hover(canvas.getByRole("button", { name: /please hover/i }))
  const tooltip = screen.queryByRole("tooltip")
  expect(tooltip).toBeNull()
}

export const AlwaysOpen: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" open>
      <Button>Please Hover</Button>
    </Tooltip>
  )
}

AlwaysOpen.play = async () => {
  await expect(screen.getByRole("tooltip")).toBeVisible()
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <Tooltip
      content="へっ！きたねぇ花火だ"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Button>Please Hover</Button>
    </Tooltip>
  )
}

CustomControl.play = async ({ canvas, userEvent }) => {
  const button = canvas.getByRole("button", { name: /please hover/i })
  await userEvent.hover(button)
  await new Promise((resolve) => setTimeout(resolve, 100))
  const tooltip = await screen.findByRole("tooltip")
  await expect(tooltip).toBeVisible()
}
