import type { Meta, StoryFn } from "@storybook/react-vite"
import { App } from "../../../storybook/components"
import { useDisclosure } from "../../hooks/use-disclosure"
import { toTitleCase } from "../../utils"
import { Button } from "../button"
import { For } from "../for"
import { Tooltip } from "./tooltip"

type Story = StoryFn<typeof Tooltip>

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "Components / Tooltip",
}

export default meta

export const Basic: Story = () => {
  return (
    <App>
      <Tooltip content="へっ！きたねぇ花火だ">
        <Button>Please Hover</Button>
      </Tooltip>
    </App>
  )
}

export const Duration: Story = () => {
  return (
    <App>
      <Tooltip content="へっ！きたねぇ花火だ" duration={0.7}>
        <Button>Please Hover</Button>
      </Tooltip>
    </App>
  )
}

export const Delay: Story = () => {
  return (
    <App flexDirection="column" gap="md">
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
    </App>
  )
}

export const Offset: Story = () => {
  return (
    <App>
      <Tooltip content="へっ！きたねぇ花火だ" offset={[16, 16]}>
        <Button>Please Hover</Button>
      </Tooltip>
    </App>
  )
}

export const Gutter: Story = () => {
  return (
    <App>
      <Tooltip content="へっ！きたねぇ花火だ" gutter={32}>
        <Button>Please Hover</Button>
      </Tooltip>
    </App>
  )
}

export const AnimationScheme: Story = () => {
  return (
    <App flexDirection="column" gap="md">
      <For each={["scale", "bottom", "left", "right", "top"] as const}>
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
    </App>
  )
}

export const Placement: Story = () => {
  return (
    <App flexDirection="column" gap="md">
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
    </App>
  )
}

export const Disabled: Story = () => {
  return (
    <App>
      <Tooltip content="へっ！きたねぇ花火だ" disabled>
        <Button>Please Hover</Button>
      </Tooltip>
    </App>
  )
}

export const AlwaysOpen: Story = () => {
  return (
    <App>
      <Tooltip content="へっ！きたねぇ花火だ" open>
        <Button>Please Hover</Button>
      </Tooltip>
    </App>
  )
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <App>
      <Tooltip
        content="へっ！きたねぇ花火だ"
        open={open}
        onClose={onClose}
        onOpen={onOpen}
      >
        <Button>Please Hover</Button>
      </Tooltip>
    </App>
  )
}
