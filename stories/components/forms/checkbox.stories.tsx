import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  useBoolean,
  useCheckbox,
  useCheckboxGroup,
  VStack,
  Wrap,
  Box,
  HStack,
} from '@yamada-ui/react'
import { FC, useState } from 'react'

export default {
  title: 'Components / Forms / Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const basic: ComponentStory<typeof Checkbox> = () => {
  return <Checkbox>孫悟空</Checkbox>
}

export const withSize: ComponentStory<typeof Checkbox> = () => {
  return (
    <Wrap gap='md'>
      <Checkbox size='sm'>孫悟空</Checkbox>
      <Checkbox size='md'>ベジータ</Checkbox>
      <Checkbox size='lg'>フリーザ</Checkbox>
    </Wrap>
  )
}

export const withDefaultChecked: ComponentStory<typeof Checkbox> = () => {
  return <Checkbox defaultChecked>孫悟空</Checkbox>
}

export const withColorStyle: ComponentStory<typeof Checkbox> = () => {
  return (
    <Wrap gap='md'>
      <Checkbox colorStyle='primary' defaultChecked>
        Primary
      </Checkbox>

      <Checkbox colorStyle='secondary' defaultChecked>
        Secondary
      </Checkbox>

      <Checkbox colorStyle='warning' defaultChecked>
        Warning
      </Checkbox>

      <Checkbox colorStyle='danger' defaultChecked>
        Danger
      </Checkbox>

      <Checkbox colorStyle='link' defaultChecked>
        Link
      </Checkbox>

      <Checkbox colorStyle='gray' defaultChecked>
        Gray
      </Checkbox>

      <Checkbox colorStyle='red' defaultChecked>
        Red
      </Checkbox>

      <Checkbox colorStyle='orange' defaultChecked>
        Orange
      </Checkbox>

      <Checkbox colorStyle='yellow' defaultChecked>
        Yellow
      </Checkbox>

      <Checkbox colorStyle='green' defaultChecked>
        Green
      </Checkbox>

      <Checkbox colorStyle='teal' defaultChecked>
        Teal
      </Checkbox>

      <Checkbox colorStyle='blue' defaultChecked>
        Blue
      </Checkbox>

      <Checkbox colorStyle='cyan' defaultChecked>
        Cyan
      </Checkbox>

      <Checkbox colorStyle='purple' defaultChecked>
        Purple
      </Checkbox>

      <Checkbox colorStyle='pink' defaultChecked>
        pink
      </Checkbox>

      <Checkbox colorStyle='linkedin' defaultChecked>
        Linkedin
      </Checkbox>

      <Checkbox colorStyle='facebook' defaultChecked>
        Facebook
      </Checkbox>

      <Checkbox colorStyle='messenger' defaultChecked>
        Messenger
      </Checkbox>

      <Checkbox colorStyle='whatsapp' defaultChecked>
        Whatsapp
      </Checkbox>

      <Checkbox colorStyle='twitter' defaultChecked>
        Twitter
      </Checkbox>

      <Checkbox colorStyle='line' defaultChecked>
        Line
      </Checkbox>

      <Checkbox colorStyle='instagram' defaultChecked>
        Instagram
      </Checkbox>

      <Checkbox colorStyle='youtube' defaultChecked>
        Youtube
      </Checkbox>
    </Wrap>
  )
}

