import type { Meta, StoryFn } from "@storybook/react-vite"
import { expect, screen } from "storybook/test"
import { useDisclosure } from "../../hooks/use-disclosure"
import { Button } from "../button"
import { CloseButton } from "../close-button"
import { ShareIcon, TrashIcon } from "../icon"
import { ActionBar } from "./"

type Story = StoryFn<typeof ActionBar.Root>

const meta: Meta<typeof ActionBar.Root> = {
  component: ActionBar.Root,
  title: "Components / ActionBar",
}

export default meta

export const Basic: Story = () => {
  return (
    <ActionBar.Root>
      <ActionBar.OpenTrigger>
        <Button>Open ActionBar</Button>
      </ActionBar.OpenTrigger>

      <ActionBar.Content>
        <Button variant="outline" borderStyle="dashed">
          2 Selected
        </Button>
        <ActionBar.Separator />
        <Button startIcon={<TrashIcon />}>Delete</Button>
        <Button startIcon={<ShareIcon />}>Share</Button>
        <ActionBar.Separator />
        <ActionBar.CloseTrigger>
          <CloseButton size="md" />
        </ActionBar.CloseTrigger>
      </ActionBar.Content>
    </ActionBar.Root>
  )
}

export const PropsPattern: Story = () => {
  return (
    <ActionBar.Root
      content={
        <>
          <Button variant="outline" borderStyle="dashed">
            2 Selected
          </Button>
          <ActionBar.Separator />
          <Button startIcon={<TrashIcon />}>Delete</Button>
          <Button startIcon={<ShareIcon />}>Share</Button>
          <ActionBar.Separator />
          <ActionBar.CloseTrigger>
            <CloseButton size="md" />
          </ActionBar.CloseTrigger>
        </>
      }
      trigger={<Button>Open ActionBar</Button>}
    />
  )
}

export const Duration: Story = () => {
  return (
    <ActionBar.Root duration={0.4}>
      <ActionBar.OpenTrigger>
        <Button>Open ActionBar</Button>
      </ActionBar.OpenTrigger>

      <ActionBar.Content>
        <Button variant="outline" borderStyle="dashed">
          2 Selected
        </Button>
        <ActionBar.Separator />
        <Button startIcon={<TrashIcon />}>Delete</Button>
        <Button startIcon={<ShareIcon />}>Share</Button>
        <ActionBar.Separator />
        <ActionBar.CloseTrigger>
          <CloseButton size="md" />
        </ActionBar.CloseTrigger>
      </ActionBar.Content>
    </ActionBar.Root>
  )
}

export const Placement: Story = () => {
  return (
    <ActionBar.Root placement="start-center">
      <ActionBar.OpenTrigger>
        <Button>Open ActionBar</Button>
      </ActionBar.OpenTrigger>

      <ActionBar.Content>
        <Button variant="outline" borderStyle="dashed">
          2 Selected
        </Button>
        <ActionBar.Separator />
        <Button startIcon={<TrashIcon />}>Delete</Button>
        <Button startIcon={<ShareIcon />}>Share</Button>
        <ActionBar.Separator />
        <ActionBar.CloseTrigger>
          <CloseButton size="md" />
        </ActionBar.CloseTrigger>
      </ActionBar.Content>
    </ActionBar.Root>
  )
}

export const AnimationScheme: Story = () => {
  return (
    <ActionBar.Root animationScheme="inline-end" placement="start-end">
      <ActionBar.OpenTrigger>
        <Button>Open ActionBar</Button>
      </ActionBar.OpenTrigger>

      <ActionBar.Content>
        <Button variant="outline" borderStyle="dashed">
          2 Selected
        </Button>
        <ActionBar.Separator />
        <Button startIcon={<TrashIcon />}>Delete</Button>
        <Button startIcon={<ShareIcon />}>Share</Button>
        <ActionBar.Separator />
        <ActionBar.CloseTrigger>
          <CloseButton size="md" />
        </ActionBar.CloseTrigger>
      </ActionBar.Content>
    </ActionBar.Root>
  )
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open ActionBar</Button>

      <ActionBar.Root
        content={
          <>
            <Button variant="outline" borderStyle="dashed">
              2 Selected
            </Button>
            <ActionBar.Separator />
            <Button startIcon={<TrashIcon />}>Delete</Button>
            <Button startIcon={<ShareIcon />}>Share</Button>
            <ActionBar.Separator />
            <ActionBar.CloseTrigger>
              <CloseButton size="md" />
            </ActionBar.CloseTrigger>
          </>
        }
        open={open}
        onClose={onClose}
      />
    </>
  )
}

Basic.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /open action/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

PropsPattern.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /open action/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

Duration.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /open action/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

Placement.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /open action/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

AnimationScheme.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /open action/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}

CustomControl.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /open action/i }))
  await expect(await screen.findByRole("dialog")).toBeVisible()
}
