import type { Meta, StoryFn } from "@storybook/react-vite"
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

export const Duration: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" duration={0.7}>
      <Button>Please Hover</Button>
    </Tooltip>
  )
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

export const Offset: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" offset={[16, 16]}>
      <Button>Please Hover</Button>
    </Tooltip>
  )
}

export const Gutter: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" gutter={32}>
      <Button>Please Hover</Button>
    </Tooltip>
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

export const Disabled: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" disabled>
      <Button>Please Hover</Button>
    </Tooltip>
  )
}

export const AlwaysOpen: Story = () => {
  return (
    <Tooltip content="へっ！きたねぇ花火だ" open>
      <Button>Please Hover</Button>
    </Tooltip>
  )
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
