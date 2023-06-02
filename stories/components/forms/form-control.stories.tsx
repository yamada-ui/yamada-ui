import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl, Label, HelperMessage, ErrorMessage, Input, Tag } from '@yamada-ui/react'

export default {
  title: 'Components / Forms / FormControl',
  component: FormControl,
} as ComponentMeta<typeof FormControl>

export const basic: ComponentStory<typeof FormControl> = () => {
  return (
    <FormControl label='Email address'>
      <Input type='email' placeholder='your email address' />
    </FormControl>
  )
}

export const withHelperMessage: ComponentStory<typeof FormControl> = () => {
  return (
    <FormControl label='Email address' helperMessage="We'll never share your email.">
      <Input type='email' placeholder='your email address' />
    </FormControl>
  )
}

export const withErrorMessage: ComponentStory<typeof FormControl> = () => {
  return (
    <FormControl isInvalid label='Email address' errorMessage='Email is required.'>
      <Input type='email' placeholder='your email address' />
    </FormControl>
  )
}

export const isReplace: ComponentStory<typeof FormControl> = () => {
  return (
    <>
      <FormControl
        isInvalid
        label='Email address'
        helperMessage="We'll never share your email."
        errorMessage='Email is required.'
        isReplace={true}
      >
        <Input type='email' placeholder='your email address' />
      </FormControl>

      <FormControl
        isInvalid
        label='Email address'
        helperMessage="We'll never share your email."
        errorMessage='Email is required.'
        isReplace={false}
      >
        <Input type='email' placeholder='your email address' />
      </FormControl>
    </>
  )
}

export const isRequired: ComponentStory<typeof FormControl> = () => {
  return (
    <FormControl
      isRequired
      label='Email address'
      helperMessage="We'll never share your email."
      errorMessage='Email is required.'
    >
      <Input type='email' placeholder='your email address' />
    </FormControl>
  )
}

export const isDisabled: ComponentStory<typeof FormControl> = () => {
  return (
    <FormControl
      isDisabled
      label='Email address'
      helperMessage="We'll never share your email."
      errorMessage='Email is required.'
    >
      <Input type='email' placeholder='your email address' />
    </FormControl>
  )
}

export const isReadonly: ComponentStory<typeof FormControl> = () => {
  return (
    <FormControl
      isReadOnly
      label='Email address'
      helperMessage="We'll never share your email."
      errorMessage='Email is required.'
    >
      <Input type='email' placeholder='your email address' />
    </FormControl>
  )
}

export const customLabel: ComponentStory<typeof FormControl> = () => {
  return (
    <FormControl helperMessage="We'll never share your email.">
      <Label color='primary'>Email address</Label>
      <Input type='email' placeholder='your email address' />
    </FormControl>
  )
}

export const customHelperMessage: ComponentStory<typeof FormControl> = () => {
  return (
    <FormControl label='Email address'>
      <Input type='email' placeholder='your email address' />
      <HelperMessage color='gray.300'>We'll never share your email.</HelperMessage>
    </FormControl>
  )
}

export const customErrorMessage: ComponentStory<typeof FormControl> = () => {
  return (
    <FormControl isInvalid label='Email address'>
      <Input type='email' placeholder='your email address' />
      <ErrorMessage color='gray.300'>Email is required.</ErrorMessage>
    </FormControl>
  )
}

export const customRequiredIndicator: ComponentStory<typeof FormControl> = () => {
  return (
    <>
      <FormControl
        isRequired
        label='Email address'
        requiredIndicator={
          <Tag colorScheme='red' ms={1}>
            required
          </Tag>
        }
      >
        <Input type='email' placeholder='your email address' />
      </FormControl>

      <FormControl isRequired>
        <Label
          requiredIndicator={
            <Tag colorScheme='red' ms={1}>
              required
            </Tag>
          }
        >
          Email address
        </Label>
        <Input type='email' placeholder='your email address' />
      </FormControl>
    </>
  )
}

export const customOptionalIndicator: ComponentStory<typeof FormControl> = () => {
  return (
    <>
      <FormControl
        label='Email address'
        optionalIndicator={
          <Tag colorScheme='primary' ms={1}>
            optional
          </Tag>
        }
      >
        <Input type='email' placeholder='your email address' />
      </FormControl>

      <FormControl>
        <Label
          optionalIndicator={
            <Tag colorScheme='primary' ms={1}>
              optional
            </Tag>
          }
        >
          Email address
        </Label>
        <Input type='email' placeholder='your email address' />
      </FormControl>
    </>
  )
}
