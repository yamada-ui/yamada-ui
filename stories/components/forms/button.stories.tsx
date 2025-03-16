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
      <Button colorScheme="primary" variant="solid" disabled>
        Solid
      </Button>

      <Button colorScheme="secondary" variant="outline" disabled>
        Outline
      </Button>

      <Button colorScheme="warning" variant="ghost" disabled>
        Ghost
      </Button>

      <Button colorScheme="danger" variant="link" disabled>
        Link
      </Button>

      <Button variant="unstyled" disabled>
        Unstyle
      </Button>
    </Wrap>
  )
}

export const withIcon: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="solid" startIcon={<PlusIcon />}>
        Button
      </Button>

      <Button
        colorScheme="secondary"
        variant="outline"
        endIcon={<ArrowRightIcon />}
      >
        Button
      </Button>

      <Button colorScheme="warning" variant="ghost" startIcon={<MailIcon />}>
        Button
      </Button>

      <Button colorScheme="danger" variant="link" startIcon={<CheckIcon />}>
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
      <Button colorScheme="primary" loading>
        Button
      </Button>

      <Button colorScheme="secondary" loading loadingIcon="dots">
        Button
      </Button>

      <Button colorScheme="warning" variant="outline" loading>
        Button
      </Button>

      <Button colorScheme="danger" variant="ghost" loading>
        Button
      </Button>

      <Button colorScheme="primary" loading loadingText="Loading...">
        Button
      </Button>

      <Button
        colorScheme="secondary"
        variant="outline"
        loading
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
      <ButtonGroup variant="outline" attached>
        <Button>Button</Button>
        <IconButton aria-label="Add" icon={<PlusIcon />} />
      </ButtonGroup>

      <ButtonGroup gap="sm">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup variant="outline" attached disabled>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup flexDirection="column" gap="sm">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup variant="outline" attached flexDirection="column">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </>
  )
}
