import type { Meta, StoryFn } from "@storybook/react"
import { CheckIcon, PencilIcon, PlusIcon, XIcon } from "../icon"
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

export const Variant: Story = () => {
  return (
    <>
      <ButtonGroup variant="surface">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup variant="surface">
        <IconButton aria-label="Edit" icon={<PencilIcon />} />
        <IconButton aria-label="Submit" icon={<CheckIcon />} />
        <IconButton aria-label="Cancel" icon={<XIcon />} />
      </ButtonGroup>
    </>
  )
}

export const Size: Story = () => {
  return (
    <>
      <ButtonGroup size="sm">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup size="sm">
        <IconButton aria-label="Edit" icon={<PencilIcon />} />
        <IconButton aria-label="Submit" icon={<CheckIcon />} />
        <IconButton aria-label="Cancel" icon={<XIcon />} />
      </ButtonGroup>
    </>
  )
}

export const ColorScheme: Story = () => {
  return (
    <>
      <ButtonGroup colorScheme="blue">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup colorScheme="blue">
        <IconButton aria-label="Edit" icon={<PencilIcon />} />
        <IconButton aria-label="Submit" icon={<CheckIcon />} />
        <IconButton aria-label="Cancel" icon={<XIcon />} />
      </ButtonGroup>
    </>
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

      <ButtonGroup disabled>
        <IconButton aria-label="Edit" icon={<PencilIcon />} />
        <IconButton aria-label="Submit" icon={<CheckIcon />} />
        <IconButton aria-label="Cancel" icon={<XIcon />} />
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

      <ButtonGroup size="sm" variant="outline" attached>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup variant="outline" attached orientation="vertical">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </>
  )
}
