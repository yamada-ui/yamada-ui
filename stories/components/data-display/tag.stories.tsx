import { faPlus } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Wrap, Tag } from "@yamada-ui/react"

type Story = StoryFn<typeof Tag>

const meta: Meta<typeof Tag> = {
  title: "Components / Data Display / Tag",
  component: Tag,
}

export default meta

export const subtle: Story = () => {
  return (
    <Wrap gap="md">
      <Tag colorScheme="primary">Primary</Tag>

      <Tag colorScheme="secondary">Secondary</Tag>

      <Tag colorScheme="warning">Warning</Tag>

      <Tag colorScheme="danger">Danger</Tag>

      <Tag colorScheme="link">Link</Tag>

      <Tag colorScheme="gray">Gray</Tag>

      <Tag colorScheme="zinc">Zinc</Tag>

      <Tag colorScheme="neutral">Neutral</Tag>

      <Tag colorScheme="stone">Stone</Tag>

      <Tag colorScheme="red">Red</Tag>

      <Tag colorScheme="rose">Rose</Tag>

      <Tag colorScheme="pink">Pink</Tag>

      <Tag colorScheme="orange">Orange</Tag>

      <Tag colorScheme="amber">Amber</Tag>

      <Tag colorScheme="yellow">Yellow</Tag>

      <Tag colorScheme="lime">Lime</Tag>

      <Tag colorScheme="green">Green</Tag>

      <Tag colorScheme="emerald">Emerald</Tag>

      <Tag colorScheme="teal">Teal</Tag>

      <Tag colorScheme="cyan">Cyan</Tag>

      <Tag colorScheme="sky">Sky</Tag>

      <Tag colorScheme="blue">Blue</Tag>

      <Tag colorScheme="indigo">Indigo</Tag>

      <Tag colorScheme="violet">Violet</Tag>

      <Tag colorScheme="purple">Purple</Tag>

      <Tag colorScheme="fuchsia">Fuchsia</Tag>
    </Wrap>
  )
}

export const solid: Story = () => {
  return (
    <Wrap gap="md">
      <Tag variant="solid" colorScheme="primary">
        Primary
      </Tag>

      <Tag variant="solid" colorScheme="secondary">
        Secondary
      </Tag>

      <Tag variant="solid" colorScheme="warning">
        Warning
      </Tag>

      <Tag variant="solid" colorScheme="danger">
        Danger
      </Tag>

      <Tag variant="solid" colorScheme="link">
        Link
      </Tag>

      <Tag variant="solid" colorScheme="gray">
        Gray
      </Tag>

      <Tag variant="solid" colorScheme="zinc">
        Zinc
      </Tag>

      <Tag variant="solid" colorScheme="neutral">
        Neutral
      </Tag>

      <Tag variant="solid" colorScheme="stone">
        Stone
      </Tag>

      <Tag variant="solid" colorScheme="red">
        Red
      </Tag>

      <Tag variant="solid" colorScheme="rose">
        Rose
      </Tag>

      <Tag variant="solid" colorScheme="pink">
        Pink
      </Tag>

      <Tag variant="solid" colorScheme="orange">
        Orange
      </Tag>

      <Tag variant="solid" colorScheme="amber">
        Amber
      </Tag>

      <Tag variant="solid" colorScheme="yellow">
        Yellow
      </Tag>

      <Tag variant="solid" colorScheme="lime">
        Lime
      </Tag>

      <Tag variant="solid" colorScheme="green">
        Green
      </Tag>

      <Tag variant="solid" colorScheme="emerald">
        Emerald
      </Tag>

      <Tag variant="solid" colorScheme="teal">
        Teal
      </Tag>

      <Tag variant="solid" colorScheme="cyan">
        Cyan
      </Tag>

      <Tag variant="solid" colorScheme="sky">
        Sky
      </Tag>

      <Tag variant="solid" colorScheme="blue">
        Blue
      </Tag>

      <Tag variant="solid" colorScheme="indigo">
        Indigo
      </Tag>

      <Tag variant="solid" colorScheme="violet">
        Violet
      </Tag>

      <Tag variant="solid" colorScheme="purple">
        Purple
      </Tag>

      <Tag variant="solid" colorScheme="fuchsia">
        Fuchsia
      </Tag>
    </Wrap>
  )
}

export const outline: Story = () => {
  return (
    <Wrap gap="md">
      <Tag variant="outline" colorScheme="primary">
        Primary
      </Tag>

      <Tag variant="outline" colorScheme="secondary">
        Secondary
      </Tag>

      <Tag variant="outline" colorScheme="warning">
        Warning
      </Tag>

      <Tag variant="outline" colorScheme="danger">
        Danger
      </Tag>

      <Tag variant="outline" colorScheme="link">
        Link
      </Tag>

      <Tag variant="outline" colorScheme="gray">
        Gray
      </Tag>

      <Tag variant="outline" colorScheme="zinc">
        Zinc
      </Tag>

      <Tag variant="outline" colorScheme="neutral">
        Neutral
      </Tag>

      <Tag variant="outline" colorScheme="stone">
        Stone
      </Tag>

      <Tag variant="outline" colorScheme="red">
        Red
      </Tag>

      <Tag variant="outline" colorScheme="rose">
        Rose
      </Tag>

      <Tag variant="outline" colorScheme="pink">
        Pink
      </Tag>

      <Tag variant="outline" colorScheme="orange">
        Orange
      </Tag>

      <Tag variant="outline" colorScheme="amber">
        Amber
      </Tag>

      <Tag variant="outline" colorScheme="yellow">
        Yellow
      </Tag>

      <Tag variant="outline" colorScheme="lime">
        Lime
      </Tag>

      <Tag variant="outline" colorScheme="green">
        Green
      </Tag>

      <Tag variant="outline" colorScheme="emerald">
        Emerald
      </Tag>

      <Tag variant="outline" colorScheme="teal">
        Teal
      </Tag>

      <Tag variant="outline" colorScheme="cyan">
        Cyan
      </Tag>

      <Tag variant="outline" colorScheme="sky">
        Sky
      </Tag>

      <Tag variant="outline" colorScheme="blue">
        Blue
      </Tag>

      <Tag variant="outline" colorScheme="indigo">
        Indigo
      </Tag>

      <Tag variant="outline" colorScheme="violet">
        Violet
      </Tag>

      <Tag variant="outline" colorScheme="purple">
        Purple
      </Tag>

      <Tag variant="outline" colorScheme="fuchsia">
        Fuchsia
      </Tag>
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
        Cyan
      </Tag>

      <Tag colorScheme="secondary" rounded="full" onClose={() => {}}>
        Secondary
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
        Cyan
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
