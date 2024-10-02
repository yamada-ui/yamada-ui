import type { Meta, StoryFn } from "@storybook/react"
import { Plus } from "@yamada-ui/lucide"
import { Tag, Wrap } from "@yamada-ui/react"
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
      <Tag colorScheme="primary" leftIcon={<Plus />} size="sm">
        Small
      </Tag>

      <Tag colorScheme="secondary" rightIcon={<Plus />} size="md">
        Medium
      </Tag>

      <Tag colorScheme="warning" leftIcon={<Plus />} size="lg">
        Large
      </Tag>
    </Wrap>
  )
}

export const withCloseButton: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <Tag colorScheme="primary" rounded="full" onClose={() => {}}>
        Primary
      </Tag>

      <Tag colorScheme="secondary" rounded="full" onClose={() => {}}>
        Secondary
      </Tag>

      <Tag colorScheme="success" rounded="full" onClose={() => {}}>
        Success
      </Tag>

      <Tag colorScheme="warning" rounded="full" onClose={() => {}}>
        Warning
      </Tag>

      <Tag colorScheme="danger" rounded="full" onClose={() => {}}>
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
        isDisabled
        rounded="full"
        variant="solid"
        onClose={() => {}}
      >
        Primary
      </Tag>

      <Tag
        colorScheme="secondary"
        isDisabled
        rounded="full"
        variant="solid"
        onClose={() => {}}
      >
        Secondary
      </Tag>

      <Tag
        colorScheme="warning"
        isDisabled
        rounded="full"
        variant="solid"
        onClose={() => {}}
      >
        Warning
      </Tag>

      <Tag
        colorScheme="danger"
        isDisabled
        rounded="full"
        variant="solid"
        onClose={() => {}}
      >
        Danger
      </Tag>
    </Wrap>
  )
}
