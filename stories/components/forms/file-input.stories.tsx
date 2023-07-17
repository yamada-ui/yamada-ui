import { faClose, faFile } from '@fortawesome/free-solid-svg-icons'
import { Meta, StoryFn } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import {
  FileInput,
  FormControl,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Tag,
  Text,
  Button,
  VStack,
} from '@yamada-ui/react'
import { useRef, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Story = StoryFn<typeof FileInput>

const meta: Meta<typeof FileInput> = {
  title: 'Components / Forms / FileInput',
  component: FileInput,
}

export default meta

export const basic: Story = () => {
  return <FileInput placeholder='basic' />
}

export const withMultiple: Story = () => {
  return <FileInput placeholder='multiple' multiple />
}

export const withAccept: Story = () => {
  return (
    <FileInput placeholder='only png, jpeg' accept='image/png,image/jpeg' />
  )
}

export const withSeparator: Story = () => {
  return <FileInput placeholder='multiple' multiple separator=';' />
}

export const withTag: Story = () => {
  return (
    <FileInput
      placeholder='multiple'
      multiple
      component={({ value: { name } }) => <Tag>{name}</Tag>}
    />
  )
}

export const withFormat: Story = () => {
  return (
    <FileInput
      placeholder='multiple'
      multiple
      format={({ name }) => `${name.substring(0, name.indexOf('.'))}`}
    />
  )
}

export const withChildren: Story = () => {
  return (
    <FileInput multiple>
      {(files) => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <FileInput placeholder='extra small size' size='xs' />
      <FileInput placeholder='small size' size='sm' />
      <FileInput placeholder='medium size' size='md' />
      <FileInput placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <FileInput variant='outline' placeholder='outline' />
      <FileInput variant='filled' placeholder='filled' />
      <FileInput variant='flushed' placeholder='flushed' />
      <FileInput variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <FileInput placeholder='default border color' />
      <FileInput
        focusBorderColor='green.500'
        placeholder='custom border color'
      />
      <FileInput
        isInvalid
        errorBorderColor='orange.500'
        placeholder='custom border color'
      />
    </>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <FileInput isDisabled variant='outline' placeholder='outline' />
      <FileInput isDisabled variant='filled' placeholder='filled' />
      <FileInput isDisabled variant='flushed' placeholder='flushed' />
      <FileInput isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Upload file'>
        <FileInput type='email' placeholder='your file' />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <FileInput isReadOnly variant='outline' placeholder='outline' />
      <FileInput isReadOnly variant='filled' placeholder='filled' />
      <FileInput isReadOnly variant='flushed' placeholder='flushed' />
      <FileInput isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Upload file'>
        <FileInput type='email' placeholder='your file' />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <FileInput isInvalid variant='outline' placeholder='outline' />
      <FileInput isInvalid variant='filled' placeholder='filled' />
      <FileInput isInvalid variant='flushed' placeholder='flushed' />
      <FileInput isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl
        isInvalid
        label='Upload file'
        errorMessage='File is required.'
      >
        <FileInput type='email' placeholder='your file' />
      </FormControl>
    </>
  )
}

export const useAddon: Story = () => {
  return (
    <InputGroup>
      <InputLeftAddon>
        <Icon icon={faFile} />
      </InputLeftAddon>
      <FileInput type='tel' placeholder='Please upload file' />
    </InputGroup>
  )
}

export const useElement: Story = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <Icon icon={faFile} color='gray.500' />
      </InputLeftElement>
      <FileInput type='email' placeholder='Please upload file' />
    </InputGroup>
  )
}

export const useReset: Story = () => {
  const [value, onChange] = useState<File[] | null>(null)
  const resetRef = useRef<() => void>(null)

  const onReset = () => {
    onChange(null)
    resetRef.current?.()
  }

  return (
    <>
      <Text>files: {value?.length ?? 0}</Text>

      <InputGroup>
        <FileInput
          multiple
          value={value}
          onChange={onChange}
          resetRef={resetRef}
        />

        {value?.length ? (
          <InputRightElement isClick onClick={onReset}>
            <Icon icon={faClose} color='gray.500' />
          </InputRightElement>
        ) : null}
      </InputGroup>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<File[] | null>(null)

  return (
    <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>
  )
}

export const reactHookForm: Story = () => {
  type Data = { fileInput: File[] | null }

  const resetRef = useRef<() => void>(null)
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Data>()

  const onReset = () => {
    setValue('fileInput', null)
    resetRef.current?.()
  }
  const onSubmit: SubmitHandler<Data> = (data) => console.log('submit:', data)

  console.log('watch:', watch())

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.fileInput}
        label='Files'
        errorMessage={errors.fileInput?.message}
      >
        <Controller
          name='fileInput'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => (
            <InputGroup>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? (
                <InputRightElement isClick onClick={onReset}>
                  <Icon icon={faClose} color='gray.500' />
                </InputRightElement>
              ) : null}
            </InputGroup>
          )}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}
