import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import type { DatePickerProps } from "./"
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
import { DatePicker } from "./"
import "dayjs/locale/ja"

type Story = StoryFn<typeof DatePicker>

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: "Components / DatePicker",
}

export default meta

export const Basic: Story = () => {
  return <DatePicker placeholder="basic" />
}

export const WithChildren: Story = () => {
  return (
    <>
      <DatePicker placeholder="YYYY/MM/DD">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </DatePicker>

      <DatePicker closeOnSelect={false} placeholder="YYYY/MM/DD">
        {({ value, onClose }) => (
          <VStack mt="sm">
            <Button disabled={!value} onClick={onClose}>
              Submit{value ? ` ${dayjs(value).format("YYYY/MM/DD")}` : ""}
            </Button>
          </VStack>
        )}
      </DatePicker>
    </>
  )
}

export const WithSize: Story = () => {
  return (
    <>
      <DatePicker size="xs" placeholder="extra small size" />
      <DatePicker size="sm" placeholder="small size" />
      <DatePicker size="md" placeholder="medium size" />
      <DatePicker size="lg" placeholder="large size" />
    </>
  )
}

export const WithCalendarSize: Story = () => {
  return (
    <>
      <DatePicker calendarSize="sm" placeholder="small size" />
      <DatePicker calendarSize="md" placeholder="medium size" />
      <DatePicker calendarSize="lg" placeholder="large size" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <DatePicker variant="outline" placeholder="outline" />
      <DatePicker variant="filled" placeholder="filled" />
      <DatePicker variant="flushed" placeholder="flushed" />
      <DatePicker variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {COLOR_SCHEMES.map((colorScheme) => (
          <DatePicker
            key={colorScheme}
            calendarColorScheme={colorScheme}
            calendarVariant="solid"
            defaultValue={new Date(new Date().setDate(1))}
            today
          />
        ))}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {COLOR_SCHEMES.map((colorScheme) => (
          <DatePicker
            key={colorScheme}
            calendarColorScheme={colorScheme}
            calendarVariant="subtle"
            defaultValue={new Date(new Date().setDate(1))}
            today
          />
        ))}
      </Grid>
    </>
  )
}

export const WithDefaultValue: Story = () => {
  return <DatePicker defaultValue={new Date()} />
}

export const WithDefaultType: Story = () => {
  return (
    <>
      <DatePicker defaultType="date" placeholder="date" />

      <DatePicker defaultType="month" placeholder="month" />

      <DatePicker defaultType="year" placeholder="year" />
    </>
  )
}

