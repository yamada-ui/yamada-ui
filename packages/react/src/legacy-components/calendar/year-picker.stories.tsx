import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import dayjs from "dayjs"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { YearPicker } from "."
import { Button } from "../../components/button"
import { FormControl } from "../../components/form-control"
import { Grid } from "../../components/grid"
import { Heading } from "../../components/heading"
import { GhostIcon } from "../../components/icon"
import { VStack } from "../../components/stack"
import "dayjs/locale/ja"

type Story = StoryFn<typeof YearPicker>

const meta: Meta<typeof YearPicker> = {
  component: YearPicker,
  title: "Components / YearPicker",
}

export default meta

export const Basic: Story = () => {
  return <YearPicker placeholder="basic" />
}

export const WithChildren: Story = () => {
  return (
    <>
      <YearPicker placeholder="YYYY">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </YearPicker>

      <YearPicker closeOnSelect={false} placeholder="YYYY">
        {({ value, onClose }) => (
          <VStack mt="sm">
            <Button disabled={!value} onClick={onClose}>
              Submit{value ? ` ${dayjs(value).format("YYYY")}` : ""}
            </Button>
          </VStack>
        )}
      </YearPicker>
    </>
  )
}

export const WithSize: Story = () => {
  return (
    <>
      <YearPicker size="xs" placeholder="extra small size" />
      <YearPicker size="sm" placeholder="small size" />
      <YearPicker size="md" placeholder="medium size" />
      <YearPicker size="lg" placeholder="large size" />
    </>
  )
}

export const WithCalendarSize: Story = () => {
  return (
    <>
      <YearPicker calendarSize="sm" placeholder="small size" />
      <YearPicker calendarSize="md" placeholder="medium size" />
      <YearPicker calendarSize="lg" placeholder="large size" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <YearPicker variant="outline" placeholder="outline" />
      <YearPicker variant="filled" placeholder="filled" />
      <YearPicker variant="flushed" placeholder="flushed" />
      <YearPicker variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
        {COLOR_SCHEMES.map((colorScheme) => (
          <YearPicker
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
          <YearPicker
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
  return <YearPicker defaultValue={new Date()} />
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <YearPicker placeholder="default border color" />

      <YearPicker
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <YearPicker
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const WithPattern: Story = () => {
  return (
    <YearPicker
      defaultValue={new Date()}
      inputFormat="YY"
      pattern={/[^\w, ]/g}
      placeholder="YY"
    />
  )
}

export const WithInputFormat: Story = () => {
  return <YearPicker inputFormat="YY" placeholder="YY" />
}

export const WithParseDate: Story = () => {
  return (
    <YearPicker
      inputFormat="YYYY"
      parseDate={(value) => new Date(value)}
      placeholder="YYYY"
    />
  )
}

export const WithPlacement: Story = () => {
  return <YearPicker placeholder="YYYY" placement="bottom-end" />
}

export const WithOffset: Story = () => {
  return <YearPicker offset={[16, 16]} placeholder="YYYY" />
}

export const WithGutter: Story = () => {
  return <YearPicker gutter={32} placeholder="YYYY" />
}

export const WithDuration: Story = () => {
  return <YearPicker duration={0.4} placeholder="YYYY" />
}

export const Disabled: Story = () => {
  return (
    <>
      <YearPicker variant="outline" disabled placeholder="outline" />
      <YearPicker variant="filled" disabled placeholder="filled" />
      <YearPicker variant="flushed" disabled placeholder="flushed" />
      <YearPicker variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled label="What is your birthday?">
        <YearPicker placeholder="YYYY" />
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <YearPicker variant="outline" placeholder="outline" readOnly />
      <YearPicker variant="filled" placeholder="filled" readOnly />
      <YearPicker variant="flushed" placeholder="flushed" readOnly />
      <YearPicker variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl label="What is your birthday?" readOnly>
        <YearPicker placeholder="YYYY" />
      </FormControl>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <YearPicker variant="outline" invalid placeholder="outline" />
      <YearPicker variant="filled" invalid placeholder="filled" />
      <YearPicker variant="flushed" invalid placeholder="flushed" />
      <YearPicker variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        invalid
        label="What is your birthday?"
      >
        <YearPicker placeholder="YYYY" />
      </FormControl>
    </>
  )
}

export const WithMinMaxDate: Story = () => {
  return (
    <YearPicker
      defaultValue={new Date(1997, 0)}
      maxDate={new Date(2000, 0)}
      minDate={new Date(1993, 0)}
      placeholder="YYYY"
    />
  )
}

export const WithLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <YearPicker locale="ja" />
}

export const WithFormat: Story = () => {
  return (
    <Grid gap="md" templateColumns="repeat(3, 1fr)" w="full">
      <YearPicker locale="ja" placeholder="YYYY" yearFormat="YYYY年" />

      <YearPicker locale="ja" placeholder="YYYY" yearFormat="YY" />
    </Grid>
  )
}

export const DisabledCloseOnSelect: Story = () => {
  return <YearPicker closeOnSelect={false} placeholder="YYYY" />
}

export const DisabledCloseOnBlur: Story = () => {
  return <YearPicker closeOnBlur={false} placeholder="YYYY" />
}

export const DisabledIsClearable: Story = () => {
  return <YearPicker clearable={false} placeholder="YYYY" />
}

export const DisabledAllowInput: Story = () => {
  return <YearPicker allowInput={false} placeholder="YYYY" />
}

export const DisabledControls: Story = () => {
  return <YearPicker placeholder="YYYY" withControls={false} />
}

export const CustomIcon: Story = () => {
  return (
    <>
      <YearPicker placeholder="YYYY" iconProps={{ color: "primary" }} />

      <YearPicker placeholder="YYYY" iconProps={{ children: <GhostIcon /> }} />
    </>
  )
}

export const CustomControlValue: Story = () => {
  const [value, onChange] = useState<Date | undefined>(new Date())

  return <YearPicker placeholder="YYYY" value={value} onChange={onChange} />
}

export const ReactHookForm: Story = () => {
  interface Data {
    yearPicker: Date | undefined
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
        errorMessage={errors.yearPicker?.message}
        invalid={!!errors.yearPicker}
        label="Birthday"
      >
        <Controller
          name="yearPicker"
          control={control}
          render={({ field }) => <YearPicker placeholder="YYYY" {...field} />}
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
    yearPicker: Date | undefined
  }

  const defaultValues: Data = {
    yearPicker: new Date(),
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
        errorMessage={errors.yearPicker?.message}
        invalid={!!errors.yearPicker}
        label="Birthday"
      >
        <Controller
          name="yearPicker"
          control={control}
          render={({ field }) => <YearPicker placeholder="YYYY" {...field} />}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
