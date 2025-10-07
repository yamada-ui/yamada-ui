"use client"

import type { Ref } from "react"
import type { EditorStateController } from "./editor-state"
import { assignRef } from "@yamada-ui/react"
import { memo, useCallback, useEffect, useState } from "react"
import { ErrorBoundary } from "@/components/error-boundary"
import { ClientOnly } from "@/components/mdx/client-only"

interface PreviewEditorProps {
  editorState: EditorStateController
  initialValue?: string
  previewRef?: Ref<{ refresh: () => void; updateCode: (code: string) => void }>
  onChange?: (value: string) => void
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
      return currentValue || initialValue
    })

    const refresh = useCallback(() => {
      const currentValue = editorState.getValue.current?.() || ""
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
      <ErrorBoundary resetKey={value}>
        <ClientOnly lang="tsx" code={value} functional />
      </ErrorBoundary>
    )
  },
)

PreviewEditor.displayName = "PreviewEditor"
