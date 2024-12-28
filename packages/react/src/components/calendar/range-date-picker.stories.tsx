import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import type { RangeDatePickerProps } from "./"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import dayjs from "dayjs"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "../button"
import { FormControl } from "../form-control"
import { Grid } from "../grid"
import { Heading } from "../heading"
import { GhostIcon } from "../icon"
import { VStack } from "../stack"
import { RangeDatePicker } from "./"
import "dayjs/locale/ja"

type Story = StoryFn<typeof RangeDatePicker>

const meta: Meta<typeof RangeDatePicker> = {
  component: RangeDatePicker,
  title: "Components / RangeDatePicker",
}

export default meta

export const Basic: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />
}

export const WithChildren: Story = () => {
  return (
    <>
      <RangeDatePicker placeholder="YYYY/MM/DD">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </RangeDatePicker>

      <RangeDatePicker closeOnSelect={false} placeholder="YYYY/MM/DD">
        {({ value, onClose }) => (
          <VStack mt="sm">
            <Button disabled={!value} onClick={onClose}>
              Submit
              {value[0] ? ` ${dayjs(value[0]).format("MM/DD")} -` : ""}
              {value[1] ? ` ${dayjs(value[1]).format("MM/DD")}` : ""}
            </Button>
          </VStack>
        )}
      </RangeDatePicker>
    </>
  )
}

export const WithSize: Story = () => {
  return (
    <>
      <RangeDatePicker size="xs" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker size="lg" placeholder="YYYY/MM/DD" />
    </>
  )
}

export const WithCalendarSize: Story = () => {
  return (
    <>
      <RangeDatePicker calendarSize="sm" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="md" placeholder="YYYY/MM/DD" />
      <RangeDatePicker calendarSize="lg" placeholder="YYYY/MM/DD" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {COLOR_SCHEMES.map((colorScheme) => (
          <RangeDatePicker
            key={colorScheme}
            calendarColorScheme={colorScheme}
            calendarVariant="solid"
            defaultValue={[
              new Date(new Date().setDate(5)),
              new Date(new Date().setDate(15)),
            ]}
            today
          />
        ))}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {COLOR_SCHEMES.map((colorScheme) => (
          <RangeDatePicker
            key={colorScheme}
            calendarColorScheme={colorScheme}
            calendarVariant="subtle"
            defaultValue={[
              new Date(new Date().setDate(5)),
              new Date(new Date().setDate(15)),
            ]}
            today
          />
        ))}
      </Grid>
    </>
  )
}

export const WithDefaultValue: Story = () => {
  return (
    <RangeDatePicker
      defaultValue={[
        new Date(new Date().setDate(5)),
        new Date(new Date().setDate(15)),
      ]}
    />
  )
}

export const WithDefaultType: Story = () => {
  return (
    <>
      <RangeDatePicker defaultType="date" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="month" placeholder="YYYY/MM/DD" />

      <RangeDatePicker defaultType="year" placeholder="YYYY/MM/DD" />
    </>
  )
}

