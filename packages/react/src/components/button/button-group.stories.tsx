import type { Meta, StoryFn } from "@storybook/react-vite"
import { CheckIcon, PencilIcon, PlusIcon, XIcon } from "../icon"
import { ButtonGroup } from "./"

type Story = StoryFn<typeof ButtonGroup.Root>

const meta: Meta<typeof ButtonGroup.Root> = {
  component: ButtonGroup.Root,
  title: "Components / ButtonGroup",
}

export default meta

export const Basic: Story = () => {
  return (
    <ButtonGroup.Root>
      <ButtonGroup.Item>Button</ButtonGroup.Item>
      <ButtonGroup.Item>Button</ButtonGroup.Item>
      <ButtonGroup.Item>Button</ButtonGroup.Item>
    </ButtonGroup.Root>
  )
}

export const Variant: Story = () => {
  return (
    <>
      <ButtonGroup.Root variant="surface">
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>

      <ButtonGroup.Root variant="surface">
        <ButtonGroup.IconItem aria-label="Edit" icon={<PencilIcon />} />
        <ButtonGroup.IconItem aria-label="Submit" icon={<CheckIcon />} />
        <ButtonGroup.IconItem aria-label="Cancel" icon={<XIcon />} />
      </ButtonGroup.Root>
    </>
  )
}

export const Size: Story = () => {
  return (
    <>
      <ButtonGroup.Root size="sm">
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>

      <ButtonGroup.Root size="sm">
        <ButtonGroup.IconItem aria-label="Edit" icon={<PencilIcon />} />
        <ButtonGroup.IconItem aria-label="Submit" icon={<CheckIcon />} />
        <ButtonGroup.IconItem aria-label="Cancel" icon={<XIcon />} />
      </ButtonGroup.Root>
    </>
  )
}

export const ColorScheme: Story = () => {
  return (
    <>
      <ButtonGroup.Root colorScheme="blue">
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>

      <ButtonGroup.Root colorScheme="blue">
        <ButtonGroup.IconItem aria-label="Edit" icon={<PencilIcon />} />
        <ButtonGroup.IconItem aria-label="Submit" icon={<CheckIcon />} />
        <ButtonGroup.IconItem aria-label="Cancel" icon={<XIcon />} />
      </ButtonGroup.Root>
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <ButtonGroup.Root disabled>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>

      <ButtonGroup.Root variant="outline" attached disabled>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>

      <ButtonGroup.Root disabled>
        <ButtonGroup.IconItem aria-label="Edit" icon={<PencilIcon />} />
        <ButtonGroup.IconItem aria-label="Submit" icon={<CheckIcon />} />
        <ButtonGroup.IconItem aria-label="Cancel" icon={<XIcon />} />
      </ButtonGroup.Root>
    </>
  )
}

export const Orientation: Story = () => {
  return (
    <>
      <ButtonGroup.Root>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>

      <ButtonGroup.Root orientation="vertical">
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>
    </>
  )
}

export const Attached: Story = () => {
  return (
    <>
      <ButtonGroup.Root variant="outline" attached>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.IconItem
          aria-label="Add"
          icon={<PlusIcon fontSize="xl" />}
        />
      </ButtonGroup.Root>

      <ButtonGroup.Root size="sm" variant="outline" attached>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>

      <ButtonGroup.Root variant="outline" attached orientation="vertical">
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
        <ButtonGroup.Item>Button</ButtonGroup.Item>
      </ButtonGroup.Root>
    </>
  )
}
