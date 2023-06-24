import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CalendarType, DatePicker } from '@yamada-ui/calendar'
import { Icon } from '@yamada-ui/fontawesome'
import { FormControl, Grid, Heading, VStack, Button } from '@yamada-ui/react'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import 'dayjs/locale/ja'

export default {
  title: 'Components / Forms / DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>

export const basic: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='basic' />
}

export const withSize: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker placeholder='extra small size' size='xs' />
      <DatePicker placeholder='small size' size='sm' />
      <DatePicker placeholder='medium size' size='md' />
      <DatePicker placeholder='large size' size='lg' />
    </>
  )
}

export const withCalendarSize: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker placeholder='small size' calendarSize='sm' />
      <DatePicker placeholder='medium size' calendarSize='md' />
      <DatePicker placeholder='large size' calendarSize='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker variant='outline' placeholder='outline' />
      <DatePicker variant='filled' placeholder='filled' />
      <DatePicker variant='flushed' placeholder='flushed' />
      <DatePicker variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withColorScheme: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <Heading size='xl'>Solid</Heading>

      <Grid w='full' templateColumns='repeat(3, 1fr)' gap='md'>
        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='primary'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='secondary'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='warning'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='danger'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='link'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='gray'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='red'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='orange'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='yellow'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='green'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='teal'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='blue'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='cyan'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='purple'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='solid'
          calendarColorScheme='pink'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />
      </Grid>

      <Heading size='xl'>Subtle</Heading>

      <Grid w='full' templateColumns='repeat(3, 1fr)' gap='md'>
        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='primary'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='secondary'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='warning'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='danger'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='link'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='gray'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='red'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='orange'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='yellow'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='green'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='teal'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='blue'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='cyan'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='purple'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <DatePicker
          calendarVariant='subtle'
          calendarColorScheme='pink'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />
      </Grid>
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker defaultValue={new Date()} />
}

export const withDefaultType: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker placeholder='date' defaultType='date' />

      <DatePicker placeholder='month' defaultType='month' />

      <DatePicker placeholder='year' defaultType='year' />
    </>
  )
}

export const withDefaultMonth: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' defaultMonth={new Date('1993-08-18')} />
}

export const withFirstDayOfWeek: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker placeholder='monday' firstDayOfWeek='monday' />

      <DatePicker placeholder='sunday' firstDayOfWeek='sunday' />
    </>
  )
}

export const withBorderColor: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker placeholder='default border color' />

      <DatePicker focusBorderColor='green.500' placeholder='custom border color' />

      <DatePicker isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>
  )
}

export const withPattern: ComponentStory<typeof DatePicker> = () => {
  return (
    <DatePicker
      placeholder='MMMM D, YYYY'
      inputFormat='MMMM D, YYYY'
      pattern={/[^\w, ]/g}
      defaultValue={new Date()}
    />
  )
}

export const withInputFormat: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY-MM-DD' inputFormat='YYYY-MM-DD' />
}

export const withParseDate: ComponentStory<typeof DatePicker> = () => {
  return (
    <DatePicker
      placeholder='YYYY/MM/DD'
      inputFormat='YYYY/MM/DD'
      parseDate={(value) => new Date(value)}
    />
  )
}

export const withPlacement: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' placement='bottom-end' />
}

export const withOffset: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' offset={[16, 16]} />
}

export const withGutter: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' gutter={32} />
}

export const withDuration: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' duration={0.4} />
}

export const isDisabled: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker isDisabled variant='outline' placeholder='outline' />
      <DatePicker isDisabled variant='filled' placeholder='filled' />
      <DatePicker isDisabled variant='flushed' placeholder='flushed' />
      <DatePicker isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='What is your birthday?'>
        <DatePicker placeholder='YYYY/MM/DD' />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker isReadOnly variant='outline' placeholder='outline' />
      <DatePicker isReadOnly variant='filled' placeholder='filled' />
      <DatePicker isReadOnly variant='flushed' placeholder='flushed' />
      <DatePicker isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='What is your birthday?'>
        <DatePicker placeholder='YYYY/MM/DD' />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker isInvalid variant='outline' placeholder='outline' />
      <DatePicker isInvalid variant='filled' placeholder='filled' />
      <DatePicker isInvalid variant='flushed' placeholder='flushed' />
      <DatePicker isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='What is your birthday?' errorMessage='This is required.'>
        <DatePicker placeholder='YYYY/MM/DD' />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: ComponentStory<typeof DatePicker> = () => {
  return (
    <DatePicker
      placeholder='YYYY/MM/DD'
      minDate={new Date(new Date().setDate(1))}
      maxDate={new Date(new Date().setDate(18))}
    />
  )
}

export const withToday: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' today />
}

export const withWeekendDays: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' weekendDays={[0, 1]} />
}

