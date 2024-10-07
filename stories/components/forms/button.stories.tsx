import type { Meta, StoryFn } from "@storybook/react"
import {
  ArrowRight,
  Check,
  Mail,
  Minus,
  Moon,
  Plus,
  Sun,
} from "@yamada-ui/lucide"
import {
  Button,
  ButtonGroup,
  CloseButton,
  IconButton,
  Wrap,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components / Forms / Button",
}

export default meta

export const solid: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary">Primary</Button>

      <Button colorScheme="secondary">Secondary</Button>

      <Button colorScheme="success">Success</Button>

      <Button colorScheme="warning">Warning</Button>

      <Button colorScheme="danger">Danger</Button>

      <Button colorScheme="link">Link</Button>

      <Button colorScheme="gray">Gray</Button>

      <Button colorScheme="neutral">Neutral</Button>

      <Button colorScheme="red">Red</Button>

      <Button colorScheme="rose">Rose</Button>

      <Button colorScheme="pink">Pink</Button>

      <Button colorScheme="orange">Orange</Button>

      <Button colorScheme="amber">Amber</Button>

      <Button colorScheme="yellow">Yellow</Button>

      <Button colorScheme="lime">Lime</Button>

      <Button colorScheme="green">Green</Button>

      <Button colorScheme="emerald">Emerald</Button>

      <Button colorScheme="teal">Teal</Button>

      <Button colorScheme="cyan">Cyan</Button>

      <Button colorScheme="sky">Sky</Button>

      <Button colorScheme="blue">Blue</Button>

      <Button colorScheme="indigo">Indigo</Button>

      <Button colorScheme="violet">Violet</Button>

      <Button colorScheme="purple">Purple</Button>

      <Button colorScheme="fuchsia">Fuchsia</Button>
    </Wrap>
  )
}

export const outline: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="outline">
        Primary
      </Button>

      <Button colorScheme="secondary" variant="outline">
        Secondary
      </Button>

      <Button colorScheme="success" variant="outline">
        Success
      </Button>

      <Button colorScheme="warning" variant="outline">
        Warning
      </Button>

      <Button colorScheme="danger" variant="outline">
        Danger
      </Button>

      <Button colorScheme="link" variant="outline">
        Link
      </Button>

      <Button colorScheme="gray" variant="outline">
        Gray
      </Button>

      <Button colorScheme="neutral" variant="outline">
        Neutral
      </Button>

      <Button colorScheme="red" variant="outline">
        Red
      </Button>

      <Button colorScheme="rose" variant="outline">
        Rose
      </Button>

      <Button colorScheme="pink" variant="outline">
        Pink
      </Button>

      <Button colorScheme="orange" variant="outline">
        Orange
      </Button>

      <Button colorScheme="amber" variant="outline">
        Amber
      </Button>

      <Button colorScheme="yellow" variant="outline">
        Yellow
      </Button>

      <Button colorScheme="lime" variant="outline">
        Lime
      </Button>

      <Button colorScheme="green" variant="outline">
        Green
      </Button>

      <Button colorScheme="emerald" variant="outline">
        Emerald
      </Button>

      <Button colorScheme="teal" variant="outline">
        Teal
      </Button>

      <Button colorScheme="cyan" variant="outline">
        Cyan
      </Button>

      <Button colorScheme="sky" variant="outline">
        Sky
      </Button>

      <Button colorScheme="blue" variant="outline">
        Blue
      </Button>

      <Button colorScheme="indigo" variant="outline">
        Indigo
      </Button>

      <Button colorScheme="violet" variant="outline">
        Violet
      </Button>

      <Button colorScheme="purple" variant="outline">
        Purple
      </Button>

      <Button colorScheme="fuchsia" variant="outline">
        Fuchsia
      </Button>
    </Wrap>
  )
}

