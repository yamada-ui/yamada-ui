import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import type { DatePickerFormat } from "./"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
import { Calendar } from "../calendar"
import { Field } from "../field"
import { For } from "../for"
import { CalendarDaysIcon, PackageIcon } from "../icon"
import { Indicator } from "../indicator"
import { InputGroup } from "../input"
import { VStack } from "../stack"
import { Tag } from "../tag"
import { Text } from "../text"
import { DatePicker } from "./"

type Story = StoryFn<typeof DatePicker>

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: "Components / DatePicker",
}

export default meta

export const Basic: Story = () => {
  return <DatePicker />
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["outline", "filled", "flushed"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <DatePicker
            key={key}
            colorScheme={row}
            variant={column}
            placeholder={toTitleCase(column)}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["xs", "sm", "md", "lg", "xl"]}
      rows={["outline", "filled", "flushed"]}
    >
      {(column, row, key) => {
        return (
          <DatePicker
            key={key}
            size={column}
            variant={row}
            placeholder={`Size (${column})`}
          />
        )
      }}
    </PropsTable>
  )
}

export const Locale: Story = () => {
  return <DatePicker locale="ja" />
}

export const Format: Story = () => {
  const format = useMemo<DatePickerFormat>(
    () => ({
      input: null,
      month: "long",
      weekday: "narrow",
      year: "2-digit",
    }),
    [],
  )

  return <DatePicker format={format} />
}

export const DefaultValue: Story = () => {
  return <DatePicker defaultValue={new Date(1993, 7, 18)} />
}

export const DefaultInputValue: Story = () => {
  return <DatePicker defaultInputValue="1993/08/18" />
}

export const DefaultMonth: Story = () => {
  return <DatePicker defaultMonth={new Date("2025-10-01")} />
}

export const MinDate: Story = () => {
  return <DatePicker minDate={new Date(new Date().setDate(1))} />
}

export const MaxDate: Story = () => {
  return <DatePicker maxDate={new Date(new Date().setDate(18))} />
}

export const DisabledToday: Story = () => {
  return <DatePicker today={false} />
}

export const DisabledDays: Story = () => {
  return (
    <DatePicker excludeDate={(date) => [0, 1, 6].includes(date.getDay())} />
  )
}

export const Multiple: Story = () => {
  return <DatePicker multiple />
}

export const Max: Story = () => {
  return <DatePicker max={3} multiple />
}

export const Separator: Story = () => {
  return <DatePicker multiple separator=";" />
}

export const Range: Story = () => {
  return <DatePicker range rootProps={{ w: "fit-content" }} />
}

export const StartDayOfWeek: Story = () => {
  return (
    <>
      <DatePicker startDayOfWeek="sunday" />
      <DatePicker startDayOfWeek="monday" />
    </>
  )
}

export const WeekendDays: Story = () => {
  return <DatePicker weekendDays={[0, 1]} />
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

  return <DatePicker holidays={holidays} />
}

export const HiddenOutsideDays: Story = () => {
  return (
    <DatePicker
      calendarProps={{
        dayProps: {
          css: { "&[data-outside]": { opacity: 0, pointerEvents: "none" } },
        },
      }}
    />
  )
}

export const Offset: Story = () => {
  return <DatePicker offset={[16, 16]} />
}

export const Gutter: Story = () => {
  return <DatePicker gutter={16} />
}

export const AnimationScheme: Story = () => {
  return <DatePicker animationScheme="inline-start" />
}

export const Placement: Story = () => {
  return (
    <DatePicker
      animationScheme="inline-start"
      placement="center-end"
      rootProps={{ w: "xs" }}
    />
  )
}

export const BlockScrollOnMount: Story = () => {
  return (
    <Box minH="200dvh" w="full">
      <DatePicker blockScrollOnMount />
    </Box>
  )
}

export const OpenOnChange: Story = () => {
  return (
    <DatePicker
      openOnChange={(ev) => ev.target.value.length > 1}
      openOnFocus={false}
    />
  )
}

export const CloseOnChange: Story = () => {
  return (
    <DatePicker
      closeOnChange={(ev) => !ev.target.value.length}
      openOnFocus={false}
    />
  )
}

export const CloseOnScroll: Story = () => {
  return (
    <Box minH="200dvh" w="full">
      <DatePicker closeOnScroll />
    </Box>
  )
}

