import type { Meta, StoryFn } from "@storybook/react"
import { YearPicker } from "@yamada-ui/calendar"
import { Ghost } from "@yamada-ui/lucide"
import { Button, FormControl, Grid, Heading, VStack } from "@yamada-ui/react"
import dayjs from "dayjs"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import "dayjs/locale/ja"

type Story = StoryFn<typeof YearPicker>

const meta: Meta<typeof YearPicker> = {
  title: "Components / Forms / YearPicker",
  component: YearPicker,
}

export default meta

export const basic: Story = () => {
  return <YearPicker placeholder="basic" />
}

export const withChildren: Story = () => {
  return (
    <>
      <YearPicker placeholder="YYYY">
        <VStack mt="sm">
          <Button>Submit</Button>
        </VStack>
      </YearPicker>

      <YearPicker placeholder="YYYY" closeOnSelect={false}>
        {({ value, onClose }) => (
          <VStack mt="sm">
            <Button isDisabled={!value} onClick={onClose}>
              Submit{value ? ` ${dayjs(value).format("YYYY")}` : ""}
            </Button>
          </VStack>
        )}
      </YearPicker>
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <YearPicker placeholder="extra small size" size="xs" />
      <YearPicker placeholder="small size" size="sm" />
      <YearPicker placeholder="medium size" size="md" />
      <YearPicker placeholder="large size" size="lg" />
    </>
  )
}

export const withCalendarSize: Story = () => {
  return (
    <>
      <YearPicker placeholder="small size" calendarSize="sm" />
      <YearPicker placeholder="medium size" calendarSize="md" />
      <YearPicker placeholder="large size" calendarSize="lg" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <YearPicker variant="outline" placeholder="outline" />
      <YearPicker variant="filled" placeholder="filled" />
      <YearPicker variant="flushed" placeholder="flushed" />
      <YearPicker variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Heading size="xl">Solid</Heading>

      <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
        {colorSchemes.map((colorScheme) => (
          <YearPicker
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
          <YearPicker
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
  return <YearPicker defaultValue={new Date()} />
}

export const withBorderColor: Story = () => {
  return (
    <>
      <YearPicker placeholder="default border color" />

      <YearPicker
        focusBorderColor="green.500"
        placeholder="custom border color"
      />

      <YearPicker
        isInvalid
        errorBorderColor="orange.500"
        placeholder="custom border color"
      />
    </>
  )
}

export const withPattern: Story = () => {
  return (
    <YearPicker
      placeholder="YY"
      inputFormat="YY"
      pattern={/[^\w, ]/g}
      defaultValue={new Date()}
    />
  )
}

export const withInputFormat: Story = () => {
  return <YearPicker placeholder="YY" inputFormat="YY" />
}

export const withParseDate: Story = () => {
  return (
    <YearPicker
      placeholder="YYYY"
      inputFormat="YYYY"
      parseDate={(value) => new Date(value)}
    />
  )
}

export const withPlacement: Story = () => {
  return <YearPicker placeholder="YYYY" placement="bottom-end" />
}

export const withOffset: Story = () => {
  return <YearPicker placeholder="YYYY" offset={[16, 16]} />
}

export const withGutter: Story = () => {
  return <YearPicker placeholder="YYYY" gutter={32} />
}

export const withDuration: Story = () => {
  return <YearPicker placeholder="YYYY" duration={0.4} />
}

export const isDisabled: Story = () => {
  return (
    <>
      <YearPicker isDisabled variant="outline" placeholder="outline" />
      <YearPicker isDisabled variant="filled" placeholder="filled" />
      <YearPicker isDisabled variant="flushed" placeholder="flushed" />
      <YearPicker isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="What is your birthday?">
        <YearPicker placeholder="YYYY" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <YearPicker isReadOnly variant="outline" placeholder="outline" />
      <YearPicker isReadOnly variant="filled" placeholder="filled" />
      <YearPicker isReadOnly variant="flushed" placeholder="flushed" />
      <YearPicker isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="What is your birthday?">
        <YearPicker placeholder="YYYY" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <YearPicker isInvalid variant="outline" placeholder="outline" />
      <YearPicker isInvalid variant="filled" placeholder="filled" />
      <YearPicker isInvalid variant="flushed" placeholder="flushed" />
      <YearPicker isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl
        isInvalid
        label="What is your birthday?"
        errorMessage="This is required."
      >
        <YearPicker placeholder="YYYY" />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: Story = () => {
  return (
    <YearPicker
      placeholder="YYYY"
      defaultValue={new Date(1997, 0)}
      minDate={new Date(1993, 0)}
      maxDate={new Date(2000, 0)}
    />
  )
}

export const withLocale: Story = () => {
  // import 'dayjs/locale/ja'

  return <YearPicker locale="ja" />
}

export const withFormat: Story = () => {
  return (
    <Grid w="full" templateColumns="repeat(3, 1fr)" gap="md">
      <YearPicker placeholder="YYYY" locale="ja" yearFormat="YYYY年" />

      <YearPicker placeholder="YYYY" locale="ja" yearFormat="YY" />
    </Grid>
  )
}

export const disabledCloseOnSelect: Story = () => {
  return <YearPicker placeholder="YYYY" closeOnSelect={false} />
}

export const disabledCloseOnBlur: Story = () => {
  return <YearPicker placeholder="YYYY" closeOnBlur={false} />
}

export const disabledIsClearable: Story = () => {
  return <YearPicker placeholder="YYYY" isClearable={false} />
}

export const disabledAllowInput: Story = () => {
  return <YearPicker placeholder="YYYY" allowInput={false} />
}

export const disabledControls: Story = () => {
  return <YearPicker placeholder="YYYY" withControls={false} />
}

export const customIcon: Story = () => {
  return (
    <>
      <YearPicker placeholder="YYYY" iconProps={{ color: "primary" }} />

      <YearPicker placeholder="YYYY" iconProps={{ children: <Ghost /> }} />
    </>
  )
}

export const customControlValue: Story = () => {
  const [value, onChange] = useState<Date | undefined>(new Date())

  return <YearPicker placeholder="YYYY" value={value} onChange={onChange} />
}

export const reactHookForm: Story = () => {
  type Data = { yearPicker: Date | undefined }

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
        isInvalid={!!errors.yearPicker}
        label="Birthday"
        errorMessage={errors.yearPicker?.message}
      >
        <Controller
          name="yearPicker"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => <YearPicker placeholder="YYYY" {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  type Data = { yearPicker: Date | undefined }

  const defaultValues: Data = {
    yearPicker: new Date(),
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
        isInvalid={!!errors.yearPicker}
        label="Birthday"
        errorMessage={errors.yearPicker?.message}
      >
        <Controller
          name="yearPicker"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => <YearPicker placeholder="YYYY" {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
