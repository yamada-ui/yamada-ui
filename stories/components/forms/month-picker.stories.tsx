import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  FontAwesomeIcon,
  FormControl,
  Grid,
  Heading,
  MonthPicker,
  MonthPickerType,
} from '@yamada-ui/react'
import { useState } from 'react'
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

export const withColorStyle: ComponentStory<typeof MonthPicker> = () => {
  return (
    <>
      <Heading size='xl'>Solid</Heading>

      <Grid w='full' templateColumns='repeat(3, 1fr)' gap='md'>
        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='primary'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='secondary'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='warning'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='danger'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='solid' calendarColorStyle='link' defaultValue={new Date()} />

        <MonthPicker calendarVariant='solid' calendarColorStyle='gray' defaultValue={new Date()} />

        <MonthPicker calendarVariant='solid' calendarColorStyle='red' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='orange'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='yellow'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='solid' calendarColorStyle='green' defaultValue={new Date()} />

        <MonthPicker calendarVariant='solid' calendarColorStyle='teal' defaultValue={new Date()} />

        <MonthPicker calendarVariant='solid' calendarColorStyle='blue' defaultValue={new Date()} />

        <MonthPicker calendarVariant='solid' calendarColorStyle='cyan' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='purple'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='solid' calendarColorStyle='pink' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='linkedin'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='facebook'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='messenger'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='whatsapp'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='twitter'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='solid' calendarColorStyle='line' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='instagram'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='solid'
          calendarColorStyle='youtube'
          defaultValue={new Date()}
        />
      </Grid>

      <Heading size='xl'>Subtle</Heading>

      <Grid w='full' templateColumns='repeat(3, 1fr)' gap='md'>
        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='primary'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='secondary'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='warning'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='danger'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='subtle' calendarColorStyle='link' defaultValue={new Date()} />

        <MonthPicker calendarVariant='subtle' calendarColorStyle='gray' defaultValue={new Date()} />

        <MonthPicker calendarVariant='subtle' calendarColorStyle='red' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='orange'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='yellow'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='green'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='subtle' calendarColorStyle='teal' defaultValue={new Date()} />

        <MonthPicker calendarVariant='subtle' calendarColorStyle='blue' defaultValue={new Date()} />

        <MonthPicker calendarVariant='subtle' calendarColorStyle='cyan' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='purple'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='subtle' calendarColorStyle='pink' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='linkedin'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='facebook'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='messenger'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='whatsapp'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='twitter'
          defaultValue={new Date()}
        />

        <MonthPicker calendarVariant='subtle' calendarColorStyle='line' defaultValue={new Date()} />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='instagram'
          defaultValue={new Date()}
        />

        <MonthPicker
          calendarVariant='subtle'
          calendarColorStyle='youtube'
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

      <MonthPicker
        placeholder='YYYY/MM'
        iconProps={{ children: <FontAwesomeIcon icon={faPoo} /> }}
      />
    </>
  )
}

export const customControlType: ComponentStory<typeof MonthPicker> = () => {
  const [type, onChangeType] = useState<MonthPickerType>('month')

  return <MonthPicker placeholder='YYYY/MM' type={type} onChangeType={onChangeType} />
}

export const customControlMonth: ComponentStory<typeof MonthPicker> = () => {
  const [month, onChangeMonth] = useState<Date>(new Date('1993-08-18'))

  return <MonthPicker placeholder='YYYY/MM' month={month} onChangeMonth={onChangeMonth} />
}

export const customControlValue: ComponentStory<typeof MonthPicker> = () => {
  const [value, onChange] = useState<Date | null | undefined>(new Date())

  return <MonthPicker placeholder='YYYY/MM' value={value} onChange={onChange} />
}
