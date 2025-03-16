import type { Meta, StoryFn } from "@storybook/react"
import type { MonthPickerProps } from "@yamada-ui/calendar"
import type { SubmitHandler } from "react-hook-form"
import { MonthPicker } from "@yamada-ui/calendar"
import { GhostIcon } from "@yamada-ui/lucide"
import { Button, FormControl, Grid, Heading, VStack } from "@yamada-ui/react"
import dayjs from "dayjs"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import "dayjs/locale/ja"

type Story = StoryFn<typeof MonthPicker>

const meta: Meta<typeof MonthPicker> = {
  component: MonthPicker,
  title: "Components / Forms / MonthPicker",
}

export default meta

export const basic: Story = () => {
  return <MonthPicker placeholder="basic" />
}

export const withChildren: Story = () => {
  return (
    <>
      <MonthPicker placeholder="MMM YYYY">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </MonthPicker>

      <MonthPicker closeOnSelect={false} placeholder="MMM YYYY">
        {({ value, onClose }) => (
          <VStack mt="sm">
            <Button disabled={!value} onClick={onClose}>
              Submit{value ? ` ${dayjs(value).format("MMM YYYY")}` : ""}
            </Button>
          </VStack>
        )}
      </MonthPicker>
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <MonthPicker size="xs" placeholder="extra small size" />
      <MonthPicker size="sm" placeholder="small size" />
      <MonthPicker size="md" placeholder="medium size" />
      <MonthPicker size="lg" placeholder="large size" />
    </>
  )
}

export const withCalendarSize: Story = () => {
  return (
    <>
      <MonthPicker calendarSize="sm" placeholder="small size" />
      <MonthPicker calendarSize="md" placeholder="medium size" />
      <MonthPicker calendarSize="lg" placeholder="large size" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <MonthPicker variant="outline" placeholder="outline" />
      <MonthPicker variant="filled" placeholder="filled" />
      <MonthPicker variant="flushed" placeholder="flushed" />
      <MonthPicker variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {colorSchemes.map((colorScheme) => (
          <MonthPicker
            key={colorScheme}
            calendarColorScheme={colorScheme}
            calendarVariant="solid"
            defaultValue={new Date()}
          />
        ))}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {colorSchemes.map((colorScheme) => (
          <MonthPicker
            key={colorScheme}
            calendarColorScheme={colorScheme}
            calendarVariant="subtle"
            defaultValue={new Date()}
          />
        ))}
      </Grid>
    </>
  )
}

export const withDefaultValue: Story = () => {
  return <MonthPicker defaultValue={new Date()} />
}

export const withDefaultType: Story = () => {
  return (
    <>
      <MonthPicker defaultType="month" placeholder="month" />

      <MonthPicker defaultType="year" placeholder="year" />
    </>
  )
}

