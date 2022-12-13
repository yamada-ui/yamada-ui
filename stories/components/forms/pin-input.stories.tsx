import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl, PinInput, PinInputField, useLoading } from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Forms / PinInput',
  component: PinInput,
} as ComponentMeta<typeof PinInput>

export const basic: ComponentStory<typeof PinInput> = () => {
  return <PinInput />
}

export const withSize: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput size='xs' />

      <PinInput size='sm' />

      <PinInput size='md' />

      <PinInput size='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput variant='outline' />

      <PinInput variant='filled' />

      <PinInput variant='flushed' />

      <PinInput variant='unstyled' />
    </>
  )
}

export const withFields: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput fileds={3} />

      <PinInput fileds={4} />

      <PinInput fileds={5} />

      <PinInput fileds={6} />
    </>
  )
}

export const withType: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput />

      <PinInput type='alphanumeric' />
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput defaultValue='1234' />

      <PinInput defaultValue='123' />
    </>
  )
}

export const withBorderColor: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput />

      <PinInput focusBorderColor='green.500' />

      <PinInput isInvalid errorBorderColor='orange.500' />
    </>
  )
}

export const withOnComplete: ComponentStory<typeof PinInput> = () => {
  const { page } = useLoading()

  return <PinInput onComplete={() => page.start({ timeout: 5000 })} />
}

export const useOneTimePassword: ComponentStory<typeof PinInput> = () => {
  return <PinInput otp />
}

export const maskingValue: ComponentStory<typeof PinInput> = () => {
  return <PinInput mask />
}

export const customFields: ComponentStory<typeof PinInput> = () => {
  return (
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}

export const costomPlaceholder: ComponentStory<typeof PinInput> = () => {
  return <PinInput placeholder='💩' />
}

export const customControl: ComponentStory<typeof PinInput> = () => {
  const { page } = useLoading()
  const [value, onChange] = useState('')

  const onComplete = () => page.start({ timeout: 5000 })

  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />
}

export const disabledFocusManagement: ComponentStory<typeof PinInput> = () => {
  return <PinInput manageFocus={false} />
}

export const isDisabled: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput isDisabled />

      <PinInput>
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
      </PinInput>

      <FormControl
        isDisabled
        label='Please one-time password'
        helperMessage='Just sent you a one-time password to your e-mail address.'
        errorMessage='one-time password is required.'
      >
        <PinInput />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput isReadOnly />

      <PinInput>
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
      </PinInput>

      <FormControl
        isReadOnly
        label='Please one-time password'
        helperMessage='Just sent you a one-time password to your e-mail address.'
        errorMessage='one-time password is required.'
      >
        <PinInput />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput isInvalid />

      <PinInput>
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
      </PinInput>

      <FormControl
        isInvalid
        label='Please one-time password'
        helperMessage='Just sent you a one-time password to your e-mail address.'
        errorMessage='one-time password is required.'
      >
        <PinInput />
      </FormControl>
    </>
  )
}
