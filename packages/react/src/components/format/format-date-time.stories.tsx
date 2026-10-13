import type { Meta, StoryFn } from "@storybook/react-vite"
import { useState } from "react"
import { LOCALES } from "../../providers/i18n-provider"
import { For } from "../for"
import { Grid } from "../grid"
import { VStack } from "../stack"
import { Text } from "../text"
import { Format } from "./"

type Story = StoryFn<typeof Format.DateTime>

const meta: Meta<typeof Format.DateTime> = {
  component: Format.DateTime,
  title: "Components / Format / DateTime",
}

export default meta

export const Basic: Story = () => {
  const [value] = useState<Date>(() => new Date())

  return <Format.DateTime value={value} />
}

export const Locale: Story = () => {
  const [value] = useState<Date>(() => new Date())

  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {(locale) => (
          <>
            <Text color="fg.muted">{locale}</Text>
            <Format.DateTime key={locale} locale={locale} value={value} />
          </>
        )}
      </For>
    </Grid>
  )
}

export const Long: Story = () => {
  const [value] = useState<Date>(() => new Date())

  return (
    <VStack gap="0">
      <Format.DateTime
        day="numeric"
        month="long"
        value={value}
        weekday="long"
        year="numeric"
      />
      <Format.DateTime
        day="numeric"
        hour="numeric"
        hour12
        minute="numeric"
        month="long"
        second="numeric"
        value={value}
        weekday="long"
        year="numeric"
      />
    </VStack>
  )
}

export const Year: Story = () => {
  const [value] = useState<Date>(() => new Date())

  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {(year) => (
          <>
            <Text color="fg.muted">{year}</Text>
            <Format.DateTime key={year} value={value} year={year} />
          </>
        )}
      </For>
    </Grid>
  )
}

export const Month: Story = () => {
  const [value] = useState<Date>(() => new Date())

  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "numeric", "2-digit", "narrow"] as const}>
        {(month) => (
          <>
            <Text color="fg.muted">{month}</Text>
            <Format.DateTime key={month} month={month} value={value} />
          </>
        )}
      </For>
    </Grid>
  )
}

export const Day: Story = () => {
  const [value] = useState<Date>(() => new Date())

  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {(day) => (
          <>
            <Text color="fg.muted">{day}</Text>
            <Format.DateTime key={day} day={day} value={value} />
          </>
        )}
      </For>
    </Grid>
  )
}

export const Weekday: Story = () => {
  const [value] = useState<Date>(() => new Date())

  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "narrow"] as const}>
        {(weekday) => (
          <>
            <Text color="fg.muted">{weekday}</Text>
            <Format.DateTime key={weekday} value={value} weekday={weekday} />
          </>
        )}
      </For>
    </Grid>
  )
}
