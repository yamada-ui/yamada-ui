import type { Meta, StoryFn } from "@storybook/react"
import { useRef } from "react"
import { Popover } from "."
import { App, PropsTable } from "../../../storybook/components"
import { useDisclosure } from "../../hooks/use-disclosure"
import { toTitleCase } from "../../utils"
import { Button } from "../button"
import { Center } from "../center"
import { Field } from "../field"
import { For } from "../for"
import { Input } from "../input"
import { Text } from "../text"

type Story = StoryFn<typeof Popover.Root>

const meta: Meta<typeof Popover.Root> = {
  component: Popover.Root,
  title: "Components / Popover",
}

export default meta

export const Basic: Story = () => {
  return (
    <App gap="md">
      <Button>Click me</Button>

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

      <Button>Click me</Button>
    </App>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="column" rows={["xs", "sm", "md", "lg"]}>
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

export const Footer: Story = () => {
  return (
    <App>
      <Popover.Root>
        <Popover.Trigger>
          <Button>Click me</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>ベジータ!</Popover.Header>
          <Popover.Body>
            がんばれカカロット……お前がナンバー１だ！！
          </Popover.Body>
          <Popover.Footer>第280話</Popover.Footer>
        </Popover.Content>
      </Popover.Root>
    </App>
  )
}

export const Anchor: Story = () => {
  return (
    <App gap="md">
      <Popover.Root>
        <Popover.Anchor>
          <Center borderWidth="1px" h="10" px="3" rounded="l2">
            Here display Popover
          </Center>
        </Popover.Anchor>

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
    </App>
  )
}

export const NestedPopover: Story = () => {
  return (
    <App gap="md">
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
    </App>
  )
}

export const Duration: Story = () => {
  return (
    <App>
      <Popover.Root duration={0.7}>
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
    </App>
  )
}

export const Delay: Story = () => {
  return (
    <App flexDirection="column" gap="md">
      <Popover.Root openDelay={1000}>
        <Popover.Trigger>
          <Button>Delay Open 1000ms</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>ベジータ!</Popover.Header>
          <Popover.Body>
            がんばれカカロット……お前がナンバー１だ！！
          </Popover.Body>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root closeDelay={1000}>
        <Popover.Trigger>
          <Button>Delay Close 1000ms</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>ベジータ!</Popover.Header>
          <Popover.Body>
            がんばれカカロット……お前がナンバー１だ！！
          </Popover.Body>
        </Popover.Content>
      </Popover.Root>
    </App>
  )
}

export const Offset: Story = () => {
  return (
    <App>
      <Popover.Root offset={[16, 16]}>
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
    </App>
  )
}

export const Gutter: Story = () => {
  return (
    <App>
      <Popover.Root gutter={32}>
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
    </App>
  )
}

export const AnimationScheme: Story = () => {
  return (
    <App flexDirection="column" gap="md">
      <For each={["scale", "bottom", "left", "right", "top"] as const}>
        {(animationScheme) => (
          <Popover.Root key={animationScheme} animationScheme={animationScheme}>
            <Popover.Trigger>
              <Button>Open "{animationScheme}" Popover</Button>
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
    </App>
  )
}

export const Modal: Story = () => {
  return (
    <App>
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
    </App>
  )
}

export const BlockScrollOnMount: Story = () => {
  return (
    <App alignItems="flex-start" minH="200dvh">
      <Popover.Root blockScrollOnMount modal>
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
    </App>
  )
}

export const CloseOnScroll: Story = () => {
  return (
    <App alignItems="flex-start" minH="200dvh">
      <Popover.Root closeOnScroll>
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
    </App>
  )
}

export const InitialFocusRef: Story = () => {
  const initialFocusRef = useRef<HTMLInputElement>(null)

  return (
    <App>
      <Popover.Root initialFocusRef={initialFocusRef}>
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
              <Input
                ref={initialFocusRef}
                type="email"
                placeholder="Your email address"
              />
            </Field.Root>
          </Popover.Body>
        </Popover.Content>
      </Popover.Root>
    </App>
  )
}

export const Disabled: Story = () => {
  return (
    <App>
      <Popover.Root disabled>
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
    </App>
  )
}

export const DisabledCloseOnBlur: Story = () => {
  return (
    <App>
      <Popover.Root closeOnBlur={false}>
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
    </App>
  )
}

export const DisabledCloseOnEsc: Story = () => {
  return (
    <App>
      <Popover.Root closeOnEsc={false}>
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
    </App>
  )
}

export const DisabledAutoFocus: Story = () => {
  return (
    <App>
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
    </App>
  )
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <App gap="md">
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
    </App>
  )
}
