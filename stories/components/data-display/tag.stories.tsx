import type { Meta, StoryFn } from "@storybook/react"
import { Plus } from "@yamada-ui/lucide"
import { noop, Tag, Wrap } from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Tag>

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Components / Data Display / Tag",
}

export default meta

export const subtle: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Tag key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </Tag>
      ))}
    </Wrap>
  )
}

export const solid: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Tag key={colorScheme} colorScheme={colorScheme} variant="solid">
          {colorScheme}
        </Tag>
      ))}
    </Wrap>
  )
}

export const outline: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Tag key={colorScheme} colorScheme={colorScheme} variant="outline">
          {colorScheme}
        </Tag>
      ))}
    </Wrap>
  )
}

export const withSize: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <Tag colorScheme="primary" size="sm">
        Small
      </Tag>

      <Tag colorScheme="secondary" size="md">
        Medium
      </Tag>

      <Tag colorScheme="warning" size="lg">
        Large
      </Tag>
    </Wrap>
  )
}

export const withIcon: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <Tag colorScheme="primary" size="sm" startIcon={<Plus />}>
        Small
      </Tag>

      <Tag colorScheme="secondary" size="md" endIcon={<Plus />}>
        Medium
      </Tag>

      <Tag colorScheme="warning" size="lg" startIcon={<Plus />}>
        Large
      </Tag>
    </Wrap>
  )
}

export const withCloseButton: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <Tag colorScheme="primary" rounded="full" onClose={noop}>
        Primary
      </Tag>

      <Tag colorScheme="secondary" rounded="full" onClose={noop}>
        Secondary
      </Tag>

      <Tag colorScheme="success" rounded="full" onClose={noop}>
        Success
      </Tag>

      <Tag colorScheme="warning" rounded="full" onClose={noop}>
        Warning
      </Tag>

      <Tag colorScheme="danger" rounded="full" onClose={noop}>
        Danger
      </Tag>
    </Wrap>
  )
}

export const withDisabled: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <Tag
        colorScheme="primary"
        variant="solid"
        isDisabled
        rounded="full"
        onClose={noop}
      >
        Primary
      </Tag>

      <Tag
        colorScheme="secondary"
        variant="solid"
        isDisabled
        rounded="full"
        onClose={noop}
      >
        Secondary
      </Tag>

      <Tag
        colorScheme="warning"
        variant="solid"
        isDisabled
        rounded="full"
        onClose={noop}
      >
        Warning
      </Tag>

      <Tag
        colorScheme="danger"
        variant="solid"
        isDisabled
        rounded="full"
        onClose={noop}
      >
        Danger
      </Tag>
    </Wrap>
  )
}
