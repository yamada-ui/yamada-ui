import { faCaretDown, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  MultiAutocomplete,
  AutocompleteOptionGroup,
  AutocompleteOption,
  UIOption,
  Tag,
  FormControl,
  FontAwesomeIcon,
} from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Forms / MultiAutocomplete',
  component: MultiAutocomplete,
} as ComponentMeta<typeof MultiAutocomplete>

export const basic: ComponentStory<typeof MultiAutocomplete> = () => {
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
      <MultiAutocomplete placeholder='キャラクターを選択'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete placeholder='キャラクターを選択'>
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
      </MultiAutocomplete>

      <MultiAutocomplete placeholder='キャラクターを選択' data={data} />
    </>
  )
}

export const withSize: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <>
      <MultiAutocomplete placeholder='extra small size' size='xs' />
      <MultiAutocomplete placeholder='small size' size='sm' />
      <MultiAutocomplete placeholder='medium size' size='md' />
      <MultiAutocomplete placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <>
      <MultiAutocomplete variant='outline' placeholder='outline' />
      <MultiAutocomplete variant='filled' placeholder='filled' />
      <MultiAutocomplete variant='flushed' placeholder='flushed' />
      <MultiAutocomplete variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' defaultValue={['ベジータ']}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withEmptyMessage: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' emptyMessage='キャラクターが存在しません'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withCreateOption: ComponentStory<typeof MultiAutocomplete> = () => {
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
    <MultiAutocomplete
      placeholder='キャラクターを選択'
      data={data}
      createOption
      onCreate={(newOption, newOptions) =>
        console.log('created option', newOption, 'new options', newOptions)
      }
    />
  )
}

export const withCreateOrder: ComponentStory<typeof MultiAutocomplete> = () => {
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
      <MultiAutocomplete
        placeholder='キャラクターを選択'
        data={data}
        createOption
        createOrder='first'
      />
      <MultiAutocomplete
        placeholder='キャラクターを選択'
        data={data}
        createOption
        createOrder='last'
      />
      <MultiAutocomplete
        placeholder='キャラクターを選択'
        data={data}
        createOption
        createOrder='地球人'
      />
      <MultiAutocomplete
        placeholder='キャラクターを選択'
        data={data}
        createOption
        createOrder='フリーザ軍'
        createSecondOrder='last'
      />
    </>
  )
}

export const withBorderColor: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <>
      <MultiAutocomplete placeholder='default border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete focusBorderColor='green.500' placeholder='custom border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete isInvalid errorBorderColor='orange.500' placeholder='custom border color'>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>
  )
}

export const withSeparator: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' separator=';'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withComponent: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <>
      <MultiAutocomplete
        placeholder='キャラクターを選択'
        component={({ displayValue }) => <Tag>{displayValue}</Tag>}
      >
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete
        placeholder='キャラクターを選択'
        component={({ displayValue, onRemove }) => (
          <Tag onCloseClick={onRemove}>{displayValue}</Tag>
        )}
      >
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>
  )
}

export const withOmitSelectedValues: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' omitSelectedValues={true}>
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
    </MultiAutocomplete>
  )
}

export const withMaxSelectedValues: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' maxSelectedValues={3}>
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
    </MultiAutocomplete>
  )
}

export const withCloseOnSelect: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' closeOnSelect={true}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const disabledIsClearable: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' isClearable={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const disabledCloseOnBlur: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' closeOnBlur={false}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withPlacement: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' placement='right-start' maxW='xs'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withOffset: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' offset={[16, 16]} list={{ maxW: 'xs' }}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withGutter: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' gutter={32}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const withDuration: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択' duration={0.4}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const isDisabled: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <>
      <MultiAutocomplete isDisabled variant='outline' placeholder='outline' />
      <MultiAutocomplete isDisabled variant='filled' placeholder='filled' />
      <MultiAutocomplete isDisabled variant='flushed' placeholder='flushed' />
      <MultiAutocomplete isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <MultiAutocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <>
      <MultiAutocomplete isReadOnly variant='outline' placeholder='outline' />
      <MultiAutocomplete isReadOnly variant='filled' placeholder='filled' />
      <MultiAutocomplete isReadOnly variant='flushed' placeholder='flushed' />
      <MultiAutocomplete isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <MultiAutocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <>
      <MultiAutocomplete isInvalid variant='outline' placeholder='outline' />
      <MultiAutocomplete isInvalid variant='filled' placeholder='filled' />
      <MultiAutocomplete isInvalid variant='flushed' placeholder='flushed' />
      <MultiAutocomplete isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl
        isInvalid
        label='Which notifications would you like to receive?'
        errorMessage='This is required.'
      >
        <MultiAutocomplete placeholder='Autocomplete notifications' />
      </FormControl>
    </>
  )
}

export const isOptionDisabled: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const isOptionFocusable: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete placeholder='キャラクターを選択'>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ' isDisabled isFocusable>
        ベジータ
      </AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const customIcon: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <>
      <MultiAutocomplete placeholder='キャラクターを選択' icon={{ color: 'primary' }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete
        placeholder='キャラクターを選択'
        icon={{ children: <FontAwesomeIcon icon={faCaretDown} /> }}
      >
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>
  )
}

export const customClearIcon: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <MultiAutocomplete
      placeholder='キャラクターを選択'
      clearIcon={{ children: <FontAwesomeIcon icon={faTrash} w='0.5em' /> }}
    >
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}

export const customOption: ComponentStory<typeof MultiAutocomplete> = () => {
  return (
    <>
      <MultiAutocomplete placeholder='キャラクターを選択' option={{ color: 'primary' }}>
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>

      <MultiAutocomplete
        placeholder='キャラクターを選択'
        option={{ icon: <FontAwesomeIcon icon={faCheck} color='green.500' /> }}
      >
        <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
        <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
        <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
      </MultiAutocomplete>
    </>
  )
}

export const customControl: ComponentStory<typeof MultiAutocomplete> = () => {
  const [value, onChange] = useState<(string | number)[]>(['孫悟空'])

  return (
    <MultiAutocomplete placeholder='キャラクターを選択' value={value} onChange={onChange}>
      <AutocompleteOption value='孫悟空'>孫悟空</AutocompleteOption>
      <AutocompleteOption value='ベジータ'>ベジータ</AutocompleteOption>
      <AutocompleteOption value='フリーザ'>フリーザ</AutocompleteOption>
    </MultiAutocomplete>
  )
}
