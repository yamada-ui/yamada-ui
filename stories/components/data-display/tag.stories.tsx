import { faPlus } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Wrap, Tag } from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Tag>

const meta: Meta<typeof Tag> = {
  title: "Components / Data Display / Tag",
  component: Tag,
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
        <Tag key={colorScheme} variant="solid" colorScheme={colorScheme}>
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
        <Tag key={colorScheme} variant="outline" colorScheme={colorScheme}>
          {colorScheme}
        </Tag>
      ))}
    </Wrap>
  )
}

export const withSize: Story = () => {
  return (
    <Wrap gap="md" alignItems="flex-start">
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
    <Wrap gap="md" alignItems="flex-start">
      <Tag colorScheme="primary" size="sm" leftIcon={<Icon icon={faPlus} />}>
        Small
      </Tag>

      <Tag colorScheme="secondary" size="md" rightIcon={<Icon icon={faPlus} />}>
        Medium
      </Tag>

      <Tag colorScheme="warning" size="lg" leftIcon={<Icon icon={faPlus} />}>
        Large
      </Tag>
    </Wrap>
  )
}

export const withCloseButton: Story = () => {
  return (
    <Wrap gap="md" alignItems="flex-start">
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
    <Wrap gap="md" alignItems="flex-start">
      <Tag
        variant="solid"
        colorScheme="primary"
        rounded="full"
        onClose={() => {}}
        isDisabled
      >
        Primary
      </Tag>

      <Tag
        variant="solid"
        colorScheme="secondary"
        rounded="full"
        onClose={() => {}}
        isDisabled
      >
        Secondary
      </Tag>

      <Tag
        variant="solid"
        colorScheme="warning"
        rounded="full"
        onClose={() => {}}
        isDisabled
      >
        Warning
      </Tag>

      <Tag
        variant="solid"
        colorScheme="danger"
        rounded="full"
        onClose={() => {}}
        isDisabled
      >
        Danger
      </Tag>
    </Wrap>
  )
}
