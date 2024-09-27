import type { Meta, StoryFn } from "@storybook/react"
import dayjs from "dayjs"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import { MonthPicker } from "@yamada-ui/calendar"
import type { MonthPickerProps } from "@yamada-ui/calendar"
import { Ghost } from "@yamada-ui/lucide"
import { FormControl, Grid, Heading, VStack, Button } from "@yamada-ui/react"
import "dayjs/locale/ja"

type Story = StoryFn<typeof MonthPicker>

const meta: Meta<typeof MonthPicker> = {
  title: "Components / Forms / MonthPicker",
  component: MonthPicker,
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

      <MonthPicker placeholder="MMM YYYY" closeOnSelect={false}>
        {({ value, onClose }) => (
          <VStack mt="sm">
            <Button isDisabled={!value} onClick={onClose}>
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
      <MonthPicker placeholder="extra small size" size="xs" />
      <MonthPicker placeholder="small size" size="sm" />
      <MonthPicker placeholder="medium size" size="md" />
      <MonthPicker placeholder="large size" size="lg" />
    </>
  )
}

export const withCalendarSize: Story = () => {
  return (
    <>
      <MonthPicker placeholder="small size" calendarSize="sm" />
      <MonthPicker placeholder="medium size" calendarSize="md" />
      <MonthPicker placeholder="large size" calendarSize="lg" />
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

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <MonthPicker
            key={colorScheme}
            calendarVariant="solid"
            calendarColorScheme={colorScheme}
            defaultValue={new Date()}
          />
        ))}
      </Grid>

      <Heading size="xl">Subtle</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <MonthPicker
            key={colorScheme}
            calendarVariant="subtle"
            calendarColorScheme={colorScheme}
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
      <MonthPicker placeholder="month" defaultType="month" />

      <MonthPicker placeholder="year" defaultType="year" />
    </>
  )
}

export const withDefaultMonth: Story = () => {
  return (
    <MonthPicker placeholder="YYYY/MM" defaultMonth={new Date("1993-08")} />
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
        isInvalid
        errorBorderColor="orange.500"
        placeholder="custom border color"
      />
    </>
  )
}

export const withPattern: Story = () => {
  return (
    <MonthPicker
      placeholder="MMM YYYY"
      inputFormat="MMM YYYY"
      pattern={/[^\w, ]/g}
      defaultValue={new Date()}
    />
  )
}

export const withInputFormat: Story = () => {
  return <MonthPicker placeholder="YYYY-MM" inputFormat="YYYY-MM" />
}

export const withParseDate: Story = () => {
  return (
    <MonthPicker
      placeholder="YYYY/MM"
      inputFormat="YYYY/MM"
      parseDate={(value) => new Date(value)}
    />
  )
}

export const withPlacement: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" offset={[16, 16]} />
}

export const withGutter: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" gutter={32} />
}

export const withDuration: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" duration={0.4} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <MonthPicker isDisabled variant="outline" placeholder="outline" />
      <MonthPicker isDisabled variant="filled" placeholder="filled" />
      <MonthPicker isDisabled variant="flushed" placeholder="flushed" />
      <MonthPicker isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="What is your birthday?">
        <MonthPicker placeholder="YYYY/MM" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <MonthPicker isReadOnly variant="outline" placeholder="outline" />
      <MonthPicker isReadOnly variant="filled" placeholder="filled" />
      <MonthPicker isReadOnly variant="flushed" placeholder="flushed" />
      <MonthPicker isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="What is your birthday?">
        <MonthPicker placeholder="YYYY/MM" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <MonthPicker isInvalid variant="outline" placeholder="outline" />
      <MonthPicker isInvalid variant="filled" placeholder="filled" />
      <MonthPicker isInvalid variant="flushed" placeholder="flushed" />
      <MonthPicker isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl
        isInvalid
        label="What is your birthday?"
        errorMessage="This is required."
      >
        <MonthPicker placeholder="YYYY/MM" />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: Story = () => {
  return (
    <MonthPicker
      placeholder="YYYY/MM"
      minDate={new Date(1993, 8)}
      maxDate={new Date(2000, 10)}
    />
  )
}

export const withLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <MonthPicker locale="ja" />
}

export const withFormat: Story = () => {
  return (
    <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <MonthPicker
        placeholder="YYYY/MM"
        locale="ja"
        defaultType="month"
        yearFormat="YYYY年"
      />

      <MonthPicker
        placeholder="YYYY/MM"
        locale="ja"
        defaultType="month"
        monthFormat="MM"
      />

      <MonthPicker
        placeholder="YYYY/MM"
        locale="ja"
        defaultType="year"
        yearFormat="YY"
      />
    </Grid>
  )
}

export const disabledCloseOnSelect: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" closeOnSelect={false} />
}

export const disabledCloseOnBlur: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" closeOnBlur={false} />
}

export const disabledIsClearable: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" isClearable={false} />
}

export const disabledAllowInput: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" allowInput={false} />
}

export const disabledControls: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" withControls={false} />
}

export const customIcon: Story = () => {
  return (
    <>
      <MonthPicker placeholder="YYYY/MM" iconProps={{ color: "primary" }} />

      <MonthPicker placeholder="YYYY/MM" iconProps={{ children: <Ghost /> }} />
    </>
  )
}

export const customControlType: Story = () => {
  const [type, onChangeType] = useState<MonthPickerProps["type"]>("month")

  return (
    <MonthPicker
      placeholder="YYYY/MM"
      type={type}
      onChangeType={onChangeType}
    />
  )
}

export const customControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <MonthPicker
      placeholder="YYYY/MM"
      month={month}
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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.monthPicker}
        label="Birthday"
        errorMessage={errors.monthPicker?.message}
      >
        <Controller
          name="monthPicker"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <MonthPicker placeholder="YYYY/MM" {...field} />
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
    monthPicker: Date | undefined
  }

  const defaultValues: Data = {
    monthPicker: new Date(),
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
        isInvalid={!!errors.monthPicker}
        label="Birthday"
        errorMessage={errors.monthPicker?.message}
      >
        <Controller
          name="monthPicker"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <MonthPicker placeholder="YYYY/MM" {...field} />
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
