"use client"

import type { Ref } from "react"
import type { EditorStateController } from "./editor-state"
import { assignRef } from "@yamada-ui/react"
import { memo, useCallback, useEffect, useState } from "react"
import { ClientOnly } from "@/components/mdx/client-only"

interface PreviewEditorProps {
  editorState: EditorStateController
  ref?: Ref<{ refresh: () => void; updateCode: (code: string) => void }>
  initialValue?: string
  onChange?: (value: string) => void
}

export const PreviewEditor = memo(
  ({ ref, editorState, initialValue = "", onChange }: PreviewEditorProps) => {
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

    assignRef(ref, { refresh, updateCode })

    return <ClientOnly lang="tsx" code={value} functional />
  },
)

PreviewEditor.displayName = "PreviewEditor"