export const withHolidays: ComponentStory<typeof DatePicker> = () => {
  const holidays = [
    new Date('2022-01-01'),
    new Date('2022-01-10'),
    new Date('2022-02-11'),
    new Date('2022-02-23'),
    new Date('2022-03-21'),
    new Date('2022-04-29'),
    new Date('2022-05-03'),
    new Date('2022-05-04'),
    new Date('2022-05-05'),
    new Date('2022-07-18'),
    new Date('2022-08-11'),
    new Date('2022-09-19'),
    new Date('2022-09-23'),
    new Date('2022-10-10'),
    new Date('2022-11-03'),
    new Date('2022-11-23'),
    new Date('2023-01-01'),
    new Date('2023-01-02'),
    new Date('2023-01-09'),
    new Date('2023-02-11'),
    new Date('2023-02-23'),
    new Date('2023-03-21'),
    new Date('2023-04-29'),
    new Date('2023-05-03'),
    new Date('2023-05-04'),
    new Date('2023-05-05'),
    new Date('2023-07-17'),
    new Date('2023-08-11'),
    new Date('2023-09-18'),
    new Date('2023-09-23'),
    new Date('2023-10-09'),
    new Date('2023-11-03'),
    new Date('2023-11-23'),
    new Date('2024-01-01'),
    new Date('2024-01-08'),
    new Date('2024-02-11'),
    new Date('2024-02-12'),
    new Date('2024-02-23'),
    new Date('2024-03-20'),
    new Date('2024-04-29'),
    new Date('2024-05-03'),
    new Date('2024-05-04'),
    new Date('2024-05-05'),
    new Date('2024-05-06'),
    new Date('2024-07-15'),
    new Date('2024-08-11'),
    new Date('2024-08-12'),
    new Date('2024-09-16'),
    new Date('2024-09-22'),
    new Date('2024-09-23'),
    new Date('2024-10-14'),
    new Date('2024-11-03'),
    new Date('2024-11-04'),
    new Date('2024-11-23'),
  ]

  return <DatePicker placeholder='YYYY/MM/DD' holidays={holidays} />
}

export const withExcludeDate: ComponentStory<typeof DatePicker> = () => {
  return (
    <DatePicker
      placeholder='YYYY/MM/DD'
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  )
}

export const withLocale: ComponentStory<typeof DatePicker> = () => {
  // import 'dayjs/locale/ja'

  return <DatePicker locale='ja' />
}

export const withFormat: ComponentStory<typeof DatePicker> = () => {
  return (
    <Grid w='full' templateColumns='repeat(3, 1fr)' gap='md'>
      <DatePicker placeholder='YYYY/MM/DD' locale='ja' dateFormat='YYYY年 MMMM' />

      <DatePicker placeholder='YYYY/MM/DD' locale='ja' defaultType='month' yearFormat='YYYY年' />

      <DatePicker placeholder='YYYY/MM/DD' locale='ja' defaultType='month' monthFormat='MM' />

      <DatePicker placeholder='YYYY/MM/DD' locale='ja' defaultType='year' yearFormat='YY' />

      <DatePicker placeholder='YYYY/MM/DD' locale='ja' weekdayFormat='dd曜' />
    </Grid>
  )
}

export const withAmountOfMonths: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker placeholder='YYYY/MM/DD' amountOfMonths={1} disableOutsideDays />

      <DatePicker placeholder='YYYY/MM/DD' amountOfMonths={2} disableOutsideDays />

      <DatePicker placeholder='YYYY/MM/DD' amountOfMonths={3} disableOutsideDays />
    </>
  )
}

export const withPaginateBy: ComponentStory<typeof DatePicker> = () => {
  return (
    <DatePicker placeholder='YYYY/MM/DD' amountOfMonths={3} disableOutsideDays paginateBy={1} />
  )
}

export const disabledCloseOnSelect: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' closeOnSelect={false} />
}

export const disabledCloseOnBlur: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' closeOnBlur={false} />
}

export const disabledIsClearable: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' isClearable={false} />
}

export const disabledAllowInput: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' allowInput={false} />
}

export const disabledOutsideDays: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' disableOutsideDays />
}

export const disabledControls: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' withControls={false} />
}

export const disabledWeekdays: ComponentStory<typeof DatePicker> = () => {
  return <DatePicker placeholder='YYYY/MM/DD' withWeekdays={false} />
}

export const customIcon: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <DatePicker placeholder='YYYY/MM/DD' iconProps={{ color: 'primary' }} />

      <DatePicker placeholder='YYYY/MM/DD' iconProps={{ children: <Icon icon={faPoo} /> }} />
    </>
  )
}

export const customControlType: ComponentStory<typeof DatePicker> = () => {
  const [type, onChangeType] = useState<CalendarType>('month')

  return <DatePicker placeholder='YYYY/MM/DD' type={type} onChangeType={onChangeType} />
}

export const customControlMonth: ComponentStory<typeof DatePicker> = () => {
  const [month, onChangeMonth] = useState<Date>(new Date('1993-08-18'))

  return <DatePicker placeholder='YYYY/MM/DD' month={month} onChangeMonth={onChangeMonth} />
}

export const customControlValue: ComponentStory<typeof DatePicker> = () => {
  const [value, onChange] = useState<Date | undefined>(new Date())

  return <DatePicker placeholder='YYYY/MM/DD' value={value} onChange={onChange} />
}

export const reactHookForm: ComponentStory<typeof DatePicker> = () => {
  type Data = { datePicker: Date | undefined }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log('submit:', data)

  console.log('watch:', watch())

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.datePicker}
        label='Birthday'
        errorMessage={errors.datePicker?.message}
      >
        <Controller
          name='datePicker'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => <DatePicker placeholder='YYYY/MM/DD' {...field} />}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: ComponentStory<typeof DatePicker> = () => {
  type Data = { datePicker: Date | undefined }

  const defaultValues: Data = {
    datePicker: new Date(),
  }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log('submit:', data)

  console.log('watch:', watch())

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.datePicker}
        label='Birthday'
        errorMessage={errors.datePicker?.message}
      >
        <Controller
          name='datePicker'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => <DatePicker placeholder='YYYY/MM/DD' {...field} />}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}
