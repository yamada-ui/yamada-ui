import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useRef } from "react"
import { noop } from "../../utils"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
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

export const Variant: Story = () => {
  return (
    <PropsTable variant="stack" rows={["dashed", "solid", "panel"]}>
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

export const Size: Story = () => {
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

export const Multiple: Story = () => {
  return (
    <Dropzone.Root multiple>
      <Text>Drag files here or click to select files</Text>
    </Dropzone.Root>
  )
}

export const Accept: Story = () => {
  return (
    <Dropzone.Root accept={Dropzone.IMAGE_ACCEPT_TYPE}>
      <Text>Drag image here or click to select image</Text>
    </Dropzone.Root>
  )
}

export const MaxSize: Story = () => {
  return (
    <Dropzone.Root maxSize={3 * 1024 ** 2}>
      <VStack alignItems="center" gap="xs">
        <Dropzone.Title>Drag file here or click to select file</Dropzone.Title>
        <Dropzone.Description>
          Attach as many files as you like, each file should not exceed 5mb
        </Dropzone.Description>
      </VStack>
    </Dropzone.Root>
  )
}

export const MaxFiles: Story = () => {
  return (
    <Dropzone.Root maxFiles={3} multiple>
      <VStack alignItems="center" gap="xs">
        <Dropzone.Title>Drag file here or click to select file</Dropzone.Title>
        <Dropzone.Description>
          Attach as many files as you like, can upload up to 3 files
        </Dropzone.Description>
      </VStack>
    </Dropzone.Root>
  )
}

export const Status: Story = () => {
  return (
    <For each={["dashed", "solid", "panel"] as const}>
      {(variant) => {
        return (
          <Dropzone.Root
            key={variant}
            variant={variant}
            accept={IMAGE_ACCEPT_TYPE}
            maxSize={3 * 1024 ** 2}
          >
            <HStack>
              <Dropzone.Accept>
                <Dropzone.Icon as={UploadIcon} />
              </Dropzone.Accept>

              <Dropzone.Reject>
                <Dropzone.Icon as={XIcon} />
              </Dropzone.Reject>

              <Dropzone.Idle>
                <Dropzone.Icon as={ImageIcon} />
              </Dropzone.Idle>

              <VStack gap="xs">
                <Dropzone.Title>
                  Drag images here or click to select files
                </Dropzone.Title>
                <Dropzone.Description>
                  Attach as many files as you like, each file should not exceed
                  5mb
                </Dropzone.Description>
              </VStack>
            </HStack>
          </Dropzone.Root>
        )
      }}
    </For>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["dashed", "solid", "panel"] as const}>
        {(variant) => {
          return (
            <Dropzone.Root key={variant} variant={variant} disabled>
              <Text>Drag file here or click to select file</Text>
            </Dropzone.Root>
          )
        }}
      </For>

      <Field.Root disabled label="Upload file">
        <Dropzone.Root>
          <Text>Drag file here or click to select file</Text>
        </Dropzone.Root>
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <For each={["dashed", "solid", "panel"] as const}>
        {(variant) => {
          return (
            <Dropzone.Root key={variant} variant={variant} readOnly>
              <Text>Drag file here or click to select file</Text>
            </Dropzone.Root>
          )
        }}
      </For>

      <Field.Root label="Upload file" readOnly>
        <Dropzone.Root>
          <Text>Drag file here or click to select file</Text>
        </Dropzone.Root>
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <For each={["dashed", "solid", "panel"] as const}>
        {(variant) => {
          return (
            <Dropzone.Root key={variant} variant={variant} invalid>
              <Text>Drag file here or click to select file</Text>
            </Dropzone.Root>
          )
        }}
      </For>

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
    <PropsTable variant="stack" rows={["dashed", "solid", "panel"]}>
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

export const BorderColor: Story = () => {
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

export const OnDrop: Story = () => {
  return (
    <Dropzone.Root
      accept={IMAGE_ACCEPT_TYPE}
      maxSize={3 * 1024 ** 2}
      onDrop={(acceptedFiles, fileRejections) =>
        console.log("dropped", acceptedFiles, fileRejections)
      }
      onDropAccepted={(files) => console.log("accepted", files)}
      onDropRejected={(files) => console.log("rejected", files)}
    >
      <HStack>
        <Dropzone.Accept>
          <Dropzone.Icon as={UploadIcon} />
        </Dropzone.Accept>

        <Dropzone.Reject>
          <Dropzone.Icon as={XIcon} />
        </Dropzone.Reject>

        <Dropzone.Idle>
          <Dropzone.Icon as={ImageIcon} />
        </Dropzone.Idle>

        <VStack gap="xs">
          <Dropzone.Title>
            Drag images here or click to select files
          </Dropzone.Title>
          <Dropzone.Description>
            Attach as many files as you like, each file should not exceed 5mb
          </Dropzone.Description>
        </VStack>
      </HStack>
    </Dropzone.Root>
  )
}

export const CustomLoading: Story = () => {
  return (
    <>
      <Dropzone.Root loading loadingScheme="grid">
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>

      <Dropzone.Root loading loadingProps={{ color: "blue" }}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>
    </>
  )
}

export const CustomControl: Story = () => {
  const openRef = useRef<() => void>(noop)

  return (
    <>
      <Button onClick={() => openRef.current()}>Select file</Button>

      <Dropzone.Root openRef={openRef}>
        <Text>Drag file here or click to select file</Text>
      </Dropzone.Root>
    </>
  )
}
