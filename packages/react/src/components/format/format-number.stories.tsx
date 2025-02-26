import type { Meta, StoryFn } from "@storybook/react"
import { FormatNumber } from "."

type Story = StoryFn<typeof FormatNumber>

const meta: Meta<typeof FormatNumber> = {
  component: FormatNumber,
  title: "Components / FormatNumber",
}

export default meta

export const Basic: Story = () => {
  return <FormatNumber value={1000} />
}

export const Percentage: Story = () => {
  return <FormatNumber style="percent" value={0.145} />
}

export const Currency: Story = () => {
  return (
    <FormatNumber
      style="currency"
      currency="JPY"
      locale="ja-JP"
      value={1234.45}
    />
  )
}

export const Locale: Story = () => {
  return (
    <>
      <FormatNumber locale="de-DE" value={1450.45} />
      <FormatNumber locale="en-US" value={1450.45} />
    </>
  )
}

export const Unit: Story = () => {
  return <FormatNumber style="unit" unit="kilometer" value={384.4} />
}

export const Notation: Story = () => {
  return <FormatNumber notation="compact" value={1500000} />
}
