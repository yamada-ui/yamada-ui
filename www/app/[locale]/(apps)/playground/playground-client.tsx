"use client"

import type { EditorHandle } from "./editor"
import type { PreviewHandle } from "./preview"
import {
  Resizable,
  Separator,
  useAsyncCallback,
  VStack,
} from "@yamada-ui/react"
import { debounce, useQueryState } from "nuqs"
import {
  startTransition,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { DEFAULT_CODE } from "./constants"
import { Editor } from "./editor"
import { compile, initializeEsbuild } from "./esbuild"
import { format } from "./prettier"
import { Preview } from "./preview"
import { playgroundSearchParams } from "./search-params"
import { Toolbar } from "./toolbar"

export default function PlaygroundClient() {
  use(initializeEsbuild())

  const [layout, setLayout] = useQueryState(
    "layout",
    playgroundSearchParams.layout.withOptions({ startTransition }),
  )
  const [code, setCode] = useQueryState(
    "code",
    playgroundSearchParams.code.withDefault(DEFAULT_CODE).withOptions({
      limitUrlUpdates: debounce(600),
      shallow: false,
      startTransition,
    }),
  )
  const [compiledCode, setCompiledCode] = useState<null | string>(null)
  const [error, setError] = useState<null | string>(null)
  const editorRef = useRef<EditorHandle>(null)
  const previewRef = useRef<PreviewHandle>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  const [compiling, compileCode] = useAsyncCallback(async (source: string) => {
    abortControllerRef.current?.abort()
    const controller = new AbortController()
    abortControllerRef.current = controller

    setError(null)
    try {
      const output = await compile(source, controller.signal)
      setCompiledCode(output)
    } catch (e) {
      if (e instanceof Error && e.name === "AbortError") return
      setError(e instanceof Error ? e.message : String(e))
    }
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      void compileCode(code)
    }, 600)

    return () => clearTimeout(timeoutId)
  }, [code, compileCode])

  const handleFormat = useCallback(async () => {
    try {
      const formatted = await format(code, { parser: "babel-ts" })
      if (formatted) void setCode(formatted)
    } catch {}
  }, [code, setCode])

  const handleReset = useCallback(() => {
    void setCode(DEFAULT_CODE)
  }, [setCode])

  const handleScreenshotCode = useCallback(async () => {
    if (!editorRef.current) throw new Error("Editor not ready")
    const dataUrl = await editorRef.current.captureScreenshot()
    await writeDataUrlToClipboard(dataUrl)
  }, [])

  const handleScreenshotUi = useCallback(async () => {
    if (!previewRef.current) throw new Error("Preview not ready")
    const dataUrl = await previewRef.current.requestScreenshot()
    await writeDataUrlToClipboard(dataUrl)
  }, [])

  const previewFirst = layout === "preview-first"

  const handleSwapPanes = useCallback(() => {
    void setLayout(previewFirst ? null : "preview-first", {
      history: "replace",
      scroll: false,
    })
  }, [previewFirst, setLayout])

  return (
    <VStack gap="0" h="calc(100dvh - {header-height})">
      <Toolbar
        code={code}
        previewFirst={previewFirst}
        onCodeChange={setCode}
        onReset={handleReset}
        onScreenshotCode={handleScreenshotCode}
        onScreenshotUi={handleScreenshotUi}
        onSwapPanes={handleSwapPanes}
      />

      <Separator />

      <Resizable.Root
        flex="1"
        flexDirection={previewFirst ? "row" : "row-reverse!"}
        orientation={{ base: "horizontal", md: "vertical" }}
      >
        <Resizable.Item defaultSize="50%" minSize="25%">
          <Editor
            ref={editorRef}
            code={code}
            onChange={setCode}
            onFormat={handleFormat}
          />
        </Resizable.Item>

        <Resizable.Trigger
          bg="border"
          h={{ base: "full", md: "2" }}
          w={{ base: "2", md: "full" }}
        />

        <Resizable.Item minSize="25%">
          <Preview
            ref={previewRef}
            compiledCode={compiledCode}
            compiling={compiling}
            error={error}
          />
        </Resizable.Item>
      </Resizable.Root>
    </VStack>
  )
}

async function writeDataUrlToClipboard(dataUrl: string) {
  const response = await fetch(dataUrl)
  const blob = await response.blob()

  await navigator.clipboard.write([
    new ClipboardItem({
      [blob.type || "image/png"]: blob,
    }),
  ])
}