export const DisabledOpenOnFocus: Story = () => {
  return <DatePicker openOnFocus={false} />
}

export const DisabledOpenOnClick: Story = () => {
  return <DatePicker openOnClick={false} />
}

export const DisabledFocusOnClear: Story = () => {
  return <DatePicker focusOnClear={false} />
}

export const DisabledCloseOnSelect: Story = () => {
  return <DatePicker closeOnSelect={false} />
}

export const DisabledCloseOnBlur: Story = () => {
  return <DatePicker closeOnBlur={false} />
}

export const DisabledCloseOnEsc: Story = () => {
  return <DatePicker closeOnEsc={false} />
}

export const DisabledClearable: Story = () => {
  return <DatePicker clearable={false} />
}

export const DisallowInput: Story = () => {
  return <DatePicker allowInput={false} />
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => (
        <DatePicker
          key={key}
          defaultValue={{
            end: new Date(new Date().setDate(new Date().getDate() + 4)),
            start: new Date(),
          }}
          range
          calendarProps={{ shape: row }}
        />
      )}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <DatePicker
            key={index}
            variant={variant}
            disabled
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <PackageIcon />
            </InputGroup.Addon>
            <DatePicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root disabled label="What is your birthday?">
        <DatePicker />
      </Field.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <DatePicker
            key={index}
            variant={variant}
            placeholder={toTitleCase(variant)}
            readOnly
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <PackageIcon />
            </InputGroup.Addon>
            <DatePicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root label="What is your birthday?" readOnly>
        <DatePicker />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <DatePicker
            key={index}
            variant={variant}
            invalid
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <PackageIcon />
            </InputGroup.Addon>
            <DatePicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        errorMessage="This is required."
        invalid
        label="What is your birthday?"
      >
        <DatePicker />
      </Field.Root>
    </>
  )
}

export const Addon: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PackageIcon />
          </InputGroup.Addon>
          <DatePicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const Element: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <PackageIcon />
          </InputGroup.Element>
          <DatePicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <DatePicker placeholder="Default border color" />

      <DatePicker
        focusBorderColor="green.500"
        placeholder="Custom border color"
      />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <PackageIcon />
        </InputGroup.Element>
        <DatePicker placeholder="Custom border color" />
      </InputGroup.Root>

      <DatePicker
        errorBorderColor="orange.500"
        invalid
        placeholder="Custom border color"
      />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <PackageIcon />
        </InputGroup.Addon>
        <DatePicker placeholder="Custom border color" />
      </InputGroup.Root>
    </>
  )
}

export const CustomIcon: Story = () => {
  return (
    <>
      <DatePicker iconProps={{ color: "orange" }} />
      <DatePicker icon={<CalendarDaysIcon />} />
    </>
  )
}

export const CustomRender: Story = () => {
  return (
    <DatePicker
      multiple
      render={({ value, onClear }) => (
        <Tag size="sm" me="{gap}" onClose={onClear}>
          {value}
        </Tag>
      )}
    />
  )
}

export const CustomCalendar: Story = () => {
  return (
    <>
      <DatePicker>
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
      </DatePicker>

      <DatePicker
        calendarProps={{
          day: ({ value }) => (
            <Indicator
              colorScheme="blue"
              size="sm"
              disabled={value.getDate() % 4 !== 0}
              offset="-3px"
              labelProps={{ minBoxSize: "2" }}
            >
              <Text as="span">{value.getDate()}</Text>
            </Indicator>
          ),
        }}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState<Date | undefined>(undefined)

  return <DatePicker value={value} onChange={setValue} />
}

export const ReactHookForm: Story = () => {
  interface Data {
    datePicker: Date
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.datePicker?.message}
        invalid={!!errors.datePicker}
        label="What is your birthday?"
      >
        <Controller
          name="datePicker"
          control={control}
          render={({ field }) => <DatePicker {...field} />}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const ReactHookFormDefaultValue: Story = () => {
  interface Data {
    datePicker: Date
  }

  const defaultValues: Data = {
    datePicker: new Date(1993, 7, 18),
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.datePicker?.message}
        invalid={!!errors.datePicker}
        label="What is your birthday?"
      >
        <Controller
          name="datePicker"
          control={control}
          render={({ field }) => <DatePicker {...field} />}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
