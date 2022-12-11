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

export const withColorStyle: ComponentStory<typeof Radio> = () => {
  return (
    <Wrap gap='md'>
      <Radio colorStyle='primary' defaultChecked>
        Primary
      </Radio>

      <Radio colorStyle='secondary' defaultChecked>
        Secondary
      </Radio>

      <Radio colorStyle='warning' defaultChecked>
        Warning
      </Radio>

      <Radio colorStyle='danger' defaultChecked>
        Danger
      </Radio>

      <Radio colorStyle='link' defaultChecked>
        Link
      </Radio>

      <Radio colorStyle='gray' defaultChecked>
        Gray
      </Radio>

      <Radio colorStyle='red' defaultChecked>
        Red
      </Radio>

      <Radio colorStyle='orange' defaultChecked>
        Orange
      </Radio>

      <Radio colorStyle='yellow' defaultChecked>
        Yellow
      </Radio>

      <Radio colorStyle='green' defaultChecked>
        Green
      </Radio>

      <Radio colorStyle='teal' defaultChecked>
        Teal
      </Radio>

      <Radio colorStyle='blue' defaultChecked>
        Blue
      </Radio>

      <Radio colorStyle='cyan' defaultChecked>
        Cyan
      </Radio>

      <Radio colorStyle='purple' defaultChecked>
        Purple
      </Radio>

      <Radio colorStyle='pink' defaultChecked>
        pink
      </Radio>

      <Radio colorStyle='linkedin' defaultChecked>
        Linkedin
      </Radio>

      <Radio colorStyle='facebook' defaultChecked>
        Facebook
      </Radio>

      <Radio colorStyle='messenger' defaultChecked>
        Messenger
      </Radio>

      <Radio colorStyle='whatsapp' defaultChecked>
        Whatsapp
      </Radio>

      <Radio colorStyle='twitter' defaultChecked>
        Twitter
      </Radio>

      <Radio colorStyle='line' defaultChecked>
        Line
      </Radio>

      <Radio colorStyle='instagram' defaultChecked>
        Instagram
      </Radio>

      <Radio colorStyle='youtube' defaultChecked>
        Youtube
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
  const [value, setValue] = useState<string | number>('孫悟空')

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
