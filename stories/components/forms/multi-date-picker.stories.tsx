import type { Meta, StoryFn } from "@storybook/react"
import type { MultiDatePickerProps } from "@yamada-ui/calendar"
import { MultiDatePicker } from "@yamada-ui/calendar"
import { Ghost } from "@yamada-ui/lucide"
import {
  Button,
  FormControl,
  Grid,
  Heading,
  Tag,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import "dayjs/locale/ja"

type Story = StoryFn<typeof MultiDatePicker>

const meta: Meta<typeof MultiDatePicker> = {
  title: "Components / Forms / MultiDatePicker",
  component: MultiDatePicker,
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
            <Button isDisabled={!value} onClick={onClose}>
              Submit{value ? ` ${value.length} dates` : ""}
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
      <MultiDatePicker placeholder="extra small size" size="xs" />
      <MultiDatePicker placeholder="small size" size="sm" />
      <MultiDatePicker placeholder="medium size" size="md" />
      <MultiDatePicker placeholder="large size" size="lg" />
    </>
  )
}

export const withCalendarSize: Story = () => {
  return (
    <>
      <MultiDatePicker placeholder="small size" calendarSize="sm" />
      <MultiDatePicker placeholder="medium size" calendarSize="md" />
      <MultiDatePicker placeholder="large size" calendarSize="lg" />
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

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <MultiDatePicker
            key={colorScheme}
            calendarVariant="solid"
            calendarColorScheme={colorScheme}
            today
            defaultValue={[new Date(new Date().setDate(1))]}
          />
        ))}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <MultiDatePicker
            key={colorScheme}
            calendarVariant="subtle"
            calendarColorScheme={colorScheme}
            today
            defaultValue={[new Date(new Date().setDate(1))]}
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
      <MultiDatePicker placeholder="date" defaultType="date" />

      <MultiDatePicker placeholder="month" defaultType="month" />

      <MultiDatePicker placeholder="year" defaultType="year" />
    </>
  )
}

export const withDefaultMonth: Story = () => {
  return (
    <MultiDatePicker
      placeholder="YYYY/MM/DD"
      defaultMonth={new Date("1993-08-18")}
    />
  )
}

export const withFirstDayOfWeek: Story = () => {
  return (
    <>
      <MultiDatePicker placeholder="monday" firstDayOfWeek="monday" />

      <MultiDatePicker placeholder="sunday" firstDayOfWeek="sunday" />
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
        isInvalid
        errorBorderColor="orange.500"
        placeholder="custom border color"
      />
    </>
  )
}

export const withSeparator: Story = () => {
  return <MultiDatePicker separator=";" />
}

export const withKeepPlaceholder: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" keepPlaceholder />
}

export const withComponent: Story = () => {
  return (
    <>
      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        component={({ label }) => <Tag>{label}</Tag>}
      />

      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        component={({ label, onRemove }) => (
          <Tag onClose={onRemove}>{label}</Tag>
        )}
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
      placeholder="MMMM D, YYYY"
      inputFormat="MMMM D, YYYY"
      pattern={/[^\w, ]/g}
      defaultValue={[new Date()]}
    />
  )
}

export const withInputFormat: Story = () => {
  return <MultiDatePicker placeholder="YYYY-MM-DD" inputFormat="YYYY-MM-DD" />
}

export const withParseDate: Story = () => {
  return (
    <MultiDatePicker
      placeholder="YYYY/MM/DD"
      inputFormat="YYYY/MM/DD"
      parseDate={(value) => new Date(value)}
    />
  )
}

export const withPlacement: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" offset={[16, 16]} />
}

export const withGutter: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" gutter={32} />
}

export const withDuration: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" duration={0.4} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <MultiDatePicker isDisabled variant="outline" placeholder="outline" />
      <MultiDatePicker isDisabled variant="filled" placeholder="filled" />
      <MultiDatePicker isDisabled variant="flushed" placeholder="flushed" />
      <MultiDatePicker isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="What date would you like to reserve?">
        <MultiDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <MultiDatePicker isReadOnly variant="outline" placeholder="outline" />
      <MultiDatePicker isReadOnly variant="filled" placeholder="filled" />
      <MultiDatePicker isReadOnly variant="flushed" placeholder="flushed" />
      <MultiDatePicker isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="What date would you like to reserve?">
        <MultiDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <MultiDatePicker isInvalid variant="outline" placeholder="outline" />
      <MultiDatePicker isInvalid variant="filled" placeholder="filled" />
      <MultiDatePicker isInvalid variant="flushed" placeholder="flushed" />
      <MultiDatePicker isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl
        isInvalid
        label="What date would you like to reserve?"
        errorMessage="This is required."
      >
        <MultiDatePicker placeholder="YYYY/MM/DD" />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: Story = () => {
  return (
    <MultiDatePicker
      placeholder="YYYY/MM/DD"
      minDate={new Date(new Date().setDate(1))}
      maxDate={new Date(new Date().setDate(18))}
    />
  )
}

export const withAllowInputBeyond: Story = () => {
  return (
    <MultiDatePicker
      placeholder="YYYY/MM/DD"
      minDate={new Date(new Date().setDate(1))}
      maxDate={new Date(new Date().setDate(18))}
      allowInputBeyond
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

  return <MultiDatePicker placeholder="YYYY/MM/DD" holidays={holidays} />
}

export const withExcludeDate: Story = () => {
  return (
    <MultiDatePicker
      placeholder="YYYY/MM/DD"
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  )
}

export const withLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <MultiDatePicker locale="ja" />
}

export const withFormat: Story = () => {
  return (
    <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        dateFormat="YYYY年 MMMM"
      />

      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        defaultType="month"
        yearFormat="YYYY年"
      />

      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        defaultType="month"
        monthFormat="MM"
      />

      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        locale="ja"
        defaultType="year"
        yearFormat="YY"
      />

      <MultiDatePicker
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
      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        amountOfMonths={1}
        disableOutsideDays
      />

      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        amountOfMonths={2}
        disableOutsideDays
      />

      <MultiDatePicker
        placeholder="YYYY/MM/DD"
        amountOfMonths={3}
        disableOutsideDays
      />
    </>
  )
}

export const withPaginateBy: Story = () => {
  return (
    <MultiDatePicker
      placeholder="YYYY/MM/DD"
      amountOfMonths={3}
      disableOutsideDays
      paginateBy={1}
    />
  )
}

export const disabledCloseOnBlur: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" closeOnBlur={false} />
}

export const disabledIsClearable: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" isClearable={false} />
}

export const disabledAllowInput: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" allowInput={false} />
}

export const disabledOutsideDays: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" disableOutsideDays />
}

export const disabledControls: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" withControls={false} />
}

export const disabledWeekdays: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" withWeekdays={false} />
}

export const hiddenOutsideDays: Story = () => {
  return <MultiDatePicker placeholder="YYYY/MM/DD" hiddenOutsideDays />
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
        iconProps={{ children: <Ghost /> }}
      />
    </>
  )
}

export const customControlType: Story = () => {
  const [type, onChangeType] = useState<MultiDatePickerProps["type"]>("month")

  return (
    <MultiDatePicker
      placeholder="YYYY/MM/DD"
      type={type}
      onChangeType={onChangeType}
    />
  )
}

export const customControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <MultiDatePicker
      placeholder="YYYY/MM/DD"
      month={month}
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
  type Data = { multiDatePicker: Date[] }

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
            <MultiDatePicker placeholder="YYYY/MM/DD" {...field} />
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
  type Data = { multiDatePicker: Date[] }

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
            <MultiDatePicker placeholder="YYYY/MM/DD" {...field} />
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
