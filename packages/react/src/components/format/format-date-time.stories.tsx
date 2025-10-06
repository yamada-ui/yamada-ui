import type { Meta, StoryFn } from "@storybook/react-vite"
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
  return <Format.DateTime value={new Date()} />
}

export const Locale: Story = () => {
  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={LOCALES}>
        {(locale) => (
          <>
            <Text color="fg.muted">{locale}</Text>
            <Format.DateTime key={locale} locale={locale} value={new Date()} />
          </>
        )}
      </For>
    </Grid>
  )
}

export const Long: Story = () => {
  return (
    <VStack gap="0">
      <Format.DateTime
        day="numeric"
        month="long"
        value={new Date()}
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
        value={new Date()}
        weekday="long"
        year="numeric"
      />
    </VStack>
  )
}

export const Year: Story = () => {
  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {(year) => (
          <>
            <Text color="fg.muted">{year}</Text>
            <Format.DateTime key={year} value={new Date()} year={year} />
          </>
        )}
      </For>
    </Grid>
  )
}

export const Month: Story = () => {
  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "numeric", "2-digit", "narrow"] as const}>
        {(month) => (
          <>
            <Text color="fg.muted">{month}</Text>
            <Format.DateTime key={month} month={month} value={new Date()} />
          </>
        )}
      </For>
    </Grid>
  )
}

export const Day: Story = () => {
  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["numeric", "2-digit"] as const}>
        {(day) => (
          <>
            <Text color="fg.muted">{day}</Text>
            <Format.DateTime key={day} day={day} value={new Date()} />
          </>
        )}
      </For>
    </Grid>
  )
}

export const Weekday: Story = () => {
  return (
    <Grid gapX="sm" templateColumns="auto 1fr">
      <For each={["short", "long", "narrow"] as const}>
        {(weekday) => (
          <>
            <Text color="fg.muted">{weekday}</Text>
            <Format.DateTime
              key={weekday}
              value={new Date()}
              weekday={weekday}
            />
          </>
        )}
      </For>
    </Grid>
  )
}
