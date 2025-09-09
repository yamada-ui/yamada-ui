"use client"

import type { EditorStateController } from "./editor-state"
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { ClientOnly } from "@/components/mdx/client-only"

interface PreviewEditorProps {
  editorState: EditorStateController
  initialValue?: string
}

const PreviewEditorComponent = forwardRef<
  { refresh: () => void },
  PreviewEditorProps
>(function PreviewEditor({ editorState, initialValue = "" }, ref) {
  const [value, setValue] = useState(initialValue)

  const handleValueChange = useCallback((newValue: string) => {
    setValue(newValue)
  }, [])

  useEffect(() => {
    // Subscribe to changes from the editor state
    const unsubscribe = editorState.subscribe.current?.(handleValueChange)

    // Also get the current value immediately
    const currentValue = editorState.getValue.current?.()
    if (currentValue) {
      setValue(currentValue)
    }

    return unsubscribe
  }, [editorState, handleValueChange])

  useImperativeHandle(
    ref,
    () => ({
      refresh: () => {
        // Force re-render of ClientOnly component
        setValue((prev) => prev + " ")
        setTimeout(() => setValue((prev) => prev.slice(0, -1)), 0)
      },
    }),
    [],
  )

  return <ClientOnly lang="tsx" code={value} functional />
})

// Memoize the component to prevent unnecessary re-renders
export const PreviewEditor = memo(PreviewEditorComponent)