export const withDefaultMonth: Story = () => {
  return (
    <MonthPicker defaultMonth={new Date("1993-08")} placeholder="YYYY/MM" />
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <MonthPicker placeholder="default border color" />

      <MonthPicker
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <MonthPicker
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const withPattern: Story = () => {
  return (
    <MonthPicker
      defaultValue={new Date()}
      inputFormat="MMM YYYY"
      pattern={/[^\w, ]/g}
      placeholder="MMM YYYY"
    />
  )
}

export const withInputFormat: Story = () => {
  return <MonthPicker inputFormat="YYYY-MM" placeholder="YYYY-MM" />
}

export const withParseDate: Story = () => {
  return (
    <MonthPicker
      inputFormat="YYYY/MM"
      parseDate={(value) => new Date(value)}
      placeholder="YYYY/MM"
    />
  )
}

export const withPlacement: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <MonthPicker offset={[16, 16]} placeholder="YYYY/MM" />
}

export const withGutter: Story = () => {
  return <MonthPicker gutter={32} placeholder="YYYY/MM" />
}

export const withDuration: Story = () => {
  return <MonthPicker duration={0.4} placeholder="YYYY/MM" />
}

export const disabled: Story = () => {
  return (
    <>
      <MonthPicker variant="outline" disabled placeholder="outline" />
      <MonthPicker variant="filled" disabled placeholder="filled" />
      <MonthPicker variant="flushed" disabled placeholder="flushed" />
      <MonthPicker variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled label="What is your birthday?">
        <MonthPicker placeholder="YYYY/MM" />
      </FormControl>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <MonthPicker variant="outline" placeholder="outline" readOnly />
      <MonthPicker variant="filled" placeholder="filled" readOnly />
      <MonthPicker variant="flushed" placeholder="flushed" readOnly />
      <MonthPicker variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl label="What is your birthday?" readOnly>
        <MonthPicker placeholder="YYYY/MM" />
      </FormControl>
    </>
  )
}

export const invalid: Story = () => {
  return (
    <>
      <MonthPicker variant="outline" invalid placeholder="outline" />
      <MonthPicker variant="filled" invalid placeholder="filled" />
      <MonthPicker variant="flushed" invalid placeholder="flushed" />
      <MonthPicker variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        invalid
        label="What is your birthday?"
      >
        <MonthPicker placeholder="YYYY/MM" />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: Story = () => {
  return (
    <MonthPicker
      maxDate={new Date(2000, 10)}
      minDate={new Date(1993, 8)}
      placeholder="YYYY/MM"
    />
  )
}

export const withLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <MonthPicker locale="ja" />
}

export const withFormat: Story = () => {
  return (
    <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
      <MonthPicker
        defaultType="month"
        locale="ja"
        placeholder="YYYY/MM"
        yearFormat="YYYY年"
      />

      <MonthPicker
        defaultType="month"
        locale="ja"
        monthFormat="MM"
        placeholder="YYYY/MM"
      />

      <MonthPicker
        defaultType="year"
        locale="ja"
        placeholder="YYYY/MM"
        yearFormat="YY"
      />
    </Grid>
  )
}

export const disabledCloseOnSelect: Story = () => {
  return <MonthPicker closeOnSelect={false} placeholder="YYYY/MM" />
}

export const disabledCloseOnBlur: Story = () => {
  return <MonthPicker closeOnBlur={false} placeholder="YYYY/MM" />
}

export const disabledClearable: Story = () => {
  return <MonthPicker clearable={false} placeholder="YYYY/MM" />
}

export const disabledAllowInput: Story = () => {
  return <MonthPicker allowInput={false} placeholder="YYYY/MM" />
}

export const disabledControls: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" withControls={false} />
}

export const customIcon: Story = () => {
  return (
    <>
      <MonthPicker placeholder="YYYY/MM" iconProps={{ color: "primary" }} />

      <MonthPicker
        placeholder="YYYY/MM"
        iconProps={{ children: <GhostIcon /> }}
      />
    </>
  )
}

export const customControlType: Story = () => {
  const [type, onChangeType] = useState<MonthPickerProps["type"]>("month")

  return (
    <MonthPicker
      type={type}
      placeholder="YYYY/MM"
      onChangeType={onChangeType}
    />
  )
}

export const customControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <MonthPicker
      month={month}
      placeholder="YYYY/MM"
      onChangeMonth={onChangeMonth}
    />
  )
}

export const customControlValue: Story = () => {
  const [value, onChange] = useState<Date | undefined>(new Date())

  return <MonthPicker placeholder="YYYY/MM" value={value} onChange={onChange} />
}

export const reactHookForm: Story = () => {
  interface Data {
    monthPicker: Date | undefined
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
        errorMessage={errors.monthPicker?.message}
        invalid={!!errors.monthPicker}
        label="Birthday"
      >
        <Controller
          name="monthPicker"
          control={control}
          render={({ field }) => (
            <MonthPicker placeholder="YYYY/MM" {...field} />
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
    monthPicker: Date | undefined
  }

  const defaultValues: Data = {
    monthPicker: new Date(),
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
        errorMessage={errors.monthPicker?.message}
        invalid={!!errors.monthPicker}
        label="Birthday"
      >
        <Controller
          name="monthPicker"
          control={control}
          render={({ field }) => (
            <MonthPicker placeholder="YYYY/MM" {...field} />
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
