import type { Meta, StoryFn } from "@storybook/react-vite"
import { useRef } from "react"
import { PropsTable } from "../../../storybook/components"
import { Button } from "../button"
import { Field } from "../field"
import { ImageIcon, UploadIcon, XIcon } from "../icon"
import { HStack, VStack } from "../stack"
import { Text } from "../text"
import { Dropzone } from "./"
import { IMAGE_ACCEPT_TYPE } from "./accept-types"

type Story = StoryFn<typeof Dropzone>

const meta: Meta<typeof Dropzone.Root> = {
  component: Dropzone.Root,
  title: "Components / Dropzone",
}

export default meta

export const Basic: Story = () => {
  return (
    <Dropzone.Root>
      <Text>Drag file here or click to select file</Text>
    </Dropzone.Root>
  )
}

export const WithSize: Story = () => {
  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg"]}>
      {(_, row, key) => {
        return (
          <Dropzone.Root key={key} size={row}>
            <Text>Drag file here or click to select file</Text>
          </Dropzone.Root>
        )
      }}
    </PropsTable>
  )
}

export const WithVariant: Story = () => {
  return (
    <PropsTable variant="stack" rows={["dashed", "solid", "unstyled"]}>
      {(_, row, key) => {
        return (
          <Dropzone.Root key={key} variant={row}>
            <Text>Drag file here or click to select file</Text>
          </Dropzone.Root>
        )
      }}
    </PropsTable>
  )
}

export const WithMultiple: Story = () => {
  return (
    <Dropzone.Root multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone.Root>
  )
}

export const WithAccept: Story = () => {
  return (
    <>
      <Dropzone.Root accept={IMAGE_ACCEPT_TYPE}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone.Root>

      <Dropzone.Root accept={{ "image/*": [] }}>
        <Text>Drag image here or click to select image</Text>
      </Dropzone.Root>
    </>
  )
}

export const WithMaxSize: Story = () => {
  return (
    <Dropzone.Root maxSize={3 * 1024 ** 2}>
      <VStack gap="2xs" w="auto">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, each file should not exceed 5mb
        </Text>
      </VStack>
    </Dropzone.Root>
  )
}

export const WithMaxFiles: Story = () => {
  return (
    <Dropzone.Root maxFiles={3} multiple>
      <VStack gap="2xs" w="auto">
        <Text fontSize="xl">Drag file here or click to select file</Text>
        <Text fontSize="sm">
          Attach as many files as you like, can upload up to 3 files
        </Text>
      </VStack>
    </Dropzone.Root>
  )
}

export const WithStatus: Story = () => {
  return (
    <Dropzone.Root accept={IMAGE_ACCEPT_TYPE} maxSize={3 * 1024 ** 2}>
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <Dropzone.Accept>
          <UploadIcon color="success" fontSize="6xl" />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <XIcon color="danger" fontSize="6xl" />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <ImageIcon fontSize="6xl" />
        </Dropzone.Idle>

        <VStack gap="px">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone.Root>
  )
}

export const UseOnDrop: Story = () => {
  return (
    <Dropzone.Root
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
        <Dropzone.Accept>
          <UploadIcon color="success" fontSize="6xl" />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <XIcon color="danger" fontSize="6xl" />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <ImageIcon fontSize="6xl" />
        </Dropzone.Idle>

        <VStack gap="px">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone.Root>
  )
}

export const UseOnDropAccepted: Story = () => {
  return (
    <Dropzone.Root
      accept={IMAGE_ACCEPT_TYPE}
      maxSize={3 * 1024 ** 2}
      onDropAccepted={(files) => console.log("accepted files", files)}
    >
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <Dropzone.Accept>
          <UploadIcon color="success" fontSize="6xl" />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <XIcon color="danger" fontSize="6xl" />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <ImageIcon fontSize="6xl" />
        </Dropzone.Idle>

        <VStack gap="px">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone.Root>
  )
}

export const UseOnDropRejected: Story = () => {
  return (
    <Dropzone.Root
      accept={IMAGE_ACCEPT_TYPE}
      maxSize={3 * 1024 ** 2}
      onDropRejected={(files) => console.log("rejected files", files)}
    >
      <HStack color={["blackAlpha.500", "whiteAlpha.500"]}>
        <Dropzone.Accept>
          <UploadIcon color="success" fontSize="6xl" />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <XIcon color="danger" fontSize="6xl" />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <ImageIcon fontSize="6xl" />
        </Dropzone.Idle>

        <VStack gap="px">
          <Text fontSize="xl">Drag images here or click to select files</Text>
          <Text fontSize="sm">
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </VStack>
      </HStack>
    </Dropzone.Root>
  )
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <Dropzone.Root focusBorderColor="green.500">
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>

      <Dropzone.Root errorBorderColor="orange.500" invalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>
    </>
  )
}

export const Disabled: Story = () => {
  return (
    <PropsTable variant="stack" rows={["dashed", "solid"]}>
      {(_, row, key) => {
        return (
          <Dropzone.Root key={key} variant={row} disabled>
            <Text>Drag file here or click to select file</Text>
          </Dropzone.Root>
        )
      }}
    </PropsTable>
  )
}

export const Readonly: Story = () => {
  return (
    <PropsTable variant="stack" rows={["dashed", "solid"]}>
      {(_, row, key) => {
        return (
          <Dropzone.Root key={key} variant={row} readOnly>
            <Text>Drag file here or click to select file</Text>
          </Dropzone.Root>
        )
      }}
    </PropsTable>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <Dropzone.Root variant="dashed" invalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>

      <Dropzone.Root variant="solid" invalid>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>

      <Field.Root errorMessage="File is required." invalid label="Upload file">
        <Dropzone.Root>
          <Text>Drag file here or click to select file</Text>
        </Dropzone.Root>
      </Field.Root>
    </>
  )
}

export const Loading: Story = () => {
  return (
    <PropsTable variant="stack" rows={["dashed", "solid"]}>
      {(_, row, key) => {
        return (
          <Dropzone.Root key={key} variant={row} loading>
            <Text>Drag file here or click to select file</Text>
          </Dropzone.Root>
        )
      }}
    </PropsTable>
  )
}

export const CustomLoading: Story = () => {
  return (
    <>
      <Dropzone.Root loading loadingScheme="grid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>

      <Dropzone.Root loading loadingProps={{ color: "secondary" }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>
    </>
  )
}

export const UseOpen: Story = () => {
  const openRef = useRef<() => void>(null)

  const onOpen = () => openRef.current?.()

  return (
    <>
      <Button onClick={onOpen}>Select file</Button>

      <Dropzone.Root openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>
    </>
  )
}
