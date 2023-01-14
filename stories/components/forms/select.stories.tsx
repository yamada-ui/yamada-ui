import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Select,
  OptionGroup,
  Option,
  UIOption,
  FormControl,
  FontAwesomeIcon,
} from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Forms / Select',
  component: Select,
} as ComponentMeta<typeof Select>

export const basic: ComponentStory<typeof Select> = () => {
  const data: UIOption[] = [
    { label: 'ベジータ', value: 'ベジータ' },
    {
      label: '地球人',
      value: [
        { label: '孫悟空', value: '孫悟空' },
        { label: '孫悟飯', value: '孫悟飯' },
        { label: 'クリリン', value: 'クリリン' },
      ],
    },
    {
      label: 'フリーザ軍',
      value: [
        { label: 'フリーザ', value: 'フリーザ' },
        { label: 'ギニュー', value: 'ギニュー' },
        { label: 'リクーム', value: 'リクーム' },
        { label: 'バータ', value: 'バータ' },
        { label: 'ジース', value: 'ジース' },
        { label: 'グルド', value: 'グルド' },
      ],
    },
  ]

  return (
    <>
      <Select placeholder='キャラクターを選択'>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </Select>

      <Select placeholder='キャラクターを選択'>
        <OptionGroup label='地球人'>
          <Option value='孫悟空'>孫悟空</Option>
          <Option value='孫悟飯'>孫悟飯</Option>
          <Option value='クリリン'>クリリン</Option>
        </OptionGroup>

        <OptionGroup label='フリーザ軍'>
          <Option value='フリーザ'>フリーザ</Option>
          <Option value='ギニュー'>ギニュー</Option>
          <Option value='リクーム'>リクーム</Option>
          <Option value='バータ'>バータ</Option>
          <Option value='ジース'>ジース</Option>
          <Option value='グルド'>グルド</Option>
        </OptionGroup>
      </Select>

      <Select placeholder='キャラクターを選択' data={data} />
    </>
  )
}

export const withSize: ComponentStory<typeof Select> = () => {
  return (
    <>
      <Select placeholder='extra small size' size='xs' />
      <Select placeholder='small size' size='sm' />
      <Select placeholder='medium size' size='md' />
      <Select placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof Select> = () => {
  return (
    <>
      <Select variant='outline' placeholder='outline' />
      <Select variant='filled' placeholder='filled' />
      <Select variant='flushed' placeholder='flushed' />
      <Select variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択' defaultValue='ベジータ'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withBorderColor: ComponentStory<typeof Select> = () => {
  return (
    <>
      <Select placeholder='default border color' />
      <Select focusBorderColor='green.500' placeholder='custom border color' />
      <Select isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>
  )
}

export const disabledPlaceholderHidden: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択' isPlaceholderHidden={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const disabledCloseOnSelect: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択' closeOnSelect={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const disabledCloseOnBlur: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択' closeOnBlur={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withPlacement: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択' placement='right-start' maxW='xs'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withOffset: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択' offset={[16, 16]} list={{ maxW: 'xs' }}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withGutter: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択' gutter={32}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withDuration: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択' duration={0.4}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const isDisabled: ComponentStory<typeof Select> = () => {
  return (
    <>
      <Select isDisabled variant='outline' placeholder='outline' />
      <Select isDisabled variant='filled' placeholder='filled' />
      <Select isDisabled variant='flushed' placeholder='flushed' />
      <Select isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <Select placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Select> = () => {
  return (
    <>
      <Select isReadOnly variant='outline' placeholder='outline' />
      <Select isReadOnly variant='filled' placeholder='filled' />
      <Select isReadOnly variant='flushed' placeholder='flushed' />
      <Select isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <Select placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof Select> = () => {
  return (
    <>
      <Select isInvalid variant='outline' placeholder='outline' />
      <Select isInvalid variant='filled' placeholder='filled' />
      <Select isInvalid variant='flushed' placeholder='flushed' />
      <Select isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl
        isInvalid
        label='Which notifications would you like to receive?'
        errorMessage='This is required.'
      >
        <Select placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isOptionDisabled: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ' isDisabled>
        ベジータ
      </Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const isOptionFocusable: ComponentStory<typeof Select> = () => {
  return (
    <Select placeholder='キャラクターを選択'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ' isDisabled isFocusable>
        ベジータ
      </Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const customIcon: ComponentStory<typeof Select> = () => {
  return (
    <>
      <Select placeholder='キャラクターを選択' icon={{ color: 'primary' }}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </Select>

      <Select
        placeholder='キャラクターを選択'
        icon={{ children: <FontAwesomeIcon icon={faCaretDown} /> }}
      >
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </Select>
    </>
  )
}

export const customOption: ComponentStory<typeof Select> = () => {
  return (
    <>
      <Select placeholder='キャラクターを選択' option={{ color: 'primary' }}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </Select>

      <Select
        placeholder='キャラクターを選択'
        option={{ icon: <FontAwesomeIcon icon={faCheck} color='green.500' /> }}
      >
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </Select>
    </>
  )
}

export const customControl: ComponentStory<typeof Select> = () => {
  const [value, onChange] = useState<string | number>('孫悟空')

  return (
    <Select placeholder='キャラクターを選択' value={value} onChange={onChange}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}
