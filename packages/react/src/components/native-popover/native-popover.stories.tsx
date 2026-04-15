import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { expect, screen, waitFor, within } from "storybook/test"
import { NativePopover } from "."
import { toTitleCase } from "../../utils"
import { Button } from "../button"
import { Center } from "../center"
import { For } from "../for"
import { HStack } from "../stack"
import { Text } from "../text"

type Story = StoryFn<typeof NativePopover.Root>

const meta: Meta<typeof NativePopover.Root> = {
  component: NativePopover.Root,
  parameters: { layout: "centered" },
  title: "Components / NativePopover",
}

export default meta

export const Basic: Story = () => {
  return (
    <NativePopover.Root>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>
  )
}

Basic.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg"]}>
      {(_, row, key) => (
        <NativePopover.Root key={key} size={row}>
          <NativePopover.Trigger>
            <Button>Click me</Button>
          </NativePopover.Trigger>

          <NativePopover.Content>
            <NativePopover.Header>ベジータ!</NativePopover.Header>
            <NativePopover.Body>
              がんばれカカロット……お前がナンバー１だ！！
            </NativePopover.Body>
          </NativePopover.Content>
        </NativePopover.Root>
      )}
    </PropsTable>
  )
}

Size.play = async ({ canvas, userEvent }) => {
  const sizes = ["xs", "sm", "md", "lg"] as const
  for (let i = 0; i < sizes.length; i++) {
    if (i > 0) {
      await userEvent.keyboard("{Escape}")
    }
    await userEvent.click(
      canvas.getAllByRole("button", { name: /^click me$/i })[i]!,
    )
    await expect(await screen.findByRole("dialog")).toBeVisible()
  }
}

export const Footer: Story = () => {
  return (
    <NativePopover.Root>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
        <NativePopover.Footer>第280話</NativePopover.Footer>
      </NativePopover.Content>
    </NativePopover.Root>
  )
}

Footer.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const Anchor: Story = () => {
  return (
    <NativePopover.Root>
      <HStack>
        <NativePopover.Anchor>
          <Center
            borderWidth="1px"
            h="10"
            px="3"
            rounded="l2"
            textWrap="nowrap"
          >
            Display Popover Here
          </Center>
        </NativePopover.Anchor>

        <NativePopover.Trigger>
          <Button>Click me</Button>
        </NativePopover.Trigger>
      </HStack>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>
  )
}

Anchor.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
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
        <NativePopover.Root key={placement} placement={placement}>
          <NativePopover.Trigger>
            <Button>Open "{toTitleCase(placement)}" Popover</Button>
          </NativePopover.Trigger>

          <NativePopover.Content>
            <NativePopover.Header>ベジータ!</NativePopover.Header>
            <NativePopover.Body>
              がんばれカカロット……お前がナンバー１だ！！
            </NativePopover.Body>
          </NativePopover.Content>
        </NativePopover.Root>
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

