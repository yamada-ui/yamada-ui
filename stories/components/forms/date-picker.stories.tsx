import type { Meta, StoryFn } from "@storybook/react"
import type { DatePickerProps } from "@yamada-ui/calendar"
import type { SubmitHandler } from "react-hook-form"
import { DatePicker } from "@yamada-ui/calendar"
import { Ghost } from "@yamada-ui/lucide"
import { Button, FormControl, Grid, Heading, VStack } from "@yamada-ui/react"
import dayjs from "dayjs"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import "dayjs/locale/ja"

type Story = StoryFn<typeof DatePicker>

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: "Components / Forms / DatePicker",
}

export default meta

export const basic: Story = () => {
  return <DatePicker placeholder="basic" />
}

export const withChildren: Story = () => {
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
            <Button isDisabled={!value} onClick={onClose}>
              Submit{value ? ` ${dayjs(value).format("YYYY/MM/DD")}` : ""}
            </Button>
          </VStack>
        )}
      </DatePicker>
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <DatePicker size="xs" placeholder="extra small size" />
      <DatePicker size="sm" placeholder="small size" />
      <DatePicker size="md" placeholder="medium size" />
      <DatePicker size="lg" placeholder="large size" />
    </>
  )
}

export const withCalendarSize: Story = () => {
  return (
    <>
      <DatePicker calendarSize="sm" placeholder="small size" />
      <DatePicker calendarSize="md" placeholder="medium size" />
      <DatePicker calendarSize="lg" placeholder="large size" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <DatePicker variant="outline" placeholder="outline" />
      <DatePicker variant="filled" placeholder="filled" />
      <DatePicker variant="flushed" placeholder="flushed" />
      <DatePicker variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {colorSchemes.map((colorScheme) => (
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
        {colorSchemes.map((colorScheme) => (
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

export const withDefaultValue: Story = () => {
  return <DatePicker defaultValue={new Date()} />
}

export const withDefaultType: Story = () => {
  return (
    <>
      <DatePicker defaultType="date" placeholder="date" />

      <DatePicker defaultType="month" placeholder="month" />

      <DatePicker defaultType="year" placeholder="year" />
    </>
  )
}

export const withDefaultMonth: Story = () => {
  return (
    <DatePicker
      defaultMonth={new Date("1993-08-18")}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const withFirstDayOfWeek: Story = () => {
  return (
    <>
      <DatePicker firstDayOfWeek="monday" placeholder="monday" />

      <DatePicker firstDayOfWeek="sunday" placeholder="sunday" />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <DatePicker placeholder="default border color" />

      <DatePicker
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <DatePicker
        errorBorderColor="orange.500"
        isInvalid
        placeholder="custom border color"
      />
    </>
  )
}

export const withPattern: Story = () => {
  return (
    <DatePicker
      defaultValue={new Date()}
      inputFormat="MMMM D, YYYY"
      pattern={/[^\w, ]/g}
      placeholder="MMMM D, YYYY"
    />
  )
}

export const withInputFormat: Story = () => {
  return <DatePicker inputFormat="YYYY-MM-DD" placeholder="YYYY-MM-DD" />
}

export const withParseDate: Story = () => {
  return (
    <DatePicker
      inputFormat="YYYY/MM/DD"
      parseDate={(value) => new Date(value)}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const withPlacement: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <DatePicker offset={[16, 16]} placeholder="YYYY/MM/DD" />
}

export const withGutter: Story = () => {
  return <DatePicker gutter={32} placeholder="YYYY/MM/DD" />
}

export const withDuration: Story = () => {
  return <DatePicker duration={0.4} placeholder="YYYY/MM/DD" />
}

export const isDisabled: Story = () => {
  return (
    <>
      <DatePicker variant="outline" isDisabled placeholder="outline" />
      <DatePicker variant="filled" isDisabled placeholder="filled" />
      <DatePicker variant="flushed" isDisabled placeholder="flushed" />
      <DatePicker variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="What is your birthday?">
        <DatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <DatePicker variant="outline" isReadOnly placeholder="outline" />
      <DatePicker variant="filled" isReadOnly placeholder="filled" />
      <DatePicker variant="flushed" isReadOnly placeholder="flushed" />
      <DatePicker variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="What is your birthday?">
        <DatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <DatePicker variant="outline" isInvalid placeholder="outline" />
      <DatePicker variant="filled" isInvalid placeholder="filled" />
      <DatePicker variant="flushed" isInvalid placeholder="flushed" />
      <DatePicker variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        isInvalid
        label="What is your birthday?"
      >
        <DatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: Story = () => {
  return (
    <DatePicker
      maxDate={new Date(new Date().setDate(18))}
      minDate={new Date(new Date().setDate(1))}
      placeholder="YYYY/MM/DD"
    />
  )
}
export const withAllowInputBeyond: Story = () => {
  return (
    <DatePicker
      allowInputBeyond
      maxDate={new Date(new Date().setDate(18))}
      minDate={new Date(new Date().setDate(1))}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const withToday: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" today />
}

export const withWeekendDays: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />
}

export const withHolidays: Story = () => {
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

export const withExcludeDate: Story = () => {
  return (
    <DatePicker
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const withLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <DatePicker locale="ja" />
}

export const withFormat: Story = () => {
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

export const withAmountOfMonths: Story = () => {
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

export const withPaginateBy: Story = () => {
  return (
    <DatePicker
      amountOfMonths={3}
      disableOutsideDays
      paginateBy={1}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const disabledCloseOnSelect: Story = () => {
  return <DatePicker closeOnSelect={false} placeholder="YYYY/MM/DD" />
}

export const disabledCloseOnBlur: Story = () => {
  return <DatePicker closeOnBlur={false} placeholder="YYYY/MM/DD" />
}

export const disabledIsClearable: Story = () => {
  return <DatePicker isClearable={false} placeholder="YYYY/MM/DD" />
}

export const disabledAllowInput: Story = () => {
  return <DatePicker allowInput={false} placeholder="YYYY/MM/DD" />
}

export const disabledOutsideDays: Story = () => {
  return <DatePicker disableOutsideDays placeholder="YYYY/MM/DD" />
}

export const disabledControls: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" withControls={false} />
}

export const disabledWeekdays: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />
}

export const hiddenOutsideDays: Story = () => {
  return <DatePicker hiddenOutsideDays placeholder="YYYY/MM/DD" />
}

export const customIcon: Story = () => {
  return (
    <>
      <DatePicker placeholder="YYYY/MM/DD" iconProps={{ color: "primary" }} />

      <DatePicker
        placeholder="YYYY/MM/DD"
        iconProps={{ children: <Ghost /> }}
      />
    </>
  )
}

export const customControlType: Story = () => {
  const [type, onChangeType] = useState<DatePickerProps["type"]>("month")

  return (
    <DatePicker
      type={type}
      placeholder="YYYY/MM/DD"
      onChangeType={onChangeType}
    />
  )
}

export const customControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <DatePicker
      month={month}
      placeholder="YYYY/MM/DD"
      onChangeMonth={onChangeMonth}
    />
  )
}

export const customControlValue: Story = () => {
  const [value, onChange] = useState<Date | undefined>(new Date())

  return (
    <DatePicker placeholder="YYYY/MM/DD" value={value} onChange={onChange} />
  )
}

export const reactHookForm: Story = () => {
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
        isInvalid={!!errors.datePicker}
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

export const reactHookFormWithDefaultValue: Story = () => {
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
        isInvalid={!!errors.datePicker}
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
