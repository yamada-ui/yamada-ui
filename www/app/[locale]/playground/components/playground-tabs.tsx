"use client"

import {
  HStack,
  IconButton,
  PlusIcon,
  ScrollArea,
  Spacer,
  Tabs,
  Text,
  XIcon,
} from "@yamada-ui/react"
import { useCallback, useRef } from "react"
import { usePlayground } from "../playground-provider"
import { PlaygroundEditor } from "./playground-editor"
import { PlaygroundEditorSwitcher } from "./playground-editor-switcher"

export function PlaygroundTabs() {
  const { playground, state } = usePlayground()

  const editorRef = useRef<null | {
    getCurrentCode: { current: (() => string) | null }
    toggleVisibility: { current: (() => void) | null }
  }>(null)

  const toggleRef = useRef<null | {
    switchMode: { current: (() => void) | null }
  }>(null)

  const handleRemoveFile = useCallback(
    (id: string) => {
      playground.removeFile(id)
    },
    [playground],
  )

  const handleChangeActiveIndex = useCallback(
    (index: number) => {
      playground.changeActiveIndex(index)
    },
    [playground],
  )

  const handleCodeChange = useCallback(
    (code: string) => {
      // Use the optimized updateCurrentCode method for real-time updates
      playground.updateCurrentCode(code)
    },
    [playground],
  )

  const tabsItems = state.files.map((file) => ({
    id: file.id,
    panel: (
      <PlaygroundEditor
        ref={editorRef}
        file={file}
        onChange={handleCodeChange}
      />
    ),
    tab: (
      <HStack
        css={{
          "&:has(span[role=button])": {
            pr: "8",
          },
        }}
        gap="xs"
        position="relative"
      >
        <Text fontFamily="mono" fontSize="sm">
          {file.name}
        </Text>
        {state.files.length > 1 && (
          <IconButton
            as="span"
            size="2xs"
            variant="ghost"
            aria-label="Remove File"
            icon={<XIcon />}
            position="absolute"
            right="0"
            role="button"
            top="50%"
            transform="translateY(-50%)"
            onClick={(ev) => {
              ev.stopPropagation()
              handleRemoveFile(file.id)
            }}
          />
        )}
      </HStack>
    ),
  }))

  return (
    <Tabs.Root
      variant="subtle"
      h="full"
      index={state.activeIndex}
      items={tabsItems}
      lazy
      onChange={handleChangeActiveIndex}
    >
      <Tabs.List maxW="calc({sizes.8xl} - {space} * 2)">
        <ScrollArea style={{ overflowY: "clip" }} display="flex">
          {tabsItems.map((item, index) => (
            <Tabs.Tab key={item.id} index={index} transition="none">
              {item.tab}
            </Tabs.Tab>
          ))}
        </ScrollArea>
        <Spacer />
        <PlaygroundEditorSwitcher ref={toggleRef} editorRef={editorRef} />
        <IconButton
          size="xs"
          variant="ghost"
          role="tab"
          onClick={playground.addFile}
        >
          <PlusIcon />
        </IconButton>
      </Tabs.List>
      <Tabs.Panels />
    </Tabs.Root>
  )
}
