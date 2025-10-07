"use client"

import type { BaseEditorProps, WithCodeUpdaterRef } from "../../types"
import type { EditorStateController } from "./editor-state"
import { javascript } from "@codemirror/lang-javascript"
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode"
import CodeMirror from "@uiw/react-codemirror"
import { assignRef, useColorModeValue } from "@yamada-ui/react"
import { memo, useCallback, useRef, useState } from "react"
import { CODEMIRROR_BASIC_SETUP, CODEMIRROR_EXTENSIONS } from "../../constants"

const extensions = [javascript(CODEMIRROR_EXTENSIONS[0])]

interface CodeMirrorEditorProps extends BaseEditorProps, WithCodeUpdaterRef {
  editorState: EditorStateController
}

export const CodeMirrorEditor = memo(
  ({
    codeUpdaterRef,
    editorState,
    initialValue = "",
    onChange,
  }: CodeMirrorEditorProps) => {
    const theme = useColorModeValue(vscodeLight, vscodeDark)

    const [value, setValue] = useState(() => {
      const currentValue = editorState.getValue.current?.()
      return currentValue ?? initialValue
    })

    const subscribersRef = useRef<Set<(value: string) => void>>(new Set())

    const handleChange = useCallback(
      (newValue: string) => {
        setValue(newValue)
        editorState.setValue.current?.(newValue)
        editorState.notifyChange.current?.(newValue)
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
        onChange?.(code)
      },
      [onChange],
    )

    assignRef(editorState.getValue, getValue)
    assignRef(editorState.notifyChange, notifyChange)
    assignRef(editorState.setValue, setEditorValue)
    assignRef(editorState.subscribe, subscribe)
    assignRef(codeUpdaterRef, { updateCode })

    return (
      <CodeMirror
        basicSetup={CODEMIRROR_BASIC_SETUP}
        extensions={extensions}
        theme={theme}
        value={value}
        onChange={handleChange}
      />
    )
  },
)

CodeMirrorEditor.displayName = "CodeMirrorEditor"