export const WithDefaultMonth: Story = () => {
  return (
    <RangeDatePicker
      defaultMonth={new Date("1993-08-18")}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const WithFirstDayOfWeek: Story = () => {
  return (
    <>
      <RangeDatePicker firstDayOfWeek="monday" placeholder="YYYY/MM/DD" />

      <RangeDatePicker firstDayOfWeek="sunday" placeholder="YYYY/MM/DD" />
    </>
  )
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker
        errorBorderColor="orange.500"
        invalid
        placeholder="YYYY/MM/DD"
      />
    </>
  )
}

export const WithSeparator: Story = () => {
  return <RangeDatePicker separator="~" />
}

export const WithMaxSelectedValue: Story = () => {
  return <RangeDatePicker maxSelectValues={3} />
}

export const WithMinSelectedValue: Story = () => {
  return <RangeDatePicker minSelectValues={5} />
}

export const WithPattern: Story = () => {
  return (
    <RangeDatePicker
      defaultValue={[new Date()]}
      inputFormat="MMMM D, YYYY"
      pattern={/[^\w, ]/g}
      placeholder="MMMM D, YYYY"
    />
  )
}

export const WithInputFormat: Story = () => {
  return <RangeDatePicker inputFormat="YYYY-MM-DD" placeholder="YYYY-MM-DD" />
}

export const WithParseDate: Story = () => {
  return (
    <RangeDatePicker
      inputFormat="YYYY/MM/DD"
      parseDate={(value) => new Date(value)}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const WithPlacement: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />
}

export const WithOffset: Story = () => {
  return <RangeDatePicker offset={[16, 16]} placeholder="YYYY/MM/DD" />
}

export const WithGutter: Story = () => {
  return <RangeDatePicker gutter={32} placeholder="YYYY/MM/DD" />
}

export const WithDuration: Story = () => {
  return <RangeDatePicker duration={0.4} placeholder="YYYY/MM/DD" />
}

export const Disabled: Story = () => {
  return (
    <>
      <RangeDatePicker variant="outline" disabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" disabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" disabled placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" disabled placeholder="YYYY/MM/DD" />

      <FormControl disabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" readOnly />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" readOnly />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" readOnly />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" readOnly />

      <FormControl label="What date would you like to reserve?" readOnly>
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <RangeDatePicker variant="outline" invalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" invalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" invalid placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" invalid placeholder="YYYY/MM/DD" />

      <FormControl
        errorMessage="This is required."
        invalid
        label="What date would you like to reserve?"
      >
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const WithMinMaxDate: Story = () => {
  return (
    <RangeDatePicker
      maxDate={new Date(new Date().setDate(18))}
      minDate={new Date(new Date().setDate(1))}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const WithAllowInputBeyond: Story = () => {
  return (
    <RangeDatePicker
      allowInputBeyond
      maxDate={new Date(new Date().setDate(18))}
      minDate={new Date(new Date().setDate(1))}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const WithToday: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />
}

export const WithWeekendDays: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />
}

export const WithHolidays: Story = () => {
  const holidays = [
    new Date("2022-01-01"),
    new Date("2022-01-10"),
    new Date("2022-02-11"),
    new Date("2022-02-23"),
    new Date("2022-03-21"),
    new Date("2022-04-29"),
    new Date("2022-05-03"),
    new Date("2022-05-04"),
    new Date("2022-05-05"),
    new Date("2022-07-18"),
    new Date("2022-08-11"),
    new Date("2022-09-19"),
    new Date("2022-09-23"),
    new Date("2022-10-10"),
    new Date("2022-11-03"),
    new Date("2022-11-23"),
    new Date("2023-01-01"),
    new Date("2023-01-02"),
    new Date("2023-01-09"),
    new Date("2023-02-11"),
    new Date("2023-02-23"),
    new Date("2023-03-21"),
    new Date("2023-04-29"),
    new Date("2023-05-03"),
    new Date("2023-05-04"),
    new Date("2023-05-05"),
    new Date("2023-07-17"),
    new Date("2023-08-11"),
    new Date("2023-09-18"),
    new Date("2023-09-23"),
    new Date("2023-10-09"),
    new Date("2023-11-03"),
    new Date("2023-11-23"),
    new Date("2024-01-01"),
    new Date("2024-01-08"),
    new Date("2024-02-11"),
    new Date("2024-02-12"),
    new Date("2024-02-23"),
    new Date("2024-03-20"),
    new Date("2024-04-29"),
    new Date("2024-05-03"),
    new Date("2024-05-04"),
    new Date("2024-05-05"),
    new Date("2024-05-06"),
    new Date("2024-07-15"),
    new Date("2024-08-11"),
    new Date("2024-08-12"),
    new Date("2024-09-16"),
    new Date("2024-09-22"),
    new Date("2024-09-23"),
    new Date("2024-10-14"),
    new Date("2024-11-03"),
    new Date("2024-11-04"),
    new Date("2024-11-23"),
  ]

  return <RangeDatePicker holidays={holidays} placeholder="YYYY/MM/DD" />
}

export const WithExcludeDate: Story = () => {
  return (
    <RangeDatePicker
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const WithLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />
}

export const WithFormat: Story = () => {
  return (
    <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
      <RangeDatePicker
        dateFormat="YYYY年 MMMM"
        locale="ja"
        placeholder="YYYY/MM/DD"
      />

      <RangeDatePicker
        defaultType="month"
        locale="ja"
        placeholder="YYYY/MM/DD"
        yearFormat="YYYY年"
      />

      <RangeDatePicker
        defaultType="month"
        locale="ja"
        monthFormat="MM"
        placeholder="YYYY/MM/DD"
      />

      <RangeDatePicker
        defaultType="year"
        locale="ja"
        placeholder="YYYY/MM/DD"
        yearFormat="YY"
      />

      <RangeDatePicker
        locale="ja"
        placeholder="YYYY/MM/DD"
        weekdayFormat="dd曜"
      />
    </Grid>
  )
}

export const WithAmountOfMonths: Story = () => {
  return (
    <>
      <RangeDatePicker
        amountOfMonths={1}
        disableOutsideDays
        placeholder="YYYY/MM/DD"
      />

      <RangeDatePicker
        amountOfMonths={2}
        disableOutsideDays
        placeholder="YYYY/MM/DD"
      />

      <RangeDatePicker
        amountOfMonths={3}
        disableOutsideDays
        placeholder="YYYY/MM/DD"
      />
    </>
  )
}

export const WithPaginateBy: Story = () => {
  return (
    <RangeDatePicker
      amountOfMonths={3}
      disableOutsideDays
      paginateBy={1}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const DisabledCloseOnSelect: Story = () => {
  return <RangeDatePicker closeOnSelect={false} placeholder="YYYY/MM/DD" />
}

export const DisabledCloseOnBlur: Story = () => {
  return <RangeDatePicker closeOnBlur={false} placeholder="YYYY/MM/DD" />
}

export const DisabledIsClearable: Story = () => {
  return <RangeDatePicker clearable={false} placeholder="YYYY/MM/DD" />
}

export const DisabledAllowInput: Story = () => {
  return <RangeDatePicker allowInput={false} placeholder="YYYY/MM/DD" />
}

export const DisabledOutsideDays: Story = () => {
  return <RangeDatePicker disableOutsideDays placeholder="YYYY/MM/DD" />
}

export const DisabledControls: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />
}

export const DisabledWeekdays: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />
}

export const HiddenOutsideDays: Story = () => {
  return <RangeDatePicker hiddenOutsideDays placeholder="YYYY/MM/DD" />
}

export const CustomIcon: Story = () => {
  return (
    <>
      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        iconProps={{ color: "primary" }}
      />

      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        iconProps={{ children: <GhostIcon /> }}
      />
    </>
  )
}

export const CustomControlType: Story = () => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month")

  return (
    <RangeDatePicker
      type={type}
      placeholder="YYYY/MM/DD"
      onChangeType={onChangeType}
    />
  )
}

export const CustomControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <RangeDatePicker
      month={month}
      placeholder="YYYY/MM/DD"
      onChangeMonth={onChangeMonth}
    />
  )
}

export const CustomControlValue: Story = () => {
  const [value, onChange] = useState<[Date?, Date?]>([])

  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      value={value}
      onChange={onChange}
    />
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    multiDatePicker: [Date?, Date?]
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.multiDatePicker?.message}
        invalid={!!errors.multiDatePicker}
        label="Date to reserve"
      >
        <Controller
          name="multiDatePicker"
          control={control}
          render={({ field }) => (
            <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const ReactHookFormWithDefaultValue: Story = () => {
  interface Data {
    multiDatePicker: [Date?, Date?]
  }

  const defaultValues: Data = {
    multiDatePicker: [new Date()],
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.multiDatePicker?.message}
        invalid={!!errors.multiDatePicker}
        label="Date to reserve"
      >
        <Controller
          name="multiDatePicker"
          control={control}
          render={({ field }) => (
            <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
