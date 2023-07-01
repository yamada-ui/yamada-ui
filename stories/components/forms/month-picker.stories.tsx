import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MonthPicker, MonthPickerProps } from '@yamada-ui/calendar'
import { Icon } from '@yamada-ui/fontawesome'
import { FormControl, Grid, Heading, VStack, Button } from '@yamada-ui/react'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import 'dayjs/locale/ja'

export default {
  title: 'Components / Forms / MonthPicker',
  component: MonthPicker,
} as ComponentMeta<typeof MonthPicker>

export const basic: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='basic' />
}

export const withSize: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <MonthPicker placeholder='extra small size' size='xs' />
      <MonthPicker placeholder='small size' size='sm' />
      <MonthPicker placeholder='medium size' size='md' />
      <MonthPicker placeholder='large size' size='lg' />
    </>
  )
}

export const withCalendarSize: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <MonthPicker placeholder='small size' calendarSize='sm' />
      <MonthPicker placeholder='medium size' calendarSize='md' />
      <MonthPicker placeholder='large size' calendarSize='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <MonthPicker variant='outline' placeholder='outline' />
      <MonthPicker variant='filled' placeholder='filled' />
      <MonthPicker variant='flushed' placeholder='flushed' />
      <MonthPicker variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withColorScheme: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <Heading size='xl'>Solid</Heading>

      <Grid w='full' templateColumns='repeat(3, 1fr)' gap='md'>
        <MonthPicker
          calendarVariant='solid'
          calendarColorScheme='primary'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorScheme='secondary'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorScheme='warning'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorScheme='danger'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='solid' calendarColorScheme='link' defaultValue={new Date()} />

        <MonthPicker calendarVariant='solid' calendarColorScheme='gray' defaultValue={new Date()} />

        <MonthPicker calendarVariant='solid' calendarColorScheme='red' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='solid'
          calendarColorScheme='orange'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorScheme='yellow'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorScheme='green'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='solid' calendarColorScheme='teal' defaultValue={new Date()} />

        <MonthPicker calendarVariant='solid' calendarColorScheme='blue' defaultValue={new Date()} />

        <MonthPicker calendarVariant='solid' calendarColorScheme='cyan' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='solid'
          calendarColorScheme='purple'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='solid' calendarColorScheme='pink' defaultValue={new Date()} />
      </Grid>

      <Heading size='xl'>Subtle</Heading>

      <Grid w='full' templateColumns='repeat(3, 1fr)' gap='md'>
        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='primary'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='secondary'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='warning'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='danger'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='link'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='gray'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='subtle' calendarColorScheme='red' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='orange'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='yellow'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='green'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='teal'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='blue'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='cyan'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='purple'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorScheme='pink'
          defaultValue={new Date()}
        />
      </Grid>
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker defaultValue={new Date()} />
}

export const withDefaultType: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <MonthPicker placeholder='month' defaultType='month' />

      <MonthPicker placeholder='year' defaultType='year' />
    </>
  )
}

export const withDefaultMonth: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' defaultMonth={new Date('1993-08')} />
}

export const withBorderColor: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <MonthPicker placeholder='default border color' />

      <MonthPicker focusBorderColor='green.500' placeholder='custom border color' />

      <MonthPicker isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>
  )
}

export const withPattern: ComponentStory<typeof MonthPicker> = () => {
  return (
    <MonthPicker
      placeholder='MMM YYYY'
      inputFormat='MMM YYYY'
      pattern={/[^\w, ]/g}
      defaultValue={new Date()}
    />
  )
}

export const withInputFormat: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY-MM' inputFormat='YYYY-MM' />
}

export const withParseDate: ComponentStory<typeof MonthPicker> = () => {
  return (
    <MonthPicker
      placeholder='YYYY/MM'
      inputFormat='YYYY/MM'
      parseDate={(value) => new Date(value)}
    />
  )
}

export const withPlacement: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' placement='bottom-end' />
}

export const withOffset: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' offset={[16, 16]} />
}

