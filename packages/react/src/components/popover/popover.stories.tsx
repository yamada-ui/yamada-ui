import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useRef } from "react"
import { expect, screen, within } from "storybook/test"
import { Popover } from "."
import { useDisclosure } from "../../hooks/use-disclosure"
import { toTitleCase } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
import { Center } from "../center"
import { Field } from "../field"
import { For } from "../for"
import { Input } from "../input"
import { HStack } from "../stack"
import { Text } from "../text"

type Story = StoryFn<typeof Popover.Root>

const meta: Meta<typeof Popover.Root> = {
  component: Popover.Root,
  parameters: { layout: "centered" },
  title: "Components / Popover",
}

export default meta

export const Basic: Story = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

Basic.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getAllByRole("button", { name: /^click me$/i })[0],
  )
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg"]}>
      {(_, row, key) => (
        <Popover.Root key={key} size={row}>
          <Popover.Trigger>
            <Button>Click me</Button>
          </Popover.Trigger>

          <Popover.Content>
            <Popover.Header>ベジータ!</Popover.Header>
            <Popover.Body>
              がんばれカカロット……お前がナンバー１だ！！
            </Popover.Body>
          </Popover.Content>
        </Popover.Root>
      )}
    </PropsTable>
  )
}

Size.play = async ({ canvas, userEvent }) => {
  const buttons = canvas.getAllByRole("button", { name: /^click me$/i })
  for (const button of buttons) {
    await userEvent.click(button)
    await expect(await screen.findByRole("dialog")).toBeVisible()
    await userEvent.click(button)
  }
}

export const Footer: Story = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
        <Popover.Footer>第280話</Popover.Footer>
      </Popover.Content>
    </Popover.Root>
  )
}

Footer.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const Anchor: Story = () => {
  return (
    <Popover.Root>
      <HStack>
        <Popover.Anchor>
          <Center
            borderWidth="1px"
            h="10"
            px="3"
            rounded="l2"
            textWrap="nowrap"
          >
            Display Popover Here
          </Center>
        </Popover.Anchor>

        <Popover.Trigger>
          <Button>Click me</Button>
        </Popover.Trigger>
      </HStack>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

Anchor.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const NestedPopover: Story = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>
          <Text>がんばれカカロット……お前がナンバー１だ！！</Text>

          <Popover.Root>
            <Popover.Trigger>
              <Button>Click me</Button>
            </Popover.Trigger>

            <Popover.Content>
              <Popover.Header>ベジータ!</Popover.Header>
              <Popover.Body>
                がんばれカカロット……お前がナンバー１だ！！
              </Popover.Body>
            </Popover.Content>
          </Popover.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

NestedPopover.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getAllByRole("button", { name: /^click me$/i })[0],
  )
  await expect(await screen.findByRole("dialog")).toBeVisible()
  const outer = screen.getByRole("dialog")
  await userEvent.click(
    within(outer).getAllByRole("button", { name: /^click me$/i })[0],
  )
  await expect(
    (await screen.findAllByRole("dialog")).length,
  ).toBeGreaterThanOrEqual(2)
}

