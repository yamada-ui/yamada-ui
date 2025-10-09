"use client"

import type { RefObject } from "react"
import type { CodeUpdater, PreviewController } from "../types"
import { assignRef, Resizable } from "@yamada-ui/react"
import { memo, useCallback, useEffect, useRef } from "react"
import { RESIZABLE_CONFIG } from "../constants"
import { useCodeInitialization, useCookieStorage, useSyncRefs } from "../hooks"
import { usePlayground } from "../playground-provider"
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
  const editorState = useRef(createEditorStateController())
  const codeMirrorRef = useRef<CodeUpdater>(null)
  const previewRef = useRef<PreviewController>(null)
  const storage = useCookieStorage()
  const initialValue = useCodeInitialization()

  const lastInitialValue = useRef(initialValue)
  const { syncRefs } = useSyncRefs(
    {
      codeMirror: codeMirrorRef,
      preview: previewRef,
    },
    (ref, value) => {
      ref?.updateCode(value)
    },
  )

  if (lastInitialValue.current !== initialValue) {
    lastInitialValue.current = initialValue
    syncRefs(initialValue)
  }

  const getCurrentCode = useCallback(() => {
    return editorState.current.getValue?.current?.()
  }, [])

  const syncCode = useCallback(() => {
    const nextCode = playground.getCurrentCode()
    const currentCode = editorState.current.getValue?.current?.()

    if (currentCode !== nextCode) {
      syncRefs(nextCode)
    }
  }, [playground, syncRefs])

  useEffect(() => {
    syncCode()

    const unsubscribeChange = playground.subscribe(syncCode)
    const unsubscribeReset = playground.onReset(syncCode)

    return () => {
      unsubscribeChange()
      unsubscribeReset()
    }
  }, [syncCode, playground])

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
      storageKey={RESIZABLE_CONFIG.storageKey}
    >
      <Resizable.Item
        id="editor"
        css={{
          "& > div": {
            "& > div": { height: "full", overflow: "hidden" },
            height: "full",
          },
        }}
        borderWidth="1px"
        defaultSize={RESIZABLE_CONFIG.defaultSize}
        minSize={RESIZABLE_CONFIG.minSize}
        roundedLeft="l2"
      >
        <CodeMirrorEditor
          codeUpdaterRef={codeMirrorRef}
          editorState={editorState.current}
          initialValue={initialValue}
          onChange={playground.changeCode}
        />
      </Resizable.Item>

      <Resizable.Trigger />

      <Resizable.Item
        id="preview"
        bg="bg.panel"
        borderWidth="1px"
        defaultSize={RESIZABLE_CONFIG.defaultSize}
        minSize={RESIZABLE_CONFIG.minSize}
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
})

PlaygroundEditor.displayName = "PlaygroundEditor"
