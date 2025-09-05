"use client"

import type { RefObject } from "react"
import type { PlaygroundFile, SavedSet } from "../types"
import {
  assignRef,
  HStack,
  IconButton,
  PlusIcon,
  ScrollArea,
  Spacer,
  Tabs,
  Text,
  XIcon,
} from "@yamada-ui/react"
import { useSearchParams } from "next/navigation"
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { decodeCode, DEFAULT_CODE } from "../utils"
import { PlaygroundEditor } from "./playground-editor"
import { PlaygroundEditorSwitcher } from "./playground-editor-switcher"

interface PlaygroundTabsController {
  addFile: RefObject<(() => void) | null>
  changeActiveIndex: RefObject<((index: number) => void) | null>
  changeCode: RefObject<((code: string) => void) | null>
  getActiveIndex: RefObject<(() => number) | null>
  getFiles: RefObject<(() => PlaygroundFile[]) | null>
  loadSet: RefObject<((set: SavedSet) => void) | null>
  removeFile: RefObject<((id: string) => void) | null>
  reset: RefObject<(() => void) | null>
  switchEditorMode: RefObject<(() => void) | null>
}

interface PlaygroundTabsProps {
  ref: RefObject<PlaygroundTabsController>
}

export const PlaygroundTabs = forwardRef<
  PlaygroundTabsController,
  PlaygroundTabsProps
>(function PlaygroundTabs(_, ref) {
  const searchParams = useSearchParams()
  const [files, setFiles] = useState<PlaygroundFile[]>([
    {
      id: "file-1",
      name: "index.tsx",
      code: DEFAULT_CODE,
    },
  ])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)
  const editorRef = useRef<null | {
    toggleVisibility: { current: (() => void) | null }
  }>(null)
  const toggleRef = useRef<null | {
    toggleVisibility: { current: (() => void) | null }
  }>(null)

  // Initialize from URL parameters
  useEffect(() => {
    if (isInitialized) return

    const filesParam = searchParams.get("files")
    if (filesParam) {
      try {
        const decoded = decodeCode(filesParam)
        if (!decoded) return
        const data = JSON.parse(decoded!)
        if (data.files?.length > 0) {
          setFiles(data.files)
          setActiveIndex(
            Math.max(0, Math.min(data.activeIndex || 0, data.files.length - 1)),
          )
        }
      } catch {
        // Ignore invalid URL data
      }
    }

    setIsInitialized(true)
  }, [searchParams, isInitialized])

  const addFile = useCallback(() => {
    const id = `file-${Date.now()}`
    const newFile: PlaygroundFile = {
      id,
      name: `file${files.length + 1}.tsx`,
      code: DEFAULT_CODE,
    }
    const nextFiles = [...files, newFile]
    setFiles(nextFiles)
    setActiveIndex(nextFiles.length - 1)
  }, [files])

  const removeFile = useCallback(
    (id: string) => {
      const removeIndex = files.findIndex(
        (file: PlaygroundFile) => file.id === id,
      )
      const nextFiles = files.filter((file: PlaygroundFile) => file.id !== id)

      if (removeIndex < activeIndex) {
        setActiveIndex(activeIndex - 1)
      } else if (removeIndex === activeIndex) {
        setActiveIndex(Math.min(activeIndex, nextFiles.length - 1))
      }

      setFiles(nextFiles)
    },
    [files, activeIndex],
  )

  const changeCode = useCallback(
    (next: string) => {
      const copy = [...files]
      const currentFile = copy[activeIndex]
      if (currentFile) {
        copy[activeIndex] = { ...currentFile, code: next }
      }
      setFiles(copy)
    },
    [files, activeIndex],
  )

  const changeActiveIndex = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const getFiles = useCallback(() => files, [files])

  const getActiveIndex = useCallback(() => activeIndex, [activeIndex])

  const loadSet = useCallback((set: SavedSet) => {
    setFiles(set.files)
    setActiveIndex(Math.max(0, Math.min(set.activeIndex, set.files.length - 1)))
  }, [])

  const reset = useCallback(() => {
    setFiles([
      {
        id: "file-1",
        name: "index.tsx",
        code: DEFAULT_CODE,
      },
    ])
    setActiveIndex(0)
  }, [])

  const switchEditorMode = useCallback(() => {
    toggleRef.current?.switchMode.current?.()
  }, [])

  const methods = useMemo(
    () => ({
      addFile,
      changeActiveIndex,
      changeCode,
      getActiveIndex,
      getFiles,
      loadSet,
      removeFile,
      reset,
      switchEditorMode,
    }),
    [
      addFile,
      changeActiveIndex,
      changeCode,
      getActiveIndex,
      getFiles,
      loadSet,
      removeFile,
      reset,
      switchEditorMode,
    ],
  )

  // Assign refs
  if (ref && "current" in ref && ref.current) {
    assignRef(ref.current.addFile, methods.addFile)
    assignRef(ref.current.changeActiveIndex, methods.changeActiveIndex)
    assignRef(ref.current.changeCode, methods.changeCode)
    assignRef(ref.current.getActiveIndex, methods.getActiveIndex)
    assignRef(ref.current.getFiles, methods.getFiles)
    assignRef(ref.current.loadSet, methods.loadSet)
    assignRef(ref.current.removeFile, methods.removeFile)
    assignRef(ref.current.reset, methods.reset)
    assignRef(ref.current.switchEditorMode, methods.switchEditorMode)
  }

  const tabsItems = files.map((file) => ({
    id: file.id,
    panel: (
      <PlaygroundEditor ref={editorRef} file={file} onCodeChange={changeCode} />
    ),
    tab: (
      <HStack gap="xs">
        <Text fontFamily="mono" fontSize="sm">
          {file.name}
        </Text>
        {files.length > 1 && (
          <IconButton
            as="span"
            size="2xs"
            variant="ghost"
            aria-label="Remove File"
            icon={<XIcon />}
            role="button"
            onClick={(ev) => {
              ev.stopPropagation()
              removeFile(file.id)
            }}
          />
        )}
      </HStack>
    ),
  }))

  return (
    <Tabs.Root
      h="full"
      index={activeIndex}
      items={tabsItems}
      lazy
      onChange={changeActiveIndex}
    >
      <Tabs.List>
        <ScrollArea style={{ overflowY: "clip" }} display="flex">
          {tabsItems.map((item, index) => (
            <Tabs.Tab key={item.id} index={index} transition="none">
              {item.tab}
            </Tabs.Tab>
          ))}
        </ScrollArea>
        <Spacer />
        <PlaygroundEditorSwitcher ref={toggleRef} editorRef={editorRef} />
        <IconButton size="xs" variant="ghost" role="tab" onClick={addFile}>
          <PlusIcon />
        </IconButton>
      </Tabs.List>
      <Tabs.Panels />
    </Tabs.Root>
  )
})
