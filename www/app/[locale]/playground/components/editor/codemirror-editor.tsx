"use client"

import type { EditorStateController } from "./editor-state"
import { javascript } from "@codemirror/lang-javascript"
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode"
import CodeMirror from "@uiw/react-codemirror"
import { useColorModeValue } from "@yamada-ui/react"
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

const extensions = [javascript({ jsx: true, typescript: true })]

interface CodeMirrorEditorProps {
  editorState: EditorStateController
  initialValue?: string
  onChange?: (value: string) => void
}

export const CodeMirrorEditor = forwardRef<
  { focus: () => void },
  CodeMirrorEditorProps
>(function CodeMirrorEditor(
  { editorState, initialValue = "", onChange: _onChange },
  ref,
) {
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
    },
    [editorState],
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

  useEffect(() => {
    editorState.getValue.current = getValue
    editorState.notifyChange.current = notifyChange
    editorState.setValue.current = setEditorValue
    editorState.subscribe.current = subscribe
  }, [editorState, getValue, notifyChange, setEditorValue, subscribe])

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        // CodeMirror will handle focus automatically
      },
    }),
    [],
  )

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
})
