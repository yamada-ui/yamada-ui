import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FontAwesomeIcon, FormControl, NativeSelect } from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Forms / NativeSelect',
  component: NativeSelect,
} as ComponentMeta<typeof NativeSelect>

export const basic: ComponentStory<typeof NativeSelect> = () => {
  return (
    <NativeSelect placeholder='キャラクターを選択'>
      <option value='孫悟空'>孫悟空</option>
      <option value='ベジータ'>ベジータ</option>
      <option value='フリーザ'>フリーザ</option>
    </NativeSelect>
  )
}

export const withSize: ComponentStory<typeof NativeSelect> = () => {
  return (
    <>
      <NativeSelect placeholder='extra small size' size='xs' />
      <NativeSelect placeholder='small size' size='sm' />
      <NativeSelect placeholder='medium size' size='md' />
      <NativeSelect placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof NativeSelect> = () => {
  return (
    <>
      <NativeSelect variant='outline' placeholder='outline' />
      <NativeSelect variant='filled' placeholder='filled' />
      <NativeSelect variant='flushed' placeholder='flushed' />
      <NativeSelect variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withBorderColor: ComponentStory<typeof NativeSelect> = () => {
  return (
    <>
      <NativeSelect placeholder='default border color' />
      <NativeSelect focusBorderColor='green.500' placeholder='custom border color' />
      <NativeSelect isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>
  )
}

export const isDisabled: ComponentStory<typeof NativeSelect> = () => {
  return (
    <>
      <NativeSelect isDisabled variant='outline' placeholder='outline' />
      <NativeSelect isDisabled variant='filled' placeholder='filled' />
      <NativeSelect isDisabled variant='flushed' placeholder='flushed' />
      <NativeSelect isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <NativeSelect placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof NativeSelect> = () => {
  return (
    <>
      <NativeSelect isReadOnly variant='outline' placeholder='outline' />
      <NativeSelect isReadOnly variant='filled' placeholder='filled' />
      <NativeSelect isReadOnly variant='flushed' placeholder='flushed' />
      <NativeSelect isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <NativeSelect placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof NativeSelect> = () => {
  return (
    <>
      <NativeSelect isInvalid variant='outline' placeholder='outline' />
      <NativeSelect isInvalid variant='filled' placeholder='filled' />
      <NativeSelect isInvalid variant='flushed' placeholder='flushed' />
      <NativeSelect isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl
        isInvalid
        label='Which notifications would you like to receive?'
        errorMessage='This is required.'
      >
        <NativeSelect placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const customIcon: ComponentStory<typeof NativeSelect> = () => {
  return (
    <>
      <NativeSelect placeholder='キャラクターを選択' icon={{ color: 'primary' }}>
        <option value='孫悟空'>孫悟空</option>
        <option value='ベジータ'>ベジータ</option>
        <option value='フリーザ'>フリーザ</option>
      </NativeSelect>

      <NativeSelect
        placeholder='キャラクターを選択'
        icon={{ children: <FontAwesomeIcon icon={faCaretDown} /> }}
      >
        <option value='孫悟空'>孫悟空</option>
        <option value='ベジータ'>ベジータ</option>
        <option value='フリーザ'>フリーザ</option>
      </NativeSelect>
    </>
  )
}

export const customControl: ComponentStory<typeof NativeSelect> = () => {
  const [value, setValue] = useState<string>('孫悟空')

  return (
    <NativeSelect
      placeholder='キャラクターを選択'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value='孫悟空'>孫悟空</option>
      <option value='ベジータ'>ベジータ</option>
      <option value='フリーザ'>フリーザ</option>
    </NativeSelect>
  )
}
