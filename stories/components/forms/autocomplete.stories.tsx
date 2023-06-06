import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import {
  Autocomplete,
  AutocompleteOptionGroup,
  AutocompleteOption,
  UIOption,
  FormControl,
} from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Forms / Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>

export const basic: ComponentStory<typeof Autocomplete> = () => {
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
      <Autocomplete placeholder='キャラクターを選択'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete placeholder='キャラクターを選択'>
        <AutocompleteOptionGroup label='地球人'>
          <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
          <AutocompleteOption value='孫悟飯'>孫悟飯</AutocompleteOption>
          <AutocompleteOption value='クリリン'>クリリン</AutocompleteOption>
        </AutocompleteOptionGroup>

        <AutocompleteOptionGroup label='フリーザ軍'>
          <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
          <AutocompleteOption value='ギニュー'>ギニュー</AutocompleteOption>
          <AutocompleteOption value='リクーム'>リクーム</AutocompleteOption>
          <AutocompleteOption value='バータ'>バータ</AutocompleteOption>
          <AutocompleteOption value='ジース'>ジース</AutocompleteOption>
          <AutocompleteOption value='グルド'>グルド</AutocompleteOption>
        </AutocompleteOptionGroup>
      </Autocomplete>

      <Autocomplete placeholder='キャラクターを選択' data={data} />
    </>
  )
}

export const withSize: ComponentStory<typeof Autocomplete> = () => {
  return (
    <>
      <Autocomplete placeholder='extra small size' size='xs' />
      <Autocomplete placeholder='small size' size='sm' />
      <Autocomplete placeholder='medium size' size='md' />
      <Autocomplete placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof Autocomplete> = () => {
  return (
    <>
      <Autocomplete variant='outline' placeholder='outline' />
      <Autocomplete variant='filled' placeholder='filled' />
      <Autocomplete variant='flushed' placeholder='flushed' />
      <Autocomplete variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択' defaultValue='ベジータ'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withEmptyMessage: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択' emptyMessage='キャラクターが存在しません'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withCreateOption: ComponentStory<typeof Autocomplete> = () => {
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
    <Autocomplete
      placeholder='キャラクターを選択'
      data={data}
      createOption
      onCreate={(newOption, newOptions) =>
        console.log('created option', newOption, 'new options', newOptions)
      }
    />
  )
}

export const withCreateOrder: ComponentStory<typeof Autocomplete> = () => {
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
      <Autocomplete placeholder='キャラクターを選択' data={data} createOption createOrder='first' />
      <Autocomplete placeholder='キャラクターを選択' data={data} createOption createOrder='last' />
      <Autocomplete
        placeholder='キャラクターを選択'
        data={data}
        createOption
        createOrder='地球人'
      />
      <Autocomplete
        placeholder='キャラクターを選択'
        data={data}
        createOption
        createOrder='フリーザ軍'
        createSecondOrder='last'
      />
    </>
  )
}

export const withBorderColor: ComponentStory<typeof Autocomplete> = () => {
  return (
    <>
      <Autocomplete placeholder='default border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete focusBorderColor='green.500' placeholder='custom border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete isInvalid errorBorderColor='orange.500' placeholder='custom border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>
    </>
  )
}

export const disabledCloseOnSelect: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択' closeOnSelect={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const disabledCloseOnBlur: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択' closeOnBlur={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withPlacement: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択' placement='right-start' maxW='xs'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withOffset: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択' offset={[16, 16]} listProps={{ maxW: 'xs' }}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withGutter: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択' gutter={32}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const withDuration: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択' duration={0.4}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const isDisabled: ComponentStory<typeof Autocomplete> = () => {
  return (
    <>
      <Autocomplete isDisabled variant='outline' placeholder='outline' />
      <Autocomplete isDisabled variant='filled' placeholder='filled' />
      <Autocomplete isDisabled variant='flushed' placeholder='flushed' />
      <Autocomplete isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <Autocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Autocomplete> = () => {
  return (
    <>
      <Autocomplete isReadOnly variant='outline' placeholder='outline' />
      <Autocomplete isReadOnly variant='filled' placeholder='filled' />
      <Autocomplete isReadOnly variant='flushed' placeholder='flushed' />
      <Autocomplete isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <Autocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof Autocomplete> = () => {
  return (
    <>
      <Autocomplete isInvalid variant='outline' placeholder='outline' />
      <Autocomplete isInvalid variant='filled' placeholder='filled' />
      <Autocomplete isInvalid variant='flushed' placeholder='flushed' />
      <Autocomplete isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl
        isInvalid
        label='Which notifications would you like to receive?'
        errorMessage='This is required.'
      >
        <Autocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>
  )
}

export const isOptionDisabled: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const isOptionFocusable: ComponentStory<typeof Autocomplete> = () => {
  return (
    <Autocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}

export const customIcon: ComponentStory<typeof Autocomplete> = () => {
  return (
    <>
      <Autocomplete placeholder='キャラクターを選択' iconProps={{ color: 'primary' }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete
        placeholder='キャラクターを選択'
        iconProps={{ children: <Icon icon={faCaretDown} /> }}
      >
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>
    </>
  )
}

export const customOption: ComponentStory<typeof Autocomplete> = () => {
  return (
    <>
      <Autocomplete placeholder='キャラクターを選択' optionProps={{ color: 'primary' }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>

      <Autocomplete
        placeholder='キャラクターを選択'
        optionProps={{ icon: <Icon icon={faCheck} color='green.500' /> }}
      >
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </Autocomplete>
    </>
  )
}

export const customControl: ComponentStory<typeof Autocomplete> = () => {
  const [value, onChange] = useState<string>('孫悟空')

  return (
    <Autocomplete placeholder='キャラクターを選択' value={value} onChange={onChange}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </Autocomplete>
  )
}
