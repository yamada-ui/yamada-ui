"use client"

import type { RefObject } from "react"
import { assignRef, Resizable } from "@yamada-ui/react"
import { useSearchParams } from "next/navigation"
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { usePlayground } from "../playground-provider"
import { decodeCode, DEFAULT_CODE } from "../utils"
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
  editorRef?: RefObject<PlaygroundEditorController>
}

export const PlaygroundEditor = memo<PlaygroundEditorProps>(
  function PlaygroundEditor({ editorRef }) {
    const { playground } = usePlayground()
    const searchParams = useSearchParams()
    const editorState = useRef(createEditorStateController())
    const codeMirrorRef = useRef<{ updateCode: (code: string) => void }>(null)
    const previewRef = useRef<{
      refresh: () => void
      updateCode: (code: string) => void
    }>(null)

    const initialValue = useMemo(() => {
      const codeParam = searchParams.get("code")
      if (codeParam) {
        const decoded = decodeCode(codeParam)
        return decoded ?? DEFAULT_CODE
      }
      return DEFAULT_CODE
    }, [searchParams])

    const lastInitialValue = useRef(initialValue)
    const lastSyncedCode = useRef<null | string>(null)

    if (lastInitialValue.current !== initialValue) {
      lastInitialValue.current = initialValue
      lastSyncedCode.current = initialValue
      codeMirrorRef.current?.updateCode(initialValue)
      previewRef.current?.updateCode(initialValue)
    }

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

    const getCurrentCode = useCallback(() => {
      return editorState.current.getValue.current?.() ?? initialValue
    }, [initialValue])

    useEffect(() => {
      const syncCode = () => {
        const nextCode = playground.getCurrentCode()
        const currentCode = editorState.current.getValue.current?.()

        // Prevent infinite loops by checking if we've already synced this code
        if (lastSyncedCode.current === nextCode) return
        if (currentCode === nextCode) return

        lastSyncedCode.current = nextCode

        // Only update if the code is actually different to prevent infinite loops
        if (codeMirrorRef.current) {
          codeMirrorRef.current.updateCode(nextCode)
        }
        if (previewRef.current) {
          previewRef.current.updateCode(nextCode)
        }
      }

      syncCode()

      const unsubscribeChange = playground.subscribe(syncCode)
      const unsubscribeReset = playground.onReset(syncCode)

      return () => {
        unsubscribeChange()
        unsubscribeReset()
      }
    }, [editorState, playground])

    if (editorRef?.current) {
      assignRef(editorRef.current.getCurrentCode, getCurrentCode)
      assignRef(editorRef.current.toggleVisibility, toggleVisibility)
    }

    const showEditor =
      editorVisibility === "both" || editorVisibility === "editor"
    const showPreview =
      editorVisibility === "both" || editorVisibility === "preview"

    return (
      <Resizable.Root
        display="flex"
        flex={1}
        h="full"
        orientation="horizontal"
        storageKey="playground-panels"
      >
        {showEditor ? (
          <Resizable.Item
            css={{
              "& > div": {
                "& > div": { height: "100%", overflow: "hidden" },
                height: "100%",
              },
            }}
            borderWidth="1px"
            defaultSize={50}
            minSize={5}
            roundedLeft="l2"
            roundedRight={!showPreview ? "l2" : undefined}
          >
            <CodeMirrorEditor
              codeMirrorRef={codeMirrorRef}
              editorState={editorState.current!}
              initialValue={initialValue}
              onChange={playground.changeCode}
            />
          </Resizable.Item>
        ) : null}

        {showEditor && showPreview ? <Resizable.Trigger /> : null}

        {showPreview ? (
          <Resizable.Item
            bg="bg.panel"
            borderWidth="1px"
            defaultSize={50}
            minSize={5}
            p="lg"
            roundedLeft={!showEditor ? "l2" : undefined}
            roundedRight="l2"
          >
            <PreviewEditor
              editorState={editorState.current!}
              initialValue={initialValue}
              previewRef={previewRef}
            />
          </Resizable.Item>
        ) : null}
      </Resizable.Root>
    )
  },
)