export const ghost: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="ghost">
        Primary
      </Button>

      <Button colorScheme="secondary" variant="ghost">
        Secondary
      </Button>

      <Button colorScheme="success" variant="ghost">
        Success
      </Button>

      <Button colorScheme="warning" variant="ghost">
        Warning
      </Button>

      <Button colorScheme="danger" variant="ghost">
        Danger
      </Button>

      <Button colorScheme="link" variant="ghost">
        Link
      </Button>

      <Button colorScheme="gray" variant="ghost">
        Gray
      </Button>

      <Button colorScheme="neutral" variant="ghost">
        Neutral
      </Button>

      <Button colorScheme="red" variant="ghost">
        Red
      </Button>

      <Button colorScheme="rose" variant="ghost">
        Rose
      </Button>

      <Button colorScheme="pink" variant="ghost">
        Pink
      </Button>

      <Button colorScheme="orange" variant="ghost">
        Orange
      </Button>

      <Button colorScheme="amber" variant="ghost">
        Amber
      </Button>

      <Button colorScheme="yellow" variant="ghost">
        Yellow
      </Button>

      <Button colorScheme="lime" variant="ghost">
        Lime
      </Button>

      <Button colorScheme="green" variant="ghost">
        Green
      </Button>

      <Button colorScheme="emerald" variant="ghost">
        Emerald
      </Button>

      <Button colorScheme="teal" variant="ghost">
        Teal
      </Button>

      <Button colorScheme="cyan" variant="ghost">
        Cyan
      </Button>

      <Button colorScheme="sky" variant="ghost">
        Sky
      </Button>

      <Button colorScheme="blue" variant="ghost">
        Blue
      </Button>

      <Button colorScheme="indigo" variant="ghost">
        Indigo
      </Button>

      <Button colorScheme="violet" variant="ghost">
        Violet
      </Button>

      <Button colorScheme="purple" variant="ghost">
        Purple
      </Button>

      <Button colorScheme="fuchsia" variant="ghost">
        Fuchsia
      </Button>
    </Wrap>
  )
}

export const withSize: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" size="xs">
        X Small
      </Button>

      <Button colorScheme="secondary" size="sm">
        Small
      </Button>

      <Button colorScheme="warning" size="md">
        Medium
      </Button>

      <Button colorScheme="danger" size="lg">
        Large
      </Button>
    </Wrap>
  )
}

export const withVariant: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="solid">
        Solid
      </Button>

      <Button colorScheme="secondary" variant="outline">
        Outline
      </Button>

      <Button colorScheme="warning" variant="ghost">
        Ghost
      </Button>

      <Button colorScheme="danger" variant="link">
        Link
      </Button>

      <Button variant="unstyled">Unstyle</Button>
    </Wrap>
  )
}

export const withDisabled: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="solid" isDisabled>
        Solid
      </Button>

      <Button colorScheme="secondary" variant="outline" isDisabled>
        Outline
      </Button>

      <Button colorScheme="warning" variant="ghost" isDisabled>
        Ghost
      </Button>

      <Button colorScheme="danger" variant="link" isDisabled>
        Link
      </Button>

      <Button variant="unstyled" isDisabled>
        Unstyle
      </Button>
    </Wrap>
  )
}

export const withIcon: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="solid" leftIcon={<Plus />}>
        Button
      </Button>

      <Button
        colorScheme="secondary"
        variant="outline"
        rightIcon={<ArrowRight />}
      >
        Button
      </Button>

      <Button colorScheme="warning" variant="ghost" leftIcon={<Mail />}>
        Button
      </Button>

      <Button colorScheme="danger" variant="link" leftIcon={<Check />}>
        Button
      </Button>
    </Wrap>
  )
}

export const iconButton: Story = () => {
  return (
    <Wrap gap="md">
      <IconButton
        colorScheme="primary"
        aria-label="Plus"
        icon={<Plus fontSize="2xl" />}
      />

      <IconButton
        colorScheme="secondary"
        aria-label="Minus"
        icon={<Minus fontSize="2xl" />}
      />

      <IconButton
        colorScheme="warning"
        size="lg"
        aria-label="Light"
        icon={<Sun fontSize="2xl" />}
      />

      <IconButton
        colorScheme="danger"
        size="lg"
        aria-label="Dark"
        icon={<Moon fontSize="2xl" />}
      />
    </Wrap>
  )
}

export const closeButton: Story = () => {
  return (
    <Wrap gap="md">
      <CloseButton size="sm" />

      <CloseButton size="md" />

      <CloseButton size="lg" />
    </Wrap>
  )
}

export const withLoading: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" isLoading>
        Button
      </Button>

      <Button colorScheme="secondary" isLoading loadingIcon="dots">
        Button
      </Button>

      <Button colorScheme="warning" variant="outline" isLoading>
        Button
      </Button>

      <Button colorScheme="danger" variant="ghost" isLoading>
        Button
      </Button>

      <Button colorScheme="primary" isLoading loadingText="Loading...">
        Button
      </Button>

      <Button
        colorScheme="secondary"
        variant="outline"
        isLoading
        loadingIcon="grid"
        loadingPlacement="end"
        loadingText="Loading..."
      >
        Button
      </Button>
    </Wrap>
  )
}

export const buttonGroup: Story = () => {
  return (
    <>
      <ButtonGroup variant="outline" isAttached>
        <Button>Button</Button>
        <IconButton aria-label="Add" icon={<Plus />} />
      </ButtonGroup>

      <ButtonGroup gap="sm">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup variant="outline" isAttached isDisabled>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup direction="column" gap="sm">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup variant="outline" direction="column" isAttached>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </>
  )
}
