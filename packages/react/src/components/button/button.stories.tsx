import type { Meta, StoryFn } from "@storybook/react"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Wrap } from "../flex"
import { ArrowRightIcon, CheckIcon, MailIcon, PlusIcon } from "../icon"
import { Button } from "./button"

type Story = StoryFn<typeof Button>

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components / Button",
}

export default meta

export const Solid: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme}>
          {toTitleCase(colorScheme)}
        </Button>
      ))}
    </Wrap>
  )
}

export const Subtle: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme} variant="subtle">
          {toTitleCase(colorScheme)}
        </Button>
      ))}
    </Wrap>
  )
}

export const Surface: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme} variant="surface">
          {toTitleCase(colorScheme)}
        </Button>
      ))}
    </Wrap>
  )
}

export const Outline: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme} variant="outline">
          {toTitleCase(colorScheme)}
        </Button>
      ))}
    </Wrap>
  )
}

export const Ghost: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Button key={colorScheme} colorScheme={colorScheme} variant="ghost">
          {toTitleCase(colorScheme)}
        </Button>
      ))}
    </Wrap>
  )
}

export const WithSize: Story = () => {
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

export const WithVariant: Story = () => {
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

export const WithDisabled: Story = () => {
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

export const WithIcon: Story = () => {
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

export const WithLoading: Story = () => {
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
