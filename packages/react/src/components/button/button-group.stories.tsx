import type { Meta, StoryFn } from "@storybook/react"
import { PlusIcon } from "../icon"
import { Button } from "./button"
import { ButtonGroup } from "./button-group"
import { IconButton } from "./icon-button"

type Story = StoryFn<typeof ButtonGroup>

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: "Components / ButtonGroup",
}

export default meta

export const Basic: Story = () => {
  return (
    <ButtonGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <ButtonGroup disabled>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup variant="outline" attached disabled>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </>
  )
}

export const Orientation: Story = () => {
  return (
    <>
      <ButtonGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </>
  )
}

export const Attached: Story = () => {
  return (
    <>
      <ButtonGroup variant="outline" attached>
        <Button>Button</Button>
        <IconButton aria-label="Add" icon={<PlusIcon fontSize="xl" />} />
      </ButtonGroup>

      <ButtonGroup variant="outline" attached orientation="vertical">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </>
  )
}
