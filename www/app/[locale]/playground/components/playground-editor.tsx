"use client"

import type { PlaygroundFile } from "../types"
import type { EditorStateController } from "./editor"
import { Resizable } from "@yamada-ui/react"
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import {
  CodeMirrorEditor,
  createEditorStateController,
  PreviewEditor,
} from "./editor"

type EditorVisibility = "both" | "editor" | "preview"

interface PlaygroundEditorController {
  getCurrentCode: { current: (() => string) | null }
  toggleVisibility: { current: (() => void) | null }
}

interface PlaygroundEditorProps {
  file: PlaygroundFile
  onChange?: (code: string) => void
}

export const PlaygroundEditor = forwardRef<
  PlaygroundEditorController,
  PlaygroundEditorProps
>(function PlaygroundEditor({ file, onChange }, ref) {
  const editorState = useRef<EditorStateController | null>(null)

  // Initialize editor state only once
  if (!editorState.current) {
    editorState.current = createEditorStateController()
  }

  const [editorVisibility, setEditorVisibility] =
    useState<EditorVisibility>("both")

  const codeMirrorRef = useRef<{ focus: () => void }>(null)
  const previewRef = useRef<{ refresh: () => void }>(null)

  const toggleVisibility = useCallback(() => {
    setEditorVisibility((prev) => {
      switch (prev) {
        case "both":
          return "editor"
        case "editor":
          return "preview"
        case "preview":
          return "both"
        default:
          return "both"
      }
    })
  }, [])

  const getCurrentCode = useCallback(() => {
    return editorState.current!.getValue.current?.() || file.code
  }, [file.code])

  // Update editor state when file changes
  useEffect(() => {
    if (editorState.current?.setValue.current) {
      editorState.current.setValue.current(file.code)
    }
  }, [file.code])

  useImperativeHandle(
    ref,
    () => ({
      getCurrentCode: { current: getCurrentCode },
      toggleVisibility: { current: toggleVisibility },
    }),
    [getCurrentCode, toggleVisibility],
  )

  const showEditor =
    editorVisibility === "both" || editorVisibility === "editor"
  const showPreview =
    editorVisibility === "both" || editorVisibility === "preview"

  return (
    <Resizable.Root display="flex" flex={1} h="full" orientation="horizontal">
      {showEditor ? (
        <Resizable.Item
          css={{
            "& > div": {
              "& > div": { height: "100%", overflow: "hidden" },
              height: "100%",
            },
          }}
          borderWidth="1px"
          minSize={5}
          roundedLeft={showPreview ? "l2" : "l2"}
          roundedRight={!showPreview ? "l2" : undefined}
        >
          <CodeMirrorEditor
            ref={codeMirrorRef}
            editorState={editorState.current!}
            initialValue={file.code}
            onChange={onChange}
          />
        </Resizable.Item>
      ) : null}

      {showEditor && showPreview ? <Resizable.Trigger /> : null}

      {showPreview ? (
        <Resizable.Item
          bg="bg.panel"
          borderWidth="1px"
          minSize={5}
          p="lg"
          roundedLeft={!showEditor ? "l2" : undefined}
          roundedRight="l2"
        >
          <PreviewEditor
            ref={previewRef}
            editorState={editorState.current!}
            initialValue={file.code}
          />
        </Resizable.Item>
      ) : null}
    </Resizable.Root>
  )
})
