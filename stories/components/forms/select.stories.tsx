import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Meta, StoryFn } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import {
  Select,
  OptionGroup,
  Option,
  UIOption,
  FormControl,
  VStack,
  Button,
} from '@yamada-ui/react'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Story = StoryFn<typeof Select>

const meta: Meta<typeof Select> = {
  title: 'Components / Forms / Select',
  component: Select,
}

export default meta

export const basic: Story = () => {
  const options: UIOption[] = [
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

      <Select placeholder='キャラクターを選択' options={options} />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Select placeholder='extra small size' size='xs' />
      <Select placeholder='small size' size='sm' />
      <Select placeholder='medium size' size='md' />
      <Select placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Select variant='outline' placeholder='outline' />
      <Select variant='filled' placeholder='filled' />
      <Select variant='flushed' placeholder='flushed' />
      <Select variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withDefaultValue: Story = () => {
  return (
    <Select placeholder='キャラクターを選択' defaultValue='ベジータ'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <Select placeholder='default border color' />
      <Select focusBorderColor='green.500' placeholder='custom border color' />
      <Select
        isInvalid
        errorBorderColor='orange.500'
        placeholder='custom border color'
      />
    </>
  )
}

export const disabledPlaceholderInOptions: Story = () => {
  return (
    <Select placeholder='キャラクターを選択' placeholderInOptions={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const disabledCloseOnSelect: Story = () => {
  return (
    <Select placeholder='キャラクターを選択' closeOnSelect={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const disabledCloseOnBlur: Story = () => {
  return (
    <Select placeholder='キャラクターを選択' closeOnBlur={false}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withPlacement: Story = () => {
  return (
    <Select placeholder='キャラクターを選択' placement='right-start' maxW='xs'>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withOffset: Story = () => {
  return (
    <Select
      placeholder='キャラクターを選択'
      offset={[16, 16]}
      listProps={{ maxW: 'xs' }}
    >
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withGutter: Story = () => {
  return (
    <Select placeholder='キャラクターを選択' gutter={32}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const withDuration: Story = () => {
  return (
    <Select placeholder='キャラクターを選択' duration={0.4}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Select isDisabled variant='outline' placeholder='outline' />
      <Select isDisabled variant='filled' placeholder='filled' />
      <Select isDisabled variant='flushed' placeholder='flushed' />
      <Select isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl
        isDisabled
        label='Which notifications would you like to receive?'
      >
        <Select placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Select isReadOnly variant='outline' placeholder='outline' />
      <Select isReadOnly variant='filled' placeholder='filled' />
      <Select isReadOnly variant='flushed' placeholder='flushed' />
      <Select isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl
        isReadOnly
        label='Which notifications would you like to receive?'
      >
        <Select placeholder='Select notifications' />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
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

export const isOptionDisabled: Story = () => {
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

export const isOptionFocusable: Story = () => {
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

export const customIcon: Story = () => {
  return (
    <>
      <Select placeholder='キャラクターを選択' iconProps={{ color: 'primary' }}>
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </Select>

      <Select
        placeholder='キャラクターを選択'
        iconProps={{ children: <Icon icon={faCaretDown} /> }}
      >
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </Select>
    </>
  )
}

export const customOption: Story = () => {
  return (
    <>
      <Select
        placeholder='キャラクターを選択'
        optionProps={{ color: 'primary' }}
      >
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </Select>

      <Select
        placeholder='キャラクターを選択'
        optionProps={{ icon: <Icon icon={faCheck} color='green.500' /> }}
      >
        <Option value='孫悟空'>孫悟空</Option>
        <Option value='ベジータ'>ベジータ</Option>
        <Option value='フリーザ'>フリーザ</Option>
      </Select>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string>('孫悟空')

  return (
    <Select placeholder='キャラクターを選択' value={value} onChange={onChange}>
      <Option value='孫悟空'>孫悟空</Option>
      <Option value='ベジータ'>ベジータ</Option>
      <Option value='フリーザ'>フリーザ</Option>
    </Select>
  )
}

export const reactHookForm: Story = () => {
  type Data = { select1: string; select2: string; select3: string }

  const options: UIOption[] = [
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

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log('submit:', data)

  console.log('watch:', watch())

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.select1}
        label='Who is your favorite character?'
        errorMessage={errors.select1?.message}
      >
        <Controller
          name='select1'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => (
            <Select placeholder='キャラクターを選択' {...field}>
              <Option value='孫悟空'>孫悟空</Option>
              <Option value='ベジータ'>ベジータ</Option>
              <Option value='フリーザ'>フリーザ</Option>
            </Select>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.select2}
        label='Who is your favorite character?'
        errorMessage={errors.select2?.message}
      >
        <Controller
          name='select2'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => (
            <Select placeholder='キャラクターを選択' {...field}>
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
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.select3}
        label='Who is your favorite character?'
        errorMessage={errors.select3?.message}
      >
        <Controller
          name='select3'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => (
            <Select
              placeholder='キャラクターを選択'
              {...field}
              options={options}
            />
          )}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  type Data = { select1: string; select2: string; select3: string }

  const defaultValues: Data = {
    select1: '孫悟空',
    select2: 'フリーザ',
    select3: 'リクーム',
  }

  const options: UIOption[] = [
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

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log('submit:', data)

  console.log('watch:', watch())

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.select1}
        label='Who is your favorite character?'
        errorMessage={errors.select1?.message}
      >
        <Controller
          name='select1'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => (
            <Select placeholder='キャラクターを選択' {...field}>
              <Option value='孫悟空'>孫悟空</Option>
              <Option value='ベジータ'>ベジータ</Option>
              <Option value='フリーザ'>フリーザ</Option>
            </Select>
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.select2}
        label='Who is your favorite character?'
        errorMessage={errors.select2?.message}
      >
        <Controller
          name='select2'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => (
            <Select placeholder='キャラクターを選択' {...field}>
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
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.select3}
        label='Who is your favorite character?'
        errorMessage={errors.select3?.message}
      >
        <Controller
          name='select3'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => (
            <Select
              placeholder='キャラクターを選択'
              {...field}
              options={options}
            />
          )}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}
