import type { Meta, StoryFn } from "@storybook/react"
import type { MultiDatePickerProps } from "@yamada-ui/calendar"
import type { SubmitHandler } from "react-hook-form"
import { MultiDatePicker } from "@yamada-ui/calendar"
import { GhostIcon } from "@yamada-ui/lucide"
import {
  Button,
  FormControl,
  Grid,
  Heading,
  Tag,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import "dayjs/locale/ja"

type Story = StoryFn<typeof MultiDatePicker>

const meta: Meta<typeof MultiDatePicker> = {
  component: MultiDatePicker,
  title: "Components / Forms / MultiDatePicker",
}

export default meta

export const basic: Story = () => {
  return <MultiDatePicker placeholder="basic" />
}

export const withChildren: Story = () => {
  return (
    <>
      <MultiDatePicker placeholder="YYYY/MM/DD">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </MultiDatePicker>

      <MultiDatePicker placeholder="YYYY/MM/DD">
        {({ value, onClose }) => (
          <VStack mt="sm">
            <Button disabled={!value} onClick={onClose}>
              Submit {value.length} dates
            </Button>
          </VStack>
        )}
      </MultiDatePicker>
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <MultiDatePicker size="xs" placeholder="extra small size" />
      <MultiDatePicker size="sm" placeholder="small size" />
      <MultiDatePicker size="md" placeholder="medium size" />
      <MultiDatePicker size="lg" placeholder="large size" />
    </>
  )
}

export const withCalendarSize: Story = () => {
  return (
    <>
      <MultiDatePicker calendarSize="sm" placeholder="small size" />
      <MultiDatePicker calendarSize="md" placeholder="medium size" />
      <MultiDatePicker calendarSize="lg" placeholder="large size" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <MultiDatePicker variant="outline" placeholder="outline" />
      <MultiDatePicker variant="filled" placeholder="filled" />
      <MultiDatePicker variant="flushed" placeholder="flushed" />
      <MultiDatePicker variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {colorSchemes.map((colorScheme) => (
          <MultiDatePicker
            key={colorScheme}
            calendarColorScheme={colorScheme}
            calendarVariant="solid"
            defaultValue={[new Date(new Date().setDate(1))]}
            today
          />
        ))}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {colorSchemes.map((colorScheme) => (
          <MultiDatePicker
            key={colorScheme}
            calendarColorScheme={colorScheme}
            calendarVariant="subtle"
            defaultValue={[new Date(new Date().setDate(1))]}
            today
          />
        ))}
      </Grid>
    </>
  )
}

export const withDefaultValue: Story = () => {
  return <MultiDatePicker defaultValue={[new Date()]} />
}

export const withDefaultType: Story = () => {
  return (
    <>
      <MultiDatePicker defaultType="date" placeholder="date" />

      <MultiDatePicker defaultType="month" placeholder="month" />

      <MultiDatePicker defaultType="year" placeholder="year" />
    </>
  )
}

export const withDefaultMonth: Story = () => {
  return (
    <MultiDatePicker
      defaultMonth={new Date("1993-08-18")}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const withFirstDayOfWeek: Story = () => {
  return (
    <>
      <MultiDatePicker firstDayOfWeek="monday" placeholder="monday" />

      <MultiDatePicker firstDayOfWeek="sunday" placeholder="sunday" />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <MultiDatePicker placeholder="default border color" />

      <MultiDatePicker
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <MultiDatePicker
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const withSeparator: Story = () => {
  return <MultiDatePicker separator=";" />
}

export const withKeepPlaceholder: Story = () => {
  return <MultiDatePicker keepPlaceholder placeholder="YYYY/MM/DD" />
}

export const withComponent: Story = () => {
  return (
    <>
      <MultiDatePicker
        component={({ label }) => <Tag>{label}</Tag>}
        placeholder="YYYY/MM/DD"
      />

      <MultiDatePicker
        component={({ label, onRemove }) => (
          <Tag onClose={onRemove}>{label}</Tag>
        )}
        placeholder="YYYY/MM/DD"
      />
    </>
  )
}

export const withMaxSelectValues: Story = () => {
  return <MultiDatePicker maxSelectValues={3} />
}

export const withPattern: Story = () => {
  return (
    <MultiDatePicker
      defaultValue={[new Date()]}
      inputFormat="MMMM D, YYYY"
      pattern={/[^\w, ]/g}
      placeholder="MMMM D, YYYY"
    />
  )
}

export const withInputFormat: Story = () => {
  return <MultiDatePicker inputFormat="YYYY-MM-DD" placeholder="YYYY-MM-DD" />
}

export const withParseDate: Story = () => {
  return (
    <MultiDatePicker
      inputFormat="YYYY/MM/DD"
      parseDate={(value) => new Date(value)}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const withPlacement: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <MultiDatePicker offset={[16, 16]} placeholder="YYYY/MM/DD" />
}

export const withGutter: Story = () => {
  return <MultiDatePicker gutter={32} placeholder="YYYY/MM/DD" />
}

export const withDuration: Story = () => {
  return <MultiDatePicker duration={0.4} placeholder="YYYY/MM/DD" />
}

export const disabled: Story = () => {
  return (
    <>
      <MultiDatePicker variant="outline" disabled placeholder="outline" />
      <MultiDatePicker variant="filled" disabled placeholder="filled" />
      <MultiDatePicker variant="flushed" disabled placeholder="flushed" />
      <MultiDatePicker variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled label="What date would you like to reserve?">
        <MultiDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <MultiDatePicker variant="outline" placeholder="outline" readOnly />
      <MultiDatePicker variant="filled" placeholder="filled" readOnly />
      <MultiDatePicker variant="flushed" placeholder="flushed" readOnly />
      <MultiDatePicker variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl label="What date would you like to reserve?" readOnly>
        <MultiDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <MultiDatePicker variant="outline" invalid placeholder="outline" />
      <MultiDatePicker variant="filled" invalid placeholder="filled" />
      <MultiDatePicker variant="flushed" invalid placeholder="flushed" />
      <MultiDatePicker variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        invalid
        label="What date would you like to reserve?"
      >
        <MultiDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: Story = () => {
  return (
    <MultiDatePicker
      maxDate={new Date(new Date().setDate(18))}
      minDate={new Date(new Date().setDate(1))}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const withAllowInputBeyond: Story = () => {
  return (
    <MultiDatePicker
      allowInputBeyond
      maxDate={new Date(new Date().setDate(18))}
      minDate={new Date(new Date().setDate(1))}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const withToday: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" today />
}

export const withWeekendDays: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" weekendDays={[0, 1]} />
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

  return <MultiDatePicker holidays={holidays} placeholder="YYYY/MM/DD" />
}

export const withExcludeDate: Story = () => {
  return (
    <MultiDatePicker
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const withLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <MultiDatePicker locale="ja" />
}

export const withFormat: Story = () => {
  return (
    <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
      <MultiDatePicker
        dateFormat="YYYY年 MMMM"
        locale="ja"
        placeholder="YYYY/MM/DD"
      />

      <MultiDatePicker
        defaultType="month"
        locale="ja"
        placeholder="YYYY/MM/DD"
        yearFormat="YYYY年"
      />

      <MultiDatePicker
        defaultType="month"
        locale="ja"
        monthFormat="MM"
        placeholder="YYYY/MM/DD"
      />

      <MultiDatePicker
        defaultType="year"
        locale="ja"
        placeholder="YYYY/MM/DD"
        yearFormat="YY"
      />

      <MultiDatePicker
        locale="ja"
        placeholder="YYYY/MM/DD"
        weekdayFormat="dd曜"
      />
    </Grid>
  )
}

export const withAmountOfMonths: Story = () => {
  return (
    <>
      <MultiDatePicker
        amountOfMonths={1}
        disableOutsideDays
        placeholder="YYYY/MM/DD"
      />

      <MultiDatePicker
        amountOfMonths={2}
        disableOutsideDays
        placeholder="YYYY/MM/DD"
      />

      <MultiDatePicker
        amountOfMonths={3}
        disableOutsideDays
        placeholder="YYYY/MM/DD"
      />
    </>
  )
}

export const withPaginateBy: Story = () => {
  return (
    <MultiDatePicker
      amountOfMonths={3}
      disableOutsideDays
      paginateBy={1}
      placeholder="YYYY/MM/DD"
    />
  )
}

export const disabledCloseOnBlur: Story = () => {
  return <MultiDatePicker closeOnBlur={false} placeholder="YYYY/MM/DD" />
}

export const disabledClearable: Story = () => {
  return <MultiDatePicker clearable={false} placeholder="YYYY/MM/DD" />
}

export const disabledAllowInput: Story = () => {
  return <MultiDatePicker allowInput={false} placeholder="YYYY/MM/DD" />
}

export const disabledOutsideDays: Story = () => {
  return <MultiDatePicker disableOutsideDays placeholder="YYYY/MM/DD" />
}

export const disabledControls: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" withControls={false} />
}

export const disabledWeekdays: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />
}

export const hiddenOutsideDays: Story = () => {
  return <MultiDatePicker hiddenOutsideDays placeholder="YYYY/MM/DD" />
}

export const customIcon: Story = () => {
  return (
    <>
      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        iconProps={{ color: "primary" }}
      />

      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        iconProps={{ children: <GhostIcon /> }}
      />
    </>
  )
}

export const customControlType: Story = () => {
  const [type, onChangeType] = useState<MultiDatePickerProps["type"]>("month")

  return (
    <MultiDatePicker
      type={type}
      placeholder="YYYY/MM/DD"
      onChangeType={onChangeType}
    />
  )
}

export const customControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <MultiDatePicker
      month={month}
      placeholder="YYYY/MM/DD"
      onChangeMonth={onChangeMonth}
    />
  )
}

export const customControlValue: Story = () => {
  const [value, onChange] = useState<Date[]>([new Date()])

  return (
    <MultiDatePicker
      placeholder="YYYY/MM/DD"
      value={value}
      onChange={onChange}
    />
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    multiDatePicker: Date[]
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
            <MultiDatePicker placeholder="YYYY/MM/DD" {...field} />
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
    multiDatePicker: Date[]
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
            <MultiDatePicker placeholder="YYYY/MM/DD" {...field} />
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
