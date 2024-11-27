import type { Meta, StoryFn } from "@storybook/react"
import { FormatNumber } from "@yamada-ui/react"

type Story = StoryFn<typeof FormatNumber>

const meta: Meta<typeof FormatNumber> = {
  component: FormatNumber,
  title: "Components / Other / FormatNumber",
}

export default meta

export const basic: Story = () => {
  return <FormatNumber value={1000} />
}

export const withPercentage: Story = () => {
  return <FormatNumber style="percent" value={0.145} />
}

export const withCurrency: Story = () => {
  return (
    <FormatNumber
      style="currency"
      currency="JPY"
      locale="ja-JP"
      value={1234.45}
    />
  )
}

export const withLocale: Story = () => {
  return (
    <>
      <FormatNumber locale="de-DE" value={1450.45} />
      <FormatNumber locale="en-US" value={1450.45} />
    </>
  )
}

export const withUnit: Story = () => {
  return <FormatNumber style="unit" unit="kilometer" value={384.4} />
}

export const withNotation: Story = () => {
  return <FormatNumber notation="compact" value={1500000} />
}
