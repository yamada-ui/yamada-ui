import type { Meta, StoryFn } from "@storybook/react-vite"
import { Format } from "./"

type Story = StoryFn<typeof Format.Number>

const meta: Meta<typeof Format.Number> = {
  component: Format.Number,
  title: "Components / Format / Number",
}

export default meta

export const Basic: Story = () => {
  return <Format.Number value={1000} />
}

export const Percentage: Story = () => {
  return <Format.Number style="percent" value={0.145} />
}

export const Currency: Story = () => {
  return (
    <Format.Number
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
      <Format.Number locale="de-DE" value={1450.45} />
      <Format.Number locale="en-US" value={1450.45} />
    </>
  )
}

export const Unit: Story = () => {
  return <Format.Number style="unit" unit="kilometer" value={384.4} />
}

export const Notation: Story = () => {
  return <Format.Number notation="compact" value={1500000} />
}
