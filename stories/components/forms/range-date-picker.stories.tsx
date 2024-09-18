import type { Meta, StoryFn } from "@storybook/react"
import type { RangeDatePickerProps } from "@yamada-ui/calendar"
import { RangeDatePicker } from "@yamada-ui/calendar"
import { Ghost } from "@yamada-ui/lucide"
import { Button, FormControl, Grid, Heading, VStack } from "@yamada-ui/react"
import dayjs from "dayjs"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import "dayjs/locale/ja"

type Story = StoryFn<typeof RangeDatePicker>

const meta: Meta<typeof RangeDatePicker> = {
  title: "Components / Forms / RangeDatePicker",
  component: RangeDatePicker,
}

export default meta

export const basic: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" />
}

export const withChildren: Story = () => {
  return (
    <>
      <RangeDatePicker placeholder="YYYY/MM/DD">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </RangeDatePicker>

      <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false}>
        {({ value, onClose }) => (
          <VStack mt="sm">
            <Button isDisabled={!value} onClick={onClose}>
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

export const withSize: Story = () => {
  return (
    <>
      <RangeDatePicker placeholder="YYYY/MM/DD" size="xs" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" size="lg" />
    </>
  )
}

export const withCalendarSize: Story = () => {
  return (
    <>
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="sm" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="md" />
      <RangeDatePicker placeholder="YYYY/MM/DD" calendarSize="lg" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <RangeDatePicker variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker variant="unstyled" placeholder="YYYY/MM/DD" />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <RangeDatePicker
            key={colorScheme}
            calendarVariant="solid"
            calendarColorScheme={colorScheme}
            today
            defaultValue={[
              new Date(new Date().setDate(5)),
              new Date(new Date().setDate(15)),
            ]}
          />
        ))}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <RangeDatePicker
            key={colorScheme}
            calendarVariant="subtle"
            calendarColorScheme={colorScheme}
            today
            defaultValue={[
              new Date(new Date().setDate(5)),
              new Date(new Date().setDate(15)),
            ]}
          />
        ))}
      </Grid>
    </>
  )
}

export const withDefaultValue: Story = () => {
  return (
    <RangeDatePicker
      defaultValue={[
        new Date(new Date().setDate(5)),
        new Date(new Date().setDate(15)),
      ]}
    />
  )
}

export const withDefaultType: Story = () => {
  return (
    <>
      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="date" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="month" />

      <RangeDatePicker placeholder="YYYY/MM/DD" defaultType="year" />
    </>
  )
}

export const withDefaultMonth: Story = () => {
  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      defaultMonth={new Date("1993-08-18")}
    />
  )
}

export const withFirstDayOfWeek: Story = () => {
  return (
    <>
      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="monday" />

      <RangeDatePicker placeholder="YYYY/MM/DD" firstDayOfWeek="sunday" />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <RangeDatePicker placeholder="YYYY/MM/DD" />

      <RangeDatePicker focusBorderColor="green.500" placeholder="YYYY/MM/DD" />

      <RangeDatePicker
        isInvalid
        errorBorderColor="orange.500"
        placeholder="YYYY/MM/DD"
      />
    </>
  )
}

export const withSeparator: Story = () => {
  return <RangeDatePicker separator="~" />
}

export const withMaxSelectedValue: Story = () => {
  return <RangeDatePicker maxSelectValues={3} />
}

export const withMinSelectedValue: Story = () => {
  return <RangeDatePicker minSelectValues={5} />
}

export const withPattern: Story = () => {
  return (
    <RangeDatePicker
      placeholder="MMMM D, YYYY"
      inputFormat="MMMM D, YYYY"
      pattern={/[^\w, ]/g}
      defaultValue={[new Date()]}
    />
  )
}

export const withInputFormat: Story = () => {
  return <RangeDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />
}

export const withParseDate: Story = () => {
  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      inputFormat="YYYY/MM/DD"
      parseDate={(value) => new Date(value)}
    />
  )
}

