"use client"

import type { Ref } from "react"
import type { EditorStateController } from "./editor-state"
import { javascript } from "@codemirror/lang-javascript"
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode"
import CodeMirror from "@uiw/react-codemirror"
import { assignRef, useColorModeValue } from "@yamada-ui/react"
import { memo, useCallback, useRef, useState } from "react"

const extensions = [javascript({ jsx: true, typescript: true })]

interface CodeMirrorEditorProps {
  editorState: EditorStateController
  ref?: Ref<{ updateCode: (code: string) => void }>
  initialValue?: string
  onChange?: (value: string) => void
}

export const CodeMirrorEditor = memo(
  ({
    ref,
    editorState,
    initialValue = "",
    onChange,
  }: CodeMirrorEditorProps) => {
    const theme = useColorModeValue(vscodeLight, vscodeDark)

    // Initialize with current value from editorState if available, otherwise use initialValue
    const [value, setValue] = useState(() => {
      const currentValue = editorState.getValue.current?.()
      return currentValue || initialValue
    })

    const subscribersRef = useRef<Set<(value: string) => void>>(new Set())

    const handleChange = useCallback(
      (newValue: string) => {
        setValue(newValue)
        editorState.setValue.current?.(newValue)

        // Notify all subscribers (like preview editor) immediately via ref callback
        editorState.notifyChange.current?.(newValue)

        // Call the external onChange handler
        onChange?.(newValue)
      },
      [editorState, onChange],
    )

    const getValue = useCallback(() => value, [value])

    const setEditorValue = useCallback((newValue: string) => {
      setValue(newValue)
    }, [])

    const subscribe = useCallback((callback: (value: string) => void) => {
      subscribersRef.current.add(callback)

      return () => {
        subscribersRef.current.delete(callback)
      }
    }, [])

    const notifyChange = useCallback((newValue: string) => {
      subscribersRef.current.forEach((callback) => {
        callback(newValue)
      })
    }, [])

    const updateCode = useCallback(
      (code: string) => {
        setValue(code)
        editorState.setValue.current?.(code)
        editorState.notifyChange.current?.(code)
        onChange?.(code)
      },
      [editorState, onChange],
    )

    assignRef(editorState.getValue, getValue)
    assignRef(editorState.notifyChange, notifyChange)
    assignRef(editorState.setValue, setEditorValue)
    assignRef(editorState.subscribe, subscribe)
    assignRef(ref, { updateCode })

    return (
      <CodeMirror
        basicSetup={{
          autocompletion: true,
          highlightActiveLine: true,
          lineNumbers: true,
        }}
        extensions={extensions}
        theme={theme}
        value={value}
        onChange={handleChange}
      />
    )
  },
)

CodeMirrorEditor.displayName = "CodeMirrorEditor"
