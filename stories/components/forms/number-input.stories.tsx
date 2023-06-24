import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Button,
  FormControl,
  HStack,
  Input,
  NumberInput,
  VStack,
  useNumberInput,
} from '@yamada-ui/react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'

export default {
  title: 'Components / Forms / NumberInput',
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>

export const basic: ComponentStory<typeof NumberInput> = () => {
  return <NumberInput placeholder='basic' />
}

export const withSize: ComponentStory<typeof NumberInput> = () => {
  return (
    <>
      <NumberInput placeholder='extra small size' size='xs' />
      <NumberInput placeholder='small size' size='sm' />
      <NumberInput placeholder='medium size' size='md' />
      <NumberInput placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof NumberInput> = () => {
  return (
    <>
      <NumberInput variant='outline' placeholder='outline' />
      <NumberInput variant='filled' placeholder='filled' />
      <NumberInput variant='flushed' placeholder='flushed' />
      <NumberInput variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withBorderColor: ComponentStory<typeof NumberInput> = () => {
  return (
    <>
      <NumberInput disabled placeholder='default border color' />
      <NumberInput focusBorderColor='green.500' placeholder='custom border color' />
      <NumberInput isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof NumberInput> = () => {
  return <NumberInput defaultValue={18} />
}

export const withMinMax: ComponentStory<typeof NumberInput> = () => {
  return <NumberInput defaultValue={18} min={8} max={31} />
}

export const withStep: ComponentStory<typeof NumberInput> = () => {
  return <NumberInput defaultValue={15} step={5} min={5} max={30} />
}

export const withPrecision: ComponentStory<typeof NumberInput> = () => {
  return <NumberInput defaultValue={15} precision={2} step={0.2} />
}

export const disabledClampValueOnBlur: ComponentStory<typeof NumberInput> = () => {
  return <NumberInput defaultValue={15} max={30} clampValueOnBlur={false} />
}

export const disabledKeepWithinRange: ComponentStory<typeof NumberInput> = () => {
  return <NumberInput defaultValue={15} max={30} keepWithinRange={false} clampValueOnBlur={false} />
}

export const isDisabled: ComponentStory<typeof NumberInput> = () => {
  return (
    <>
      <NumberInput isDisabled variant='outline' placeholder='outline' />
      <NumberInput isDisabled variant='filled' placeholder='filled' />
      <NumberInput isDisabled variant='flushed' placeholder='flushed' />
      <NumberInput isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl
        isDisabled
        label='Order quantity'
        helperMessage='Please enter the quantity you wish to order.'
      >
        <NumberInput />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof NumberInput> = () => {
  return (
    <>
      <NumberInput isReadOnly variant='outline' placeholder='outline' />
      <NumberInput isReadOnly variant='filled' placeholder='filled' />
      <NumberInput isReadOnly variant='flushed' placeholder='flushed' />
      <NumberInput isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl
        isReadOnly
        label='Order quantity'
        helperMessage='Please enter the quantity you wish to order.'
      >
        <NumberInput />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof NumberInput> = () => {
  return (
    <>
      <NumberInput isInvalid variant='outline' placeholder='outline' />
      <NumberInput isInvalid variant='filled' placeholder='filled' />
      <NumberInput isInvalid variant='flushed' placeholder='flushed' />
      <NumberInput isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='Order quantity' errorMessage='Order quantity is required.'>
        <NumberInput />
      </FormControl>
    </>
  )
}

export const costomStepper: ComponentStory<typeof NumberInput> = () => {
  return (
    <NumberInput increment={{ px: 'xs', children: '+' }} decrement={{ px: 'xs', children: '-' }} />
  )
}

export const costomComponent: ComponentStory<typeof NumberInput> = () => {
  const { getInputProps, getIncrementProps, getDecrementProps } = useNumberInput({
    step: 0.01,
    defaultValue: 3.14,
    min: 3,
    max: 4,
    precision: 2,
  })

  return (
    <HStack maxW='xs' gap='sm'>
      <Button {...getIncrementProps()}>+</Button>
      <Input {...getInputProps()} />
      <Button {...getDecrementProps()}>-</Button>
    </HStack>
  )
}

export const stylingPlaceholder: ComponentStory<typeof NumberInput> = () => {
  return (
    <>
      <NumberInput placeholder='default placeholder' />
      <NumberInput
        placeholder='custom placeholder'
        _placeholder={{ opacity: 1, color: 'gray.500' }}
      />
      <NumberInput
        color='green.500'
        placeholder='custom placeholder'
        _placeholder={{ color: 'inherit' }}
      />
    </>
  )
}

export const reactHookForm: ComponentStory<typeof NumberInput> = () => {
  type Data = { numberInput: string }

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
        isInvalid={!!errors.numberInput}
        label='Age'
        errorMessage={errors.numberInput?.message}
      >
        <Controller
          name='numberInput'
          control={control}
          rules={{
            required: { value: true, message: 'This is required.' },
            max: { value: 5, message: 'The maximum value is 5.' },
          }}
          render={({ field }) => <NumberInput {...field} />}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: ComponentStory<typeof NumberInput> = () => {
  type Data = { numberInput: string }

  const defaultValues: Data = {
    numberInput: '5',
  }

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
        isInvalid={!!errors.numberInput}
        label='Age'
        errorMessage={errors.numberInput?.message}
      >
        <Controller
          name='numberInput'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => <NumberInput {...field} />}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}
