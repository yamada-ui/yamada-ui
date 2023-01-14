import { faArrowUpFromBracket, faImage, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Dropzone,
  DropzoneAccept,
  DropzoneReject,
  DropzoneIdle,
  IMAGE_ACCEPT_TYPE,
  HStack,
  VStack,
  Text,
  FontAwesomeIcon,
  FormControl,
  Button,
} from '@yamada-ui/react'
import { useRef } from 'react'

export default {
  title: 'Components / Forms / Dropzone',
  component: Dropzone,
} as ComponentMeta<typeof Dropzone>

export const basic: ComponentStory<typeof Dropzone> = () => {
  return (
    <Dropzone>
      <Text>Drag file here or click to select file</Text>
    </Dropzone>
  )
}

export const withSize: ComponentStory<typeof Dropzone> = () => {
  return (
    <>
      <Dropzone size='xs'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size='sm'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size='md'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size='lg'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const withVariant: ComponentStory<typeof Dropzone> = () => {
  return (
    <>
      <Dropzone variant='dashed'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant='solid'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant='unstyled'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const withMultiple: ComponentStory<typeof Dropzone> = () => {
  return (
    <Dropzone multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone>
  )
}

export const withAccept: ComponentStory<typeof Dropzone> = () => {
  return (
    <>
      <Dropzone accept={IMAGE_ACCEPT_TYPE}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone>

      <Dropzone accept={{ 'image/*': [] }}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone>
    </>
  )
}

export const withMaxSize: ComponentStory<typeof Dropzone> = () => {
  return (
    <Dropzone maxSize={3 * 1024 ** 2}>
      <VStack w='auto' gap='2xs'>
        <Text fontSize='xl'>Drag file here or click to select file</Text>
        <Text fontSize='sm'>Attach as many files as you like, each file should not exceed 5mb</Text>
      </VStack>
    </Dropzone>
  )
}

export const withMaxFiles: ComponentStory<typeof Dropzone> = () => {
  return (
    <Dropzone multiple maxFiles={3}>
      <VStack w='auto' gap='2xs'>
        <Text fontSize='xl'>Drag file here or click to select file</Text>
        <Text fontSize='sm'>Attach as many files as you like, can upload up to 3 files</Text>
      </VStack>
    </Dropzone>
  )
}

export const withStatus: ComponentStory<typeof Dropzone> = () => {
  return (
    <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2}>
      <HStack color={['blackAlpha.500', 'whiteAlpha.500']}>
        <DropzoneAccept>
          <FontAwesomeIcon icon={faArrowUpFromBracket} size='6xl' color='primary' />
        </DropzoneAccept>

        <DropzoneReject>
          <FontAwesomeIcon icon={faXmark} size='6xl' color='danger' />
        </DropzoneReject>

        <DropzoneIdle>
          <FontAwesomeIcon icon={faImage} size='6xl' />
        </DropzoneIdle>

        <VStack gap='2xs'>
          <Text fontSize='xl'>Drag images here or click to select files</Text>
          <Text fontSize='sm'>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>
  )
}

export const useOnDrop: ComponentStory<typeof Dropzone> = () => {
  return (
    <Dropzone
      accept={IMAGE_ACCEPT_TYPE}
      maxSize={3 * 1024 ** 2}
      onDrop={(acceptedFiles, fileRejections) =>
        console.log('accepted files', acceptedFiles, 'rejected files', fileRejections)
      }
    >
      <HStack color={['blackAlpha.500', 'whiteAlpha.500']}>
        <DropzoneAccept>
          <FontAwesomeIcon icon={faArrowUpFromBracket} size='6xl' color='primary' />
        </DropzoneAccept>

        <DropzoneReject>
          <FontAwesomeIcon icon={faXmark} size='6xl' color='danger' />
        </DropzoneReject>

        <DropzoneIdle>
          <FontAwesomeIcon icon={faImage} size='6xl' />
        </DropzoneIdle>

        <VStack gap='2xs'>
          <Text fontSize='xl'>Drag images here or click to select files</Text>
          <Text fontSize='sm'>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>
  )
}

export const useOnDropAccepted: ComponentStory<typeof Dropzone> = () => {
  return (
    <Dropzone
      accept={IMAGE_ACCEPT_TYPE}
      maxSize={3 * 1024 ** 2}
      onDropAccepted={(files) => console.log('accepted files', files)}
    >
      <HStack color={['blackAlpha.500', 'whiteAlpha.500']}>
        <DropzoneAccept>
          <FontAwesomeIcon icon={faArrowUpFromBracket} size='6xl' color='primary' />
        </DropzoneAccept>

        <DropzoneReject>
          <FontAwesomeIcon icon={faXmark} size='6xl' color='danger' />
        </DropzoneReject>

        <DropzoneIdle>
          <FontAwesomeIcon icon={faImage} size='6xl' />
        </DropzoneIdle>

        <VStack gap='2xs'>
          <Text fontSize='xl'>Drag images here or click to select files</Text>
          <Text fontSize='sm'>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>
  )
}

export const useOnDropRejected: ComponentStory<typeof Dropzone> = () => {
  return (
    <Dropzone
      accept={IMAGE_ACCEPT_TYPE}
      maxSize={3 * 1024 ** 2}
      onDropRejected={(files) => console.log('rejected files', files)}
    >
      <HStack color={['blackAlpha.500', 'whiteAlpha.500']}>
        <DropzoneAccept>
          <FontAwesomeIcon icon={faArrowUpFromBracket} size='6xl' color='primary' />
        </DropzoneAccept>

        <DropzoneReject>
          <FontAwesomeIcon icon={faXmark} size='6xl' color='danger' />
        </DropzoneReject>

        <DropzoneIdle>
          <FontAwesomeIcon icon={faImage} size='6xl' />
        </DropzoneIdle>

        <VStack gap='2xs'>
          <Text fontSize='xl'>Drag images here or click to select files</Text>
          <Text fontSize='sm'>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>
  )
}

export const withBorderColor: ComponentStory<typeof Dropzone> = () => {
  return (
    <>
      <Dropzone focusBorderColor='green.500'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isInvalid errorBorderColor='orange.500'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const isDisabled: ComponentStory<typeof Dropzone> = () => {
  return (
    <>
      <Dropzone isDisabled variant='dashed'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isDisabled variant='solid'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl label='Upload file' isDisabled>
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Dropzone> = () => {
  return (
    <>
      <Dropzone isReadOnly variant='dashed'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isReadOnly variant='solid'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl label='Upload file' isReadOnly>
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof Dropzone> = () => {
  return (
    <>
      <Dropzone isInvalid variant='dashed'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isInvalid variant='solid'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl label='Upload file' isInvalid errorMessage='File is required.'>
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>
  )
}

export const isLoading: ComponentStory<typeof Dropzone> = () => {
  return (
    <>
      <Dropzone isLoading variant='dashed'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isLoading variant='solid'>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const customLoading: ComponentStory<typeof Dropzone> = () => {
  return (
    <>
      <Dropzone isLoading loading={{ variant: 'grid' }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isLoading loading={{ color: 'secondary' }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const useOpen: ComponentStory<typeof Dropzone> = () => {
  const openRef = useRef<() => void>(null)

  const onOpen = () => openRef.current?.()

  return (
    <>
      <Button onClick={onOpen}>Select file</Button>

      <Dropzone openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}
