import { faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Icon,
  FontAwesomeIcon,
  Button,
  useBoolean,
  FormControl,
} from '@yamada-ui/react'
import { FaPhone } from 'react-icons/fa'

export default {
  title: 'Components / Forms / Input',
  component: Input,
} as ComponentMeta<typeof Input>

export const basic: ComponentStory<typeof Input> = () => {
  return <Input placeholder='basic' />
}

export const withSize: ComponentStory<typeof Input> = () => {
  return (
    <>
      <Input placeholder='extra small size' size='xs' />
      <Input placeholder='small size' size='sm' />
      <Input placeholder='medium size' size='md' />
      <Input placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof Input> = () => {
  return (
    <>
      <Input variant='outline' placeholder='outline' />
      <Input variant='filled' placeholder='filled' />
      <Input variant='flushed' placeholder='flushed' />
      <Input variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withHTMLSize: ComponentStory<typeof Input> = () => {
  return (
    <>
      <Input htmlSize={4} width='auto' />
    </>
  )
}

export const withBorderColor: ComponentStory<typeof Input> = () => {
  return (
    <>
      <Input placeholder='default border color' />
      <Input focusBorderColor='green.500' placeholder='custom border color' />
      <Input isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>
  )
}

export const isDisabled: ComponentStory<typeof Input> = () => {
  return (
    <>
      <Input isDisabled variant='outline' placeholder='outline' />
      <Input isDisabled variant='filled' placeholder='filled' />
      <Input isDisabled variant='flushed' placeholder='flushed' />
      <Input isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Email address' helperMessage="We'll never share your email.">
        <Input type='email' placeholder='your email address' />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Input> = () => {
  return (
    <>
      <Input isReadOnly variant='outline' placeholder='outline' />
      <Input isReadOnly variant='filled' placeholder='filled' />
      <Input isReadOnly variant='flushed' placeholder='flushed' />
      <Input isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Email address' helperMessage="We'll never share your email.">
        <Input type='email' placeholder='your email address' />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof Input> = () => {
  return (
    <>
      <Input isInvalid variant='outline' placeholder='outline' />
      <Input isInvalid variant='filled' placeholder='filled' />
      <Input isInvalid variant='flushed' placeholder='flushed' />
      <Input isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='Email address' errorMessage='Email is required.'>
        <Input type='email' placeholder='your email address' />
      </FormControl>
    </>
  )
}

export const useAddon: ComponentStory<typeof Input> = () => {
  return (
    <>
      <InputGroup>
        <InputLeftAddon>+81</InputLeftAddon>
        <Input type='tel' placeholder='your phone number' />
      </InputGroup>

      <InputGroup>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input placeholder='your site address' />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>
    </>
  )
}

export const useElement: ComponentStory<typeof Input> = () => {
  const [show, { toggle }] = useBoolean()

  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <Icon as={FaPhone} color='gray.500' />
        </InputLeftElement>
        <Input type='tel' placeholder='your phone number' />
      </InputGroup>

      <InputGroup>
        <InputLeftElement>
          <FontAwesomeIcon icon={faEnvelope} color='gray.500' />
        </InputLeftElement>
        <Input type='email' placeholder='your email address' />
        <InputRightElement>
          <FontAwesomeIcon icon={faCheck} color='green.500' />
        </InputRightElement>
      </InputGroup>

      <InputGroup size='md'>
        <Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='your password' />
        <InputRightElement w='4.5rem' isClick>
          <Button h='1.75rem' size='sm' onClick={toggle}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  )
}

export const stylingPlaceholder: ComponentStory<typeof Input> = () => {
  return (
    <>
      <Input placeholder='default placeholder' />
      <Input placeholder='custom placeholder' _placeholder={{ opacity: 1, color: 'gray.500' }} />
      <Input
        color='green.500'
        placeholder='custom placeholder'
        _placeholder={{ color: 'inherit' }}
      />
    </>
  )
}

export const customType: ComponentStory<typeof Input> = () => {
  return (
    <>
      <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
    </>
  )
}
