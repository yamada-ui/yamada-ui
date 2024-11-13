import type { Meta, StoryFn } from "@storybook/react"
import {
  ArrowRightIcon,
  CheckIcon,
  MailIcon,
  MinusIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
} from "@yamada-ui/lucide"
import {
  Button,
  ButtonGroup,
  CloseButton,
  IconButton,
  toTitleCase,
  Wrap,
} from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components / Forms / Button",
}

export default meta

export const solid: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme}>
          {toTitleCase(colorScheme)}
        </Button>
      ))}
    </Wrap>
  )
}

export const subtle: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme} variant="subtle">
          {toTitleCase(colorScheme)}
        </Button>
      ))}
    </Wrap>
  )
}

export const surface: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme} variant="surface">
          {toTitleCase(colorScheme)}
        </Button>
      ))}
    </Wrap>
  )
}

export const outline: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme} variant="outline">
          {toTitleCase(colorScheme)}
        </Button>
      ))}
    </Wrap>
  )
}

export const ghost: Story = () => {
  return (
    <Wrap gap="md">
      {colorSchemes.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme} variant="ghost">
          {toTitleCase(colorScheme)}
        </Button>
      ))}
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
      <Button colorScheme="primary" variant="solid" leftIcon={<PlusIcon />}>
        Button
      </Button>

      <Button
        colorScheme="secondary"
        variant="outline"
        rightIcon={<ArrowRightIcon />}
      >
        Button
      </Button>

      <Button colorScheme="warning" variant="ghost" leftIcon={<MailIcon />}>
        Button
      </Button>

      <Button colorScheme="danger" variant="link" leftIcon={<CheckIcon />}>
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
        icon={<PlusIcon fontSize="2xl" />}
      />

      <IconButton
        colorScheme="secondary"
        aria-label="Minus"
        icon={<MinusIcon fontSize="2xl" />}
      />

      <IconButton
        colorScheme="warning"
        size="lg"
        aria-label="Light"
        icon={<SunIcon fontSize="2xl" />}
      />

      <IconButton
        colorScheme="danger"
        size="lg"
        aria-label="Dark"
        icon={<MoonIcon fontSize="2xl" />}
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
        <IconButton aria-label="Add" icon={<PlusIcon />} />
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
