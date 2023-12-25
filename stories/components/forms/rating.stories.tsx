import type { Meta, StoryFn } from "@storybook/react"
import { FormControl, Rating } from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof Rating>

const meta: Meta<typeof Rating> = {
  title: "Components / Forms / Rating",
  component: Rating,
}

export default meta

export const basic: Story = () => {
  return <Rating />
}

export const withSize: Story = () => {
  return (
    <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>
  )
}

export const withDefaultValue: Story = () => {
  return <Rating defaultValue={3} />
}

export const withItems: Story = () => {
  return (
    <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>
  )
}

export const withFractions: Story = () => {
  return (
    <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<number>(3)

  return <Rating value={value} onChange={onChange} />
}
