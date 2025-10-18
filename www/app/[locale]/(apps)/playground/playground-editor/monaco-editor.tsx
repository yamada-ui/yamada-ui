"use client"

import type { BeforeMount, OnMount } from "@monaco-editor/react"
import type { editor } from "monaco-editor"
import Editor from "@monaco-editor/react"
import { useCallback, useEffect, useRef } from "react"

import type { BoxProps } from "@yamada-ui/react"
import { Box, useColorMode } from "@yamada-ui/react"
import { parseConfigFileTextToJson } from "typescript"

const ONE_DARK: editor.IStandaloneThemeData = {
  base: "vs-dark",
  colors: {
    "editor.background": "#282c34",
    "editor.foreground": "#abb2bf",
    "editor.lineHighlightBackground": "#2c313c",
    "editor.selectionBackground": "#3e4451",
    "editorCursor.foreground": "#528bff",
    "editorLineNumber.foreground": "#636d83",
  },
  inherit: true,
  rules: [
    { fontStyle: "italic", foreground: "5c6370", token: "comment" },
    { foreground: "c678dd", token: "keyword" },
    { foreground: "98c379", token: "string" },
    { foreground: "d19a66", token: "number" },
    { foreground: "e5c07b", token: "type" },
    { foreground: "e5c07b", token: "class" },
    /* cSpell:disable */
    { foreground: "61afef", token: "function" },
    { foreground: "e06c75", token: "variable" },
    { foreground: "d19a66", token: "constant" },
    { foreground: "56b6c2", token: "operator" },
  ],
}

const ONE_LIGHT: editor.IStandaloneThemeData = {
  base: "vs",
  colors: {
    "editor.background": "#fafafa",
    "editor.foreground": "#383a42",
    "editor.lineHighlightBackground": "#f0f0f0",
    "editor.selectionBackground": "#e5e5e6",
    "editorCursor.foreground": "#526fff",
    "editorLineNumber.foreground": "#9d9dff",
  },
  inherit: true,
  rules: [
    { fontStyle: "italic", foreground: "a0a1a7", token: "comment" },
    { foreground: "a626a4", token: "keyword" },
    { foreground: "50a14f", token: "string" },
    { foreground: "986801", token: "number" },
    { foreground: "c18401", token: "type" },
    { foreground: "c18401", token: "class" },
    { foreground: "4078f2", token: "function" },
    { foreground: "e45649", token: "variable" },
    { foreground: "986801", token: "constant" },
    { foreground: "0184bb", token: "operator" },
  ],
}

const handleEditorWillMount: BeforeMount = (monaco) => {
  monaco.editor.defineTheme("one-dark", ONE_DARK)
  monaco.editor.defineTheme("one-light", ONE_LIGHT)
}

interface MonacoEditorProps extends BoxProps {
  code: string
  nodeModulesJson: string
  onCodeChange: (code: string) => void
}

export const MonacoEditor = ({
  code,
  nodeModulesJson,
  onCodeChange,
  ...rest
}: MonacoEditorProps) => {
  const { colorMode } = useColorMode()
  const editorRef = useRef<editor.IStandaloneCodeEditor>(null)
  const monacoRef = useRef<null | Parameters<OnMount>[1]>(null)

  const handleEditorDidMount = useCallback<OnMount>(
    (editor, monaco) => {
      editorRef.current = editor
      monacoRef.current = monaco

      const nodeModules = JSON.parse(nodeModulesJson) as {
        [key: string]: { [key: string]: string }
      }

      for (const [pkg, files] of Object.entries(nodeModules)) {
        const basePath = `file:///node_modules/${pkg}`

        for (const [filePath, content] of Object.entries(files)) {
          monaco.languages.typescript.typescriptDefaults.addExtraLib(
            content,
            `${basePath}/${filePath}`,
          )
        }
      }

      const conf = parseConfigFileTextToJson(
        "/tsconfig.json",
        '{ "compilerOptions": {} }',
      )

      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        ...conf.config.compilerOptions,
        jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
      })

      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
      })

      editor.updateOptions({
        acceptSuggestionOnEnter: "on",
        quickSuggestions: {
          comments: false,
          other: true,
          strings: true,
        },
        suggest: {
          showSnippets: true,
          showWords: false,
        },
        suggestOnTriggerCharacters: true,
        tabCompletion: "on",
        wordBasedSuggestions: "off",
      })
    },
    [nodeModulesJson],
  )

  const handleChange = useCallback(
    (value: string | undefined) => {
      if (value !== undefined) {
        onCodeChange(value)
      }
    },
    [onCodeChange],
  )

  useEffect(() => {
    if (editorRef.current && monacoRef.current) {
      const theme = colorMode === "dark" ? "one-dark" : "one-light"
      monacoRef.current.editor.setTheme(theme)
    }
  }, [colorMode])

  return (
    <Box bg="bg.panel" borderRadius="md" h="full" p="sm" w="full" {...rest}>
      <Editor
        beforeMount={handleEditorWillMount}
        defaultLanguage="typescript"
        height="100%"
        loading={
          <Box color="muted" p="lg">
            Loading editor...
          </Box>
        }
        options={{
          automaticLayout: true,
          fixedOverflowWidgets: true,
          folding: false,
          fontFamily: "'Geist Mono', 'Consolas', 'Courier New', monospace",
          fontLigatures: true,
          fontSize: 14,
          glyphMargin: false,
          lineDecorationsWidth: 10,
          lineHeight: 24,
          lineNumbers: "on",
          lineNumbersMinChars: 4,
          minimap: { enabled: false },
          padding: {
            bottom: 24,
            top: 24,
          },
          renderLineHighlight: "line",
          roundedSelection: true,
          scrollbar: {
            horizontalScrollbarSize: 10,
            verticalScrollbarSize: 10,
          },
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          wordWrap: "on",
        }}
        path="file:///main.tsx"
        theme={colorMode === "dark" ? "one-dark" : "one-light"}
        value={code}
        onChange={handleChange}
        onMount={handleEditorDidMount}
      />
    </Box>
  )
}
