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
  return <Toggle aria-label="Toggle bold" icon={<Bold />} />
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
        size="xs"
        aria-label="Toggle bold"
        icon={<Bold />}
      />
      <Toggle
        colorScheme="secondary"
        size="sm"
        aria-label="Toggle bold"
        icon={<Bold />}
      />
      <Toggle
        colorScheme="warning"
        size="md"
        aria-label="Toggle bold"
        icon={<Bold />}
      />
      <Toggle
        colorScheme="danger"
        size="lg"
        aria-label="Toggle bold"
        icon={<Bold />}
      />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Toggle
        colorScheme="primary"
        variant="subtle"
        aria-label="Toggle bold"
        icon={<Bold />}
      />
      <Toggle
        colorScheme="secondary"
        variant="solid"
        aria-label="Toggle bold"
        icon={<Bold />}
      />
      <Toggle variant="outline" aria-label="Toggle bold" icon={<Bold />} />
      <Toggle variant="unstyled" aria-label="Toggle bold" icon={<Bold />} />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <Toggle
          colorScheme="primary"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="secondary"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="success"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="warning"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="danger"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="link"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="gray"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="neutral"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="red"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="rose"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="pink"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="orange"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="amber"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="yellow"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="lime"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="green"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="emerald"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="teal"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="cyan"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="sky"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="blue"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="indigo"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="violet"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="purple"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="fuchsia"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
      </Wrap>

      <Wrap gap="md">
        <Toggle
          colorScheme="primary"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="secondary"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="success"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="warning"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="danger"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="link"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="gray"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="neutral"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="red"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="rose"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="pink"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="orange"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="amber"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="yellow"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="lime"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="green"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="emerald"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="teal"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="cyan"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="sky"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="blue"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="indigo"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="violet"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="purple"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="fuchsia"
          variant="solid"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
      </Wrap>

      <Wrap gap="md">
        <Toggle
          colorScheme="primary"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="secondary"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="success"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="warning"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="danger"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="link"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="gray"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="neutral"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="red"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="rose"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="pink"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="orange"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="amber"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="yellow"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="lime"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="green"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="emerald"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="teal"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="cyan"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="sky"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="blue"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="indigo"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="violet"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="purple"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
        <Toggle
          colorScheme="fuchsia"
          variant="outline"
          aria-label="Toggle bold"
          defaultIsSelected
          icon={<Bold />}
        />
      </Wrap>
    </>
  )
}

export const isRounded: Story = () => {
  return (
    <Toggle
      aria-label="Toggle bold"
      defaultIsSelected
      icon={<Bold />}
      isRounded
    />
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Toggle
        colorScheme="primary"
        variant="subtle"
        aria-label="Toggle bold"
        defaultIsSelected
        icon={<Bold />}
        isDisabled
      />
      <Toggle
        colorScheme="secondary"
        variant="solid"
        aria-label="Toggle bold"
        defaultIsSelected
        icon={<Bold />}
        isDisabled
      />
      <Toggle
        variant="outline"
        aria-label="Toggle bold"
        defaultIsSelected
        icon={<Bold />}
        isDisabled
      />
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Toggle
        colorScheme="primary"
        variant="subtle"
        aria-label="Toggle bold"
        defaultIsSelected
        icon={<Bold />}
        isReadOnly
      />
      <Toggle
        colorScheme="secondary"
        variant="solid"
        aria-label="Toggle bold"
        defaultIsSelected
        icon={<Bold />}
        isReadOnly
      />
      <Toggle
        variant="outline"
        aria-label="Toggle bold"
        defaultIsSelected
        icon={<Bold />}
        isReadOnly
      />
    </>
  )
}

export const customControl: Story = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <Toggle
      aria-label="Toggle bold"
      icon={<Bold />}
      isSelected={isSelected}
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
        <Toggle aria-label="Toggle bold" icon={<Bold />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<Italic />} value="italic" />
        <Toggle
          aria-label="Toggle underline"
          icon={<Underline />}
          value="underline"
        />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle aria-label="Toggle bold" icon={<Bold />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<Italic />} value="italic" />
        <Toggle
          aria-label="Toggle underline"
          icon={<Underline />}
          value="underline"
        />
      </ToggleGroup>
    </>
  )
}
