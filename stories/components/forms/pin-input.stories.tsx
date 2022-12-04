import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl, PinInput, PinInputField, useLoading } from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Forms / PinInput',
  component: PinInput,
} as ComponentMeta<typeof PinInput>

export const basic: ComponentStory<typeof PinInput> = () => {
  return (
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}

export const withSize: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput size='xs'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput size='sm'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput size='md'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput size='lg'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </>
  )
}

export const withVariant: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput variant='outline'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput variant='filled'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput variant='flushed'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput variant='unstyled'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </>
  )
}

export const withType: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput type='alphanumeric'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput defaultValue='1234'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput defaultValue='123'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </>
  )
}

export const withBorderColor: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput focusBorderColor='green.500'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <PinInput isInvalid errorBorderColor='orange.500'>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </>
  )
}

export const withOnComplete: ComponentStory<typeof PinInput> = () => {
  const { page } = useLoading()

  return (
    <PinInput onComplete={() => page.start({ timeout: 5000 })}>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}

export const useOneTimePassword: ComponentStory<typeof PinInput> = () => {
  return (
    <PinInput otp>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}

export const maskingValue: ComponentStory<typeof PinInput> = () => {
  return (
    <PinInput mask>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}

export const costomPlaceholder: ComponentStory<typeof PinInput> = () => {
  return (
    <PinInput placeholder='💩'>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}

export const customControl: ComponentStory<typeof PinInput> = () => {
  const { page } = useLoading()
  const [value, setValue] = useState('')

  const onChange = (value: string) => setValue(value)

  const onComplete = () => page.start({ timeout: 5000 })

  return (
    <PinInput value={value} onChange={onChange} onComplete={onComplete}>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}

export const disabledFocusManagement: ComponentStory<typeof PinInput> = () => {
  return (
    <PinInput manageFocus={false}>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  )
}

export const isDisabled: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput isDisabled>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

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
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput isReadOnly>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

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
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof PinInput> = () => {
  return (
    <>
      <PinInput isInvalid>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

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
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </FormControl>
    </>
  )
}