export const Duration: Story = () => {
  return (
    <Popover.Root duration={0.7}>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

Duration.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const Offset: Story = () => {
  return (
    <Popover.Root offset={[16, 16]}>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

Offset.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const Gutter: Story = () => {
  return (
    <Popover.Root gutter={32}>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

Gutter.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const AnimationScheme: Story = () => {
  return (
    <For
      each={
        [
          "scale",
          "block-start",
          "inline-start",
          "inline-end",
          "block-end",
        ] as const
      }
    >
      {(animationScheme) => (
        <Popover.Root key={animationScheme} animationScheme={animationScheme}>
          <Popover.Trigger>
            <Button>Open "{toTitleCase(animationScheme)}" Popover</Button>
          </Popover.Trigger>

          <Popover.Content>
            <Popover.Header>ベジータ!</Popover.Header>
            <Popover.Body>
              がんばれカカロット……お前がナンバー１だ！！
            </Popover.Body>
          </Popover.Content>
        </Popover.Root>
      )}
    </For>
  )
}

AnimationScheme.play = async ({ canvas, userEvent }) => {
  const animationSchemes = [
    "scale",
    "block-start",
    "inline-start",
    "inline-end",
    "block-end",
  ] as const
  for (let i = 0; i < animationSchemes.length; i++) {
    if (i > 0) {
      await userEvent.keyboard("{Escape}")
    }
    await userEvent.click(
      canvas.getByRole("button", {
        name: `Open "${toTitleCase(animationSchemes[i])}" Popover`,
      }),
    )
    await expect(await screen.findByRole("dialog")).toBeVisible()
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
        <Popover.Root key={placement} placement={placement}>
          <Popover.Trigger>
            <Button>Open "{toTitleCase(placement)}" Popover</Button>
          </Popover.Trigger>

          <Popover.Content>
            <Popover.Header>ベジータ!</Popover.Header>
            <Popover.Body>
              がんばれカカロット……お前がナンバー１だ！！
            </Popover.Body>
          </Popover.Content>
        </Popover.Root>
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
      await userEvent.keyboard("{Escape}")
    }
    await userEvent.click(
      canvas.getByRole("button", {
        name: `Open "${toTitleCase(placements[i])}" Popover`,
      }),
    )
    await expect(await screen.findByRole("dialog")).toBeVisible()
  }
}

export const Modal: Story = () => {
  return (
    <Popover.Root modal>
      <Popover.Trigger>
        <Button>Open Profile</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>Profile</Popover.Header>
        <Popover.Body>
          <Field.Root label="Name">
            <Input placeholder="Your name" />
          </Field.Root>

          <Field.Root label="Email address">
            <Input type="email" placeholder="Your email address" />
          </Field.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

Modal.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /open profile/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const BlockScrollOnMount: Story = () => {
  return (
    <Box minH="200dvh">
      <Popover.Root blockScrollOnMount modal>
        <Popover.Trigger>
          <Button>Click me and scroll</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>ベジータ!</Popover.Header>
          <Popover.Body>
            がんばれカカロット……お前がナンバー１だ！！
          </Popover.Body>
        </Popover.Content>
      </Popover.Root>
    </Box>
  )
}

BlockScrollOnMount.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getByRole("button", { name: /click me and scroll/i }),
  )
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const CloseOnScroll: Story = () => {
  return (
    <Box minH="200dvh">
      <Popover.Root closeOnScroll>
        <Popover.Trigger>
          <Button>Click me and scroll</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>ベジータ!</Popover.Header>
          <Popover.Body>
            がんばれカカロット……お前がナンバー１だ！！
          </Popover.Body>
        </Popover.Content>
      </Popover.Root>
    </Box>
  )
}

CloseOnScroll.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getByRole("button", { name: /click me and scroll/i }),
  )
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const InitialFocusRef: Story = () => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <Popover.Root initialFocusRef={ref}>
      <Popover.Trigger>
        <Button>Open Profile</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>Profile</Popover.Header>
        <Popover.Body>
          <Field.Root label="Name">
            <Input placeholder="Your name" />
          </Field.Root>

          <Field.Root label="Email address">
            <Input ref={ref} type="email" placeholder="Your email address" />
          </Field.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

InitialFocusRef.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /open profile/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const Disabled: Story = () => {
  return (
    <Popover.Root disabled>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

Disabled.parameters = {
  chromatic: { disableSnapshot: true },
}

export const DisabledCloseOnBlur: Story = () => {
  return (
    <Popover.Root closeOnBlur={false}>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

DisabledCloseOnBlur.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
  await userEvent.click(document.body)
  await expect(screen.getByRole("dialog")).toBeVisible()
}

export const DisabledCloseOnEsc: Story = () => {
  return (
    <Popover.Root closeOnEsc={false}>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

DisabledCloseOnEsc.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
  await userEvent.keyboard("{Escape}")
  await expect(screen.getByRole("dialog")).toBeVisible()
}

export const CloseTrigger: Story = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>Click me</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>ベジータ!</Popover.Header>
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
        <Popover.Footer>
          <Popover.CloseTrigger>
            <Button>Close</Button>
          </Popover.CloseTrigger>
        </Popover.Footer>
      </Popover.Content>
    </Popover.Root>
  )
}

CloseTrigger.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
  await userEvent.click(screen.getByRole("button", { name: /^close$/i }))
}

export const DisabledAutoFocus: Story = () => {
  return (
    <Popover.Root autoFocus={false}>
      <Popover.Trigger>
        <Button>Open Profile</Button>
      </Popover.Trigger>

      <Popover.Content>
        <Popover.Header>Profile</Popover.Header>
        <Popover.Body>
          <Field.Root label="Name">
            <Input placeholder="Your name" />
          </Field.Root>

          <Field.Root label="Email address">
            <Input type="email" placeholder="Your email address" />
          </Field.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

DisabledAutoFocus.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /open profile/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Popover.Root open={open} onClose={onClose} onOpen={onOpen}>
        <Popover.Trigger>
          <Button>Click me</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>ベジータ!</Popover.Header>
          <Popover.Body>
            がんばれカカロット……お前がナンバー１だ！！
          </Popover.Body>
        </Popover.Content>
      </Popover.Root>

      <Button onClick={onOpen}>Click me from here</Button>
    </>
  )
}

CustomControl.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getAllByRole("button", { name: /^click me$/i })[0],
  )
  await expect(await screen.findByRole("dialog")).toBeVisible()
}
