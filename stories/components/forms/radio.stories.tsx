import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  FormControl,
  Radio,
  RadioGroup,
  useRadio,
  useRadioGroup,
  Wrap,
  HStack,
  Box,
} from '@yamada-ui/react'
import { FC, useState } from 'react'

export default {
  title: 'Components / Forms / Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

export const basic: ComponentStory<typeof Radio> = () => {
  return <Radio>孫悟空</Radio>
}

export const withSize: ComponentStory<typeof Radio> = () => {
  return (
    <Wrap gap='md'>
      <Radio size='sm'>孫悟空</Radio>
      <Radio size='md'>ベジータ</Radio>
      <Radio size='lg'>フリーザ</Radio>
    </Wrap>
  )
}

export const withDefaultChecked: ComponentStory<typeof Radio> = () => {
  return <Radio defaultChecked>孫悟空</Radio>
}

export const withColorScheme: ComponentStory<typeof Radio> = () => {
  return (
    <Wrap gap='md'>
      <Radio colorScheme='primary' defaultChecked>
        Primary
      </Radio>

      <Radio colorScheme='secondary' defaultChecked>
        Secondary
      </Radio>

      <Radio colorScheme='warning' defaultChecked>
        Warning
      </Radio>

      <Radio colorScheme='danger' defaultChecked>
        Danger
      </Radio>

      <Radio colorScheme='link' defaultChecked>
        Link
      </Radio>

      <Radio colorScheme='gray' defaultChecked>
        Gray
      </Radio>

      <Radio colorScheme='red' defaultChecked>
        Red
      </Radio>

      <Radio colorScheme='orange' defaultChecked>
        Orange
      </Radio>

      <Radio colorScheme='yellow' defaultChecked>
        Yellow
      </Radio>

      <Radio colorScheme='green' defaultChecked>
        Green
      </Radio>

      <Radio colorScheme='teal' defaultChecked>
        Teal
      </Radio>

      <Radio colorScheme='blue' defaultChecked>
        Blue
      </Radio>

      <Radio colorScheme='cyan' defaultChecked>
        Cyan
      </Radio>

      <Radio colorScheme='purple' defaultChecked>
        Purple
      </Radio>

      <Radio colorScheme='pink' defaultChecked>
        pink
      </Radio>
    </Wrap>
  )
}

export const isDisabled: ComponentStory<typeof Radio> = () => {
  return (
    <>
      <Radio isDisabled>All Notifications</Radio>
      <Radio isDisabled defaultChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue='all'>
        <Radio value='all'>All Notifications</Radio>
        <Radio value='important' isDisabled>
          Important Notifications
        </Radio>
        <Radio value='service'>Service Notifications</Radio>
      </RadioGroup>

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <Radio defaultChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <RadioGroup defaultValue='all'>
          <Radio value='all'>All Notifications</Radio>
          <Radio value='important'>Important Notifications</Radio>
          <Radio value='service'>Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Radio> = () => {
  return (
    <>
      <Radio isReadOnly>All Notifications</Radio>
      <Radio isReadOnly defaultChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue='all'>
        <Radio value='all'>All Notifications</Radio>
        <Radio value='important' isReadOnly>
          Important Notifications
        </Radio>
        <Radio value='service'>Service Notifications</Radio>
      </RadioGroup>

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <Radio defaultChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <RadioGroup defaultValue='all'>
          <Radio value='all'>All Notifications</Radio>
          <Radio value='important'>Important Notifications</Radio>
          <Radio value='service'>Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof Radio> = () => {
  return (
    <>
      <Radio isInvalid>All Notifications</Radio>
      <Radio isInvalid defaultChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue='all'>
        <Radio value='all'>All Notifications</Radio>
        <Radio value='important' isInvalid>
          Important Notifications
        </Radio>
        <Radio value='service'>Service Notifications</Radio>
      </RadioGroup>

      <FormControl
        isInvalid
        label='Which notifications would you like to receive?'
        errorMessage='This is required.'
      >
        <Radio>All Notifications</Radio>
      </FormControl>

      <FormControl
        isInvalid
        label='Which notifications would you like to receive?'
        errorMessage='This is required.'
      >
        <RadioGroup defaultValue='all'>
          <Radio value='all'>All Notifications</Radio>
          <Radio value='important'>Important Notifications</Radio>
          <Radio value='service'>Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>
  )
}

export const group: ComponentStory<typeof Radio> = () => {
  return (
    <>
      <RadioGroup defaultValue='孫悟空'>
        <Radio value='孫悟空'>孫悟空</Radio>
        <Radio value='ベジータ'>ベジータ</Radio>
        <Radio value='フリーザ'>フリーザ</Radio>
      </RadioGroup>

      <RadioGroup direction='row' defaultValue='孫悟空'>
        <Radio value='孫悟空'>孫悟空</Radio>
        <Radio value='ベジータ'>ベジータ</Radio>
        <Radio value='フリーザ'>フリーザ</Radio>
      </RadioGroup>
    </>
  )
}

export const customControl: ComponentStory<typeof Radio> = () => {
  const [value, setValue] = useState<string>('孫悟空')

  return (
    <RadioGroup value={value} onChange={(value) => setValue(value)}>
      <Radio value='孫悟空'>孫悟空</Radio>
      <Radio value='ベジータ'>ベジータ</Radio>
      <Radio value='フリーザ'>フリーザ</Radio>
    </RadioGroup>
  )
}

export const customHook: ComponentStory<typeof Radio> = () => {
  const CustomRadio: FC<any> = (props) => {
    const { getInputProps, getIconProps } = useRadio(props)

    return (
      <Box as='label'>
        <input {...getInputProps()} />

        <Box
          {...getIconProps()}
          cursor='pointer'
          borderWidth='1px'
          py='xs'
          px='sm'
          rounded='md'
          _checked={{
            bg: 'blue.500',
            color: 'white',
            borderColor: 'blue.500',
          }}
        >
          {props.value}
        </Box>
      </Box>
    )
  }

  const { getContainerProps, getRadioProps } = useRadioGroup({ defaultValue: '孫悟空' })

  return (
    <HStack gap='sm' {...getContainerProps()}>
      <CustomRadio {...getRadioProps({ value: '孫悟空' })} />
      <CustomRadio {...getRadioProps({ value: 'ベジータ' })} />
      <CustomRadio {...getRadioProps({ value: 'フリーザ' })} />
    </HStack>
  )
}