export const NestedPopover: Story = () => {
  return (
    <NativePopover.Root>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          <Text>がんばれカカロット……お前がナンバー１だ！！</Text>

          <NativePopover.Root>
            <NativePopover.Trigger>
              <Button>Click me</Button>
            </NativePopover.Trigger>

            <NativePopover.Content>
              <NativePopover.Header>ベジータ!</NativePopover.Header>
              <NativePopover.Body>
                がんばれカカロット……お前がナンバー１だ！！
              </NativePopover.Body>
            </NativePopover.Content>
          </NativePopover.Root>
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>
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

export const PopoverMode: Story = () => {
  return (
    <>
      <NativePopover.Root popover="auto">
        <NativePopover.Trigger>
          <Button>Auto (default)</Button>
        </NativePopover.Trigger>

        <NativePopover.Content>
          <NativePopover.Header>Auto Popover</NativePopover.Header>
          <NativePopover.Body>
            Auto popover closes automatically when clicking outside or opening
            another popover.
          </NativePopover.Body>
        </NativePopover.Content>
      </NativePopover.Root>

      <NativePopover.Root popover="hint">
        <NativePopover.Trigger>
          <Button>Hint</Button>
        </NativePopover.Trigger>

        <NativePopover.Content>
          <NativePopover.Header>Hint Popover</NativePopover.Header>
          <NativePopover.Body>
            Hint popover does not close auto popovers when displayed, but closes
            other hint popovers.
          </NativePopover.Body>
        </NativePopover.Content>
      </NativePopover.Root>

      <NativePopover.Root popover="manual">
        <NativePopover.Trigger>
          <Button>Manual</Button>
        </NativePopover.Trigger>

        <NativePopover.Content>
          <NativePopover.Header>Manual Popover</NativePopover.Header>
          <NativePopover.Body>
            Manual popover must be explicitly closed with the trigger button.
          </NativePopover.Body>
        </NativePopover.Content>
      </NativePopover.Root>
    </>
  )
}

PopoverMode.play = async ({ canvas, userEvent }) => {
  const autoDialog = () =>
    screen.queryByRole("dialog", { name: /auto popover/i })
  const hintDialog = () =>
    screen.queryByRole("dialog", { name: /hint popover/i })
  const manualDialog = () =>
    screen.queryByRole("dialog", { name: /manual popover/i })

  await userEvent.click(
    canvas.getByRole("button", { name: /auto \(default\)/i }),
  )
  const auto = await screen.findByRole("dialog", { name: /auto popover/i })
  await expect(auto).toBeVisible()

  await userEvent.click(canvas.getByRole("button", { name: /^hint$/i }))
  await expect(
    await screen.findByRole("dialog", { name: /hint popover/i }),
  ).toBeVisible()
  await expect(auto).toBeVisible()

  await waitFor(
    async () => {
      const hint = hintDialog()
      if (hint === null) {
        return
      }
      if (hint.checkVisibility()) {
        await userEvent.keyboard("{Escape}")
      }
      const after = hintDialog()
      if (after === null) {
        return
      }
      expect(after).not.toBeVisible()
    },
    { timeout: 10000 },
  )
  await expect(
    screen.getByRole("dialog", { name: /auto popover/i }),
  ).toBeVisible()

  await waitFor(
    async () => {
      const a = autoDialog()
      if (a === null) {
        return
      }
      if (a.checkVisibility()) {
        await userEvent.keyboard("{Escape}")
      }
      const after = autoDialog()
      if (after === null) {
        return
      }
      expect(after).not.toBeVisible()
    },
    { timeout: 10000 },
  )

  await userEvent.click(
    canvas.getByRole("button", { name: /auto \(default\)/i }),
  )
  await expect(
    await screen.findByRole("dialog", { name: /auto popover/i }),
  ).toBeVisible()

  await userEvent.click(canvas.getByRole("button", { name: /^manual$/i }))
  await expect(
    await screen.findByRole("dialog", { name: /manual popover/i }),
  ).toBeVisible()
  await waitFor(() => {
    const el = autoDialog()
    if (el === null) {
      return
    }
    expect(el).not.toBeVisible()
  })

  await waitFor(
    async () => {
      const m = manualDialog()
      if (m === null) {
        return
      }
      if (m.checkVisibility()) {
        await userEvent.keyboard("{Escape}")
      }
      const after = manualDialog()
      if (after === null) {
        return
      }
      expect(after).not.toBeVisible()
    },
    { timeout: 10000 },
  )
}

export const Offset: Story = () => {
  return (
    <NativePopover.Root offset={[16, 16]}>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>
  )
}

Offset.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const Gutter: Story = () => {
  return (
    <NativePopover.Root gutter={32}>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>
  )
}

Gutter.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

export const Disabled: Story = () => {
  return (
    <NativePopover.Root disabled>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
      </NativePopover.Content>
    </NativePopover.Root>
  )
}

Disabled.parameters = {
  chromatic: { disableSnapshot: true },
}

Disabled.play = async ({ canvas, userEvent }) => {
  const trigger = canvas.getByRole("button", { name: /^click me$/i })
  expect(trigger).toHaveAttribute("aria-disabled", "true")
  await userEvent.click(trigger)
  await waitFor(() => {
    const el = screen.queryByRole("dialog", { name: /ベジータ/ })
    if (el === null) {
      return
    }
    expect(el).not.toBeVisible()
  })
}

export const CloseTrigger: Story = () => {
  return (
    <NativePopover.Root>
      <NativePopover.Trigger>
        <Button>Click me</Button>
      </NativePopover.Trigger>

      <NativePopover.Content>
        <NativePopover.Header>ベジータ!</NativePopover.Header>
        <NativePopover.Body>
          がんばれカカロット……お前がナンバー１だ！！
        </NativePopover.Body>
        <NativePopover.Footer>
          <NativePopover.CloseTrigger>
            <Button>Close</Button>
          </NativePopover.CloseTrigger>
        </NativePopover.Footer>
      </NativePopover.Content>
    </NativePopover.Root>
  )
}

CloseTrigger.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^click me$/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}