export const withPlacement: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />
}

export const withGutter: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" gutter={32} />
}

export const withDuration: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" duration={0.4} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <RangeDatePicker isDisabled variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isDisabled variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <RangeDatePicker isReadOnly variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isReadOnly variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <RangeDatePicker isInvalid variant="outline" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="filled" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="flushed" placeholder="YYYY/MM/DD" />
      <RangeDatePicker isInvalid variant="unstyled" placeholder="YYYY/MM/DD" />

      <FormControl
        isInvalid
        label="What date would you like to reserve?"
        errorMessage="This is required."
      >
        <RangeDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: Story = () => {
  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      minDate={new Date(new Date().setDate(1))}
      maxDate={new Date(new Date().setDate(18))}
    />
  )
}

export const withAllowInputBeyond: Story = () => {
  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      minDate={new Date(new Date().setDate(1))}
      maxDate={new Date(new Date().setDate(18))}
      allowInputBeyond
    />
  )
}

export const withToday: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" today />
}

export const withWeekendDays: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />
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

  return <RangeDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />
}

export const withExcludeDate: Story = () => {
  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  )
}

export const withLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <RangeDatePicker locale="ja" />
}

export const withFormat: Story = () => {
  return (
    <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        dateFormat="YYYY年 MMMM"
      />

      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        defaultType="month"
        yearFormat="YYYY年"
      />

      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        defaultType="month"
        monthFormat="MM"
      />

      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        defaultType="year"
        yearFormat="YY"
      />

      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        weekdayFormat="dd曜"
      />
    </Grid>
  )
}

export const withAmountOfMonths: Story = () => {
  return (
    <>
      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        amountOfMonths={1}
        disableOutsideDays
      />

      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        amountOfMonths={2}
        disableOutsideDays
      />

      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        amountOfMonths={3}
        disableOutsideDays
      />
    </>
  )
}

export const withPaginateBy: Story = () => {
  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      amountOfMonths={3}
      disableOutsideDays
      paginateBy={1}
    />
  )
}

export const disabledCloseOnSelect: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnSelect={false} />
}

export const disabledCloseOnBlur: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />
}

export const disabledIsClearable: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" isClearable={false} />
}

export const disabledAllowInput: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" allowInput={false} />
}

export const disabledOutsideDays: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />
}

export const disabledControls: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withControls={false} />
}

export const disabledWeekdays: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />
}

export const hiddenOutsideDays: Story = () => {
  return <RangeDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />
}

export const customIcon: Story = () => {
  return (
    <>
      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        iconProps={{ color: "primary" }}
      />

      <RangeDatePicker
        placeholder="YYYY/MM/DD"
        iconProps={{ children: <Ghost /> }}
      />
    </>
  )
}

export const customControlType: Story = () => {
  const [type, onChangeType] = useState<RangeDatePickerProps["type"]>("month")

  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      type={type}
      onChangeType={onChangeType}
    />
  )
}

export const customControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      month={month}
      onChangeMonth={onChangeMonth}
    />
  )
}

export const customControlValue: Story = () => {
  const [value, onChange] = useState<[Date?, Date?]>([])

  return (
    <RangeDatePicker
      placeholder="YYYY/MM/DD"
      value={value}
      onChange={onChange}
    />
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    multiDatePicker: [Date?, Date?]
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
        isInvalid={!!errors.multiDatePicker}
        label="Date to reserve"
        errorMessage={errors.multiDatePicker?.message}
      >
        <Controller
          name="multiDatePicker"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />
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
    multiDatePicker: [Date?, Date?]
  }

  const defaultValues: Data = {
    multiDatePicker: [new Date()],
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
        isInvalid={!!errors.multiDatePicker}
        label="Date to reserve"
        errorMessage={errors.multiDatePicker?.message}
      >
        <Controller
          name="multiDatePicker"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <RangeDatePicker placeholder="YYYY/MM/DD" {...field} />
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
