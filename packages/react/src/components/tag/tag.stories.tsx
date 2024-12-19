import type { Meta, StoryFn } from "@storybook/react"
import { COLOR_SCHEMES, noop, toTitleCase } from "../../utils"
import { Wrap } from "../flex"
import { PlusIcon } from "../icon"
import { Tag } from "./"

type Story = StoryFn<typeof Tag>

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Components / Tag",
}

export default meta

export const Subtle: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Tag key={colorScheme} colorScheme={colorScheme}>
          {toTitleCase(colorScheme)}
        </Tag>
      ))}
    </Wrap>
  )
}

export const Surface: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Tag key={colorScheme} colorScheme={colorScheme} variant="surface">
          {toTitleCase(colorScheme)}
        </Tag>
      ))}
    </Wrap>
  )
}

export const Solid: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Tag key={colorScheme} colorScheme={colorScheme} variant="solid">
          {toTitleCase(colorScheme)}
        </Tag>
      ))}
    </Wrap>
  )
}

export const Outline: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Tag key={colorScheme} colorScheme={colorScheme} variant="outline">
          {toTitleCase(colorScheme)}
        </Tag>
      ))}
    </Wrap>
  )
}

export const WithSize: Story = () => {
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

export const WithIcon: Story = () => {
  return (
    <Wrap alignItems="flex-start" gap="md">
      <Tag colorScheme="primary" size="sm" startIcon={<PlusIcon />}>
        Small
      </Tag>

      <Tag colorScheme="secondary" size="md" endIcon={<PlusIcon />}>
        Medium
      </Tag>

      <Tag colorScheme="warning" size="lg" startIcon={<PlusIcon />}>
        Large
      </Tag>
    </Wrap>
  )
}

export const WithCloseButton: Story = () => {
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

export const WithDisabled: Story = () => {
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
