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
      <FileButton colorScheme='primary' size='xs'>
        X Small
      </FileButton>

      <FileButton colorScheme='secondary' size='sm'>
        Small
      </FileButton>

      <FileButton colorScheme='warning' size='md'>
        Medium
      </FileButton>

      <FileButton colorScheme='danger' size='lg'>
        Large
      </FileButton>
    </Wrap>
  )
}

export const withColorScheme: ComponentStory<typeof FileButton> = () => {
  return (
    <Wrap gap='md'>
      <FileButton colorScheme='primary'>Primary</FileButton>

      <FileButton colorScheme='secondary'>Secondary</FileButton>

      <FileButton colorScheme='warning'>Warning</FileButton>

      <FileButton colorScheme='danger'>Danger</FileButton>

      <FileButton colorScheme='link'>Link</FileButton>

      <FileButton colorScheme='gray'>Gray</FileButton>

      <FileButton colorScheme='red'>Red</FileButton>

      <FileButton colorScheme='orange'>Orange</FileButton>

      <FileButton colorScheme='yellow'>Yellow</FileButton>

      <FileButton colorScheme='green'>Green</FileButton>

      <FileButton colorScheme='teal'>Teal</FileButton>

      <FileButton colorScheme='blue'>Blue</FileButton>

      <FileButton colorScheme='cyan'>Cyan</FileButton>

      <FileButton colorScheme='purple'>Purple</FileButton>

      <FileButton colorScheme='pink'>pink</FileButton>

      <FileButton colorScheme='linkedin'>Linkedin</FileButton>

      <FileButton colorScheme='facebook'>Facebook</FileButton>

      <FileButton colorScheme='messenger'>Messenger</FileButton>

      <FileButton colorScheme='whatsapp'>Whatsapp</FileButton>

      <FileButton colorScheme='twitter'>Twitter</FileButton>

      <FileButton colorScheme='line'>Line</FileButton>

      <FileButton colorScheme='instagram'>Instagram</FileButton>

      <FileButton colorScheme='youtube'>Youtube</FileButton>
    </Wrap>
  )
}

export const withVariant: ComponentStory<typeof FileButton> = () => {
  return (
    <Wrap gap='md'>
      <FileButton colorScheme='primary' variant='solid'>
        Solid
      </FileButton>

      <FileButton colorScheme='secondary' variant='outline'>
        Outline
      </FileButton>

      <FileButton colorScheme='warning' variant='ghost'>
        Ghost
      </FileButton>

      <FileButton colorScheme='danger' variant='link'>
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
  const resetRef = useRef<() => void>(null)

  const onReset = () => {
    onChange(null)
    resetRef.current?.()
  }

  return (
    <>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </>
  )
}
