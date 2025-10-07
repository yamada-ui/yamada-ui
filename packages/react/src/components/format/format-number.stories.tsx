import type { Meta, StoryFn } from "@storybook/react-vite"
import { LOCALES } from "../../providers/i18n-provider"
import { For } from "../for"
import { Grid } from "../grid"
import { Text } from "../text"
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
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {(locale) => (
          <>
            <Text color="fg.muted">{locale}</Text>
            <Format.Number key={locale} locale={locale} value={1450.45} />
          </>
        )}
      </For>
    </Grid>
  )
}

export const Unit: Story = () => {
  return <Format.Number style="unit" unit="kilometer" value={384.4} />
}

export const Notation: Story = () => {
  return <Format.Number notation="compact" value={1500000} />
}
