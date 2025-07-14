import type { Meta, StoryFn } from "@storybook/react-vite"
import { useRef } from "react"
import { PropsTable } from "@/storybook"
import { Popover } from "."
import { useDisclosure } from "../../hooks/use-disclosure"
import { toTitleCase } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
import { Center } from "../center"
import { Field } from "../field"
import { For } from "../for"
import { Input } from "../input"
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

export const Anchor: Story = () => {
  return (
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
        <Popover.Body>がんばれカカロット……お前がナンバー１だ！！</Popover.Body>
      </Popover.Content>
    </Popover.Root>
  )
}

export const NestedPopover: Story = () => {
  return (
    <>
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
    </>
  )
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

export const Delay: Story = () => {
  return (
    <>
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
    </>
  )
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

export const InitialFocusRef: Story = () => {
  const initialFocusRef = useRef<HTMLInputElement>(null)

  return (
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
  )
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
