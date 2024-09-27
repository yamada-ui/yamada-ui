import type { Meta, StoryFn } from "@storybook/react"
import dayjs from "dayjs"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import type { DatePickerProps } from "@yamada-ui/calendar"
import { DatePicker } from "@yamada-ui/calendar"
import { Ghost } from "@yamada-ui/lucide"
import { FormControl, Grid, Heading, VStack, Button } from "@yamada-ui/react"
import "dayjs/locale/ja"

type Story = StoryFn<typeof DatePicker>

const meta: Meta<typeof DatePicker> = {
  title: "Components / Forms / DatePicker",
  component: DatePicker,
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

      <DatePicker placeholder="YYYY/MM/DD" closeOnSelect={false}>
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
      <DatePicker placeholder="extra small size" size="xs" />
      <DatePicker placeholder="small size" size="sm" />
      <DatePicker placeholder="medium size" size="md" />
      <DatePicker placeholder="large size" size="lg" />
    </>
  )
}

export const withCalendarSize: Story = () => {
  return (
    <>
      <DatePicker placeholder="small size" calendarSize="sm" />
      <DatePicker placeholder="medium size" calendarSize="md" />
      <DatePicker placeholder="large size" calendarSize="lg" />
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

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <DatePicker
            key={colorScheme}
            calendarVariant="solid"
            calendarColorScheme={colorScheme}
            today
            defaultValue={new Date(new Date().setDate(1))}
          />
        ))}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <DatePicker
            key={colorScheme}
            calendarVariant="subtle"
            calendarColorScheme={colorScheme}
            today
            defaultValue={new Date(new Date().setDate(1))}
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
      <DatePicker placeholder="date" defaultType="date" />

      <DatePicker placeholder="month" defaultType="month" />

      <DatePicker placeholder="year" defaultType="year" />
    </>
  )
}

export const withDefaultMonth: Story = () => {
  return (
    <DatePicker
      placeholder="YYYY/MM/DD"
      defaultMonth={new Date("1993-08-18")}
    />
  )
}

export const withFirstDayOfWeek: Story = () => {
  return (
    <>
      <DatePicker placeholder="monday" firstDayOfWeek="monday" />

      <DatePicker placeholder="sunday" firstDayOfWeek="sunday" />
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
        isInvalid
        errorBorderColor="orange.500"
        placeholder="custom border color"
      />
    </>
  )
}

export const withPattern: Story = () => {
  return (
    <DatePicker
      placeholder="MMMM D, YYYY"
      inputFormat="MMMM D, YYYY"
      pattern={/[^\w, ]/g}
      defaultValue={new Date()}
    />
  )
}

export const withInputFormat: Story = () => {
  return <DatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />
}

export const withParseDate: Story = () => {
  return (
    <DatePicker
      placeholder="YYYY/MM/DD"
      inputFormat="YYYY/MM/DD"
      parseDate={(value) => new Date(value)}
    />
  )
}

export const withPlacement: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />
}

export const withGutter: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" gutter={32} />
}

export const withDuration: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" duration={0.4} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <DatePicker isDisabled variant="outline" placeholder="outline" />
      <DatePicker isDisabled variant="filled" placeholder="filled" />
      <DatePicker isDisabled variant="flushed" placeholder="flushed" />
      <DatePicker isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="What is your birthday?">
        <DatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <DatePicker isReadOnly variant="outline" placeholder="outline" />
      <DatePicker isReadOnly variant="filled" placeholder="filled" />
      <DatePicker isReadOnly variant="flushed" placeholder="flushed" />
      <DatePicker isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="What is your birthday?">
        <DatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <DatePicker isInvalid variant="outline" placeholder="outline" />
      <DatePicker isInvalid variant="filled" placeholder="filled" />
      <DatePicker isInvalid variant="flushed" placeholder="flushed" />
      <DatePicker isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl
        isInvalid
        label="What is your birthday?"
        errorMessage="This is required."
      >
        <DatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: Story = () => {
  return (
    <DatePicker
      placeholder="YYYY/MM/DD"
      minDate={new Date(new Date().setDate(1))}
      maxDate={new Date(new Date().setDate(18))}
    />
  )
}
export const withAllowInputBeyond: Story = () => {
  return (
    <DatePicker
      placeholder="YYYY/MM/DD"
      minDate={new Date(new Date().setDate(1))}
      maxDate={new Date(new Date().setDate(18))}
      allowInputBeyond
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

  return <DatePicker placeholder="YYYY/MM/DD" holidays={holidays} />
}

export const withExcludeDate: Story = () => {
  return (
    <DatePicker
      placeholder="YYYY/MM/DD"
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  )
}

export const withLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <DatePicker locale="ja" />
}

export const withFormat: Story = () => {
  return (
    <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <DatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        dateFormat="YYYY年 MMMM"
      />

      <DatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        defaultType="month"
        yearFormat="YYYY年"
      />

      <DatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        defaultType="month"
        monthFormat="MM"
      />

      <DatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        defaultType="year"
        yearFormat="YY"
      />

      <DatePicker placeholder="YYYY/MM/DD" locale="ja" weekdayFormat="dd曜" />
    </Grid>
  )
}

export const withAmountOfMonths: Story = () => {
  return (
    <>
      <DatePicker
        placeholder="YYYY/MM/DD"
        amountOfMonths={1}
        disableOutsideDays
      />

      <DatePicker
        placeholder="YYYY/MM/DD"
        amountOfMonths={2}
        disableOutsideDays
      />

      <DatePicker
        placeholder="YYYY/MM/DD"
        amountOfMonths={3}
        disableOutsideDays
      />
    </>
  )
}

export const withPaginateBy: Story = () => {
  return (
    <DatePicker
      placeholder="YYYY/MM/DD"
      amountOfMonths={3}
      disableOutsideDays
      paginateBy={1}
    />
  )
}

export const disabledCloseOnSelect: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />
}

export const disabledCloseOnBlur: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />
}

export const disabledIsClearable: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" isClearable={false} />
}

export const disabledAllowInput: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" allowInput={false} />
}

export const disabledOutsideDays: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" disableOutsideDays />
}

export const disabledControls: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" withControls={false} />
}

export const disabledWeekdays: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />
}

export const hiddenOutsideDays: Story = () => {
  return <DatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />
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
      placeholder="YYYY/MM/DD"
      type={type}
      onChangeType={onChangeType}
    />
  )
}

export const customControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <DatePicker
      placeholder="YYYY/MM/DD"
      month={month}
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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.datePicker}
        label="Birthday"
        errorMessage={errors.datePicker?.message}
      >
        <Controller
          name="datePicker"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <DatePicker placeholder="YYYY/MM/DD" {...field} />
          )}
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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.datePicker}
        label="Birthday"
        errorMessage={errors.datePicker?.message}
      >
        <Controller
          name="datePicker"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <DatePicker placeholder="YYYY/MM/DD" {...field} />
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