export const isDisabled: ComponentStory<typeof Checkbox> = () => {
  return (
    <>
      <Checkbox isDisabled>All Notifications</Checkbox>
      <Checkbox isDisabled defaultChecked>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={['all']}>
        <Checkbox value='all'>All Notifications</Checkbox>
        <Checkbox value='important' isDisabled>
          Important Notifications
        </Checkbox>
        <Checkbox value='service'>Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <Checkbox defaultChecked>All Notifications</Checkbox>
      </FormControl>

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <CheckboxGroup defaultValue={['all']}>
          <Checkbox value='all'>All Notifications</Checkbox>
          <Checkbox value='important'>Important Notifications</Checkbox>
          <Checkbox value='service'>Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Checkbox> = () => {
  return (
    <>
      <Checkbox isReadOnly>All Notifications</Checkbox>
      <Checkbox isReadOnly defaultChecked>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={['all']}>
        <Checkbox value='all'>All Notifications</Checkbox>
        <Checkbox value='important' isReadOnly>
          Important Notifications
        </Checkbox>
        <Checkbox value='service'>Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <Checkbox defaultChecked>All Notifications</Checkbox>
      </FormControl>

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <CheckboxGroup defaultValue={['all']}>
          <Checkbox value='all'>All Notifications</Checkbox>
          <Checkbox value='important'>Important Notifications</Checkbox>
          <Checkbox value='service'>Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof Checkbox> = () => {
  return (
    <>
      <Checkbox isInvalid>All Notifications</Checkbox>
      <Checkbox isInvalid defaultChecked>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={['all']}>
        <Checkbox value='all'>All Notifications</Checkbox>
        <Checkbox value='important' isInvalid>
          Important Notifications
        </Checkbox>
        <Checkbox value='service'>Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl
        isInvalid
        label='Which notifications would you like to receive?'
        errorMessage='This is required.'
      >
        <Checkbox>All Notifications</Checkbox>
      </FormControl>

      <FormControl
        isInvalid
        label='Which notifications would you like to receive?'
        errorMessage='This is required.'
      >
        <CheckboxGroup defaultValue={['all']}>
          <Checkbox value='all'>All Notifications</Checkbox>
          <Checkbox value='important'>Important Notifications</Checkbox>
          <Checkbox value='service'>Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>
  )
}

export const indeterminate: ComponentStory<typeof Checkbox> = () => {
  const [values, setValues] = useState([false, false])

  const allChecked = values.every(Boolean)
  const isIndeterminate = values.some(Boolean) && !allChecked

  return (
    <VStack gap='sm'>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setValues([e.target.checked, e.target.checked])}
      >
        地球人
      </Checkbox>

      <VStack pl='md' gap='sm'>
        <Checkbox isChecked={values[0]} onChange={(e) => setValues([e.target.checked, values[1]])}>
          孫悟空
        </Checkbox>

        <Checkbox isChecked={values[1]} onChange={(e) => setValues([values[0], e.target.checked])}>
          孫悟飯
        </Checkbox>
      </VStack>
    </VStack>
  )
}

export const group: ComponentStory<typeof Checkbox> = () => {
  return (
    <>
      <CheckboxGroup defaultValue={['孫悟空', 'ベジータ']}>
        <Checkbox value='孫悟空'>孫悟空</Checkbox>
        <Checkbox value='ベジータ'>ベジータ</Checkbox>
        <Checkbox value='フリーザ'>フリーザ</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup direction='row' defaultValue={['孫悟空', 'ベジータ']}>
        <Checkbox value='孫悟空'>孫悟空</Checkbox>
        <Checkbox value='ベジータ'>ベジータ</Checkbox>
        <Checkbox value='フリーザ'>フリーザ</Checkbox>
      </CheckboxGroup>
    </>
  )
}

export const customControl: ComponentStory<typeof Checkbox> = () => {
  const [isChecked, { toggle }] = useBoolean(false)

  return (
    <Checkbox isChecked={isChecked} onChange={toggle}>
      孫悟空
    </Checkbox>
  )
}

export const customControlGroup: ComponentStory<typeof Checkbox> = () => {
  const [value, setValue] = useState<(string | number)[]>(['孫悟空', 'ベジータ'])

  return (
    <CheckboxGroup value={value} onChange={(value) => setValue(value)}>
      <Checkbox value='孫悟空'>孫悟空</Checkbox>
      <Checkbox value='ベジータ'>ベジータ</Checkbox>
      <Checkbox value='フリーザ'>フリーザ</Checkbox>
    </CheckboxGroup>
  )
}

export const customHook: ComponentStory<typeof Checkbox> = () => {
  const CustomCheckbox: FC<any> = (props) => {
    const { getInputProps, getIconProps } = useCheckbox(props)

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

  const { getCheckboxProps } = useCheckboxGroup({ defaultValue: ['孫悟空'] })

  return (
    <HStack gap='sm'>
      <CustomCheckbox {...getCheckboxProps({ value: '孫悟空' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'ベジータ' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'フリーザ' })} />
    </HStack>
  )
}
