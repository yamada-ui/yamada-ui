import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import type { MonthPickerProps } from "./"
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
import { MonthPicker } from "./"
import "dayjs/locale/ja"

type Story = StoryFn<typeof MonthPicker>

const meta: Meta<typeof MonthPicker> = {
  component: MonthPicker,
  title: "Components / MonthPicker",
}

export default meta

export const Basic: Story = () => {
  return <MonthPicker placeholder="basic" />
}

export const WithChildren: Story = () => {
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

export const WithSize: Story = () => {
  return (
    <>
      <MonthPicker size="xs" placeholder="extra small size" />
      <MonthPicker size="sm" placeholder="small size" />
      <MonthPicker size="md" placeholder="medium size" />
      <MonthPicker size="lg" placeholder="large size" />
    </>
  )
}

export const WithCalendarSize: Story = () => {
  return (
    <>
      <MonthPicker calendarSize="sm" placeholder="small size" />
      <MonthPicker calendarSize="md" placeholder="medium size" />
      <MonthPicker calendarSize="lg" placeholder="large size" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <MonthPicker variant="outline" placeholder="outline" />
      <MonthPicker variant="filled" placeholder="filled" />
      <MonthPicker variant="flushed" placeholder="flushed" />
      <MonthPicker variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {COLOR_SCHEMES.map((colorScheme) => (
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
        {COLOR_SCHEMES.map((colorScheme) => (
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

export const WithDefaultValue: Story = () => {
  return <MonthPicker defaultValue={new Date()} />
}

export const WithDefaultType: Story = () => {
  return (
    <>
      <MonthPicker defaultType="month" placeholder="month" />

      <MonthPicker defaultType="year" placeholder="year" />
    </>
  )
}

export const WithDefaultMonth: Story = () => {
  return (
    <MonthPicker defaultMonth={new Date("1993-08")} placeholder="YYYY/MM" />
  )
}

export const WithBorderColor: Story = () => {
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

export const WithPattern: Story = () => {
  return (
    <MonthPicker
      defaultValue={new Date()}
      inputFormat="MMM YYYY"
      pattern={/[^\w, ]/g}
      placeholder="MMM YYYY"
    />
  )
}

export const WithInputFormat: Story = () => {
  return <MonthPicker inputFormat="YYYY-MM" placeholder="YYYY-MM" />
}

export const WithParseDate: Story = () => {
  return (
    <MonthPicker
      inputFormat="YYYY/MM"
      parseDate={(value) => new Date(value)}
      placeholder="YYYY/MM"
    />
  )
}

export const WithPlacement: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" placement="bottom-end" />
}

export const WithOffset: Story = () => {
  return <MonthPicker offset={[16, 16]} placeholder="YYYY/MM" />
}

export const WithGutter: Story = () => {
  return <MonthPicker gutter={32} placeholder="YYYY/MM" />
}

export const WithDuration: Story = () => {
  return <MonthPicker duration={0.4} placeholder="YYYY/MM" />
}

export const Disabled: Story = () => {
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

export const Readonly: Story = () => {
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

export const Invalid: Story = () => {
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

export const WithMinMaxDate: Story = () => {
  return (
    <MonthPicker
      maxDate={new Date(2000, 10)}
      minDate={new Date(1993, 8)}
      placeholder="YYYY/MM"
    />
  )
}

export const WithLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <MonthPicker locale="ja" />
}

export const WithFormat: Story = () => {
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

export const DisabledCloseOnSelect: Story = () => {
  return <MonthPicker closeOnSelect={false} placeholder="YYYY/MM" />
}

export const DisabledCloseOnBlur: Story = () => {
  return <MonthPicker closeOnBlur={false} placeholder="YYYY/MM" />
}

export const DisabledIsClearable: Story = () => {
  return <MonthPicker clearable={false} placeholder="YYYY/MM" />
}

export const DisabledAllowInput: Story = () => {
  return <MonthPicker allowInput={false} placeholder="YYYY/MM" />
}

export const DisabledControls: Story = () => {
  return <MonthPicker placeholder="YYYY/MM" withControls={false} />
}

export const CustomIcon: Story = () => {
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

export const CustomControlType: Story = () => {
  const [type, onChangeType] = useState<MonthPickerProps["type"]>("month")

  return (
    <MonthPicker
      type={type}
      placeholder="YYYY/MM"
      onChangeType={onChangeType}
    />
  )
}

export const CustomControlMonth: Story = () => {
  const [month, onChangeMonth] = useState<Date>(new Date("1993-08-18"))

  return (
    <MonthPicker
      month={month}
      placeholder="YYYY/MM"
      onChangeMonth={onChangeMonth}
    />
  )
}

export const CustomControlValue: Story = () => {
  const [value, onChange] = useState<Date | undefined>(new Date())

  return <MonthPicker placeholder="YYYY/MM" value={value} onChange={onChange} />
}

export const ReactHookForm: Story = () => {
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

export const ReactHookFormWithDefaultValue: Story = () => {
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