export const withGutter: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' gutter={32} />
}

export const withDuration: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' duration={0.4} />
}

export const isDisabled: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <MonthPicker isDisabled variant='outline' placeholder='outline' />
      <MonthPicker isDisabled variant='filled' placeholder='filled' />
      <MonthPicker isDisabled variant='flushed' placeholder='flushed' />
      <MonthPicker isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='What is your birthday?'>
        <MonthPicker placeholder='YYYY/MM' />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <MonthPicker isReadOnly variant='outline' placeholder='outline' />
      <MonthPicker isReadOnly variant='filled' placeholder='filled' />
      <MonthPicker isReadOnly variant='flushed' placeholder='flushed' />
      <MonthPicker isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='What is your birthday?'>
        <MonthPicker placeholder='YYYY/MM' />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <MonthPicker isInvalid variant='outline' placeholder='outline' />
      <MonthPicker isInvalid variant='filled' placeholder='filled' />
      <MonthPicker isInvalid variant='flushed' placeholder='flushed' />
      <MonthPicker isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='What is your birthday?' errorMessage='This is required.'>
        <MonthPicker placeholder='YYYY/MM' />
      </FormControl>
    </>
  )
}

export const withMinMaxDate: ComponentStory<typeof MonthPicker> = () => {
  return (
    <MonthPicker placeholder='YYYY/MM' minDate={new Date(1993, 8)} maxDate={new Date(2000, 10)} />
  )
}

export const withLocale: ComponentStory<typeof MonthPicker> = () => {
  // import 'dayjs/locale/ja'

  return <MonthPicker locale='ja' />
}

export const withFormat: ComponentStory<typeof MonthPicker> = () => {
  return (
    <Grid w='full' templateColumns='repeat(3, 1fr)' gap='md'>
      <MonthPicker placeholder='YYYY/MM' locale='ja' defaultType='month' yearFormat='YYYY年' />

      <MonthPicker placeholder='YYYY/MM' locale='ja' defaultType='month' monthFormat='MM' />

      <MonthPicker placeholder='YYYY/MM' locale='ja' defaultType='year' yearFormat='YY' />
    </Grid>
  )
}

export const disabledCloseOnSelect: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' closeOnSelect={false} />
}

export const disabledCloseOnBlur: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' closeOnBlur={false} />
}

export const disabledIsClearable: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' isClearable={false} />
}

export const disabledAllowInput: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' allowInput={false} />
}

export const disabledControls: ComponentStory<typeof MonthPicker> = () => {
  return <MonthPicker placeholder='YYYY/MM' withControls={false} />
}

export const customIcon: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <MonthPicker placeholder='YYYY/MM' iconProps={{ color: 'primary' }} />

      <MonthPicker placeholder='YYYY/MM' iconProps={{ children: <Icon icon={faPoo} /> }} />
    </>
  )
}

export const customControlType: ComponentStory<typeof MonthPicker> = () => {
  const [type, onChangeType] = useState<MonthPickerProps['type']>('month')

  return <MonthPicker placeholder='YYYY/MM' type={type} onChangeType={onChangeType} />
}

export const customControlMonth: ComponentStory<typeof MonthPicker> = () => {
  const [month, onChangeMonth] = useState<Date>(new Date('1993-08-18'))

  return <MonthPicker placeholder='YYYY/MM' month={month} onChangeMonth={onChangeMonth} />
}

export const customControlValue: ComponentStory<typeof MonthPicker> = () => {
  const [value, onChange] = useState<Date | null>(new Date())

  return <MonthPicker placeholder='YYYY/MM' value={value} onChange={onChange} />
}

export const reactHookForm: ComponentStory<typeof MonthPicker> = () => {
  type Data = { datePicker: Date | null }

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
          render={({ field }) => <MonthPicker placeholder='YYYY/MM' {...field} />}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: ComponentStory<typeof MonthPicker> = () => {
  type Data = { datePicker: Date | null }

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
          render={({ field }) => <MonthPicker placeholder='YYYY/MM' {...field} />}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}
