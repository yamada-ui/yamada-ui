import { faCaretDown, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  MultiSelect,
  OptionGroup,
  Option,
  UIOption,
  FormControl,
  FontAwesomeIcon,
  Tag,
} from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Forms / Multi MultiSelect',
  component: MultiSelect,
} as ComponentMeta<typeof MultiSelect>

export const basic: ComponentStory<typeof MultiSelect> = () => {
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
      <MultiSelect placeholder='キャラクターを選択'>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>

      <MultiSelect placeholder='キャラクターを選択'>
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
      </MultiSelect>

      <MultiSelect placeholder='キャラクターを選択' data={data} />
    </>
  )
}

export const withSize: ComponentStory<typeof MultiSelect> = () => {
  return (
    <>
      <MultiSelect placeholder='extra small size' size='xs' />
      <MultiSelect placeholder='small size' size='sm' />
      <MultiSelect placeholder='medium size' size='md' />
      <MultiSelect placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof MultiSelect> = () => {
  return (
    <>
      <MultiSelect variant='outline' placeholder='outline' />
      <MultiSelect variant='filled' placeholder='filled' />
      <MultiSelect variant='flushed' placeholder='flushed' />
      <MultiSelect variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' defaultValue={['ベジータ']}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const withBorderColor: ComponentStory<typeof MultiSelect> = () => {
  return (
    <>
      <MultiSelect placeholder='default border color' />
      <MultiSelect focusBorderColor='green.500' placeholder='custom border color' />
      <MultiSelect isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>
  )
}

export const withSeparator: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' separator=';'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const withTag: ComponentStory<typeof MultiSelect> = () => {
  return (
    <>
      <MultiSelect
        placeholder='キャラクターを選択'
        component={({ displayValue }) => <Tag>{displayValue}</Tag>}
      >
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>

      <MultiSelect
        placeholder='キャラクターを選択'
        component={({ displayValue, onRemove }) => (
          <Tag onCloseClick={onRemove}>{displayValue}</Tag>
        )}
      >
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>
    </>
  )
}

export const withFormat: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect
      placeholder='キャラクターを選択'
      format={(value, index) => `${index + 1}: ${value}`}
    >
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const withOmitSelectedValues: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' omitSelectedValues={true}>
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
    </MultiSelect>
  )
}

export const withMaxSelectedValues: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' maxSelectedValues={3}>
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
    </MultiSelect>
  )
}

export const withCloseOnSelect: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' closeOnSelect={true}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const disabledIsClearable: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' isClearable={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const disabledCloseOnBlur: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' closeOnBlur={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const withPlacement: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' placement='right-start' maxW='xs'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const withOffset: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' offset={[16, 16]} list={{ maxW: 'xs' }}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const withGutter: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' gutter={32}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const withDuration: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択' duration={0.4}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const isDisabled: ComponentStory<typeof MultiSelect> = () => {
  return (
    <>
      <MultiSelect isDisabled variant='outline' placeholder='outline' />
      <MultiSelect isDisabled variant='filled' placeholder='filled' />
      <MultiSelect isDisabled variant='flushed' placeholder='flushed' />
      <MultiSelect isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <MultiSelect placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof MultiSelect> = () => {
  return (
    <>
      <MultiSelect isReadOnly variant='outline' placeholder='outline' />
      <MultiSelect isReadOnly variant='filled' placeholder='filled' />
      <MultiSelect isReadOnly variant='flushed' placeholder='flushed' />
      <MultiSelect isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <MultiSelect placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof MultiSelect> = () => {
  return (
    <>
      <MultiSelect isInvalid variant='outline' placeholder='outline' />
      <MultiSelect isInvalid variant='filled' placeholder='filled' />
      <MultiSelect isInvalid variant='flushed' placeholder='flushed' />
      <MultiSelect isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl
        isInvalid
        label='Which notifications would you like to receive?'
        errorMessage='This is required.'
      >
        <MultiSelect placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isOptionDisabled: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ' isDisabled>
        ベジータ
      </Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const isOptionFocusable: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect placeholder='キャラクターを選択'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ' isDisabled isFocusable>
        ベジータ
      </Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const customIcon: ComponentStory<typeof MultiSelect> = () => {
  return (
    <>
      <MultiSelect placeholder='キャラクターを選択' icon={{ color: 'primary' }}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>

      <MultiSelect
        placeholder='キャラクターを選択'
        icon={{ children: <FontAwesomeIcon icon={faCaretDown} /> }}
      >
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>
    </>
  )
}

export const customClearIcon: ComponentStory<typeof MultiSelect> = () => {
  return (
    <MultiSelect
      placeholder='キャラクターを選択'
      clearIcon={{ children: <FontAwesomeIcon icon={faTrash} w='0.5em' /> }}
    >
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}

export const customOption: ComponentStory<typeof MultiSelect> = () => {
  return (
    <>
      <MultiSelect placeholder='キャラクターを選択' option={{ color: 'primary' }}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>

      <MultiSelect
        placeholder='キャラクターを選択'
        option={{ icon: <FontAwesomeIcon icon={faCheck} color='green.500' /> }}
      >
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </MultiSelect>
    </>
  )
}

export const customControl: ComponentStory<typeof MultiSelect> = () => {
  const [value, onChange] = useState<(string | number)[]>(['孫悟空'])

  return (
    <MultiSelect placeholder='キャラクターを選択' value={value} onChange={onChange}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </MultiSelect>
  )
}
