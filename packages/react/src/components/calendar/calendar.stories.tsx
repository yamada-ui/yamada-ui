import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { COLOR_SCHEMES } from "../../utils"
import { Indicator } from "../indicator"
import { Text } from "../text"
import { Wrap } from "../wrap"
import { Calendar } from "./"

type Story = StoryFn<typeof Calendar.Root>

const meta: Meta<typeof Calendar.Root> = {
  component: Calendar.Root,
  title: "Components / Calendar",
}

export default meta

export const Basic: Story = () => {
  return <Calendar.Root />
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
        return <Calendar.Root key={key} size={row} defaultValue={new Date()} />
      }}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  return (
    <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => {
        return (
          <Calendar.Root
            key={key}
            colorScheme={row}
            defaultValue={new Date(new Date().setDate(1))}
          />
        )
      }}
    </PropsTable>
  )
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => (
        <Calendar.Root
          key={key}
          defaultValue={{
            end: new Date(new Date().setDate(new Date().getDate() + 4)),
            start: new Date(),
          }}
          range
          shape={row}
        />
      )}
    </PropsTable>
  )
}

export const Locale: Story = () => {
  return <Calendar.Root locale="ja" />
}

export const Format: Story = () => {
  const format = useMemo<Calendar.Format>(
    () => ({
      month: "long",
      weekday: "narrow",
      year: "2-digit",
    }),
    [],
  )

  return <Calendar.Root format={format} />
}

export const DefaultValue: Story = () => {
  return <Calendar.Root defaultValue={new Date()} />
}

export const DefaultMonth: Story = () => {
  return <Calendar.Root defaultMonth={new Date("2025-10-01")} />
}

export const MinDate: Story = () => {
  return <Calendar.Root minDate={new Date(new Date().setDate(1))} />
}

export const MaxDate: Story = () => {
  return <Calendar.Root maxDate={new Date(new Date().setDate(18))} />
}

export const Disabled: Story = () => {
  return <Calendar.Root disabled />
}

export const DisabledToday: Story = () => {
  return <Calendar.Root today={false} />
}

export const DisabledDays: Story = () => {
  return (
    <Calendar.Root excludeDate={(date) => [0, 1, 6].includes(date.getDay())} />
  )
}

export const Multiple: Story = () => {
  return <Calendar.Root multiple />
}

export const Max: Story = () => {
  return <Calendar.Root max={3} multiple />
}

export const Range: Story = () => {
  return <Calendar.Root range />
}

export const StartDayOfWeek: Story = () => {
  return (
    <Wrap gap="md">
      <Calendar.Root startDayOfWeek="sunday" />
      <Calendar.Root startDayOfWeek="monday" />
    </Wrap>
  )
}

export const WeekendDays: Story = () => {
  return <Calendar.Root weekendDays={[0, 1]} />
}

export const Holidays: Story = () => {
  const holidays = useMemo(
    () => [
      new Date("2025-01-01"),
      new Date("2025-01-13"),
      new Date("2025-02-11"),
      new Date("2025-02-23"),
      new Date("2025-02-24"),
      new Date("2025-03-20"),
      new Date("2025-04-29"),
      new Date("2025-05-03"),
      new Date("2025-05-04"),
      new Date("2025-05-05"),
      new Date("2025-05-06"),
      new Date("2025-07-21"),
      new Date("2025-08-11"),
      new Date("2025-09-15"),
      new Date("2025-09-23"),
      new Date("2025-10-13"),
      new Date("2025-11-03"),
      new Date("2025-11-23"),
      new Date("2025-11-24"),
      new Date("2026-01-01"),
      new Date("2026-01-12"),
      new Date("2026-02-11"),
      new Date("2026-02-23"),
      new Date("2026-03-20"),
      new Date("2026-04-29"),
      new Date("2026-05-03"),
      new Date("2026-05-04"),
      new Date("2026-05-05"),
      new Date("2026-05-06"),
      new Date("2026-07-20"),
      new Date("2026-08-11"),
      new Date("2026-09-21"),
      new Date("2026-09-22"),
      new Date("2026-10-12"),
      new Date("2026-11-03"),
      new Date("2026-11-23"),
    ],
    [],
  )

  return <Calendar.Root holidays={holidays} />
}

export const HiddenOutsideDays: Story = () => {
  return (
    <Calendar.Root
      dayProps={{
        css: { "&[data-outside]": { opacity: 0, pointerEvents: "none" } },
      }}
    />
  )
}

export const CustomComponent: Story = () => {
  return (
    <Wrap gap="md">
      <Calendar.Root>
        <Calendar.Navigation>
          <Calendar.Control justifyContent="flex-start" px="3">
            {({ month }) =>
              `${month.getFullYear()}/${(month.getMonth() + 1).toString().padStart(2, "0")}`
            }
          </Calendar.Control>
          <Calendar.PrevButton gridColumn="6 / 7" />
          <Calendar.NextButton gridColumn="7 / 8" />
        </Calendar.Navigation>

        <Calendar.Month />
      </Calendar.Root>

      <Calendar.Root
        day={({ value }) => (
          <Indicator
            colorScheme="blue"
            size="sm"
            disabled={value.getDate() % 4 !== 0}
            offset="-3px"
            labelProps={{ minBoxSize: "2" }}
          >
            <Text as="span">{value.getDate()}</Text>
          </Indicator>
        )}
      />
    </Wrap>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState<Date | undefined>(new Date())

  return <Calendar.Root value={value} onChange={setValue} />
}
