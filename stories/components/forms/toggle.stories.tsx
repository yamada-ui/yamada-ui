import type { Meta, StoryFn } from "@storybook/react"
import { Bold, Italic, Underline } from "@yamada-ui/lucide"
import { Toggle, ToggleGroup, Wrap } from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof Toggle>

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components / Forms / Toggle",
}

export default meta

export const basic: Story = () => {
  return <Toggle icon={<Bold />} aria-label="Toggle bold" />
}

export const withText: Story = () => {
  return (
    <Toggle px="4">
      <Italic />
      Italic
    </Toggle>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Toggle
        colorScheme="primary"
        icon={<Bold />}
        size="xs"
        aria-label="Toggle bold"
      />
      <Toggle
        colorScheme="secondary"
        icon={<Bold />}
        size="sm"
        aria-label="Toggle bold"
      />
      <Toggle
        colorScheme="warning"
        icon={<Bold />}
        size="md"
        aria-label="Toggle bold"
      />
      <Toggle
        colorScheme="danger"
        icon={<Bold />}
        size="lg"
        aria-label="Toggle bold"
      />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Toggle
        colorScheme="primary"
        icon={<Bold />}
        variant="subtle"
        aria-label="Toggle bold"
      />
      <Toggle
        colorScheme="secondary"
        icon={<Bold />}
        variant="solid"
        aria-label="Toggle bold"
      />
      <Toggle icon={<Bold />} variant="outline" aria-label="Toggle bold" />
      <Toggle icon={<Bold />} variant="unstyled" aria-label="Toggle bold" />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <Toggle
          colorScheme="primary"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="secondary"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="success"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="warning"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="danger"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="link"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="gray"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="neutral"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="red"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="rose"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="pink"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="orange"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="amber"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="yellow"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="lime"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="green"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="emerald"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="teal"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="cyan"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="sky"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="blue"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="indigo"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="violet"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="purple"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="fuchsia"
          defaultIsSelected
          icon={<Bold />}
          aria-label="Toggle bold"
        />
      </Wrap>

      <Wrap gap="md">
        <Toggle
          colorScheme="primary"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="secondary"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="success"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="warning"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="danger"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="link"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="gray"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="neutral"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="red"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="rose"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="pink"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="orange"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="amber"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="yellow"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="lime"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="green"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="emerald"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="teal"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="cyan"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="sky"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="blue"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="indigo"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="violet"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="purple"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="fuchsia"
          defaultIsSelected
          icon={<Bold />}
          variant="solid"
          aria-label="Toggle bold"
        />
      </Wrap>

      <Wrap gap="md">
        <Toggle
          colorScheme="primary"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="secondary"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="success"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="warning"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="danger"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="link"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="gray"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="neutral"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="red"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="rose"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="pink"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="orange"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="amber"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="yellow"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="lime"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="green"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="emerald"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="teal"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="cyan"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="sky"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="blue"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="indigo"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="violet"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="purple"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
        <Toggle
          colorScheme="fuchsia"
          defaultIsSelected
          icon={<Bold />}
          variant="outline"
          aria-label="Toggle bold"
        />
      </Wrap>
    </>
  )
}

export const isRounded: Story = () => {
  return (
    <Toggle
      defaultIsSelected
      icon={<Bold />}
      isRounded
      aria-label="Toggle bold"
    />
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Toggle
        colorScheme="primary"
        defaultIsSelected
        icon={<Bold />}
        isDisabled
        variant="subtle"
        aria-label="Toggle bold"
      />
      <Toggle
        colorScheme="secondary"
        defaultIsSelected
        icon={<Bold />}
        isDisabled
        variant="solid"
        aria-label="Toggle bold"
      />
      <Toggle
        defaultIsSelected
        icon={<Bold />}
        isDisabled
        variant="outline"
        aria-label="Toggle bold"
      />
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Toggle
        colorScheme="primary"
        defaultIsSelected
        icon={<Bold />}
        isReadOnly
        variant="subtle"
        aria-label="Toggle bold"
      />
      <Toggle
        colorScheme="secondary"
        defaultIsSelected
        icon={<Bold />}
        isReadOnly
        variant="solid"
        aria-label="Toggle bold"
      />
      <Toggle
        defaultIsSelected
        icon={<Bold />}
        isReadOnly
        variant="outline"
        aria-label="Toggle bold"
      />
    </>
  )
}

export const customControl: Story = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <Toggle
      icon={<Bold />}
      isSelected={isSelected}
      aria-label="Toggle bold"
      onChange={setIsSelected}
    />
  )
}

export const useGroup: Story = () => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined)
  const [multiValue, setMultiValue] = useState<string[]>([])

  return (
    <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle icon={<Bold />} value="bold" aria-label="Toggle bold" />
        <Toggle icon={<Italic />} value="italic" aria-label="Toggle italic" />
        <Toggle
          icon={<Underline />}
          value="underline"
          aria-label="Toggle underline"
        />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle icon={<Bold />} value="bold" aria-label="Toggle bold" />
        <Toggle icon={<Italic />} value="italic" aria-label="Toggle italic" />
        <Toggle
          icon={<Underline />}
          value="underline"
          aria-label="Toggle underline"
        />
      </ToggleGroup>
    </>
  )
}
