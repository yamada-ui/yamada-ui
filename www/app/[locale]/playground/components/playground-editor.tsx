"use client"

import type { PlaygroundFile } from "../types"
import { javascript } from "@codemirror/lang-javascript"
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode"
import CodeMirror from "@uiw/react-codemirror"
import { Resizable, useColorModeValue } from "@yamada-ui/react"
import { forwardRef, useCallback, useImperativeHandle, useState } from "react"
import { ClientOnly } from "@/components/mdx/client-only"

const extensions = [javascript({ jsx: true, typescript: true })]

type EditorVisibility = "both" | "editor" | "preview"

interface PlaygroundEditorController {
  toggleVisibility: { current: (() => void) | null }
}

interface PlaygroundEditorProps {
  file: PlaygroundFile
  onCodeChange: (code: string) => void
}

export const PlaygroundEditor = forwardRef<
  PlaygroundEditorController,
  PlaygroundEditorProps
>(function PlaygroundEditor({ file, onCodeChange }, ref) {
  const theme = useColorModeValue(vscodeLight, vscodeDark)
  const [editorVisibility, setEditorVisibility] =
    useState<EditorVisibility>("both")

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

  useImperativeHandle(
    ref,
    () => ({
      toggleVisibility: { current: toggleVisibility },
    }),
    [toggleVisibility],
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
          <CodeMirror
            key={file.id}
            basicSetup={{
              autocompletion: true,
              highlightActiveLine: true,
              lineNumbers: true,
            }}
            extensions={extensions}
            theme={theme}
            value={file.code}
            onChange={onCodeChange}
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
          <ClientOnly lang="tsx" code={file.code} functional />
        </Resizable.Item>
      ) : null}
    </Resizable.Root>
  )
})
