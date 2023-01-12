import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Button,
  FileButton,
  FontAwesomeIcon,
  FormControl,
  HStack,
  IconButton,
  Link,
  Text,
  Wrap,
} from '@yamada-ui/react'
import { useRef, useState } from 'react'

export default {
  title: 'Components / Forms / FileButton',
  component: FileButton,
} as ComponentMeta<typeof FileButton>

export const basic: ComponentStory<typeof FileButton> = () => {
  return (
    <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<FontAwesomeIcon icon={faPlus} />} />

      <FileButton>{({ onClick }) => <Link onClick={onClick}>Upload</Link>}</FileButton>
    </>
  )
}

export const withMultiple: ComponentStory<typeof FileButton> = () => {
  return (
    <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<FontAwesomeIcon icon={faPlus} />} multiple />

      <FileButton multiple>{({ onClick }) => <Link onClick={onClick}>Upload</Link>}</FileButton>
    </>
  )
}

export const withAccept: ComponentStory<typeof FileButton> = () => {
  return (
    <>
      <FileButton accept='image/png,image/jpeg'>Upload</FileButton>

      <FileButton
        as={IconButton}
        icon={<FontAwesomeIcon icon={faPlus} />}
        accept='image/png,image/jpeg'
      />

      <FileButton accept='image/png,image/jpeg'>
        {({ onClick }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>
  )
}

export const withSize: ComponentStory<typeof FileButton> = () => {
  return (
    <Wrap gap='md'>
      <FileButton colorStyle='primary' size='xs'>
        X Small
      </FileButton>

      <FileButton colorStyle='secondary' size='sm'>
        Small
      </FileButton>

      <FileButton colorStyle='warning' size='md'>
        Medium
      </FileButton>

      <FileButton colorStyle='danger' size='lg'>
        Large
      </FileButton>
    </Wrap>
  )
}

export const withColorStyle: ComponentStory<typeof FileButton> = () => {
  return (
    <Wrap gap='md'>
      <FileButton colorStyle='primary'>Primary</FileButton>

      <FileButton colorStyle='secondary'>Secondary</FileButton>

      <FileButton colorStyle='warning'>Warning</FileButton>

      <FileButton colorStyle='danger'>Danger</FileButton>

      <FileButton colorStyle='link'>Link</FileButton>

      <FileButton colorStyle='gray'>Gray</FileButton>

      <FileButton colorStyle='red'>Red</FileButton>

      <FileButton colorStyle='orange'>Orange</FileButton>

      <FileButton colorStyle='yellow'>Yellow</FileButton>

      <FileButton colorStyle='green'>Green</FileButton>

      <FileButton colorStyle='teal'>Teal</FileButton>

      <FileButton colorStyle='blue'>Blue</FileButton>

      <FileButton colorStyle='cyan'>Cyan</FileButton>

      <FileButton colorStyle='purple'>Purple</FileButton>

      <FileButton colorStyle='pink'>pink</FileButton>

      <FileButton colorStyle='linkedin'>Linkedin</FileButton>

      <FileButton colorStyle='facebook'>Facebook</FileButton>

      <FileButton colorStyle='messenger'>Messenger</FileButton>

      <FileButton colorStyle='whatsapp'>Whatsapp</FileButton>

      <FileButton colorStyle='twitter'>Twitter</FileButton>

      <FileButton colorStyle='line'>Line</FileButton>

      <FileButton colorStyle='instagram'>Instagram</FileButton>

      <FileButton colorStyle='youtube'>Youtube</FileButton>
    </Wrap>
  )
}

export const withVariant: ComponentStory<typeof FileButton> = () => {
  return (
    <Wrap gap='md'>
      <FileButton colorStyle='primary' variant='solid'>
        Solid
      </FileButton>

      <FileButton colorStyle='secondary' variant='outline'>
        Outline
      </FileButton>

      <FileButton colorStyle='warning' variant='ghost'>
        Ghost
      </FileButton>

      <FileButton colorStyle='danger' variant='link'>
        Link
      </FileButton>

      <FileButton variant='unstyled'>Unstyle</FileButton>
    </Wrap>
  )
}

export const withBorderColor: ComponentStory<typeof FileButton> = () => {
  return (
    <FileButton isInvalid errorBorderColor='orange.500'>
      Upload
    </FileButton>
  )
}

export const isDisabled: ComponentStory<typeof FileButton> = () => {
  return (
    <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} icon={<FontAwesomeIcon icon={faPlus} />} isDisabled />

      <FileButton isDisabled>
        {({ onClick, isDisabled }) => (
          <Link
            onClick={onClick}
            opacity={isDisabled ? 0.4 : 1}
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            _hover={isDisabled ? undefined : { textDecoration: 'underline' }}
          >
            Upload
          </Link>
        )}
      </FileButton>

      <FormControl isDisabled label='Upload file' helperMessage='Please select a file to upload.'>
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof FileButton> = () => {
  return (
    <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} icon={<FontAwesomeIcon icon={faPlus} />} isReadOnly />

      <FileButton isReadOnly>
        {({ onClick, isReadOnly }) => (
          <Link
            onClick={onClick}
            cursor={isReadOnly ? 'default' : 'pointer'}
            _hover={isReadOnly ? undefined : { textDecoration: 'underline' }}
          >
            Upload
          </Link>
        )}
      </FileButton>

      <FormControl isReadOnly label='Upload file' helperMessage='Please select a file to upload.'>
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof FileButton> = () => {
  return (
    <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<FontAwesomeIcon icon={faPlus} />} isInvalid />

      <FormControl isInvalid label='Upload file' errorMessage='File is required.'>
        <FileButton>Upload</FileButton>
      </FormControl>
    </>
  )
}

export const useReset: ComponentStory<typeof FileButton> = () => {
  const [files, onChange] = useState<File[] | null>(null)
  const reset = useRef<() => void>(null)

  const onReset = () => {
    onChange(null)
    reset.current?.()
  }

  return (
    <>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton reset={reset} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </>
  )
}
