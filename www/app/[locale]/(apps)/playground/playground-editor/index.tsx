"use client"

import type { BoxProps } from "@yamada-ui/react"
import { Resizable } from "@yamada-ui/react"
import { Editor } from "./editor"
import { Preview } from "./preview"

interface PlaygroundEditorProps extends BoxProps {}

export const PlaygroundEditor = ({ ...rest }: PlaygroundEditorProps) => {
  return (
    <Resizable.Root
      variant="spacer"
      data-screenshot="both"
      alignItems="stretch"
      display="flex"
      h="full"
      orientation={{ base: "horizontal", md: "vertical" }}
      w="full"
      {...rest}
    >
      <Resizable.Item
        defaultSize={50}
        flex="1"
        h={{ base: "full", md: "0" }}
        minSize={30}
        position="relative"
      >
        <Editor data-screenshot="code" />
      </Resizable.Item>
      <Resizable.Trigger />
      <Resizable.Item
        defaultSize={50}
        display="flex"
        flex="1"
        h={{ base: "full", md: "0" }}
        minSize={30}
      >
        <Preview data-screenshot="preview" w="full" />
      </Resizable.Item>
    </Resizable.Root>
  )
}
