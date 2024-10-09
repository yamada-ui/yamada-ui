import type { Meta, StoryFn } from "@storybook/react"
import {
  Dropzone,
  DropzoneAccept,
  DropzoneIdle,
  DropzoneReject,
  IMAGE_ACCEPT_TYPE,
} from "@yamada-ui/dropzone"
import { Upload, Image as UploadImage, X } from "@yamada-ui/lucide"
import { Button, FormControl, HStack, Text, VStack } from "@yamada-ui/react"
import { useRef } from "react"

type Story = StoryFn<typeof Dropzone>

const meta: Meta<typeof Dropzone> = {
  component: Dropzone,
  title: "Components / Forms / Dropzone",
}

export default meta

export const basic: Story = () => {
  return (
    <Dropzone>
      <Text>Drag file here or click to select file</Text>
    </Dropzone>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Dropzone size="xs">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size="sm">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size="md">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone size="lg">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Dropzone variant="dashed">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="unstyled">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const withMultiple: Story = () => {
  return (
    <Dropzone multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone>
  )
}

export const withAccept: Story = () => {
  return (
    <>
      <Dropzone accept={IMAGE_ACCEPT_TYPE}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone>

      <Dropzone accept={{ "image/*": [] }}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone>
    </>
  )
}

export const withMaxSize: Story = () => {
  return (
    <Dropzone maxSize={3 * 1024 ** 2}>
      <VStack gap="2xs" w="auto">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </VStack>
    </Dropzone>
  )
}

export const withMaxFiles: Story = () => {
  return (
    <Dropzone maxFiles={3} multiple>
      <VStack gap="2xs" w="auto">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, can upload up to 3 files
        </Text>
      </VStack>
    </Dropzone>
  )
}

export const withStatus: Story = () => {
  return (
    <Dropzone accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Upload color="success" fontSize="6xl" />
        </DropzoneAccept>

        <DropzoneReject>
          <X color="danger" fontSize="6xl" />
        </DropzoneReject>

        <DropzoneIdle>
          <UploadImage fontSize="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>
  )
}

export const useOnDrop: Story = () => {
  return (
    <Dropzone
      accept={IMAGE_ACCEPT_TYPE}
      maxSize={3 * 1024 ** 2}
      onDrop={(acceptedFiles, fileRejections) =>
        console.log(
          "accepted files",
          acceptedFiles,
          "rejected files",
          fileRejections,
        )
      }
    >
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Upload color="success" fontSize="6xl" />
        </DropzoneAccept>

        <DropzoneReject>
          <X color="danger" fontSize="6xl" />
        </DropzoneReject>

        <DropzoneIdle>
          <UploadImage fontSize="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>
  )
}

export const useOnDropAccepted: Story = () => {
  return (
    <Dropzone
      accept={IMAGE_ACCEPT_TYPE}
      maxSize={3 * 1024 ** 2}
      onDropAccepted={(files) => console.log("accepted files", files)}
    >
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Upload color="success" fontSize="6xl" />
        </DropzoneAccept>

        <DropzoneReject>
          <X color="danger" fontSize="6xl" />
        </DropzoneReject>

        <DropzoneIdle>
          <UploadImage fontSize="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>
  )
}

export const useOnDropRejected: Story = () => {
  return (
    <Dropzone
      accept={IMAGE_ACCEPT_TYPE}
      maxSize={3 * 1024 ** 2}
      onDropRejected={(files) => console.log("rejected files", files)}
    >
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <DropzoneAccept>
          <Upload color="success" fontSize="6xl" />
        </DropzoneAccept>

        <DropzoneReject>
          <X color="danger" fontSize="6xl" />
        </DropzoneReject>

        <DropzoneIdle>
          <UploadImage fontSize="6xl" />
        </DropzoneIdle>

        <VStack gap="2xs">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <Dropzone focusBorderColor="green.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone errorBorderColor="orange.500" isInvalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Dropzone variant="dashed" isDisabled>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid" isDisabled>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl isDisabled label="Upload file">
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Dropzone variant="dashed" isReadOnly>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid" isReadOnly>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl isReadOnly label="Upload file">
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <Dropzone variant="dashed" isInvalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid" isInvalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <FormControl
        errorMessage="File is required."
        isInvalid
        label="Upload file"
      >
        <Dropzone>
          <Text>Drag file here or click to select file</Text>
        </Dropzone>
      </FormControl>
    </>
  )
}

export const isLoading: Story = () => {
  return (
    <>
      <Dropzone variant="dashed" isLoading>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone variant="solid" isLoading>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const customLoading: Story = () => {
  return (
    <>
      <Dropzone isLoading loadingProps={{ variant: "grid" }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>

      <Dropzone isLoading loadingProps={{ color: "secondary" }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone>
    </>
  )
}

export const useOpen: Story = () => {
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
