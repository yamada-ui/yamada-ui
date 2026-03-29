"use client"

import type { PreviewHandle } from "./preview"
import { Flex, Resizable, useAsyncCallback } from "@yamada-ui/react"
import { toPng } from "html-to-image"
import { debounce, useQueryState } from "nuqs"
import {
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { DEFAULT_CODE } from "./constants"
import { Editor } from "./editor"
import { compile, useEsbuild } from "./esbuild"
import { format } from "./prettier"
import { Preview } from "./preview"
import { playgroundSearchParams } from "./search-params"
import { Toolbar } from "./toolbar"

export default function PlaygroundClient() {
  useEsbuild()

  const [layout, setLayout] = useQueryState(
    "layout",
    playgroundSearchParams.layout.withOptions({ startTransition }),
  )
  const [code, setCode] = useQueryState(
    "code",
    playgroundSearchParams.code.withDefault(DEFAULT_CODE).withOptions({
      history: "replace",
      limitUrlUpdates: debounce(600),
      scroll: false,
      shallow: false,
      startTransition,
    }),
  )
  const [compiledCode, setCompiledCode] = useState<null | string>(null)
  const [error, setError] = useState<null | string>(null)
  const editorRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<PreviewHandle>(null)

  const [isCompiling, compileCode] = useAsyncCallback(
    async (source: string) => {
      setError(null)
      try {
        const output = await compile(source)
        setCompiledCode(output)
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e))
      }
    },
    [],
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      void compileCode(code)
    }, 600)

    return () => clearTimeout(timeoutId)
  }, [code, compileCode])

  const handleCodeChange = useCallback(
    (nextCode: string) => {
      void setCode(nextCode)
    },
    [setCode],
  )

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
    const dataUrl = await toPng(editorRef.current)
    await writeDataUrlToClipboard(dataUrl)
  }, [])

  const handleScreenshotUi = useCallback(async () => {
    if (!previewRef.current) throw new Error("Preview not ready")
    const dataUrl = await previewRef.current.requestScreenshot()
    await writeDataUrlToClipboard(dataUrl)
  }, [])

  const isPreviewFirst = layout === "preview-first"

  const handleSwapPanes = useCallback(() => {
    void setLayout(isPreviewFirst ? null : "preview-first", {
      history: "replace",
      scroll: false,
    })
  }, [isPreviewFirst, setLayout])

  const editorPaneContent = useMemo(
    () => (
      <Editor
        ref={editorRef}
        code={code}
        onChange={handleCodeChange}
        onFormat={handleFormat}
      />
    ),
    [code, handleCodeChange, handleFormat],
  )

  const previewPaneContent = useMemo(
    () => (
      <Preview
        ref={previewRef}
        compiledCode={compiledCode}
        error={error}
        isCompiling={isCompiling}
      />
    ),
    [compiledCode, error, isCompiling],
  )

  return (
    <Flex flexDirection="column" h="calc(100dvh - var(--header-height))">
      <Toolbar
        code={code}
        isPreviewFirst={isPreviewFirst}
        onCodeChange={handleCodeChange}
        onReset={handleReset}
        onScreenshotCode={handleScreenshotCode}
        onScreenshotUi={handleScreenshotUi}
        onSwapPanes={handleSwapPanes}
      />
      <Resizable.Root
        flex={1}
        left="50%"
        maxW="100dvw"
        orientation={{ base: "horizontal", md: "vertical" }}
        overflow="hidden"
        position="relative"
        transform="translateX(-50%)"
        w="100dvw"
      >
        <Resizable.Item defaultSize="50%" minSize="25%">
          {isPreviewFirst ? previewPaneContent : editorPaneContent}
        </Resizable.Item>

        <Resizable.Trigger
          bg="border"
          h={{ base: "full", md: "2" }}
          w={{ base: "2", md: "full" }}
        />

        <Resizable.Item minSize="25%">
          {isPreviewFirst ? editorPaneContent : previewPaneContent}
        </Resizable.Item>
      </Resizable.Root>
    </Flex>
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
