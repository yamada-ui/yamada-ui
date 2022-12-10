import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  ui,
  Checkbox,
  CheckboxGroup,
  FormControl,
  Text,
  useBoolean,
  useCheckbox,
  useCheckboxGroup,
  VStack,
  Wrap,
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
      <Checkbox isDisabled>Yes</Checkbox>
      <Checkbox isDisabled defaultChecked>
        Yes
      </Checkbox>

      <FormControl isDisabled label='Do you wish to receive email notifications?'>
        <Checkbox defaultChecked>Yes</Checkbox>
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Checkbox> = () => {
  return (
    <>
      <Checkbox isReadOnly>Yes</Checkbox>
      <Checkbox isReadOnly defaultChecked>
        Yes
      </Checkbox>

      <FormControl isReadOnly label='Do you wish to receive email notifications?'>
        <Checkbox defaultChecked>Yes</Checkbox>
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof Checkbox> = () => {
  return (
    <>
      <Checkbox isInvalid>Yes</Checkbox>
      <Checkbox isInvalid defaultChecked>
        Yes
      </Checkbox>

      <FormControl
        isInvalid
        label='Do you wish to receive email notifications?'
        errorMessage='This is required.'
      >
        <Checkbox>Yes</Checkbox>
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

export const checkboxGroup: ComponentStory<typeof Checkbox> = () => {
  return (
    <CheckboxGroup defaultValue={['孫悟空', 'ベジータ']}>
      <Checkbox value='孫悟空'>孫悟空</Checkbox>
      <Checkbox value='ベジータ'>ベジータ</Checkbox>
      <Checkbox value='フリーザ'>フリーザ</Checkbox>
    </CheckboxGroup>
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

export const useHook: ComponentStory<typeof Checkbox> = () => {
  const CustomCheckbox: FC<any> = (props) => {
    const { isChecked, getContainerProps, getInputProps, getLabelProps } = useCheckbox(props)

    return (
      <ui.label
        py='xs'
        px='sm'
        rounded='md'
        maxW='2xs'
        border='3px solid'
        borderColor={isChecked ? ['green.500', 'blue.500'] : ['gray.100', 'gray.700']}
        bg={['gray.100', 'gray.700']}
        cursor='pointer'
        {...getContainerProps()}
      >
        <ui.input hidden {...getInputProps()} />

        <Text {...getLabelProps()}>{props.value}</Text>
      </ui.label>
    )
  }

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['孫悟空'],
  })

  return (
    <VStack>
      <Text>Selected character: {value.join(', ')}</Text>
      <CustomCheckbox {...getCheckboxProps({ value: '孫悟空' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'ベジータ' })} />
      <CustomCheckbox {...getCheckboxProps({ value: 'フリーザ' })} />
    </VStack>
  )
}
