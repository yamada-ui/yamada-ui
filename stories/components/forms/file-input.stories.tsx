import { faClose, faFile } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  FileInput,
  FontAwesomeIcon,
  FormControl,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Tag,
  Text,
} from '@yamada-ui/react'
import { useRef, useState } from 'react'

export default {
  title: 'Components / Forms / FileInput',
  component: FileInput,
} as ComponentMeta<typeof FileInput>

export const basic: ComponentStory<typeof FileInput> = () => {
  return <FileInput placeholder='basic' />
}

export const withMultiple: ComponentStory<typeof FileInput> = () => {
  return <FileInput placeholder='multiple' multiple />
}

export const withAccept: ComponentStory<typeof FileInput> = () => {
  return <FileInput placeholder='only png, jpeg' accept='image/png,image/jpeg' />
}

export const withSeparator: ComponentStory<typeof FileInput> = () => {
  return <FileInput placeholder='multiple' multiple separator=';' />
}

export const withTag: ComponentStory<typeof FileInput> = () => {
  return (
    <FileInput
      placeholder='multiple'
      multiple
      component={({ value: { name } }) => <Tag>{name}</Tag>}
    />
  )
}

export const withFormat: ComponentStory<typeof FileInput> = () => {
  return (
    <FileInput
      placeholder='multiple'
      multiple
      format={({ name }) => `${name.substring(0, name.indexOf('.'))}`}
    />
  )
}

export const withChildren: ComponentStory<typeof FileInput> = () => {
  return <FileInput multiple>{(files) => <Text>Selected: {files?.length ?? 0}</Text>}</FileInput>
}

export const withSize: ComponentStory<typeof FileInput> = () => {
  return (
    <>
      <FileInput placeholder='extra small size' size='xs' />
      <FileInput placeholder='small size' size='sm' />
      <FileInput placeholder='medium size' size='md' />
      <FileInput placeholder='large size' size='lg' />
    </>
  )
}

export const withVariant: ComponentStory<typeof FileInput> = () => {
  return (
    <>
      <FileInput variant='outline' placeholder='outline' />
      <FileInput variant='filled' placeholder='filled' />
      <FileInput variant='flushed' placeholder='flushed' />
      <FileInput variant='unstyled' placeholder='unstyled' />
    </>
  )
}

export const withBorderColor: ComponentStory<typeof FileInput> = () => {
  return (
    <>
      <FileInput placeholder='default border color' />
      <FileInput focusBorderColor='green.500' placeholder='custom border color' />
      <FileInput isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>
  )
}

export const isDisabled: ComponentStory<typeof FileInput> = () => {
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

export const isReadonly: ComponentStory<typeof FileInput> = () => {
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

export const isInvalid: ComponentStory<typeof FileInput> = () => {
  return (
    <>
      <FileInput isInvalid variant='outline' placeholder='outline' />
      <FileInput isInvalid variant='filled' placeholder='filled' />
      <FileInput isInvalid variant='flushed' placeholder='flushed' />
      <FileInput isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='Upload file' errorMessage='File is required.'>
        <FileInput type='email' placeholder='your file' />
      </FormControl>
    </>
  )
}

export const useAddon: ComponentStory<typeof FileInput> = () => {
  return (
    <InputGroup>
      <InputLeftAddon>
        <FontAwesomeIcon icon={faFile} />
      </InputLeftAddon>
      <FileInput type='tel' placeholder='Please upload file' />
    </InputGroup>
  )
}

export const useElement: ComponentStory<typeof FileInput> = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <FontAwesomeIcon icon={faFile} color='gray.500' />
      </InputLeftElement>
      <FileInput type='email' placeholder='Please upload file' />
    </InputGroup>
  )
}

export const useReset: ComponentStory<typeof FileInput> = () => {
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
        <FileInput multiple value={value} onChange={onChange} resetRef={resetRef} />

        {value?.length ? (
          <InputRightElement isClick onClick={onReset}>
            <FontAwesomeIcon icon={faClose} color='gray.500' />
          </InputRightElement>
        ) : null}
      </InputGroup>
    </>
  )
}

export const customControl: ComponentStory<typeof FileInput> = () => {
  const [value, onChange] = useState<File[] | null>(null)

  return (
    <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>
  )
}
