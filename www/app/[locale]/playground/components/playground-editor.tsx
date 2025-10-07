"use client"

import type { RefObject } from "react"
import { assignRef, Resizable } from "@yamada-ui/react"
import { useSearchParams } from "next/navigation"
import { memo, useCallback, useEffect, useMemo, useRef } from "react"
import { usePlayground } from "../playground-provider"
import { decodeCode, DEFAULT_CODE } from "../utils"
import {
  CodeMirrorEditor,
  createEditorStateController,
  PreviewEditor,
} from "./editor"

interface PlaygroundEditorController {
  getCurrentCode: { current: (() => string) | null }
}

interface PlaygroundEditorProps {
  editorRef?: RefObject<PlaygroundEditorController>
}

export const PlaygroundEditor = memo<PlaygroundEditorProps>(({ editorRef }) => {
    const { playground } = usePlayground()
    const searchParams = useSearchParams()
    const editorState = useRef(createEditorStateController())
    const codeMirrorRef = useRef<{ updateCode: (code: string) => void }>(null)
    const previewRef = useRef<{
      refresh: () => void
      updateCode: (code: string) => void
    }>(null)

    const storage = useMemo<Resizable.Storage>(
      () => ({
        getItem: (key) => {
          const match = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

          return match ? match[2] : null
        },
        setItem: (key, value) => {
          document.cookie = `${key}=${value}; max-age=31536000; path=/`
        },
      }),
      [],
    )

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
    }

    return (
      <Resizable.Root
        display="flex"
        flex={1}
        h="full"
        orientation="horizontal"
        storage={storage}
        storageKey="persistence"
      >
        <Resizable.Item
          id="editor"
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
        >
          <CodeMirrorEditor
            codeMirrorRef={codeMirrorRef}
            editorState={editorState.current!}
            initialValue={initialValue}
            onChange={playground.changeCode}
          />
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item
          id="preview"
          bg="bg.panel"
          borderWidth="1px"
          defaultSize={50}
          minSize={5}
          p="lg"
          roundedRight="l2"
        >
          <PreviewEditor
            editorState={editorState.current!}
            initialValue={initialValue}
            previewRef={previewRef}
          />
        </Resizable.Item>
      </Resizable.Root>
    )
  },
)

PlaygroundEditor.displayName = "PlaygroundEditor"