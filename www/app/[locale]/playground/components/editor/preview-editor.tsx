"use client"

import type { BaseEditorProps, WithPreviewControllerRef } from "../../types"
import type { EditorStateController } from "./editor-state"
import { assignRef } from "@yamada-ui/react"
import { memo, useCallback, useEffect, useState } from "react"
import { ClientOnly } from "@/components/mdx/client-only"
import { PlaygroundErrorBoundary } from "../playground-error-boundary"

interface PreviewEditorProps extends BaseEditorProps, WithPreviewControllerRef {
  editorState: EditorStateController
}

export const PreviewEditor = memo(
  ({
    editorState,
    initialValue = "",
    previewRef,
    onChange,
  }: PreviewEditorProps) => {
    const [value, setValue] = useState(() => {
      const currentValue = editorState.getValue.current?.()
      return currentValue ?? initialValue
    })

    const refresh = useCallback(() => {
      const currentValue = editorState.getValue.current?.() ?? ""
      setValue(currentValue)
      onChange?.(currentValue)
    }, [editorState, onChange])

    const updateCode = useCallback(
      (code: string) => {
        setValue(code)
        onChange?.(code)
      },
      [onChange],
    )

    useEffect(() => {
      const unsubscribe = editorState.subscribe.current?.((newValue) => {
        setValue(newValue)
        onChange?.(newValue)
      })

      return () => {
        unsubscribe?.()
      }
    }, [editorState, onChange])

    assignRef(previewRef, { refresh, updateCode })

    return (
      <PlaygroundErrorBoundary resetKey={value}>
        <ClientOnly lang="tsx" code={value} functional />
      </PlaygroundErrorBoundary>
    )
  },
)

PreviewEditor.displayName = "PreviewEditor"