export const WithDefaultMonth: Story = () => {
  return (
    <DatePicker
      defaultMonth={new Date("1993-08-18")}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const WithFirstDayOfWeek: Story = () => {
  return (
    <>
      <DatePicker firstDayOfWeek="monday" placeholder="monday" />

      <DatePicker firstDayOfWeek="sunday" placeholder="sunday" />
    </>
  )
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <DatePicker placeholder="default border color" />

      <DatePicker
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <DatePicker
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const WithPattern: Story = () => {
  return (
    <DatePicker
      defaultValue={new Date()}
      inputFormat="MMMM D, YYYY"
      pattern={/[^\w, ]/g}
      placeholder="MMMM D, YYYY"
    />
  )
}

export const WithInputFormat: Story = () => {
  return <DatePicker inputFormat="YYYY-MM-DD" placeholder="YYYY-MM-DD" />
}

export const WithParseDate: Story = () => {
  return (
    <DatePicker
      inputFormat="YYYY/MM/DD"
      parseDate={(value) => new Date(value)}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const WithPlacement: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />
}

export const WithOffset: Story = () => {
  return <DatePicker offset={[16, 16]} placeholder="YYYY/MM/DD" />
}

export const WithGutter: Story = () => {
  return <DatePicker gutter={32} placeholder="YYYY/MM/DD" />
}

export const WithDuration: Story = () => {
  return <DatePicker duration={0.4} placeholder="YYYY/MM/DD" />
}

export const Disabled: Story = () => {
  return (
    <>
      <DatePicker variant="outline" disabled placeholder="outline" />
      <DatePicker variant="filled" disabled placeholder="filled" />
      <DatePicker variant="flushed" disabled placeholder="flushed" />
      <DatePicker variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled label="What is your birthday?">
        <DatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <DatePicker variant="outline" placeholder="outline" readOnly />
      <DatePicker variant="filled" placeholder="filled" readOnly />
      <DatePicker variant="flushed" placeholder="flushed" readOnly />
      <DatePicker variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl label="What is your birthday?" readOnly>
        <DatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <DatePicker variant="outline" invalid placeholder="outline" />
      <DatePicker variant="filled" invalid placeholder="filled" />
      <DatePicker variant="flushed" invalid placeholder="flushed" />
      <DatePicker variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        invalid
        label="What is your birthday?"
      >
        <DatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const WithMinMaxDate: Story = () => {
  return (
    <DatePicker
      maxDate={new Date(new Date().setDate(18))}
      minDate={new Date(new Date().setDate(1))}
      placeholder="YYYY/MM/DD"
    />
  )
}
export const WithAllowInputBeyond: Story = () => {
  return (
    <DatePicker
      allowInputBeyond
      maxDate={new Date(new Date().setDate(18))}
      minDate={new Date(new Date().setDate(1))}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const WithToday: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" today />
}

export const WithWeekendDays: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />
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

  return <DatePicker holidays={holidays} placeholder="YYYY/MM/DD" />
}

export const WithExcludeDate: Story = () => {
  return (
    <DatePicker
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const WithLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <DatePicker locale="ja" />
}

export const WithFormat: Story = () => {
  return (
    <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
      <DatePicker
        dateFormat="YYYY年 MMMM"
        locale="ja"
        placeholder="YYYY/MM/DD"
      />

      <DatePicker
        defaultType="month"
        locale="ja"
        placeholder="YYYY/MM/DD"
        yearFormat="YYYY年"
      />

      <DatePicker
        defaultType="month"
        locale="ja"
        monthFormat="MM"
        placeholder="YYYY/MM/DD"
      />

      <DatePicker
        defaultType="year"
        locale="ja"
        placeholder="YYYY/MM/DD"
        yearFormat="YY"
      />

      <DatePicker locale="ja" placeholder="YYYY/MM/DD" weekdayFormat="dd曜" />
    </Grid>
  )
}

export const WithAmountOfMonths: Story = () => {
  return (
    <>
      <DatePicker
        amountOfMonths={1}
        disableOutsideDays
        placeholder="YYYY/MM/DD"
      />

      <DatePicker
        amountOfMonths={2}
        disableOutsideDays
        placeholder="YYYY/MM/DD"
      />

      <DatePicker
        amountOfMonths={3}
        disableOutsideDays
        placeholder="YYYY/MM/DD"
      />
    </>
  )
}

export const WithPaginateBy: Story = () => {
  return (
    <DatePicker
      amountOfMonths={3}
      disableOutsideDays
      paginateBy={1}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const DisabledCloseOnSelect: Story = () => {
  return <DatePicker closeOnSelect={false} placeholder="YYYY/MM/DD" />
}

export const DisabledCloseOnBlur: Story = () => {
  return <DatePicker closeOnBlur={false} placeholder="YYYY/MM/DD" />
}

export const DisabledIsClearable: Story = () => {
  return <DatePicker clearable={false} placeholder="YYYY/MM/DD" />
}

export const DisabledAllowInput: Story = () => {
  return <DatePicker allowInput={false} placeholder="YYYY/MM/DD" />
}

export const DisabledOutsideDays: Story = () => {
  return <DatePicker disableOutsideDays placeholder="YYYY/MM/DD" />
}

export const DisabledControls: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" withControls={false} />
}

export const DisabledWeekdays: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />
}

export const HiddenOutsideDays: Story = () => {
  return <DatePicker hiddenOutsideDays placeholder="YYYY/MM/DD" />
}

export const CustomIcon: Story = () => {
  return (
    <>
      <DatePicker placeholder="YYYY/MM/DD" iconProps={{ color: "primary" }} />

      <DatePicker
        placeholder="YYYY/MM/DD"
        iconProps={{ children: <GhostIcon /> }}
      />
    </>
  )
}

export const CustomControlType: Story = () => {
  const [type, onChangeType] = useState<DatePickerProps["type"]>("month")

  return (
    <DatePicker
      type={type}
      placeholder="YYYY/MM/DD"
      onChangeType={onChangeType}
    />
  )
}

export const CustomControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <DatePicker
      month={month}
      placeholder="YYYY/MM/DD"
      onChangeMonth={onChangeMonth}
    />
  )
}

export const CustomControlValue: Story = () => {
  const [value, onChange] = useState<Date | undefined>(new Date())

  return (
    <DatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    datePicker: Date | undefined
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
        errorMessage={errors.datePicker?.message}
        invalid={!!errors.datePicker}
        label="Birthday"
      >
        <Controller
          name="datePicker"
          control={control}
          render={({ field }) => (
            <DatePicker placeholder="YYYY/MM/DD" {...field} />
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
    datePicker: Date | undefined
  }

  const defaultValues: Data = {
    datePicker: new Date(),
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
        errorMessage={errors.datePicker?.message}
        invalid={!!errors.datePicker}
        label="Birthday"
      >
        <Controller
          name="datePicker"
          control={control}
          render={({ field }) => (
            <DatePicker placeholder="YYYY/MM/DD" {...field} />
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
